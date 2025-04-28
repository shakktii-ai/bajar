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
  PriceMax: {
    type: Number,
    required: true,
  },
  PriceMin: {
    type: Number,
    required: true,
  },
  notes: {
    type: String,
  }
}, { timestamps: true });

// Create compound index for product and date to ensure uniqueness
DailyProductsSchema.index({ product: 1, date: 1 }, { unique: true });

export default mongoose.models.DailyProducts || mongoose.model('DailyProducts', DailyProductsSchema);
