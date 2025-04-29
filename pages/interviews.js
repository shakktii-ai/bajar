import React, { useState, useEffect } from 'react';
import Head from 'next/head';

export default function InterviewsGallery() {
  const [interviews, setInterviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedInterview, setSelectedInterview] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInterviews = async () => {
      try {
        const response = await fetch('/api/interviews/getInterviews');
        const data = await response.json();
        
        if (data.success) {
          setInterviews(data.interviews);
        } else {
          setError('Failed to load interviews');
        }
      } catch (err) {
        setError('Error connecting to server');
        console.error('Error fetching interviews:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchInterviews();
  }, []);

  // Function to handle interview click and show modal/player
  const handleInterviewClick = (interview) => {
    setSelectedInterview(interview);
  };

  // Function to close interview modal
  const closeInterviewModal = () => {
    setSelectedInterview(null);
  };

  // Function to extract YouTube video ID from URL
  const getYoutubeVideoId = (url) => {
    if (!url) return null;
    
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    
    return (match && match[2].length === 11) ? match[2] : null;
  };

  // Placeholder data for when no interviews are available yet
  const placeholderInterviews = [
    {
      _id: 'placeholder1',
      title: 'कृषि उत्पन्न बाजार समिती अध्यक्ष मुलाखत',
      intervieweePosition: 'अध्यक्ष, कृषि उत्पन्न बाजार समिती',
      description: 'कृषि उत्पन्न बाजार समितीच्या अध्यक्षांची विशेष मुलाखत, ज्यामध्ये बाजार समितीच्या योजना आणि भविष्यातील प्रकल्पांची माहिती.',
      duration: '18:24',
      date: '15 एप्रिल 2025'
    },
    {
      _id: 'placeholder2',
      title: 'शेतकरी विकास योजना - विशेष मुलाखत',
      intervieweePosition: 'सचिव, कृषि उत्पन्न बाजार समिती',
      description: 'शेतकरी विकास योजनेबद्दल सविस्तर माहिती आणि त्याचे फायदे या विशेष मुलाखतीत.',
      duration: '12:45',
      date: '28 मार्च 2025'
    }
  ];

  // Determine which interviews to display
  const displayInterviews = interviews.length > 0 ? interviews : placeholderInterviews;

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>मुलाखती - दिंडोरी कृषि उत्पन्न बाजार समिती</title>
        <meta name="description" content="Watch exclusive interviews with key personnel and stakeholders of Dindori Krishi Utpann Bajar Samiti" />
      </Head>
      
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h1 className="text-3xl font-bold text-center text-green-800 mb-8">
            दिंडोरी कृषि उत्पन्न बाजार समिती, जि. नाशिक
          </h1>
          <h2 className="text-2xl font-semibold text-center text-green-700 mb-6">
            विशेष मुलाखती
          </h2>

          <div className="prose max-w-none">
            <p className="mb-6 text-center">
              दिंडोरी कृषि उत्पन्न बाजार समितीच्या पदाधिकारी, कर्मचारी आणि शेतकऱ्यांच्या मुलाखती येथे पाहू शकता.
            </p>

            {loading ? (
              <div className="flex justify-center my-12">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-700"></div>
              </div>
            ) : error ? (
              <div className="bg-red-50 p-4 rounded-md text-red-700 text-center my-8">
                {error}. कृपया पुन्हा प्रयत्न करा.
              </div>
            ) : (
              <>
                {/* Main Interviews Section */}
                <div className="mb-10">
                  <h3 className="text-xl font-semibold text-green-800 mb-4 border-b border-green-100 pb-2">प्रमुख मुलाखती</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    {displayInterviews.filter(interview => interview.featured).map((interview) => (
                      <div 
                        key={interview._id} 
                        className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-green-200 cursor-pointer"
                        onClick={() => handleInterviewClick(interview)}
                      >
                        <div className="relative">
                          <div className="aspect-w-16 aspect-h-9 h-56 bg-gray-200">
                            <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                              <div className="text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p className="mt-2 text-gray-600 text-sm">{interview.title}</p>
                              </div>
                            </div>
                            
                            {/* Play button overlay */}
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-16 h-16 rounded-full bg-green-600 bg-opacity-80 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                </svg>
                              </div>
                            </div>
                            
                            {/* Duration badge */}
                            <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                              {interview.duration}
                            </div>
                          </div>
                        </div>
                        
                        <div className="p-4">
                          <h4 className="font-medium text-green-800 mb-1">{interview.title}</h4>
                          <p className="text-sm text-gray-600 mb-1">{interview.intervieweePosition}</p>
                          <p className="text-sm text-gray-700 mb-2">{interview.description}</p>
                          <p className="text-xs text-gray-500">अपलोड: {interview.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Interviews */}
                <div className="mb-10">
                  <h3 className="text-xl font-semibold text-green-800 mb-4 border-b border-green-100 pb-2">सर्व मुलाखती</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {displayInterviews.map((interview) => (
                      <div 
                        key={interview._id} 
                        className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-green-200 cursor-pointer"
                        onClick={() => handleInterviewClick(interview)}
                      >
                        <div className="relative">
                          <div className="aspect-w-16 aspect-h-9 h-40 bg-gray-200">
                            <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                              <div className="text-center p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p className="mt-2 text-gray-600 text-xs sm:text-sm truncate">{interview.title}</p>
                              </div>
                            </div>
                            
                            {/* Play button overlay */}
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-12 h-12 rounded-full bg-green-600 bg-opacity-80 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                </svg>
                              </div>
                            </div>
                            
                            {/* Duration badge */}
                            <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                              {interview.duration}
                            </div>
                          </div>
                        </div>
                        
                        <div className="p-3">
                          <h4 className="font-medium text-green-800 text-sm md:text-base">{interview.title}</h4>
                          <p className="text-xs text-gray-600 mt-1">{interview.intervieweePosition}</p>
                          <p className="text-xs text-gray-700 mt-1 line-clamp-2">{interview.description}</p>
                          <p className="text-xs text-gray-500 mt-1">अपलोड: {interview.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {interviews.length === 0 && (
                  <div className="bg-green-50 p-5 rounded-lg border border-green-200 mb-6">
                    <h3 className="text-lg font-medium text-green-800 mb-3">मुलाखती दर्शविण्याबाबत नोंद:</h3>
                    <p>सध्या येथे दाखवलेल्या मुलाखती नमुना स्वरूपात आहेत. लवकरच अधिक मुलाखती उपलब्ध होतील.</p>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      {/* Interview Modal */}
      {selectedInterview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75">
          <div className="bg-white rounded-lg overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col">
            <div className="p-4 flex justify-between items-center border-b">
              <h3 className="text-xl font-medium text-green-900">{selectedInterview.title}</h3>
              <button 
                onClick={closeInterviewModal}
                className="text-gray-500 hover:text-gray-800"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="flex-grow overflow-auto">
              {selectedInterview.videoLink ? (
                <div className="relative pt-[56.25%]">
                  <iframe 
                    className="absolute top-0 left-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${getYoutubeVideoId(selectedInterview.videoLink)}?autoplay=1`}
                    title={selectedInterview.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                <div className="h-64 bg-gray-200 flex items-center justify-center">
                  <p className="text-gray-500">विडिओ प्लेयर लोड करता आला नाही</p>
                </div>
              )}
              
              <div className="p-4">
                <h4 className="font-medium text-lg mb-1">{selectedInterview.title}</h4>
                <p className="text-sm text-gray-600 mb-3">{selectedInterview.intervieweePosition}</p>
                <p className="text-sm mb-4">{selectedInterview.description}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="mr-4">अपलोड: {selectedInterview.date}</span>
                  <span>कालावधी: {selectedInterview.duration}</span>
                </div>
              </div>
            </div>
            
            <div className="p-4 border-t flex justify-end">
              <button
                onClick={closeInterviewModal}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                बंद करा
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
