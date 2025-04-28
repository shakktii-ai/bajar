import React from 'react';

export default function Facilities() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h1 className="text-3xl font-bold text-center text-green-800 mb-8">
            ददडोरी कृषि उत्पन्न बाजार सषमती.षज.नाषिक
          </h1>
          <h2 className="text-2xl font-semibold text-center text-green-700 mb-6">
            सुविधा
          </h2>

          <div className="prose max-w-none">
            <p className="mb-6">
              दिंडोरी कृषि उत्पन्न बाजार समितीने शेतकरी, व्यापारी आणि इतर सहभागींना अनेक सुविधा उपलब्ध करून दिल्या आहेत. या सुविधांमुळे बाजारपेठेमधील व्यवहार सुलभ होण्यास मदत होते.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="text-xl font-semibold text-green-800 mb-4">शेतकऱ्यांसाठी सुविधा</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li><span className="font-medium">शेतकरी विश्रामगृह:</span> 50 बेड क्षमतेचे विश्रामगृह, स्वच्छतागृह व भोजनालय सुविधेसह</li>
                  <li><span className="font-medium">चारापीक वाहतूक अनुदान:</span> दुर्गम भागातील शेतकऱ्यांना वाहतूक अनुदान</li>
                  <li><span className="font-medium">शेतकरी माहिती केंद्र:</span> बाजारभाव, योजना व निविदा माहिती</li>
                  <li><span className="font-medium">विमा सुविधा:</span> शेतकऱ्यांना पीक विमा, अपघात विमा सुविधा</li>
                  <li><span className="font-medium">SMS सेवा:</span> दैनिक बाजारभाव व महत्त्वाच्या सूचना</li>
                  <li><span className="font-medium">प्रशिक्षण कार्यक्रम:</span> आधुनिक शेती तंत्र व बाजारपेठ माहिती</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="text-xl font-semibold text-green-800 mb-4">व्यापारी व खरेदीदारांसाठी सुविधा</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li><span className="font-medium">व्यापारी कार्यालये:</span> दुकाने व कार्यालयीन जागा भाडे तत्त्वावर</li>
                  <li><span className="font-medium">गोदाम सुविधा:</span> कृषी उत्पादने साठवणुकीसाठी गोदामे</li>
                  <li><span className="font-medium">बँकिंग सेवा:</span> बाजार परिसरातील बँक शाखा व ATM</li>
                  <li><span className="font-medium">ऑनलाइन लिलाव सुविधा:</span> दूरस्थ भागातून सहभागी होण्याची सुविधा</li>
                  <li><span className="font-medium">वाहनतळ सुविधा:</span> अवजड आणि हलकी वाहने पार्किंगची सोय</li>
                  <li><span className="font-medium">माहिती पुस्तिका:</span> नियमावली व परवाना प्रक्रिया माहिती</li>
                </ul>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-green-800 mb-4">पायाभूत सुविधा</h3>
              
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300">
                  <thead>
                    <tr className="bg-green-700 text-white">
                      <th className="py-3 px-4 border">सुविधा</th>
                      <th className="py-3 px-4 border">विवरण</th>
                      <th className="py-3 px-4 border">क्षमता/संख्या</th>
                      <th className="py-3 px-4 border">स्थिती</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-3 px-4 border font-medium">लिलाव शेड</td>
                      <td className="py-3 px-4 border">छतयुक्त लिलाव क्षेत्र, ई-लिलाव सुविधेसह</td>
                      <td className="py-3 px-4 border">8,000 चौ.मी.</td>
                      <td className="py-3 px-4 border">उत्तम</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="py-3 px-4 border font-medium">कांदा साठवणूक शेड</td>
                      <td className="py-3 px-4 border">वातानुकूलित कांदा साठवणूक शेड</td>
                      <td className="py-3 px-4 border">5,000 MT</td>
                      <td className="py-3 px-4 border">उत्तम</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 border font-medium">शीतगृह</td>
                      <td className="py-3 px-4 border">फळे व भाजीपाला साठवणुकीसाठी शीतगृह</td>
                      <td className="py-3 px-4 border">500 MT</td>
                      <td className="py-3 px-4 border">उत्तम</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="py-3 px-4 border font-medium">वजन काटे</td>
                      <td className="py-3 px-4 border">इलेक्ट्रॉनिक वजन काटे</td>
                      <td className="py-3 px-4 border">60 MT x 2</td>
                      <td className="py-3 px-4 border">उत्तम</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 border font-medium">वाहनतळ</td>
                      <td className="py-3 px-4 border">छायादार वाहनतळ</td>
                      <td className="py-3 px-4 border">100 ट्रक, 200 छोटी वाहने</td>
                      <td className="py-3 px-4 border">चांगली</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="py-3 px-4 border font-medium">सार्वजनिक स्वच्छतागृहे</td>
                      <td className="py-3 px-4 border">पुरुष व महिलांसाठी स्वतंत्र स्वच्छतागृहे</td>
                      <td className="py-3 px-4 border">5 ठिकाणी</td>
                      <td className="py-3 px-4 border">चांगली</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 border font-medium">पिण्याच्या पाण्याची व्यवस्था</td>
                      <td className="py-3 px-4 border">RO शुद्ध पाणी स्टेशन</td>
                      <td className="py-3 px-4 border">6 ठिकाणी</td>
                      <td className="py-3 px-4 border">उत्तम</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-green-50 p-6 rounded-lg border border-green-200 relative">
                <h3 className="text-lg font-medium text-green-800 mb-3">कॅंटीन सुविधा</h3>
                <p className="text-gray-700 mb-2">
                  शेतकरी व व्यापाऱ्यांसाठी स्वस्त दरात अल्पोपहार व जेवण उपलब्ध आहे. सकाळी 6 ते संध्याकाळी 8 वाजेपर्यंत सेवा उपलब्ध.
                </p>
                <div className="mt-2 text-sm">
                  <span className="font-medium">क्षमता:</span> एकावेळी 100 जण
                </div>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg border border-green-200 relative">
                <h3 className="text-lg font-medium text-green-800 mb-3">प्राथमिक आरोग्य केंद्र</h3>
                <p className="text-gray-700 mb-2">
                  तातडीच्या वैद्यकीय सेवेसाठी प्राथमिक आरोग्य केंद्र, प्रथमोपचार सुविधा, आणि आपत्कालीन रुग्णवाहिका.
                </p>
                <div className="mt-2 text-sm">
                  <span className="font-medium">सेवा:</span> सकाळी 8 ते संध्याकाळी 8
                </div>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg border border-green-200 relative">
                <h3 className="text-lg font-medium text-green-800 mb-3">ATM व बँकिंग सुविधा</h3>
                <p className="text-gray-700 mb-2">
                  परिसरात स्टेट बँक ऑफ इंडिया शाखा व ATM उपलब्ध आहे. ऑनलाइन पेमेंट सुविधा उपलब्ध आहे.
                </p>
                <div className="mt-2 text-sm">
                  <span className="font-medium">ATM:</span> 24x7 उपलब्ध
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border border-green-200 mb-8">
              <h3 className="text-xl font-semibold text-green-800 mb-4">व्यापारी आणि हमाल परवाने</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-green-700 mb-2">परवाना प्रकार</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li><span className="font-medium">अ-वर्ग:</span> मोठे व्यापारी व निर्यातदार</li>
                    <li><span className="font-medium">ब-वर्ग:</span> मध्यम व्यापारी</li>
                    <li><span className="font-medium">क-वर्ग:</span> लहान व्यापारी व फुटकळ व्यापारी</li>
                    <li><span className="font-medium">हमाल परवाना:</span> मजूर व हमाल</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-green-700 mb-2">परवाना संख्या</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li><span className="font-medium">अ-वर्ग:</span> 45 परवाने</li>
                    <li><span className="font-medium">ब-वर्ग:</span> 75 परवाने</li>
                    <li><span className="font-medium">क-वर्ग:</span> 120 परवाने</li>
                    <li><span className="font-medium">हमाल परवाना:</span> 250 परवाने</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-800 mb-4">भविष्यातील सुविधा</h3>
              <p className="mb-4">
                बाजार समितीकडून भविष्यात खालील अतिरिक्त सुविधा उपलब्ध करून देण्याचे नियोजन आहे:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>अतिरिक्त शेतकरी विश्रामगृह (100 बेड क्षमता)</li>
                <li>कृषि माहिती व प्रशिक्षण केंद्र</li>
                <li>मोबाइल ॲप सेवा</li>
                <li>कृषि निर्यात सुविधा</li>
                <li>अतिरिक्त वाहनतळ</li>
                <li>शेतकरी व व्यापारी मिटिंग हॉल</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
