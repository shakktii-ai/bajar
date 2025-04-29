import React from 'react';
import Image from 'next/image';

export default function PhotosGallery() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h1 className="text-3xl font-bold text-center text-green-800 mb-8">
            दिंडोरी कृषि उत्पन्न बाजार समिती.जि.नाशिक
          </h1>
          <h2 className="text-2xl font-semibold text-center text-green-700 mb-6">
            फोटो गॅलरी
          </h2>

          <div className="prose max-w-none">
            <p className="mb-6 text-center">
              दिंडोरी कृषि उत्पन्न बाजार समितीच्या विविध कार्यक्रम, प्रकल्प आणि उपक्रमांचे छायाचित्र येथे पाहू शकता.
            </p>
            
            {/* Note: Leaders and Committee Members sections moved to directorBoard20232028.js */}
            
            {/* Market Events Photos */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-green-800 mb-4">बाजार कार्यक्रम</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="relative h-60 w-full">
                    <Image 
                      src="/events/event1.jpg" 
                      alt="बाजार कार्यक्रम 1" 
                      fill
                      sizes="(max-width: 768px) 100vw, 300px"
                      priority
                      style={{objectFit: 'cover'}}
                    />
                  </div>
                  <div className="p-3 text-center">
                    <p className="font-medium text-green-800">बाजार कार्यक्रम - 2024</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="relative h-60 w-full">
                    <Image 
                      src="/events/event2.jpg" 
                      alt="बाजार कार्यक्रम 2" 
                      fill
                      sizes="(max-width: 768px) 100vw, 300px"
                      priority
                      style={{objectFit: 'cover'}}
                    />
                  </div>
                  <div className="p-3 text-center">
                    <p className="font-medium text-green-800">समिती अधिवेशन - 2023</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="relative h-60 w-full">
                    <Image 
                      src="/events/event3.jpg" 
                      alt="बाजार कार्यक्रम 3" 
                      fill
                      sizes="(max-width: 768px) 100vw, 300px"
                      priority
                      style={{objectFit: 'cover'}}
                    />
                  </div>
                  <div className="p-3 text-center">
                    <p className="font-medium text-green-800">उद्घाटन सोहळा - 2023</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="relative h-60 w-full">
                    <Image 
                      src="/events/market1.jpg" 
                      alt="बाजार दृश्य 1" 
                      fill
                      sizes="(max-width: 768px) 100vw, 300px"
                      priority
                      style={{objectFit: 'cover'}}
                    />
                  </div>
                  <div className="p-3 text-center">
                    <p className="font-medium text-green-800">बाजार दृश्य - फळे विभाग</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="relative h-60 w-full">
                    <Image 
                      src="/events/market2.jpg" 
                      alt="बाजार दृश्य 2" 
                      fill
                      sizes="(max-width: 768px) 100vw, 300px"
                      priority
                      style={{objectFit: 'cover'}}
                    />
                  </div>
                  <div className="p-3 text-center">
                    <p className="font-medium text-green-800">बाजार दृश्य - भाजीपाला विभाग</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="relative h-60 w-full">
                    <Image 
                      src="/events/facility1.jpg" 
                      alt="सुविधा दृश्य 1" 
                      fill
                      sizes="(max-width: 768px) 100vw, 300px"
                      priority
                      style={{objectFit: 'cover'}}
                    />
                  </div>
                  <div className="p-3 text-center">
                    <p className="font-medium text-green-800">नवीन वजनकाटा सुविधा</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="relative h-60 w-full">
                    <Image 
                      src="/events/facility2.jpg" 
                      alt="सुविधा दृश्य 2" 
                      fill
                      sizes="(max-width: 768px) 100vw, 300px"
                      priority
                      style={{objectFit: 'cover'}}
                    />
                  </div>
                  <div className="p-3 text-center">
                    <p className="font-medium text-green-800">पार्किंग सुविधा</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="relative h-60 w-full">
                    <Image 
                      src="/events/facility3.jpg" 
                      alt="सुविधा दृश्य 3" 
                      fill
                      sizes="(max-width: 768px) 100vw, 300px"
                      priority
                      style={{objectFit: 'cover'}}
                    />
                  </div>
                  <div className="p-3 text-center">
                    <p className="font-medium text-green-800">शेतकरी विश्रामगृह</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="relative h-60 w-full">
                    <Image 
                      src="/events/market3.jpg" 
                      alt="बाजार दृश्य 3" 
                      fill
                      sizes="(max-width: 768px) 100vw, 300px"
                      priority
                      style={{objectFit: 'cover'}}
                    />
                  </div>
                  <div className="p-3 text-center">
                    <p className="font-medium text-green-800">कांदा बाजार</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-green-800 mb-4">बाजार परिसर</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <div key={`market-${num}`} className="bg-gray-200 rounded-lg overflow-hidden shadow-md">
                    <div className="aspect-w-16 aspect-h-9 h-48 bg-gray-300 flex items-center justify-center">
                      <p className="text-gray-600">बाजार परिसर छायाचित्र {num}</p>
                    </div>
                    <div className="p-3 bg-white">
                      <p className="text-sm text-gray-700">बाजार परिसराचे छायाचित्र - {num}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-green-800 mb-4">सभापती भेट</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[1, 2, 3].map((num) => (
                  <div key={`chairperson-${num}`} className="bg-gray-200 rounded-lg overflow-hidden shadow-md">
                    <div className="aspect-w-16 aspect-h-9 h-48 bg-gray-300 flex items-center justify-center">
                      <p className="text-gray-600">सभापती भेट छायाचित्र {num}</p>
                    </div>
                    <div className="p-3 bg-white">
                      <p className="text-sm text-gray-700">मा. सभापती श्री. रामदास शिवाजी शेळके यांची भेट - {num}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-green-800 mb-4">कार्यक्रम व समारंभ</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                  <div key={`event-${num}`} className="bg-gray-200 rounded-lg overflow-hidden shadow-md">
                    <div className="aspect-w-16 aspect-h-9 h-48 bg-gray-300 flex items-center justify-center">
                      <p className="text-gray-600">कार्यक्रम छायाचित्र {num}</p>
                    </div>
                    <div className="p-3 bg-white">
                      <p className="text-sm text-gray-700">वार्षिक सभा व समारंभ - {num}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-green-800 mb-4">शेतकरी प्रशिक्षण</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <div key={`training-${num}`} className="bg-gray-200 rounded-lg overflow-hidden shadow-md">
                    <div className="aspect-w-16 aspect-h-9 h-48 bg-gray-300 flex items-center justify-center">
                      <p className="text-gray-600">शेतकरी प्रशिक्षण छायाचित्र {num}</p>
                    </div>
                    <div className="p-3 bg-white">
                      <p className="text-sm text-gray-700">शेतकरी प्रशिक्षण कार्यक्रम - {num}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-green-800 mb-4">पुरस्कार व सन्मान</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[1, 2, 3].map((num) => (
                  <div key={`award-${num}`} className="bg-gray-200 rounded-lg overflow-hidden shadow-md">
                    <div className="aspect-w-16 aspect-h-9 h-48 bg-gray-300 flex items-center justify-center">
                      <p className="text-gray-600">पुरस्कार छायाचित्र {num}</p>
                    </div>
                    <div className="p-3 bg-white">
                      <p className="text-sm text-gray-700">राज्य स्तरीय पुरस्कार प्राप्त करताना - {num}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-green-800 mb-4">विकास कामे</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <div key={`development-${num}`} className="bg-gray-200 rounded-lg overflow-hidden shadow-md">
                    <div className="aspect-w-16 aspect-h-9 h-48 bg-gray-300 flex items-center justify-center">
                      <p className="text-gray-600">विकास कामे छायाचित्र {num}</p>
                    </div>
                    <div className="p-3 bg-white">
                      <p className="text-sm text-gray-700">विविध विकास कामे प्रगतीपथावर - {num}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-green-50 p-5 rounded-lg border border-green-200 mb-6">
              <h3 className="text-lg font-medium text-green-800 mb-3">नोंद:</h3>
              <p>या पेजवर दाखवलेली छायाचित्रे ही प्रतिनिधिक स्वरूपाची आहेत. अधिक छायाचित्रे पाहण्यासाठी कृपया बाजार समितीचे फेसबुक पेज भेट द्या किंवा कार्यालयात संपर्क साधावा.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
