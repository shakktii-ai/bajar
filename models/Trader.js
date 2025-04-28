import mongoose from 'mongoose';

const TraderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  licenseNo: {
    type: String,
    required: true,
    unique: true,
  },
  shop: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  products: {
    type: String,
    required: true,
  },
  licenseDate: {
    type: Date,
    default: Date.now,
  },
  licenseExpiry: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active',
  }
}, { timestamps: true });

export default mongoose.models.Trader || mongoose.model('Trader', TraderSchema);
