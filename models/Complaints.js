import mongoose from 'mongoose';

const ComplaintSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  mobileNumber: {
    type: String,
    required: true,
  },
  marketName: {
    type: String,
    required: true,
    default: 'दिंडोरी मुख्य बाजार'
  },
  complaintText: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['नवीन', 'प्रक्रियेत', 'सोडवले'],
    default: 'नवीन'
  },
  adminResponse: {
    type: String,
    default: ''
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

export default mongoose.models.Complaints || mongoose.model('Complaints', ComplaintSchema);
