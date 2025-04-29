import connectDb from '../../../middleware/mongoose';
import Interview from '../../../models/Interview';

const handler = async (req, res) => {
  if (req.method === 'DELETE') {
    try {
      const { id } = req.body;
      
      if (!id) {
        return res.status(400).json({ success: false, error: 'Interview ID is required' });
      }

      const deletedInterview = await Interview.findByIdAndDelete(id);
      
      if (!deletedInterview) {
        return res.status(404).json({ success: false, error: 'Interview not found' });
      }
      
      res.status(200).json({ success: true, message: 'Interview deleted successfully' });
    } catch (error) {
      console.error('Error deleting interview:', error);
      res.status(500).json({ success: false, error: 'Failed to delete interview' });
    }
  } else {
    res.status(405).json({ success: false, error: 'Method not allowed' });
  }
};

export default connectDb(handler);
