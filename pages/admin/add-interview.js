import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import AdminLayout from '../../components/AdminLayout';

export default function AddInterview() {
  const [title, setTitle] = useState('');
  const [intervieweePosition, setIntervieweePosition] = useState('');
  const [intervieweeImage, setIntervieweeImage] = useState('');
  const [description, setDescription] = useState('');
  const [videoLink, setVideoLink] = useState('');
  const [date, setDate] = useState('');
  const [duration, setDuration] = useState('');
  const [featured, setFeatured] = useState(false);
  
  const [interviews, setInterviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });
  const [refreshData, setRefreshData] = useState(false);

  // Fetch existing interviews
  useEffect(() => {
    const fetchInterviews = async () => {
      try {
        const response = await fetch('/api/interviews/getInterviews');
        const data = await response.json();
        
        if (data.success) {
          setInterviews(data.interviews);
        } else {
          console.error('Failed to load interviews');
        }
      } catch (err) {
        console.error('Error fetching interviews:', err);
      }
    };

    fetchInterviews();
  }, [refreshData]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/interviews/addInterview', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          intervieweePosition,
          intervieweeImage,
          description,
          videoLink,
          date,
          duration,
          featured
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus({
          type: 'success',
          message: 'Interview added successfully!'
        });
        
        // Reset form
        setTitle('');
        setIntervieweePosition('');
        setIntervieweeImage('');
        setDescription('');
        setVideoLink('');
        setDate('');
        setDuration('');
        setFeatured(false);
        
        // Refresh data
        setRefreshData(!refreshData);
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Failed to add interview'
        });
      }
    } catch (error) {
      console.error('Error adding interview:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Error connecting to server'
      });
    } finally {
      setLoading(false);
    }
  };

  // Handle interview deletion
  const handleDeleteInterview = async (id) => {
    if (!confirm('Are you sure you want to delete this interview?')) {
      return;
    }

    try {
      const response = await fetch('/api/interviews/deleteInterview', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus({
          type: 'success',
          message: 'Interview deleted successfully!'
        });
        
        // Refresh data
        setRefreshData(!refreshData);
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Failed to delete interview'
        });
      }
    } catch (error) {
      console.error('Error deleting interview:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Error connecting to server'
      });
    }
  };

  // Format date as YYYY-MM-DD for input field
  const formatDateForInput = (dateString) => {
    const date = new Date(dateString);
    return dateString ? date.toISOString().split('T')[0] : '';
  };

  return (
    <AdminLayout>
      <Head>
        <title>Add Interview - Admin Dashboard</title>
        <meta name="description" content="Add new interviews to the website" />
      </Head>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h1 className="text-2xl font-bold text-center text-green-800 mb-6">
            Admin Dashboard - Add New Interview
          </h1>

          {submitStatus.message && (
            <div className={`mb-6 p-4 rounded-md ${submitStatus.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
              {submitStatus.message}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                  Interview Title *
                </label>
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                />
              </div>
              
              <div>
                <label htmlFor="intervieweePosition" className="block text-sm font-medium text-gray-700 mb-1">
                  Interviewee Position *
                </label>
                <input
                  type="text"
                  id="intervieweePosition"
                  value={intervieweePosition}
                  onChange={(e) => setIntervieweePosition(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                />
              </div>
              
              <div>
                <label htmlFor="intervieweeImage" className="block text-sm font-medium text-gray-700 mb-1">
                  Interviewee Image URL (optional)
                </label>
                <input
                  type="text"
                  id="intervieweeImage"
                  value={intervieweeImage}
                  onChange={(e) => setIntervieweeImage(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                  placeholder="https://example.com/image.jpg"
                />
              </div>
              
              <div>
                <label htmlFor="videoLink" className="block text-sm font-medium text-gray-700 mb-1">
                  YouTube Video Link *
                </label>
                <input
                  type="text"
                  id="videoLink"
                  value={videoLink}
                  onChange={(e) => setVideoLink(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                  placeholder="https://www.youtube.com/watch?v=ABCDEFGHIJK"
                />
              </div>
              
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                  Interview Date *
                </label>
                <input
                  type="date"
                  id="date"
                  value={formatDateForInput(date)}
                  onChange={(e) => setDate(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                />
              </div>
              
              <div>
                <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-1">
                  Duration * (e.g., "15:30")
                </label>
                <input
                  type="text"
                  id="duration"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                  placeholder="MM:SS"
                />
              </div>
              
              <div className="flex items-center h-full pt-6">
                <input
                  type="checkbox"
                  id="featured"
                  checked={featured}
                  onChange={(e) => setFeatured(e.target.checked)}
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                />
                <label htmlFor="featured" className="ml-2 block text-sm text-gray-700">
                  Feature this interview (will appear in featured section)
                </label>
              </div>
            </div>
            
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                Description *
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                rows="4"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              ></textarea>
            </div>
            
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={loading}
                className={`px-4 py-2 rounded-md text-white font-medium ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'}`}
              >
                {loading ? 'Adding...' : 'Add Interview'}
              </button>
            </div>
          </form>
        </div>
        
        {/* Existing Interviews */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-green-800 mb-4">
            Existing Interviews
          </h2>
          
          {interviews.length === 0 ? (
            <p className="text-gray-500 text-center py-6">No interviews added yet.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Title
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Position
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Duration
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Featured
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {interviews.map((interview) => (
                    <tr key={interview._id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {interview.title}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {interview.intervieweePosition}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {interview.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {interview.duration}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {interview.featured ? 'Yes' : 'No'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          onClick={() => handleDeleteInterview(interview._id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
}
