import mongoose from 'mongoose';
import Trader from '../../models/Trader';

// Connect to MongoDB
async function connectToDatabase() {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGODB_URI);
  }
}

// GET - Fetch all traders
async function getTraders(req, res) {
  try {
    await connectToDatabase();
    const traders = await Trader.find().sort({ createdAt: -1 });
    res.status(200).json(traders);
  } catch (error) {
    console.error('Error fetching traders:', error);
    res.status(500).json({ error: 'Failed to fetch traders' });
  }
}

// POST - Create a new trader
async function createTrader(req, res) {
  try {
    await connectToDatabase();
    const traderData = req.body;
    const newTrader = new Trader(traderData);
    await newTrader.save();
    res.status(201).json(newTrader);
  } catch (error) {
    console.error('Error creating trader:', error);
    res.status(500).json({ error: 'Failed to create trader' });
  }
}

// PUT - Update a trader by ID
async function updateTrader(req, res) {
  try {
    await connectToDatabase();
    const { id } = req.query;
    const updates = req.body;
    
    const updatedTrader = await Trader.findByIdAndUpdate(
      id,
      updates,
      { new: true, runValidators: true }
    );
    
    if (!updatedTrader) {
      return res.status(404).json({ error: 'Trader not found' });
    }
    
    res.status(200).json(updatedTrader);
  } catch (error) {
    console.error('Error updating trader:', error);
    res.status(500).json({ error: 'Failed to update trader' });
  }
}

// DELETE - Delete a trader by ID
async function deleteTrader(req, res) {
  try {
    await connectToDatabase();
    const { id } = req.query;
    
    const deletedTrader = await Trader.findByIdAndDelete(id);
    
    if (!deletedTrader) {
      return res.status(404).json({ error: 'Trader not found' });
    }
    
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error deleting trader:', error);
    res.status(500).json({ error: 'Failed to delete trader' });
  }
}

// API handler
export default async function handler(req, res) {
  const { method } = req;
  
  switch (method) {
    case 'GET':
      return getTraders(req, res);
    case 'POST':
      return createTrader(req, res);
    case 'PUT':
      return updateTrader(req, res);
    case 'DELETE':
      return deleteTrader(req, res);
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).json({ error: `Method ${method} Not Allowed` });
  }
}
