import mongoose from 'mongoose';

// Ensure database connection
const connectDB = async () => {
  if (mongoose.connection.readyState !== 1) {
    try {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log('MongoDB connected successfully');
    } catch (error) {
      console.error('MongoDB connection error:', error);
      throw error;
    }
  }
};

export default async function handler(req, res) {
  const { method } = req;

  try {
    await connectDB();
    const marketStatusCollection = mongoose.connection.collection('marketStatus');

    // GET market status for a specific date
    if (method === 'GET') {
      const { date, marketName } = req.query;
      
      // Validate required parameters
      if (!date) {
        return res.status(400).json({ error: 'Date parameter is required' });
      }

      // Build query
      let query = { date };
      if (marketName) {
        query.marketName = marketName;
      }

      // Get market status
      const marketStatus = await marketStatusCollection.find(query).toArray();
      return res.status(200).json(marketStatus);
    }
    
    // POST - Set market status
    if (method === 'POST') {
      const { date, marketName, status } = req.body;
      
      // Validate required parameters
      if (!date || !marketName || !status) {
        return res.status(400).json({ error: 'Date, marketName, and status are required' });
      }
      
      try {
        // Define list of all markets
        const allMarkets = [
          'दिंडोरी मुख्य बाजार',
          'वणी उप बाजार',
          'खोरीपाडा उप बाजार',
          'मोहाडी उप बाजार'
        ];
        
        // Check if "सर्व बाजार" (All Markets) is selected
        if (marketName === 'सर्व बाजार') {
          // Update status for all markets
          for (const market of allMarkets) {
            // Check if a status already exists for this date and market
            const existingStatus = await marketStatusCollection.findOne({ date, marketName: market });
            
            // If exists, update it; otherwise, insert new document
            if (existingStatus) {
              await marketStatusCollection.updateOne(
                { date, marketName: market },
                { $set: { status, updatedAt: new Date() }}
              );
            } else {
              await marketStatusCollection.insertOne({
                date,
                marketName: market,
                status,
                createdAt: new Date(),
                updatedAt: new Date()
              });
            }
          }
        } else {
          // Handle single market update
          // Check if a status already exists for this date and marketName
          const existingStatus = await marketStatusCollection.findOne({ date, marketName });
          
          // If exists, update it; otherwise, insert new document
          if (existingStatus) {
            await marketStatusCollection.updateOne(
              { date, marketName },
              { $set: { status, updatedAt: new Date() }}
            );
          } else {
            await marketStatusCollection.insertOne({
              date,
              marketName,
              status,
              createdAt: new Date(),
              updatedAt: new Date()
            });
          }
        }
        
        return res.status(200).json({ message: 'Market status updated successfully' });
      } catch (error) {
        console.error('Error setting market status:', error);
        return res.status(500).json({ error: 'Failed to set market status' });
      }
    } 
    
    // Method not allowed
    else {
      return res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (error) {
    console.error('Error handling market status:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
