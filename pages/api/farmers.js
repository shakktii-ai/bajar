import mongoose from 'mongoose';
import Farmer from '../../models/Farmer';

// Connect to MongoDB
async function connectToDatabase() {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGODB_URI);
  }
}

// GET - Fetch all farmers
async function getFarmers(req, res) {
  try {
    await connectToDatabase();
    const farmers = await Farmer.find().sort({ createdAt: -1 });
    res.status(200).json(farmers);
  } catch (error) {
    console.error('Error fetching farmers:', error);
    res.status(500).json({ error: 'Failed to fetch farmers' });
  }
}

// POST - Create a new farmer
async function createFarmer(req, res) {
  try {
    await connectToDatabase();
    const farmerData = req.body;
    const newFarmer = new Farmer(farmerData);
    await newFarmer.save();
    res.status(201).json(newFarmer);
  } catch (error) {
    console.error('Error creating farmer:', error);
    res.status(500).json({ error: 'Failed to create farmer' });
  }
}

// PUT - Update a farmer by ID
async function updateFarmer(req, res) {
  try {
    await connectToDatabase();
    const { id } = req.query;
    const updates = req.body;
    
    const updatedFarmer = await Farmer.findByIdAndUpdate(
      id,
      updates,
      { new: true, runValidators: true }
    );
    
    if (!updatedFarmer) {
      return res.status(404).json({ error: 'Farmer not found' });
    }
    
    res.status(200).json(updatedFarmer);
  } catch (error) {
    console.error('Error updating farmer:', error);
    res.status(500).json({ error: 'Failed to update farmer' });
  }
}

// DELETE - Delete a farmer by ID
async function deleteFarmer(req, res) {
  try {
    await connectToDatabase();
    const { id } = req.query;
    
    const deletedFarmer = await Farmer.findByIdAndDelete(id);
    
    if (!deletedFarmer) {
      return res.status(404).json({ error: 'Farmer not found' });
    }
    
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error deleting farmer:', error);
    res.status(500).json({ error: 'Failed to delete farmer' });
  }
}

// API handler
export default async function handler(req, res) {
  const { method } = req;
  
  switch (method) {
    case 'GET':
      return getFarmers(req, res);
    case 'POST':
      return createFarmer(req, res);
    case 'PUT':
      return updateFarmer(req, res);
    case 'DELETE':
      return deleteFarmer(req, res);
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).json({ error: `Method ${method} Not Allowed` });
  }
}
