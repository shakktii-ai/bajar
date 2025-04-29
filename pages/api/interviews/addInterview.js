import connectDb from '../../../middleware/mongoose';
import Interview from '../../../models/Interview';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    try {
      const { title, intervieweePosition, intervieweeImage, description, videoLink, date, duration, featured } = req.body;
      
      // Validate required fields
      if (!title || !intervieweePosition || !description || !videoLink || !date || !duration) {
        return res.status(400).json({ success: false, error: 'Missing required fields' });
      }

      // Create new interview
      const newInterview = new Interview({
        title,
        intervieweePosition,
        intervieweeImage: intervieweeImage || '/placeholder-person.jpg',
        description,
        videoLink,
        date,
        duration,
        featured: featured || false
      });

      await newInterview.save();
      res.status(201).json({ success: true, interview: newInterview });
    } catch (error) {
      console.error('Error adding interview:', error);
      res.status(500).json({ success: false, error: 'Failed to add interview' });
    }
  } else {
    res.status(405).json({ success: false, error: 'Method not allowed' });
  }
};

export default connectDb(handler);
