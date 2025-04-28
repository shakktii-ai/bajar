import mongoose from 'mongoose';

const FarmerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  registrationNo: {
    type: String,
    required: true,
    unique: true,
  },
  village: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  landArea: {
    type: String,
    required: true,
  },
  crops: {
    type: String,
    required: true,
  },
  registrationDate: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active',
  }
}, { timestamps: true });

export default mongoose.models.Farmer || mongoose.model('Farmer', FarmerSchema);
