import React from 'react';
import Image from 'next/image';

export default function PhotosGallery() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h1 className="text-3xl font-bold text-center text-green-800 mb-8">
            ददडोरी कृषि उत्पन्न बाजार सषमती.षज.नाषिक
          </h1>
          <h2 className="text-2xl font-semibold text-center text-green-700 mb-6">
            फोटो गॅलरी
          </h2>

          <div className="prose max-w-none">
            <p className="mb-6 text-center">
              दिंडोरी कृषि उत्पन्न बाजार समितीच्या विविध कार्यक्रम, प्रकल्प आणि उपक्रमांचे छायाचित्र येथे पाहू शकता.
            </p>

            {/* Leaders Section */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-green-800 mb-4">संचालक मंडळ</h3>
              <div className="flex justify-center mb-6">
                <div className="bg-white rounded-lg overflow-hidden shadow-lg p-4 max-w-2xl">
                  <div className="relative h-[400px] w-full">
                    <Image 
                      src="/samiti/leaders.png" 
                      alt="Leaders" 
                      fill
                      style={{objectFit: 'contain'}}
                      priority
                    />
                  </div>
                  <div className="p-4 text-center">
                    <p className="font-bold text-lg text-green-800 mb-2">
                      श्री. प्रशांत प्रकाशराव कड (सभापती)
                    </p>
                    <p className="font-bold text-lg text-green-800">
                      श्री. योगेश माधवराव बर्डे (उपसभापती)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* All Committee Members */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-green-800 mb-4">सर्व समिती सदस्य</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {/* Row 1 */}
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="relative h-60 w-full">
                    <Image 
                      src="/samiti/member1.png" 
                      alt="श्री. वामनराव शिवराम पाटील" 
                      fill
                      sizes="(max-width: 768px) 100vw, 300px"
                      priority
                      style={{objectFit: 'contain'}}
                    />
                  </div>
                  <div className="p-3 text-center">
                    <p className="font-medium text-green-800">श्री. वामनराव शिवराम पाटील</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="relative h-60 w-full">
                    <Image 
                      src="/samiti/member2new.png" 
                      alt="श्री. कैलास माधवराव बारसे" 
                      fill
                      sizes="(max-width: 768px) 100vw, 300px"
                      priority
                      style={{objectFit: 'contain'}}
                    />
                  </div>
                  <div className="p-3 text-center">
                    <p className="font-medium text-green-800">श्री. कैलास माधवराव बारसे</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="relative h-60 w-full">
                    <Image 
                      src="/samiti/member3.png" 
                      alt="श्री. जीव चौधरी श्रावण" 
                      fill
                      sizes="(max-width: 768px) 100vw, 300px"
                      priority
                      style={{objectFit: 'contain'}}
                    />
                  </div>
                  <div className="p-3 text-center">
                    <p className="font-medium text-green-800">श्री. जीव चौधरी श्रावण</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="relative h-60 w-full">
                    <Image 
                      src="/samiti/member4.png" 
                      alt="श्री. संगपाल महेंद्र शिंदत" 
                      fill
                      sizes="(max-width: 768px) 100vw, 300px"
                      priority
                      style={{objectFit: 'contain'}}
                    />
                  </div>
                  <div className="p-3 text-center">
                    <p className="font-medium text-green-800">श्री. संगपाल महेंद्र शिंदत</p>
                  </div>
                </div>

                {/* Row 2 */}
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="relative h-60 w-full">
                    <Image 
                      src="/samiti/member5.png" 
                      alt="श्री. उत्तमराव रामचंद्र पाटील" 
                      fill
                      sizes="(max-width: 768px) 100vw, 300px"
                      priority
                      style={{objectFit: 'contain'}}
                    />
                  </div>
                  <div className="p-3 text-center">
                    <p className="font-medium text-green-800">श्री. उत्तमराव रामचंद्र पाटील</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="relative h-60 w-full">
                    <Image 
                      src="/samiti/member6new.png" 
                      alt="श्री. सुरेश निंबाजी पवरेकर" 
                      fill
                      sizes="(max-width: 768px) 100vw, 300px"
                      priority
                      style={{objectFit: 'contain'}}
                    />
                  </div>
                  <div className="p-3 text-center">
                    <p className="font-medium text-green-800">श्री. सुरेश निंबाजी पवरेकर</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="relative h-60 w-full">
                    <Image 
                      src="/samiti/member7.png" 
                      alt="श्री. संदिप बेलदारे श्रावण" 
                      fill
                      sizes="(max-width: 768px) 100vw, 300px"
                      priority
                      style={{objectFit: 'contain'}}
                    />
                  </div>
                  <div className="p-3 text-center">
                    <p className="font-medium text-green-800">श्री. संदिप बेलदारे श्रावण</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="relative h-60 w-full">
                    <Image 
                      src="/samiti/member8new.png" 
                      alt="सौ. अंजना डल्लू आघाडे" 
                      fill
                      sizes="(max-width: 768px) 100vw, 300px"
                      priority
                      style={{objectFit: 'contain'}}
                    />
                  </div>
                  <div className="p-3 text-center">
                    <p className="font-medium text-green-800">सौ. अंजना डल्लू आघाडे</p>
                  </div>
                </div>

                {/* Row 3 */}
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="relative h-60 w-full">
                    <Image 
                      src="/samiti/member9new.png" 
                      alt="सौ. विजया गुलाबराव जाधव" 
                      fill
                      sizes="(max-width: 768px) 100vw, 300px"
                      priority
                      style={{objectFit: 'contain'}}
                    />
                  </div>
                  <div className="p-3 text-center">
                    <p className="font-medium text-green-800">सौ. विजया गुलाबराव जाधव</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="relative h-60 w-full">
                    <Image 
                      src="/samiti/member10.png" 
                      alt="श्री. राम भागवत वाटले" 
                      fill
                      sizes="(max-width: 768px) 100vw, 300px"
                      priority
                      style={{objectFit: 'contain'}}
                    />
                  </div>
                  <div className="p-3 text-center">
                    <p className="font-medium text-green-800">श्री. राम भागवत वाटले</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="relative h-60 w-full">
                    <Image 
                      src="/samiti/member11new.png" 
                      alt="श्री. दत्तू मारुती शिंदले" 
                      fill
                      sizes="(max-width: 768px) 100vw, 300px"
                      priority
                      style={{objectFit: 'contain'}}
                    />
                  </div>
                  <div className="p-3 text-center">
                    <p className="font-medium text-green-800">श्री. दत्तू मारुती शिंदले</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="relative h-60 w-full">
                    <Image 
                      src="/samiti/member12.png" 
                      alt="श्री. दत्तू शिवाजीराव राऊत" 
                      fill
                      sizes="(max-width: 768px) 100vw, 300px"
                      priority
                      style={{objectFit: 'contain'}}
                    />
                  </div>
                  <div className="p-3 text-center">
                    <p className="font-medium text-green-800">श्री. दत्तू शिवाजीराव राऊत</p>
                  </div>
                </div>

                {/* Row 4 */}
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="relative h-60 w-full">
                    <Image 
                      src="/samiti/member13.png" 
                      alt="श्री. संतराम मनीराम वाघेला" 
                      fill
                      sizes="(max-width: 768px) 100vw, 300px"
                      priority
                      style={{objectFit: 'contain'}}
                    />
                  </div>
                  <div className="p-3 text-center">
                    <p className="font-medium text-green-800">श्री. संतराम मनीराम वाघेला</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="relative h-60 w-full">
                    <Image 
                      src="/samiti/member14.png" 
                      alt="श्री. अनिल कमलेश उटरेसिया" 
                      fill
                      sizes="(max-width: 768px) 100vw, 300px"
                      priority
                      style={{objectFit: 'contain'}}
                    />
                  </div>
                  <div className="p-3 text-center">
                    <p className="font-medium text-green-800">श्री. अनिल कमलेश उटरेसिया</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="relative h-60 w-full">
                    <Image 
                      src="/samiti/member15new.png" 
                      alt="श्री. फजलराज इशाकमिया मोहम" 
                      fill
                      sizes="(max-width: 768px) 100vw, 300px"
                      priority
                      style={{objectFit: 'contain'}}
                    />
                  </div>
                  <div className="p-3 text-center">
                    <p className="font-medium text-green-800">श्री. फजलराज इशाकमिया मोहम</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="relative h-60 w-full">
                    <Image 
                      src="/samiti/member16.png" 
                      alt="श्री. ईश्वर वारके" 
                      fill
                      sizes="(max-width: 768px) 100vw, 300px"
                      priority
                      style={{objectFit: 'contain'}}
                    />
                  </div>
                  <div className="p-3 text-center">
                    <p className="font-medium text-green-800">श्री. ईश्वर वारके</p>
                  </div>
                </div>

                {/* Row 5 */}
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="relative h-60 w-full">
                    <Image 
                      src="/samiti/member17new.png" 
                      alt="श्री. यशवंत दत्तात्रय जाधव" 
                      fill
                      sizes="(max-width: 768px) 100vw, 300px"
                      priority
                      style={{objectFit: 'contain'}}
                    />
                  </div>
                  <div className="p-3 text-center">
                    <p className="font-medium text-green-800">श्री. यशवंत दत्तात्रय जाधव</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="relative h-60 w-full">
                    <Image 
                      src="/samiti/member18new.png" 
                      alt="सचिव" 
                      fill
                      sizes="(max-width: 768px) 100vw, 300px"
                      priority
                      style={{objectFit: 'contain'}}
                    />
                  </div>
                  <div className="p-3 text-center">
                    <p className="font-medium text-green-800">सचिव</p>
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
