import connectDb from '../../../middleware/mongoose';
import Interview from '../../../models/Interview';

const handler = async (req, res) => {
  if (req.method === 'GET') {
    try {
      const interviews = await Interview.find({}).sort({ createdAt: -1 });
      res.status(200).json({ success: true, interviews });
    } catch (error) {
      console.error('Error fetching interviews:', error);
      res.status(500).json({ success: false, error: 'Failed to fetch interviews' });
    }
  } else {
    res.status(405).json({ success: false, error: 'Method not allowed' });
  }
};

export default connectDb(handler);
