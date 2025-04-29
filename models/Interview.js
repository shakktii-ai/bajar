import mongoose from 'mongoose';

const InterviewSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  intervieweePosition: {
    type: String,
    required: true,
  },
  intervieweeImage: {
    type: String,
    default: '/placeholder-person.jpg'
  },
  description: {
    type: String,
    required: true,
  },
  videoLink: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  featured: {
    type: Boolean,
    default: false
  }
}, {timestamps: true});

export default mongoose.models.Interview || mongoose.model('Interview', InterviewSchema);
