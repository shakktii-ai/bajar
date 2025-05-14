import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FaArrowLeft, FaCheck, FaExclamationTriangle } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ComplaintRegistration() {
  // Initialize AOS animation library
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      easing: 'ease-in-out'
    });
  }, []);
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    marketName: 'दिंडोरी मुख्य बाजार',
    complaintText: '',
  });
  
  const [characterCount, setCharacterCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  
  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Update character count for complaint text
    if (name === 'complaintText') {
      setCharacterCount(value.length);
    }
  };
  
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      // Validate form fields
      if (!formData.fullName || !formData.mobileNumber || !formData.complaintText) {
        throw new Error('कृपया सर्व आवश्यक फील्ड भरा');
      }
      
      // Validate mobile number format
      const mobilePattern = /^[0-9]{10}$/;
      if (!mobilePattern.test(formData.mobileNumber)) {
        throw new Error('कृपया वैध 10 अंकी मोबाईल नंबर प्रविष्ट करा');
      }
      
      // Submit data to API
      const response = await fetch('/api/complaints', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'तक्रार नोंदवताना त्रुटी आली');
      }
      
      // Show success message and reset form
      setSuccess(true);
      setFormData({
        fullName: '',
        mobileNumber: '',
        marketName: 'दिंडोरी मुख्य बाजार',
        complaintText: '',
      });
      setCharacterCount(0);
      
    } catch (err) {
      console.error('Error submitting complaint:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  
  // Reset the form and success state to submit another complaint
  const handleReset = () => {
    setSuccess(false);
    setError(null);
  };
  
  // Available markets
  const marketOptions = [
    'दिंडोरी मुख्य बाजार',
    'वणी उप बाजार',
    'इतर बाजार'
  ];
  
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <Head>
        <title>तक्रार नोंदवा | दिंडोरी कृषि उत्पन्न बाजार समिती</title>
        <meta name="description" content="दिंडोरी कृषि उत्पन्न बाजार समितीमध्ये तक्रार नोंदवा" />
      </Head>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center text-green-600 hover:text-green-800 mb-6" data-aos="fade-right">
          <FaArrowLeft className="mr-2" /> मुख्यपृष्ठावर परत जा
        </Link>
        
        <div className="bg-white shadow-md rounded-lg p-6 md:p-8" data-aos="fade-up" data-aos-delay="100">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6" data-aos="fade-down" data-aos-delay="200">तक्रार नोंदवा</h1>
          
          {success ? (
            // Success message
            <div className="bg-green-50 border border-green-200 rounded-md p-6 text-center" data-aos="zoom-in">
              <div className="flex justify-center">
                <div className="bg-green-100 rounded-full p-3 mb-4 animate-bounce">
                  <FaCheck className="text-green-600 text-2xl" />
                </div>
              </div>
              <h2 className="text-lg font-medium text-green-800 mb-3">आपली तक्रार यशस्वीरित्या नोंदवली गेली आहे</h2>
              <p className="text-green-700 mb-6">तक्रार क्रमांक: {new Date().getTime().toString().substr(-6)}</p>
              <button 
                onClick={handleReset}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md transition-colors"
              >
                नवीन तक्रार नोंदवा
              </button>
            </div>
          ) : (
            // Complaint form
            <form onSubmit={handleSubmit} className="space-y-6" data-aos="fade-up" data-aos-delay="300">
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md flex items-center">
                  <FaExclamationTriangle className="mr-2 text-red-500" />
                  <p>{error}</p>
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-aos="fade-right" data-aos-delay="400">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                    पूर्ण नाव <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="पूर्ण नाव प्रविष्ट करा"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
                
                {/* Mobile Number */}
                <div>
                  <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700 mb-1">
                    मोबाईल क्रमांक <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="tel"
                    id="mobileNumber"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    placeholder="10 अंकी मोबाईल नंबर"
                    pattern="[0-9]{10}"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
              </div>
              
              {/* Market Name */}
              <div>
                <label htmlFor="marketName" className="block text-sm font-medium text-gray-700 mb-1">
                  बाजार नाव <span className="text-red-600">*</span>
                </label>
                <select
                  id="marketName"
                  name="marketName"
                  value={formData.marketName}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                >
                  {marketOptions.map(market => (
                    <option key={market} value={market}>{market}</option>
                  ))}
                </select>
              </div>
              
              {/* Complaint Text */}
              <div>
                <label htmlFor="complaintText" className="block text-sm font-medium text-gray-700 mb-1">
                  तक्रार <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="complaintText"
                  name="complaintText"
                  value={formData.complaintText}
                  onChange={handleChange}
                  placeholder="आपली तक्रार सविस्तर लिहा..."
                  rows="5"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                  maxLength="2000"
                ></textarea>
                <div className="text-xs text-gray-500 mt-1 text-right">
                  {characterCount} / 2000
                </div>
              </div>
              
              <div className="flex justify-center pt-4">
                <button 
                  type="submit"
                  disabled={loading}
                  className={`w-full md:w-auto px-8 py-3 font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {loading ? 'सबमिट करत आहे...' : 'सबमिट करा'}
                </button>
              </div>
            </form>
          )}
        </div>
        
        <div className="mt-8 text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} दिंडोरी कृषि उत्पन्न बाजार समिती. सर्व हक्क राखीव.</p>
        </div>
      </div>
    </div>
  );
}
