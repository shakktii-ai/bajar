import React from 'react';

export default function MarketPremises() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h1 className="text-3xl font-bold text-center text-green-800 mb-8">
            ददडोरी कृषि उत्पन्न बाजार सषमती.षज.नाषिक
          </h1>
          <h2 className="text-2xl font-semibold text-center text-green-700 mb-6">
            बाजार परिसर
          </h2>

          <div className="prose max-w-none">
            <p className="mb-6">
              दिंडोरी कृषि उत्पन्न बाजार समितीचा मुख्य बाजार परिसर 25 एकर क्षेत्रफळावर विस्तारलेला आहे. या आधुनिक सुविधायुक्त परिसरात शेतकरी आणि व्यापाऱ्यांसाठी विविध सुविधा उपलब्ध करून देण्यात आल्या आहेत.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                <h3 className="text-xl font-semibold text-green-800 mb-4">मुख्य बाजार परिसर (दिंडोरी)</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><span className="font-medium">एकूण क्षेत्रफळ:</span> 25 एकर</li>
                  <li><span className="font-medium">स्थापना:</span> 1987</li>
                  <li><span className="font-medium">शेडचे क्षेत्रफळ:</span> 12,500 चौरस मीटर</li>
                  <li><span className="font-medium">प्लॅटफॉर्म क्षेत्र:</span> 10,000 चौरस मीटर</li>
                  <li><span className="font-medium">दैनिक क्षमता:</span> 250 मेट्रिक टन</li>
                  <li><span className="font-medium">गोदाम क्षमता:</span> 8,000 मेट्रिक टन</li>
                  <li><span className="font-medium">पार्किंग क्षेत्र:</span> 5,000 चौरस मीटर</li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                <h3 className="text-xl font-semibold text-green-800 mb-4">उपबाजार परिसर (क. वणी)</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><span className="font-medium">एकूण क्षेत्रफळ:</span> 5 एकर</li>
                  <li><span className="font-medium">स्थापना:</span> 2010</li>
                  <li><span className="font-medium">शेडचे क्षेत्रफळ:</span> 3,500 चौरस मीटर</li>
                  <li><span className="font-medium">प्लॅटफॉर्म क्षेत्र:</span> 2,500 चौरस मीटर</li>
                  <li><span className="font-medium">दैनिक क्षमता:</span> 80 मेट्रिक टन</li>
                  <li><span className="font-medium">गोदाम क्षमता:</span> 1,200 मेट्रिक टन</li>
                  <li><span className="font-medium">पार्किंग क्षेत्र:</span> 1,000 चौरस मीटर</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-green-800 mb-4">परिसर विभाग</h3>
            
            <div className="overflow-x-auto mb-8">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr className="bg-green-700 text-white">
                    <th className="py-3 px-4 border">विभाग</th>
                    <th className="py-3 px-4 border">क्षेत्रफळ (चौ.मी.)</th>
                    <th className="py-3 px-4 border">क्षमता</th>
                    <th className="py-3 px-4 border">विशेष सुविधा</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-3 px-4 border font-medium">लिलाव शेड</td>
                    <td className="py-3 px-4 border">8,000</td>
                    <td className="py-3 px-4 border">200 MT/day</td>
                    <td className="py-3 px-4 border">सौर प्रकाश, ई-ऑक्शन सिस्टम</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4 border font-medium">कांदा संग्रहण शेड</td>
                    <td className="py-3 px-4 border">4,500</td>
                    <td className="py-3 px-4 border">5,000 MT</td>
                    <td className="py-3 px-4 border">वातानुकूलित, हवा खेळती राहण्याची व्यवस्था</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border font-medium">फळ विक्री क्षेत्र</td>
                    <td className="py-3 px-4 border">3,000</td>
                    <td className="py-3 px-4 border">50 MT/day</td>
                    <td className="py-3 px-4 border">थंड साठवणूक, पॅकिंग व्यवस्था</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4 border font-medium">प्रशासकीय विभाग</td>
                    <td className="py-3 px-4 border">1,200</td>
                    <td className="py-3 px-4 border">-</td>
                    <td className="py-3 px-4 border">डिजिटल कार्यालय, सभागृह</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border font-medium">शेतकरी विश्रांती गृह</td>
                    <td className="py-3 px-4 border">800</td>
                    <td className="py-3 px-4 border">50 beds</td>
                    <td className="py-3 px-4 border">स्वच्छतागृह, भोजनालय, पिण्याचे पाणी</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4 border font-medium">वाहनतळ</td>
                    <td className="py-3 px-4 border">5,000</td>
                    <td className="py-3 px-4 border">100 trucks, 200 smaller vehicles</td>
                    <td className="py-3 px-4 border">छायादार, सुरक्षा कॅमेरे</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border font-medium">वजन काटा क्षेत्र</td>
                    <td className="py-3 px-4 border">500</td>
                    <td className="py-3 px-4 border">60 MT x 2 platforms</td>
                    <td className="py-3 px-4 border">इलेक्ट्रॉनिक वजन काटा, डिजिटल रेकॉर्डिंग</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-green-800 mb-4">परिसर वैशिष्ट्ये</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>100% सौर ऊर्जेवर चालणारे प्रशासकीय कार्यालय</li>
                  <li>पावसाचे पाणी संकलन व पुनर्वापर व्यवस्था</li>
                  <li>प्रदूषण मुक्त वातावरण - वाहन नियंत्रण व्यवस्था</li>
                  <li>हिरवळ क्षेत्र - 3 एकर हिरवळीचे क्षेत्र</li>
                  <li>24x7 सीसीटीव्ही निगराणी व्यवस्था</li>
                  <li>स्वच्छतागृहे व पिण्याच्या पाण्याची व्यवस्था</li>
                  <li>प्राथमिक आरोग्य केंद्र व प्रथमोपचार व्यवस्था</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-green-800 mb-4">भविष्यातील विस्तार योजना</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>अतिरिक्त 10 एकर जमिनीवर विस्तार (प्रस्तावित)</li>
                  <li>फळ व भाजीपाला प्रक्रिया केंद्र</li>
                  <li>शीतगृह क्षमता वाढविणे (2,000 MT अतिरिक्त)</li>
                  <li>ई-नाम प्लॅटफॉर्म इंटिग्रेशन</li>
                  <li>अतिरिक्त शेतकरी निवास व्यवस्था (100 bed क्षमता)</li>
                  <li>शेतकरी प्रशिक्षण केंद्र व कृषि माहिती केंद्र</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border border-green-200 mb-8">
              <h3 className="text-xl font-semibold text-green-800 mb-4">बाजार परिसर दुरुस्ती व देखभाल</h3>
              <p className="mb-4">
                दिंडोरी बाजार समितीकडून बाजार परिसराची नियमित देखभाल व दुरुस्ती केली जाते. यामध्ये खालील बाबींचा समावेश आहे:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><span className="font-medium">दैनिक स्वच्छता:</span> संपूर्ण परिसराची दररोज स्वच्छता करण्यात येते.</li>
                <li><span className="font-medium">त्रैमासिक डागडुजी:</span> प्रत्येक तीन महिन्यांनी शेड, प्लॅटफॉर्म व इतर भागांची डागडुजी.</li>
                <li><span className="font-medium">वार्षिक रंगरंगोटी:</span> वर्षातून एकदा संपूर्ण परिसराची रंगरंगोटी.</li>
                <li><span className="font-medium">वीज व्यवस्था:</span> नियमित तपासणी व दुरुस्ती (मासिक).</li>
                <li><span className="font-medium">सौर यंत्रणा:</span> त्रैमासिक देखभाल व तपासणी.</li>
                <li><span className="font-medium">वजन काटा:</span> दर सहा महिन्यांनी कॅलिब्रेशन व प्रमाणीकरण.</li>
                <li><span className="font-medium">हिरवळ व वृक्ष:</span> नियमित पाणी, खत व कीटकनाशक फवारणी.</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-800 mb-4">संपर्क माहिती</h3>
              <p>बाजार परिसर संबंधित अधिक माहितीसाठी किंवा प्रत्यक्ष भेटीसाठी, कृपया खालील संपर्क क्रमांकावर संपर्क साधावा:</p>
              <p className="mt-2"><span className="font-medium">मार्केट सुपरवायझर:</span> 9423918XXX (सकाळी 9 ते संध्याकाळी 6)</p>
              <p><span className="font-medium">कार्यालय:</span> 02557-222222 (कार्यालयीन वेळेत)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
