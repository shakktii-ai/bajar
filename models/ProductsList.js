import mongoose from 'mongoose';

const ProductsListSchema = new mongoose.Schema({
  productNameMarathi: {
    type: String,
    required: true,
  },
  productNameEnglish: {
    type: String,
    required: true,
  },
 
 
},{timestamps:true});

export default mongoose.models.ProductsList || mongoose.model('ProductsList', ProductsListSchema);
