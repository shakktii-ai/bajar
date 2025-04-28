import React from 'react';

export default function DevelopmentWork() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h1 className="text-3xl font-bold text-center text-green-800 mb-8">
            ददडोरी कृषि उत्पन्न बाजार सषमती.षज.नाषिक
          </h1>
          <h2 className="text-2xl font-semibold text-center text-green-700 mb-6">
            विकास कामे
          </h2>

          <div className="prose max-w-none">
            <p className="mb-6">
              दिंडोरी कृषि उत्पन्न बाजार समितीकडून विविध विकास कामे केली जात आहेत. या कामांमुळे बाजार परिसर आधुनिक व सुविधायुक्त बनत आहे तसेच शेतकरी व व्यापाऱ्यांना आवश्यक सुविधा उपलब्ध होत आहेत.
            </p>

            <div className="mb-10">
              <h3 className="text-xl font-semibold text-green-800 mb-4">पूर्ण झालेली प्रमुख विकास कामे</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* First completed project */}
                <div className="bg-green-50 p-6 rounded-lg border border-green-200 relative overflow-hidden">
                  <div className="absolute top-0 right-0">
                    <div className="bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                      2023
                    </div>
                  </div>
                  <h4 className="text-lg font-medium text-green-800 mb-2">मुख्य लिलाव शेड विस्तार</h4>
                  <p className="text-gray-700 mb-3">
                    नवीन लिलाव शेडची उभारणी करून त्यामध्ये आधुनिक ई-ऑक्शन सुविधा विकसित करण्यात आली. या शेडमध्ये एकाच वेळी 200 शेतकरी आपला माल विक्रीस ठेवू शकतात.
                  </p>
                  <div className="flex flex-wrap justify-between text-sm">
                    <div>
                      <span className="font-medium">खर्च:</span> ₹2.5 कोटी
                    </div>
                    <div>
                      <span className="font-medium">क्षेत्रफळ:</span> 5,000 चौ.मी.
                    </div>
                    <div>
                      <span className="font-medium">पूर्ण:</span> मार्च 2023
                    </div>
                  </div>
                </div>

                {/* Second completed project */}
                <div className="bg-green-50 p-6 rounded-lg border border-green-200 relative overflow-hidden">
                  <div className="absolute top-0 right-0">
                    <div className="bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                      2022
                    </div>
                  </div>
                  <h4 className="text-lg font-medium text-green-800 mb-2">सौर ऊर्जा प्रकल्प</h4>
                  <p className="text-gray-700 mb-3">
                    बाजार परिसरातील वीज वापर कमी करण्यासाठी 75 kW क्षमतेचा सौर ऊर्जा प्रकल्प राबविण्यात आला. यामुळे 70% वीज बचत होऊन पर्यावरण संवर्धनास मदत होत आहे.
                  </p>
                  <div className="flex flex-wrap justify-between text-sm">
                    <div>
                      <span className="font-medium">खर्च:</span> ₹52 लाख
                    </div>
                    <div>
                      <span className="font-medium">क्षमता:</span> 75 kW
                    </div>
                    <div>
                      <span className="font-medium">पूर्ण:</span> जुलै 2022
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                {/* Third completed project */}
                <div className="bg-green-50 p-6 rounded-lg border border-green-200 relative overflow-hidden">
                  <div className="absolute top-0 right-0">
                    <div className="bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                      2022
                    </div>
                  </div>
                  <h4 className="text-lg font-medium text-green-800 mb-2">इलेक्ट्रॉनिक वजन काटा</h4>
                  <p className="text-gray-700 mb-3">
                    अचूक वजन मोजमापासाठी 2 नवीन इलेक्ट्रॉनिक वजन काटे बसविण्यात आले. प्रत्येक वजन काट्याची क्षमता 60 मेट्रिक टन आहे.
                  </p>
                  <div className="flex flex-wrap justify-between text-sm">
                    <div>
                      <span className="font-medium">खर्च:</span> ₹32 लाख
                    </div>
                    <div>
                      <span className="font-medium">संख्या:</span> 2
                    </div>
                    <div>
                      <span className="font-medium">पूर्ण:</span> मे 2022
                    </div>
                  </div>
                </div>

                {/* Fourth completed project */}
                <div className="bg-green-50 p-6 rounded-lg border border-green-200 relative overflow-hidden">
                  <div className="absolute top-0 right-0">
                    <div className="bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                      2021
                    </div>
                  </div>
                  <h4 className="text-lg font-medium text-green-800 mb-2">शेतकरी विश्रामगृह</h4>
                  <p className="text-gray-700 mb-3">
                    शेतकऱ्यांच्या निवासाची सोय करण्यासाठी 50 बेडचे आधुनिक विश्रामगृह बांधण्यात आले. यामध्ये स्वच्छतागृह, भोजनकक्ष व अन्य सुविधा उपलब्ध आहेत.
                  </p>
                  <div className="flex flex-wrap justify-between text-sm">
                    <div>
                      <span className="font-medium">खर्च:</span> ₹1.2 कोटी
                    </div>
                    <div>
                      <span className="font-medium">क्षमता:</span> 50 बेड
                    </div>
                    <div>
                      <span className="font-medium">पूर्ण:</span> डिसेंबर 2021
                    </div>
                  </div>
                </div>

                {/* Fifth completed project */}
                <div className="bg-green-50 p-6 rounded-lg border border-green-200 relative overflow-hidden">
                  <div className="absolute top-0 right-0">
                    <div className="bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                      2021
                    </div>
                  </div>
                  <h4 className="text-lg font-medium text-green-800 mb-2">पाणी संकलन प्रकल्प</h4>
                  <p className="text-gray-700 mb-3">
                    पावसाचे पाणी संकलन करण्यासाठी विशेष प्रकल्प राबविण्यात आला. यामध्ये 10 लाख लिटर पाणी साठवण क्षमतेचे 2 संकलन टाके बांधण्यात आले.
                  </p>
                  <div className="flex flex-wrap justify-between text-sm">
                    <div>
                      <span className="font-medium">खर्च:</span> ₹38 लाख
                    </div>
                    <div>
                      <span className="font-medium">क्षमता:</span> 10 लाख लिटर
                    </div>
                    <div>
                      <span className="font-medium">पूर्ण:</span> जून 2021
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Sixth completed project */}
                <div className="bg-green-50 p-6 rounded-lg border border-green-200 relative overflow-hidden">
                  <div className="absolute top-0 right-0">
                    <div className="bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                      2020
                    </div>
                  </div>
                  <h4 className="text-lg font-medium text-green-800 mb-2">कांदा साठवणूक शेड</h4>
                  <p className="text-gray-700 mb-3">
                    कांद्याची दीर्घकाळ साठवण करण्यासाठी आधुनिक वातानुकूलित शेड बांधण्यात आले. यामध्ये 5,000 मेट्रिक टन कांदा साठवण्याची क्षमता आहे.
                  </p>
                  <div className="flex flex-wrap justify-between text-sm">
                    <div>
                      <span className="font-medium">खर्च:</span> ₹1.8 कोटी
                    </div>
                    <div>
                      <span className="font-medium">क्षमता:</span> 5,000 MT
                    </div>
                    <div>
                      <span className="font-medium">पूर्ण:</span> फेब्रुवारी 2020
                    </div>
                  </div>
                </div>

                {/* Seventh completed project */}
                <div className="bg-green-50 p-6 rounded-lg border border-green-200 relative overflow-hidden">
                  <div className="absolute top-0 right-0">
                    <div className="bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                      2019
                    </div>
                  </div>
                  <h4 className="text-lg font-medium text-green-800 mb-2">सुरक्षा व्यवस्था अपग्रेड</h4>
                  <p className="text-gray-700 mb-3">
                    बाजार परिसराच्या सुरक्षेसाठी 80+ सीसीटीव्ही कॅमेरे, सुरक्षा कॅबिन्स आणि अग्निशमन यंत्रणा बसविण्यात आली. 24 तास निगराणी व्यवस्था उपलब्ध आहे.
                  </p>
                  <div className="flex flex-wrap justify-between text-sm">
                    <div>
                      <span className="font-medium">खर्च:</span> ₹42 लाख
                    </div>
                    <div>
                      <span className="font-medium">कॅमेरे:</span> 80+
                    </div>
                    <div>
                      <span className="font-medium">पूर्ण:</span> ऑगस्ट 2019
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-10">
              <h3 className="text-xl font-semibold text-green-800 mb-4">सध्या सुरू असलेली विकास कामे</h3>
              
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300">
                  <thead>
                    <tr className="bg-green-700 text-white">
                      <th className="py-3 px-4 border">प्रकल्प</th>
                      <th className="py-3 px-4 border">अंदाजित खर्च</th>
                      <th className="py-3 px-4 border">सुरू</th>
                      <th className="py-3 px-4 border">पूर्ण होण्याची अपेक्षित तारीख</th>
                      <th className="py-3 px-4 border">प्रगती</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-3 px-4 border">
                        <div className="font-medium">फळ संकलन व ग्रेडिंग केंद्र</div>
                        <div className="text-sm text-gray-600">अत्याधुनिक फळ ग्रेडिंग व पॅकिंग केंद्र</div>
                      </td>
                      <td className="py-3 px-4 border">₹3.2 कोटी</td>
                      <td className="py-3 px-4 border">जानेवारी 2023</td>
                      <td className="py-3 px-4 border">सप्टेंबर 2023</td>
                      <td className="py-3 px-4 border">
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "75%" }}></div>
                        </div>
                        <span className="text-xs font-medium text-gray-500">75%</span>
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="py-3 px-4 border">
                        <div className="font-medium">वणी उपबाजार विस्तार</div>
                        <div className="text-sm text-gray-600">वणी येथील उपबाजार विस्तार व सुविधा वाढ</div>
                      </td>
                      <td className="py-3 px-4 border">₹2.8 कोटी</td>
                      <td className="py-3 px-4 border">फेब्रुवारी 2023</td>
                      <td className="py-3 px-4 border">नोव्हेंबर 2023</td>
                      <td className="py-3 px-4 border">
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "60%" }}></div>
                        </div>
                        <span className="text-xs font-medium text-gray-500">60%</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 border">
                        <div className="font-medium">शेतकरी प्रशिक्षण केंद्र</div>
                        <div className="text-sm text-gray-600">शेतकऱ्यांना प्रशिक्षण देण्यासाठी आधुनिक सभागृह व प्रात्यक्षिक केंद्र</div>
                      </td>
                      <td className="py-3 px-4 border">₹1.5 कोटी</td>
                      <td className="py-3 px-4 border">मार्च 2023</td>
                      <td className="py-3 px-4 border">डिसेंबर 2023</td>
                      <td className="py-3 px-4 border">
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "40%" }}></div>
                        </div>
                        <span className="text-xs font-medium text-gray-500">40%</span>
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="py-3 px-4 border">
                        <div className="font-medium">डिजिटल मार्केटिंग प्लॅटफॉर्म</div>
                        <div className="text-sm text-gray-600">ऑनलाइन व्यापार प्लॅटफॉर्म व मोबाइल ॲप विकास</div>
                      </td>
                      <td className="py-3 px-4 border">₹65 लाख</td>
                      <td className="py-3 px-4 border">एप्रिल 2023</td>
                      <td className="py-3 px-4 border">ऑक्टोबर 2023</td>
                      <td className="py-3 px-4 border">
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "30%" }}></div>
                        </div>
                        <span className="text-xs font-medium text-gray-500">30%</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mb-10">
              <h3 className="text-xl font-semibold text-green-800 mb-4">भविष्यातील प्रस्तावित विकास कामे (2024-2026)</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h4 className="text-lg font-medium text-green-800 mb-2">अतिरिक्त जमीन संपादन व विस्तार</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>बाजारपेठेजवळील 10 एकर जमिनीचे संपादन</li>
                    <li>अतिरिक्त वाहनतळ व्यवस्था</li>
                    <li>कॉल्डस्टोरेज विस्तार</li>
                    <li>अंदाजित खर्च: ₹8 कोटी</li>
                    <li>प्रस्तावित कालावधी: 2024-2025</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h4 className="text-lg font-medium text-green-800 mb-2">कृषि प्रक्रिया केंद्र</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>फळे व भाजीपाला प्रक्रिया युनिट</li>
                    <li>पॅकिंग व ब्रँडिंग सुविधा</li>
                    <li>निर्यात केंद्र</li>
                    <li>अंदाजित खर्च: ₹5.5 कोटी</li>
                    <li>प्रस्तावित कालावधी: 2024-2026</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h4 className="text-lg font-medium text-green-800 mb-2">व्यापारी संकुल</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>50 दुकानांचे व्यापारी संकुल</li>
                    <li>बँकिंग सुविधा</li>
                    <li>अंदाजित खर्च: ₹3.2 कोटी</li>
                    <li>प्रस्तावित कालावधी: 2025</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h4 className="text-lg font-medium text-green-800 mb-2">टेस्टिंग लॅब अपग्रेड</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>अत्याधुनिक गुणवत्ता तपासणी प्रयोगशाळा</li>
                    <li>आंतरराष्ट्रीय मानकांनुसार प्रमाणपत्र</li>
                    <li>अंदाजित खर्च: ₹1.8 कोटी</li>
                    <li>प्रस्तावित कालावधी: 2025</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h4 className="text-lg font-medium text-green-800 mb-2">पर्यावरण संवर्धन</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>अतिरिक्त सौर ऊर्जा प्रकल्प (100 kW)</li>
                    <li>पाणी पुनर्वापर व्यवस्था</li>
                    <li>वृक्षारोपण व हरित क्षेत्र विस्तार</li>
                    <li>अंदाजित खर्च: ₹1.5 कोटी</li>
                    <li>प्रस्तावित कालावधी: 2024-2026</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-800 mb-4">निधी स्त्रोत</h3>
              <p className="mb-4">
                विकास कामांसाठी निधी खालील स्त्रोतांमधून उपलब्ध केला जातो:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li><span className="font-medium">स्वनिधी:</span> बाजार समितीचा स्वत:चा निधी</li>
                <li><span className="font-medium">शासकीय अनुदान:</span> कृषि पणन मंडळ व कृषि विभागाकडून मिळणारे अनुदान</li>
                <li><span className="font-medium">बँक कर्ज:</span> विकास कामांसाठी घेतलेले अल्प व्याज दराचे कर्ज</li>
                <li><span className="font-medium">NABARD अनुदान:</span> विशेष प्रकल्पांसाठी मिळणारे अनुदान</li>
                <li><span className="font-medium">PPP प्रकल्प:</span> सार्वजनिक-खासगी भागीदारी प्रकल्प</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
