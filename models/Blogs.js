import mongoose from 'mongoose';

const BlogsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  subTitle: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  }
},{timestamps:true});



export default mongoose.models.Blogs || mongoose.model('Blogs', BlogsSchema);
