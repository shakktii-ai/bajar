import mongoose from 'mongoose';

const YoutubeSchema = new mongoose.Schema({
  youtubeLink: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
 
 
},{timestamps:true});

export default mongoose.models.Youtube || mongoose.model('Youtube', YoutubeSchema);
