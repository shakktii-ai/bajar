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
     if (!mongoose.connections[0].readyState) {
            await mongoose.connect(process.env.MONGODB_URI)
          }
    return handler(req, res);
  } catch (error) {
    console.error("Error connecting to database:", error);
    res.status(500).json({ error: "Failed to connect to database" });
  }
};

export default connectDb;
