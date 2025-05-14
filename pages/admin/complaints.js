import { useState, useEffect } from 'react';
import { FaCheckCircle, FaHourglassHalf, FaExclamation, FaSearch } from 'react-icons/fa';
import AdminLayout from '../../components/AdminLayout';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ComplaintManagement() {
  const [complaints, setComplaints] = useState([]);
  const [filteredComplaints, setFilteredComplaints] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedComplaint, setSelectedComplaint] = useState(null);
  const [responseText, setResponseText] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [updateSuccess, setUpdateSuccess] = useState(false);
  
  // Fetch all complaints when component mounts
  useEffect(() => {
    fetchComplaints();
  }, []);
  
  // Filter complaints when filter changes
  useEffect(() => {
    filterComplaints();
  }, [complaints, statusFilter, searchQuery]);
  
  // Initialize AOS animation library
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      easing: 'ease-in-out',
      once: false
    });
  }, []);
  
  // Fetch complaints from the API
  const fetchComplaints = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/complaints');
      
      if (!response.ok) {
        throw new Error('Failed to fetch complaints');
      }
      
      const data = await response.json();
      setComplaints(data);
      setFilteredComplaints(data);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching complaints:', err);
      setError(err.message);
      setLoading(false);
    }
  };
  
  // Filter complaints based on status and search query
  const filterComplaints = () => {
    let result = [...complaints];
    
    // Filter by status if selected
    if (statusFilter) {
      result = result.filter(complaint => complaint.status === statusFilter);
    }
    
    // Filter by search query if present
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(complaint => 
        complaint.fullName.toLowerCase().includes(query) ||
        complaint.complaintText.toLowerCase().includes(query) ||
        complaint.mobileNumber.includes(query)
      );
    }
    
    setFilteredComplaints(result);
  };
  
  // Handle viewing a complaint
  const handleViewComplaint = (complaint) => {
    setSelectedComplaint(complaint);
    setResponseText(complaint.adminResponse || '');
    setSelectedStatus(complaint.status);
    setEditMode(false);
    setUpdateSuccess(false);
  };
  
  // Handle status change
  const handleStatusChange = (e) => {
    setSelectedStatus(e.target.value);
  };
  
  // Handle response text change
  const handleResponseChange = (e) => {
    setResponseText(e.target.value);
  };
  
  // Handle updating complaint status and response
  const handleUpdateComplaint = async () => {
    if (!selectedComplaint) return;
    
    try {
      setLoading(true);
      
      const response = await fetch(`/api/complaints?id=${selectedComplaint._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          status: selectedStatus,
          adminResponse: responseText
        }),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to update complaint');
      }
      
      const updatedComplaint = await response.json();
      
      // Update the complaints list with the updated complaint
      const updatedComplaints = complaints.map(complaint => 
        complaint._id === selectedComplaint._id ? {...complaint, status: selectedStatus, adminResponse: responseText} : complaint
      );
      
      setComplaints(updatedComplaints);
      setSelectedComplaint({...selectedComplaint, status: selectedStatus, adminResponse: responseText});
      setEditMode(false);
      setUpdateSuccess(true);
      
      // Hide success message after 3 seconds
      setTimeout(() => {
        setUpdateSuccess(false);
      }, 3000);
    } catch (err) {
      console.error('Error updating complaint:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  
  // Get status badge component based on status
  const getStatusBadge = (status) => {
    switch(status) {
      case 'नवीन':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
            <FaExclamation className="mr-1" /> {status}
          </span>
        );
      case 'प्रक्रियेत':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
            <FaHourglassHalf className="mr-1" /> {status}
          </span>
        );
      case 'सोडवले':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            <FaCheckCircle className="mr-1" /> {status}
          </span>
        );
      default:
        return <span>{status}</span>;
    }
  };
  
  // Format date for display
  const formatDate = (dateString) => {
    const options = { 
      day: '2-digit', 
      month: '2-digit', 
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    return new Date(dateString).toLocaleString('mr-IN', options);
  };
  
  return (
    <AdminLayout>
      <div className="bg-white rounded-lg shadow-md p-6" data-aos="fade-down">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">तक्रार व्यवस्थापन</h1>
        
        <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
          {/* Search and Filter */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="शोध..."
                className="pl-10 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 w-full md:w-64"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="">सर्व स्थिती</option>
              <option value="नवीन">नवीन</option>
              <option value="प्रक्रियेत">प्रक्रियेत</option>
              <option value="सोडवले">सोडवले</option>
            </select>
          </div>
          
          {/* Refresh button */}
          <button
            onClick={fetchComplaints}
            className="bg-green-100 text-green-800 hover:bg-green-200 px-4 py-2 rounded-md flex items-center justify-center"
            data-aos="zoom-in"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            रिफ्रेश करा
          </button>
        </div>
        
        {loading && !selectedComplaint ? (
          <div className="text-center py-12" data-aos="fade-up">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-700 mx-auto"></div>
            <p className="mt-4 text-gray-600">तक्रारी लोड करत आहे...</p>
          </div>
        ) : error ? (
          <div className="bg-red-100 text-red-700 p-4 rounded-lg mb-6" data-aos="fade-up">
            <p>{error}</p>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row gap-6">
            {/* Complaints list */}
            <div className="w-full md:w-1/2 overflow-auto" data-aos="fade-right">
              <h2 className="text-lg font-semibold mb-4">
                तक्रारी <span className="text-sm text-gray-500 font-normal">({filteredComplaints.length})</span>
              </h2>
              
              {filteredComplaints.length === 0 ? (
                <div className="text-center py-8 bg-gray-50 rounded-lg" data-aos="fade-up">
                  <p className="text-gray-500">कोणत्याही तक्रारी नाहीत</p>
                </div>
              ) : (
                <div className="border rounded-lg overflow-hidden" data-aos="fade-up">
                  <div className="divide-y divide-gray-200">
                    {filteredComplaints.map((complaint) => (
                      <div 
                        key={complaint._id} 
                        className={`p-4 hover:bg-gray-50 cursor-pointer ${selectedComplaint?._id === complaint._id ? 'bg-green-50 border-l-4 border-green-500' : ''}`}
                        onClick={() => handleViewComplaint(complaint)}
                        data-aos="fade-up"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-medium text-gray-900">{complaint.fullName}</h3>
                          {getStatusBadge(complaint.status)}
                        </div>
                        <p className="text-sm text-gray-600 mb-2 line-clamp-2">{complaint.complaintText}</p>
                        <div className="flex justify-between text-xs text-gray-500" data-aos="fade-right">
                          <span>{complaint.marketName}</span>
                          <span>{formatDate(complaint.createdAt)}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* Complaint details */}
            <div className="w-full md:w-1/2" data-aos="fade-left">
              <h2 className="text-lg font-semibold mb-4">तक्रार तपशील</h2>
              
              {!selectedComplaint ? (
                <div className="text-center py-12 bg-gray-50 rounded-lg" data-aos="fade-up">
                  <p className="text-gray-500">तपशील पाहण्यासाठी तक्रार निवडा</p>
                </div>
              ) : (
                <div className="border rounded-lg p-4 bg-gray-50" data-aos="fade-up">
                  {/* Update success message */}
                  {updateSuccess && (
                    <div className="mb-4 bg-green-100 text-green-800 p-3 rounded-lg flex items-center" data-aos="fade-up">
                      <FaCheckCircle className="mr-2" />
                      <p>तक्रार यशस्वीरित्या अद्यतनित केली गेली</p>
                    </div>
                  )}
                  
                  <div className="bg-white p-4 rounded-lg mb-4" data-aos="fade-up">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-semibold text-lg">{selectedComplaint.fullName}</h3>
                      {getStatusBadge(selectedComplaint.status)}
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4" data-aos="fade-up">
                      <div>
                        <p className="text-sm text-gray-500">मोबाईल क्रमांक</p>
                        <p>{selectedComplaint.mobileNumber}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">बाजार नाव</p>
                        <p>{selectedComplaint.marketName}</p>
                      </div>
                    </div>
                    
                    <div className="mb-4" data-aos="fade-up">
                      <p className="text-sm text-gray-500">तक्रार</p>
                      <div className="bg-gray-50 p-3 rounded-lg mt-1 whitespace-pre-wrap" data-aos="fade-up">
                        {selectedComplaint.complaintText}
                      </div>
                    </div>
                    
                    <div className="text-xs text-gray-500 flex justify-between" data-aos="fade-up">
                      <span>तक्रार क्रमांक: {selectedComplaint._id.substring(selectedComplaint._id.length - 6)}</span>
                      <span>दिनांक: {formatDate(selectedComplaint.createdAt)}</span>
                    </div>
                  </div>
                  
                  {/* Admin response section */}
                  <div className="bg-white p-4 rounded-lg" data-aos="fade-up">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-medium">प्रशासकीय प्रतिसाद</h3>
                      <button
                        onClick={() => setEditMode(!editMode)}
                        className={`px-3 py-1 rounded-md text-sm ${editMode ? 'bg-gray-200 text-gray-800' : 'bg-blue-100 text-blue-700'}`}
                      >
                        {editMode ? 'रद्द करा' : 'संपादित करा'}
                      </button>
                    </div>
                    
                    {editMode ? (
                      <div className="space-y-4" data-aos="fade-up">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">स्थिती</label>
                          <select
                            value={selectedStatus}
                            onChange={handleStatusChange}
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                          >
                            <option value="नवीन">नवीन</option>
                            <option value="प्रक्रियेत">प्रक्रियेत</option>
                            <option value="सोडवले">सोडवले</option>
                          </select>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">प्रतिसाद</label>
                          <textarea
                            value={responseText}
                            onChange={handleResponseChange}
                            rows="4"
                            placeholder="तक्रारीला प्रतिसाद..."
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                          ></textarea>
                        </div>
                        
                        <button
                          onClick={handleUpdateComplaint}
                          disabled={loading}
                          className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md font-medium"
                        >
                          {loading ? 'अद्यतनित करत आहे...' : 'अद्यतनित करा'}
                        </button>
                      </div>
                    ) : (
                      <div className="bg-gray-50 p-3 rounded-lg" data-aos="fade-up">
                        {responseText ? (
                          <p className="whitespace-pre-wrap">{responseText}</p>
                        ) : (
                          <p className="text-gray-500 italic">अद्याप कोणताही प्रतिसाद नाही</p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
