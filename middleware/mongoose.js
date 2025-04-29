// import mongoose from "mongoose";


// const connectDb = handler =>async(req,res)=>{
//     if(mongoose.connections[0].readyState){
//         return handler(req, res)
//     }
//     await mongoose.connect(process.env.MONGODB_URI)
//     return handler(req,res);
// }

// export default connectDb;



import mongoose from 'mongoose';

const connectDb = handler => async (req, res) => {
  if (mongoose.connections[0].readyState) {
    return handler(req, res);
  }

  try {
    // Check if MONGODB_URI is set
    if (!process.env.MONGODB_URI) {
      console.error('MONGODB_URI is not defined in environment variables');
      return res.status(500).json({ 
        error: "Database connection string is not configured",
        message: "Please check your .env.local file and ensure MONGODB_URI is properly set" 
      });
    }

    // Log which URI we're connecting to (without exposing credentials)
    const sanitizedUri = process.env.MONGODB_URI.replace(/:\/\/([^:]+):([^@]+)@/, '://[username]:[password]@');
    console.log(`Connecting to MongoDB at: ${sanitizedUri}`);

    // Set connection options
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000, // Timeout after 5 seconds
      socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    };

    // Connect to the database
    await mongoose.connect(process.env.MONGODB_URI, options);
    console.log('Successfully connected to MongoDB');
    
    return handler(req, res);
  } catch (error) {
    console.error("Error connecting to database:", error);
    
    // Return a more descriptive error
    return res.status(500).json({
      error: "Database connection failed",
      details: error.message,
      code: error.code || 'UNKNOWN',
      suggestion: "Please check if MongoDB is running and accessible at the URI specified in .env.local"
    });
  }
};

export default connectDb;
