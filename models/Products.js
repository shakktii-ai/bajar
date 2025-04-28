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
  },
},{timestamps:true});



export default mongoose.models.Products || mongoose.model('Products', ProductsSchema);
