import React, { useState } from 'react';
import Head from 'next/head';

export default function VideosGallery() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Function to handle video click and show modal/player
  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };

  // Function to close video modal
  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>व्हिडिओ गॅलरी - दिंडोरी कृषि उत्पन्न बाजार समिती</title>
        <meta name="description" content="Explore videos showcasing activities, projects, and events of Dindori Krishi Utpann Bajar Samiti" />
      </Head>
      
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h1 className="text-3xl font-bold text-center text-green-800 mb-8">
            ददडोरी कृषि उत्पन्न बाजार सषमती.षज.नाषिक
          </h1>
          <h2 className="text-2xl font-semibold text-center text-green-700 mb-6">
            व्हिडिओ गॅलरी
          </h2>

          <div className="prose max-w-none">
            <p className="mb-6 text-center">
              दिंडोरी कृषि उत्पन्न बाजार समितीच्या विविध कार्यक्रम, प्रकल्प आणि उपक्रमांचे व्हिडिओ येथे पाहू शकता.
            </p>

            {/* Introduction Videos */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold text-green-800 mb-4 border-b border-green-100 pb-2">बाजार समिती परिचय</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {[
                  {
                    id: 'intro',
                    title: "बाजार समिती परिचय व्हिडिओ",
                    description: "बाजार समितीचा संपूर्ण परिचय, इतिहास, वाटचाल आणि वैशिष्ट्ये या व्हिडिओमध्ये समाविष्ट आहेत.",
                    duration: "15:24",
                    date: "10 जानेवारी 2023"
                  },
                  {
                    id: 'chairman',
                    title: "मा. सभापती श्री. रामदास शिवाजी शेळके यांची मुलाखत",
                    description: "दिंडोरी बाजार समितीचे सभापती श्री. रामदास शिवाजी शेळके यांची विशेष मुलाखत.",
                    duration: "22:10",
                    date: "5 फेब्रुवारी 2023"
                  }
                ].map((video) => (
                  <div 
                    key={video.id} 
                    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-green-200 cursor-pointer"
                    onClick={() => handleVideoClick(video)}
                  >
                    <div className="relative">
                      <div className="aspect-w-16 aspect-h-9 h-56 bg-gray-200">
                        <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                          <div className="text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p className="mt-2 text-gray-600 text-sm">{video.title}</p>
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
                          {video.duration}
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <h4 className="font-medium text-green-800 mb-1">{video.title}</h4>
                      <p className="text-sm text-gray-700 mb-2">{video.description}</p>
                      <p className="text-xs text-gray-500">अपलोड: {video.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Development Projects */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold text-green-800 mb-4 border-b border-green-100 pb-2">प्रकल्प व विकास कामे</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {[
                  { 
                    id: 'solar',
                    title: "सौर ऊर्जा प्रकल्प", 
                    duration: "08:45", 
                    date: "15 मार्च 2023",
                    description: "बाजार समितीच्या सौर ऊर्जा प्रकल्पाची माहिती व अंमलबजावणी" 
                  },
                  { 
                    id: 'onion',
                    title: "कांदा साठवणूक शेड", 
                    duration: "12:30", 
                    date: "28 एप्रिल 2023",
                    description: "कांदा साठवणूक शेडची निर्मिती व उपयोग" 
                  },
                  { 
                    id: 'farmers-rest',
                    title: "शेतकरी विश्रामगृह", 
                    duration: "10:15", 
                    date: "10 मे 2023",
                    description: "शेतकरी विश्रामगृहाची निर्मिती व सुविधा" 
                  },
                  { 
                    id: 'e-auction',
                    title: "ई-लिलाव प्रणाली", 
                    duration: "14:20", 
                    date: "22 जून 2023",
                    description: "आधुनिक ई-लिलाव प्रणालीची माहिती व कार्यपद्धती" 
                  },
                  { 
                    id: 'water',
                    title: "पाणी संकलन प्रकल्प", 
                    duration: "09:55", 
                    date: "18 जुलै 2023",
                    description: "पावसाचे पाणी संकलन व पुनर्वापर प्रकल्प" 
                  },
                  { 
                    id: 'vani',
                    title: "वणी उपबाजार विस्तार", 
                    duration: "11:40", 
                    date: "5 ऑगस्ट 2023",
                    description: "वणी उपबाजाराचा विस्तार व नवीन सुविधा" 
                  }
                ].map((video) => (
                  <div 
                    key={video.id} 
                    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-green-200 cursor-pointer"
                    onClick={() => handleVideoClick(video)}
                  >
                    <div className="relative">
                      <div className="aspect-w-16 aspect-h-9 h-40 bg-gray-200">
                        <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                          <div className="text-center p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p className="mt-2 text-gray-600 text-xs sm:text-sm truncate">{video.title}</p>
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
                          {video.duration}
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-3">
                      <h4 className="font-medium text-green-800 text-sm md:text-base">{video.title}</h4>
                      <p className="text-xs text-gray-700 mt-1 line-clamp-2">{video.description}</p>
                      <p className="text-xs text-gray-500 mt-1">अपलोड: {video.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-green-50 p-5 rounded-lg border border-green-200 mb-6">
              <h3 className="text-lg font-medium text-green-800 mb-3">व्हिडिओ दर्शविण्याबाबत नोंद:</h3>
              <p>येथे दाखवलेले व्हिडिओ प्लेसहोल्डर आहेत. अधिक व्हिडिओ पाहण्यासाठी आमच्या YouTube चॅनलला भेट द्या:</p>
              <p className="mt-2 font-medium">"Dindori APMC Official" - www.youtube.com/c/DindoriAPMC</p>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75">
          <div className="relative bg-white rounded-lg max-w-5xl w-full max-h-[90vh] overflow-hidden flex flex-col">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
              <h3 className="text-xl font-semibold text-green-800 pr-8">{selectedVideo.title}</h3>
              <button
                onClick={closeVideoModal}
                className="text-gray-500 hover:text-gray-800 focus:outline-none"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Video Player */}
            <div className="flex-grow overflow-auto">
              <div className="relative bg-black aspect-w-16 aspect-h-9 w-full">
                {/* Placeholder for actual video player */}
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="mt-4 text-lg">व्हिडिओ प्लेयर प्लेसहोल्डर</p>
                    <p className="text-sm text-gray-400 mt-2">हा व्हिडिओ प्लेसहोल्डर आहे. अधिकृत व्हिडिओ पाहण्यासाठी YouTube चॅनलला भेट द्या.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Video Details */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-medium text-gray-900">{selectedVideo.title}</h4>
                <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">{selectedVideo.duration}</span>
              </div>
              <p className="text-sm text-gray-700 mb-2">{selectedVideo.description}</p>
              <p className="text-xs text-gray-500">अपलोड: {selectedVideo.date}</p>
              <div className="mt-4 flex justify-end">
                <button 
                  onClick={closeVideoModal}
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors mr-2"
                >
                  बंद करा
                </button>
                <a 
                  href="https://www.youtube.com/c/DindoriAPMC" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors flex items-center"
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                  YouTube वर पहा
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}