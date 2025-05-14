import mongoose from 'mongoose';
import Complaints from '../../models/Complaints';

// Ensure database connection
const connectDB = async () => {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGODB_URI);
  }
};

// GET - Get all complaints or specific complaint
const getComplaints = async (req, res) => {
  try {
    await connectDB();
    const { id } = req.query;
    
    if (id) {
      const complaint = await Complaints.findById(id);
      if (!complaint) {
        return res.status(404).json({ error: 'Complaint not found' });
      }
      return res.status(200).json(complaint);
    }
    
    // Get all complaints with sorting
    const complaints = await Complaints.find().sort({ createdAt: -1 });
    res.status(200).json(complaints);
  } catch (error) {
    console.error('Error fetching complaints:', error);
    res.status(500).json({ error: 'Failed to fetch complaints' });
  }
};

// POST - Create a new complaint
const createComplaint = async (req, res) => {
  try {
    await connectDB();
    const { fullName, mobileNumber, marketName, complaintText } = req.body;
    
    // Validate required fields
    if (!fullName || !mobileNumber || !marketName || !complaintText) {
      return res.status(400).json({ 
        error: 'सर्व आवश्यक फील्ड भरा' // Fill all required fields
      });
    }
    
    // Create a new complaint
    const newComplaint = new Complaints({
      fullName,
      mobileNumber,
      marketName,
      complaintText,
      status: 'नवीन', // New status
      adminResponse: ''
    });
    
    // Save to database
    await newComplaint.save();
    
    res.status(201).json({ 
      success: true,
      message: 'आपली तक्रार यशस्वीरित्या नोंदवली गेली आहे',
      complaint: newComplaint
    });
  } catch (error) {
    console.error('Error creating complaint:', error);
    res.status(500).json({ error: 'तक्रार नोंदवताना त्रुटी आली: ' + error.message });
  }
};

// PUT - Update complaint status and response
const updateComplaint = async (req, res) => {
  try {
    await connectDB();
    const { id } = req.query;
    const { status, adminResponse } = req.body;
    
    if (!id) {
      return res.status(400).json({ error: 'Complaint ID is required' });
    }
    
    const complaint = await Complaints.findById(id);
    if (!complaint) {
      return res.status(404).json({ error: 'Complaint not found' });
    }
    
    // Update fields
    if (status) complaint.status = status;
    if (adminResponse !== undefined) complaint.adminResponse = adminResponse;
    complaint.updatedAt = new Date();
    
    await complaint.save();
    
    res.status(200).json({ 
      success: true, 
      message: 'तक्रार अद्यतनित केली गेली', 
      complaint
    });
  } catch (error) {
    console.error('Error updating complaint:', error);
    res.status(500).json({ error: 'Failed to update complaint: ' + error.message });
  }
};

// DELETE - Delete a complaint
const deleteComplaint = async (req, res) => {
  try {
    await connectDB();
    const { id } = req.query;
    
    if (!id) {
      return res.status(400).json({ error: 'Complaint ID is required' });
    }
    
    const deletedComplaint = await Complaints.findByIdAndDelete(id);
    
    if (!deletedComplaint) {
      return res.status(404).json({ error: 'Complaint not found' });
    }
    
    res.status(200).json({ message: 'Complaint deleted successfully' });
  } catch (error) {
    console.error('Error deleting complaint:', error);
    res.status(500).json({ error: 'Failed to delete complaint' });
  }
};

// API handler
export default async function handler(req, res) {
  const { method } = req;
  
  switch (method) {
    case 'GET':
      return getComplaints(req, res);
    case 'POST':
      return createComplaint(req, res);
    case 'PUT':
      return updateComplaint(req, res);
    case 'DELETE':
      return deleteComplaint(req, res);
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
