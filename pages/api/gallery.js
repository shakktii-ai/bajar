import mongoose from 'mongoose';
import Gallery from '../../models/Gallery';

// Connect to MongoDB
async function connectToDatabase() {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGODB_URI);
  }
}

// GET - Fetch all gallery items
async function getGalleryItems(req, res) {
  try {
    await connectToDatabase();
    const { type } = req.query;
    
    let query = {};
    if (type === 'photo' || type === 'video') {
      query.type = type;
    }
    
    const galleryItems = await Gallery.find(query).sort({ eventDate: -1 });
    res.status(200).json(galleryItems);
  } catch (error) {
    console.error('Error fetching gallery items:', error);
    res.status(500).json({ error: 'Failed to fetch gallery items' });
  }
}

// POST - Create a new gallery item
async function createGalleryItem(req, res) {
  try {
    await connectToDatabase();
    const galleryData = req.body;
    const newGalleryItem = new Gallery(galleryData);
    await newGalleryItem.save();
    res.status(201).json(newGalleryItem);
  } catch (error) {
    console.error('Error creating gallery item:', error);
    res.status(500).json({ error: 'Failed to create gallery item' });
  }
}

// PUT - Update a gallery item by ID
async function updateGalleryItem(req, res) {
  try {
    await connectToDatabase();
    const { id } = req.query;
    const updates = req.body;
    
    const updatedGalleryItem = await Gallery.findByIdAndUpdate(
      id,
      updates,
      { new: true, runValidators: true }
    );
    
    if (!updatedGalleryItem) {
      return res.status(404).json({ error: 'Gallery item not found' });
    }
    
    res.status(200).json(updatedGalleryItem);
  } catch (error) {
    console.error('Error updating gallery item:', error);
    res.status(500).json({ error: 'Failed to update gallery item' });
  }
}

// DELETE - Delete a gallery item by ID
async function deleteGalleryItem(req, res) {
  try {
    await connectToDatabase();
    const { id } = req.query;
    
    const deletedGalleryItem = await Gallery.findByIdAndDelete(id);
    
    if (!deletedGalleryItem) {
      return res.status(404).json({ error: 'Gallery item not found' });
    }
    
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error deleting gallery item:', error);
    res.status(500).json({ error: 'Failed to delete gallery item' });
  }
}

// API handler
export default async function handler(req, res) {
  const { method } = req;
  
  switch (method) {
    case 'GET':
      return getGalleryItems(req, res);
    case 'POST':
      return createGalleryItem(req, res);
    case 'PUT':
      return updateGalleryItem(req, res);
    case 'DELETE':
      return deleteGalleryItem(req, res);
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).json({ error: `Method ${method} Not Allowed` });
  }
}
