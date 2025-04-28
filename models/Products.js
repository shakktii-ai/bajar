import mongoose from 'mongoose';

const ProductsSchema = new mongoose.Schema({
  productNameMarathi: {
    type: String,
    required: true,
  },
  productNameEnglish: {
    type: String,
    required: true,
  },
  PriceMax: {
    type: Number,
    required: true,
  },
  PriceMin: {
    type: Number,
    required: true,
  },
  ProductInUnit: {
    type: String,
    required: true,
    default: 'किलो'
  },
  category: {
    type: String,
    enum: ['फळे', 'भाज्या', 'धान्य', 'डाळी', 'मसाले', 'इतर'],
    default: 'भाज्या'
  },
  isActive: {
    type: Boolean,
    default: true
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  seasonStart: {
    type: String,
    default: ''
  },
  seasonEnd: {
    type: String,
    default: ''
  }
}, { timestamps: true });

// Add text indices for better search functionality
ProductsSchema.index({ productNameMarathi: 'text', productNameEnglish: 'text' });

export default mongoose.models.Products || mongoose.model('Products', ProductsSchema);
