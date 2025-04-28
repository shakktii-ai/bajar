import React from 'react';

export default function MarketFeatures() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h1 className="text-3xl font-bold text-center text-green-800 mb-8">
            ददडोरी कृषि उत्पन्न बाजार सषमती.षज.नाषिक
          </h1>
          <h2 className="text-2xl font-semibold text-center text-green-700 mb-6">
            बाजारपेठ वैशिष्ट्य
          </h2>

          <div className="prose max-w-none">
            <p className="mb-6">
              दिंडोरी कृषि उत्पन्न बाजार समितीने शेतकरी आणि व्यापारी यांच्या सोयीसाठी अत्याधुनिक सुविधा उपलब्ध करून दिल्या आहेत. या सुविधांमुळे कृषी उत्पादनांची खरेदी-विक्री अधिक कार्यक्षम आणि पारदर्शक पद्धतीने होण्यास मदत होते.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-green-50 rounded-lg p-6 border border-green-200 flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="rounded-full bg-green-100 p-2 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-green-800">ई-लिलाव प्रणाली</h3>
                </div>
                <p className="text-gray-700 mb-4 flex-grow">
                  आधुनिक तंत्रज्ञानाचा वापर करून ई-लिलाव प्रणाली विकसित केली आहे. यामुळे शेतकऱ्यांना त्यांच्या उत्पादनाची योग्य किंमत मिळते आणि व्यवहारात पारदर्शकता येते.
                </p>
                <div className="mt-auto">
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>2022 पासून कार्यरत</li>
                    <li>दररोज 100+ लिलाव</li>
                    <li>15% अधिक किंमत शेतकऱ्यांना</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6 border border-green-200 flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="rounded-full bg-green-100 p-2 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-green-800">इलेक्ट्रॉनिक वजन काटा</h3>
                </div>
                <p className="text-gray-700 mb-4 flex-grow">
                  अचूक वजन मोजमाप होण्यासाठी इलेक्ट्रॉनिक वजन काटा बसविण्यात आला आहे. प्रत्येक वजन काट्याचे नियमित कॅलिब्रेशन केले जाते, ज्यामुळे वजनात अचूकता राहते.
                </p>
                <div className="mt-auto">
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>60 टन क्षमतेचे 2 वजन काटे</li>
                    <li>दर तिमाहीत कॅलिब्रेशन</li>
                    <li>डिजिटल रसीद व्यवस्था</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6 border border-green-200 flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="rounded-full bg-green-100 p-2 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-green-800">शीतगृह सुविधा</h3>
                </div>
                <p className="text-gray-700 mb-4 flex-grow">
                  नाशवंत कृषी उत्पादनांची साठवण करण्यासाठी आधुनिक शीतगृह सुविधा निर्माण केली आहे. या शीतगृहात तापमान आणि आर्द्रता नियंत्रित केली जाते.
                </p>
                <div className="mt-auto">
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>500 मेट्रिक टन क्षमता</li>
                    <li>वेगवेगळ्या पिकांसाठी विभाग</li>
                    <li>अल्प दरात शेतकऱ्यांसाठी उपलब्ध</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-green-50 rounded-lg p-6 border border-green-200 flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="rounded-full bg-green-100 p-2 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-green-800">मार्केट इंटेलिजन्स सिस्टम</h3>
                </div>
                <p className="text-gray-700 mb-4 flex-grow">
                  विविध बाजारपेठांमधील दैनिक किंमतींची माहिती शेतकऱ्यांना SMS द्वारे दिली जाते. तसेच बाजारभावाचा अंदाज घेण्यासाठी मार्केट इंटेलिजन्स सिस्टम विकसित केली आहे.
                </p>
                <div className="mt-auto">
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>15,000+ शेतकरी नोंदणीकृत</li>
                    <li>दररोज भाव अपडेट</li>
                    <li>मोबाइल ॲप उपलब्ध</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6 border border-green-200 flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="rounded-full bg-green-100 p-2 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-green-800">डायरेक्ट पेमेंट सिस्टम</h3>
                </div>
                <p className="text-gray-700 mb-4 flex-grow">
                  शेतकऱ्यांना त्यांच्या खात्यात थेट पैसे जमा होण्यासाठी डायरेक्ट पेमेंट सिस्टम विकसित केली आहे. त्यामुळे पैसे देण्या-घेण्यातील अडचणी कमी झाल्या आहेत.
                </p>
                <div className="mt-auto">
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>24 तासांत खात्यात जमा</li>
                    <li>UPI व बँक ट्रान्सफर सुविधा</li>
                    <li>100% डिजिटल व्यवहार</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6 border border-green-200 flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="rounded-full bg-green-100 p-2 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-green-800">गुणवत्ता निरीक्षण व्यवस्था</h3>
                </div>
                <p className="text-gray-700 mb-4 flex-grow">
                  कृषी उत्पादनांच्या गुणवत्तेचे परीक्षण करण्यासाठी विशेष गुणवत्ता परीक्षण प्रयोगशाळा स्थापन केली आहे. यामुळे उत्पादनांचा दर्जा वाढवण्यास मदत होते.
                </p>
                <div className="mt-auto">
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>आधुनिक प्रयोगशाळा</li>
                    <li>किटकनाशक अवशेष तपासणी</li>
                    <li>उत्पादन प्रमाणीकरण</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="bg-green-50 rounded-lg p-6 border border-green-200 flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="rounded-full bg-green-100 p-2 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-green-800">24x7 सुरक्षा व्यवस्था</h3>
                </div>
                <p className="text-gray-700 mb-4 flex-grow">
                  बाजार परिसराची 24 तास सुरक्षा राखण्यासाठी सुरक्षा कर्मचारी आणि सीसीटीव्ही कॅमेरे बसविण्यात आले आहेत. संपूर्ण परिसरात 80+ सीसीटीव्ही कॅमेरे कार्यरत आहेत.
                </p>
                <div className="mt-auto">
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>15 सुरक्षा कर्मचारी (3 पाळ्यांमध्ये)</li>
                    <li>80+ सीसीटीव्ही कॅमेरे</li>
                    <li>अग्निशमन यंत्रणा</li>
                    <li>30 दिवसांची फुटेज साठवण क्षमता</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6 border border-green-200 flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="rounded-full bg-green-100 p-2 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-green-800">पर्यावरणपूरक सुविधा</h3>
                </div>
                <p className="text-gray-700 mb-4 flex-grow">
                  पर्यावरणाचा समतोल राखण्यासाठी अनेक उपाययोजना केल्या जात आहेत. सौर ऊर्जा, पावसाचे पाणी संकलन, कचरा व्यवस्थापन अशा विविध उपक्रमांचा समावेश आहे.
                </p>
                <div className="mt-auto">
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>75 kW सौर ऊर्जा प्रकल्प</li>
                    <li>10 लाख लिटर पावसाचे पाणी संकलन क्षमता</li>
                    <li>दररोज 500 kg कचऱ्यावर प्रक्रिया</li>
                    <li>जैविक खत निर्मिती प्रकल्प</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-green-800 mb-4">भावी योजना</h3>
            <div className="bg-green-50 p-6 rounded-lg border border-green-200 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-green-700 mb-2">विस्तारित सुविधा (2025-2026)</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>ई-नाम प्लॅटफॉर्म इंटिग्रेशन</li>
                    <li>ड्रोन आधारित फसल सर्वेक्षण</li>
                    <li>ब्लॉकचेन-आधारित ट्रेसेबिलिटी सिस्टम</li>
                    <li>कृषि निर्यात सुविधा केंद्र</li>
                    <li>शेतकरी प्रशिक्षण केंद्र विस्तार</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-green-700 mb-2">डिजिटल उपक्रम (2025)</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>दिंडोरी बाजार मोबाइल ॲप विकास</li>
                    <li>ऑनलाइन ट्रेडिंग प्लॅटफॉर्म</li>
                    <li>कृषि सल्लागार आर्टिफिशियल इंटेलिजन्स</li>
                    <li>क्लाउड-आधारित डेटा स्टोरेज सिस्टम</li>
                    <li>स्मार्ट पार्किंग मॅनेजमेंट</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-800 mb-4">साराांश</h3>
              <p>
                दिंडोरी कृषि उत्पन्न बाजार समितीने विकसित केलेल्या आधुनिक सुविधांमुळे शेतकरी आणि व्यापारी या दोघांनाही फायदा झाला आहे. ई-लिलाव प्रणाली, इलेक्ट्रॉनिक वजन काटे, थेट पैसे जमा करण्याची व्यवस्था, गुणवत्ता तपासणी प्रयोगशाळा, सुरक्षा व्यवस्था, पर्यावरणपूरक उपक्रम या सर्व सुविधांमुळे कृषी बाजारपेठेचे आधुनिकीकरण झाले आहे. भविष्यात अधिक सुविधा विकसित करण्याचे नियोजन आहे.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
