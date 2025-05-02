import { useState } from 'react';

export default function FuturePlans() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h1 className="text-3xl font-bold text-center text-green-800 mb-8">
            दिंडोरी कृषि उत्पन्न बाजार समिती
          </h1>
          <h2 className="text-2xl font-semibold text-center text-green-700 mb-6">
          समितीच्या भावी योजना
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-green-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <div className="bg-green-100 rounded-full p-3 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">मोहाडी येथे उपबाजार विकास</h3>
                  <p className="text-gray-700">
                    मोहाडी येथे उपबाजार सुरू करणेकामी ऑफीस व सेलहॉल बांधकाम केलेले असून तेथे केंद्र शासन, राज्य शासन व पणन मंडळ यांचे अनुदानातून फुले निर्यात सुविधा केंद्राचे काम पूर्ण झालेले आहे. त्यात शितगृह, गोडावून, वातानुकुलीत वहाणे इत्यादींचा समावेश आहे. सदर योजनेचा लाभ शेतक-यांना मिळत आहे. सदर ठिकाणी कांदा मार्केट व फुले खरेदी-विक्री व्यवहार सुरू करण्याचा मानस आहे.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-green-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <div className="bg-green-100 rounded-full p-3 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">कृषि मॉल बांधकाम</h3>
                  <p className="text-gray-700">
                    मुख्य बाजार आवार डदडोरी येथे कृषि मॉल बांधकाम करणे.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-green-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <div className="bg-green-100 rounded-full p-3 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">शेतकरी व हमाल निवास बांधकाम</h3>
                  <p className="text-gray-700">
                    उपबाजार आवर कसबे वणी येथे शेतकरी व हमाल व्यापारी निवास बांधकाम करणे.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-green-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <div className="bg-green-100 rounded-full p-3 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">सीड फार्म जमिनीचा विकास</h3>
                  <p className="text-gray-700">
                    बाजार समितीचे डदडोरी येथिल सीड फार्म जमिन गट नं.1065 व 1066 येथे कांदा व टमाटे मार्केट सुरू असून सदर ठिकाणी शेतीमालाचे नियमित खरेदी-विक्री व्यवहार चालू आहेत. तसेच सदर ठिकाणी खडीकरण व काँक्रीटीकरण करणे, शितगृह उभारणी व गोदाम बांधकाम करण्याचा मानस आहे.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-green-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <div className="bg-green-100 rounded-full p-3 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">नवीन उपबाजार स्थापना</h3>
                  <p className="text-gray-700">
                    उमराळे बु., निनाशी, पिंपळनारे, खोरीफाटा, चिंचखेड व कसबे वणी येथे उपबाजार स्थापन करणे कामी जागा संपादन करणे इत्यादी कामे करणेसाठी बाजार समिती प्रयत्नशील आहे.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Meeting Agenda Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-center text-green-700 mb-6">
              विषयसूची
            </h2>

            <div className="bg-white p-6 rounded-lg border border-gray-300 shadow-sm mb-6">
              <h3 className="font-medium text-lg mb-2">विषय क्रमांक- 1 :- मागील सर्वसाधारण सभा दिनांक- २९/०९/२०२२ चे इतिवृत्त वाचून कायम करणे.</h3>
              <p className="ml-4 text-gray-700">टिपण्णी :- मागील सर्वसाधारण सभा दिनांक- 29/09/2022 चे प्रोसिडिंग नुसार इतिवृत्त वाचून नोंद घेणे.</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-300 shadow-sm mb-6">
              <h3 className="font-medium text-lg mb-2">विषय क्रमांक- 2 :- बाजार समितीचे 01/04/2022 ते 31/03/2023 या वर्षाच्या आर्थिक पत्रकांचे (तेरीज पत्रक, उत्पन्न खर्च, ताळेबंद) वाचून नोंद घेणे.</h3>
              <p className="ml-4 text-gray-700">टिपण्णी :- कृषि उत्पन्न बाजार समितीचे आर्थिक वर्ष 1 एप्रिल ते 31 मार्च असे असून सन 2022-2023 मध्ये खालील प्रमाणे उत्पन्न मिळालेले आहे.</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-300 shadow-sm mb-6">
              <h3 className="font-medium text-lg mb-2">विषय क्रमांक-3 :- सन 2022-2023 चे लेखापरिक्षण अहवालाचे वाचन करणे.</h3>
              <p className="ml-4 text-gray-700">टिपण्णी :- सन 2022-2023 चा लेखापरिक्षण अहवाल प्राप्त झालेला नाही.</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-300 shadow-sm mb-6">
              <h3 className="font-medium text-lg mb-2">विषय क्रमांक- 4 :- बाजार समितीच्या सन 2022-2023 या बाजार वर्षाच्या अहवालाचे वाचन करून नोंद घेणे.</h3>
              <p className="ml-4 text-gray-700">टिपण्णी :- कृषि उत्पन्न बाजार समिती दिंडोरीची स्थापना 5 जानेवारी 1989 रोजी होवून संस्थापक सभापती मा.श्री.गणपतरावजी गंगाधर पाटील साहेब यांचे नेतृत्वाखाली दिंडोरी बाजार समितीचे कामकाजास सुरवात झालेली आहे. या बाजार समितीचे कार्यक्षेत्र दिंडोरी तालुक्याचे असून एकूण 157 इतकी गांवे यामध्ये समाविष्ट आहेत.</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-300 shadow-sm">
              <h3 className="font-medium text-lg mb-2 text-center">आभार</h3>
              <p className="text-gray-700 text-center">
                बाजार समितीचे आजच्या या वार्षिक सर्वसाधारण सभेसाठी आपण सर्व आमंत्रितांनी उपस्थित राहून
                बाजार समितीच्या कामकाजा विषयी माहिती जाणून घेतली त्या बद्दल बाजार समितीच्या वतीने आपणा सर्वांचे
                हार्दिक आभार मानण्यांत येत आहेत.
              </p>
              <p className="text-center font-semibold mt-2">धन्यवाद</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
