import mongoose from 'mongoose';

const DailyProductsSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Products',
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now
  },
  marketName: {
    type: String,
    default: 'दिंडोरी मुख्य बाजार'
  },
  PriceMax: {
    type: Number,
    required: true,
  },
  PriceMin: {
    type: Number,
    required: true,
  },
  PriceAvg: {
    type: Number,
    required: true,
  },
  notes: {
    type: String,
  }
}, { timestamps: true });

// Create compound index for product, date, and marketName to ensure uniqueness
DailyProductsSchema.index({ product: 1, date: 1, marketName: 1 }, { unique: true });

export default mongoose.models.DailyProducts || mongoose.model('DailyProducts', DailyProductsSchema);
