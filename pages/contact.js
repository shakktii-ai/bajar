import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h1 className="text-3xl font-bold text-center text-green-800 mb-8">
            दिंडोरी कृषि उत्पन्न बाजार समिती.जि.नाशिक
          </h1>
          <h2 className="text-2xl font-semibold text-center text-green-700 mb-6">
            संपर्क माहिती
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h3 className="text-xl font-semibold text-green-800 mb-4">कार्यालय संपर्क</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mr-3 mt-1">
                    <FaMapMarkerAlt className="text-green-600 h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">मुख्य मार्केट यार्ड</h4>
                    <p className="text-gray-700">
                      दिंडोरी कृषि उत्पन्न बाजार समिती,<br />
                      निंबवडी रोड, दिंडोरी,<br />
                      ता. दिंडोरी, जि. नाशिक - 422202<br />
                      स्थापना: ५ जानेवारी १९८५
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-3 mt-1">
                    <FaPhone className="text-green-600 h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">दूरध्वनी क्रमांक</h4>
                    <p className="text-gray-700">कार्यालय: (02557) 221097</p>
                    <p className="text-gray-700">उपबाजार आवार (वणी): (02550) 320542</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-3 mt-1">
                    <FaEnvelope className="text-green-600 h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">ई-मेल पत्ता</h4>
                    <p className="text-gray-700">am_dindori@msamb.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-3 mt-1">
                    <FaClock className="text-green-600 h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">कार्यालयीन वेळ</h4>
                    <p className="text-gray-700">सोमवार ते शनिवार: सकाळी 10:00 ते संध्याकाळी 6:00</p>
                    <p className="text-gray-700">रविवार आणि सार्वजनिक सुट्टी: बंद</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h3 className="text-xl font-semibold text-green-800 mb-4">बाजारपेठ संपर्क</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">दिंडोरी मुख्य बाजारपेठ</h4>
                  <p className="text-gray-700 mb-1">बाजारपेठ व्यवस्थापक: 9422324XXX</p>
                  <p className="text-gray-700 mb-1">बाजारपेठ वेळ: सकाळी 6:00 ते दुपारी 2:00</p>
                  <p className="text-gray-700">उपस्थित: रोज (वर्षभर)</p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-1">वणी उपबाजार</h4>
                  <p className="text-gray-700 mb-1">बाजारपेठ व्यवस्थापक: 9420675XXX</p>
                  <p className="text-gray-700 mb-1">बाजारपेठ वेळ: सकाळी 7:00 ते दुपारी 1:00</p>
                  <p className="text-gray-700">उपस्थित: मंगळवार, शुक्रवार</p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-1">मोहाडी उपबाजार</h4>
                  <p className="text-gray-700 mb-1">बाजारपेठ व्यवस्थापक: 9423629XXX</p>
                  <p className="text-gray-700 mb-1">बाजारपेठ वेळ: सकाळी 7:00 ते दुपारी 1:00</p>
                  <p className="text-gray-700">उपस्थित: सोमवार, गुरुवार</p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-1">कांदा मार्केट (हंगामी)</h4>
                  <p className="text-gray-700 mb-1">बाजारपेठ व्यवस्थापक: 9860432XXX</p>
                  <p className="text-gray-700 mb-1">बाजारपेठ वेळ: सकाळी 8:00 ते संध्याकाळी 5:00</p>
                  <p className="text-gray-700">उपस्थित: रोज (ऑक्टोबर ते मार्च)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-green-800 mb-4">महत्त्वपूर्ण संपर्क</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr className="bg-green-700 text-white text-center">
                    <th className="py-3 px-4 border">पदनाम</th>
                    <th className="py-3 px-4 border">नाव</th>
                    <th className="py-3 px-4 border">संपर्क क्रमांक</th>
                    <th className="py-3 px-4 border">ई-मेल</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-3 px-4 border font-medium">सभापती</td>
                    <td className="py-3 px-4 border">श्री. रामदास शिवाजी शेळके</td>
                    <td className="py-3 px-4 border">9423812XXX</td>
                    <td className="py-3 px-4 border">chairman.dindori@gmail.com</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4 border font-medium">उपसभापती</td>
                    <td className="py-3 px-4 border">श्री. विजय रावसाहेब पगार</td>
                    <td className="py-3 px-4 border">9970621XXX</td>
                    <td className="py-3 px-4 border">deputychairman.dindori@gmail.com</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border font-medium">सचिव</td>
                    <td className="py-3 px-4 border">श्री. जगन्नाथ कारभारी जाधव</td>
                    <td className="py-3 px-4 border">9421943XXX</td>
                    <td className="py-3 px-4 border">secretary.dindori@gmail.com</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4 border font-medium">मार्केट सुपरवायझर</td>
                    <td className="py-3 px-4 border">श्री. सतीश रामकृष्ण पाटील</td>
                    <td className="py-3 px-4 border">9423918XXX</td>
                    <td className="py-3 px-4 border">market.dindori@gmail.com</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-green-800 mb-4">आपला अभिप्राय पाठवा</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-1">नाव</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="आपले संपूर्ण नाव"
                  />
                </div>
                <div>
                  <label htmlFor="mobile" className="block text-gray-700 font-medium mb-1">मोबाईल नंबर</label>
                  <input 
                    type="tel" 
                    id="mobile" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="तुमचा मोबाईल नंबर"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-1">ई-मेल</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="उदा. example@gmail.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-1">संदेश</label>
                  <textarea 
                    id="message" 
                    rows="4" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="तुमचा अभिप्राय / प्रश्न / सूचना"
                  ></textarea>
                </div>
                <button 
                  type="button" 
                  className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-6 rounded-md transition duration-300"
                >
                  पाठवा
                </button>
              </form>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-green-800 mb-4">स्थान नकाशा</h3>
              <div className="bg-gray-200 p-2 rounded-lg h-80 flex items-center justify-center border border-gray-300">
                <div className="text-center">
                  <p className="text-gray-700 mb-2">नकाशा दृश्य</p>
                  <p className="text-sm text-gray-600">(Google Map येथे एम्बेड केलेला असेल)</p>
                  <p className="mt-4 text-sm text-gray-600">दिंडोरी कृषि उत्पन्न बाजार समिती, नाशिक रोड, दिंडोरी - 422202</p>
                </div>
              </div>
              <div className="mt-4 bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <h4 className="font-medium text-yellow-800 mb-2">प्रवास मार्ग</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>नाशिक शहरातून: 25 किमी (नाशिक-दिंडोरी रस्ता)</li>
                  <li>पुणे: 175 किमी (पुणे-नाशिक हायवे)</li>
                  <li>मुंबई: 185 किमी (मुंबई-नाशिक एक्स्प्रेस वे)</li>
                  <li>जवळचे रेल्वे स्टेशन: नाशिक रोड (28 किमी)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
