import React from 'react';

export default function MarketArea() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h1 className="text-3xl font-bold text-center text-green-800 mb-8">
            ददडोरी कृषि उत्पन्न बाजार सषमती.षज.नाषिक
          </h1>
          <h2 className="text-2xl font-semibold text-center text-green-700 mb-6">
            बाजार क्षेत्र
          </h2>

          <div className="prose max-w-none">
            <p className="mb-6">
              दिंडोरी कृषि उत्पन्न बाजार समितीच्या अधिकार क्षेत्रात अनेक गावे व वाड्या-वस्त्या येतात. या क्षेत्रात उत्पादित होणारी कृषि उत्पादने विक्रीसाठी बाजार समितीच्या विविध बाजारपेठांमध्ये आणली जातात.
            </p>

            <div className="bg-green-50 p-6 rounded-lg border border-green-200 mb-8">
              <h3 className="text-xl font-semibold text-green-800 mb-4">दिंडोरी बाजार समिती कार्यक्षेत्र</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-green-700 mb-2">प्रमुख विभाग</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>दिंडोरी तालुका (संपूर्ण)</li>
                    <li>नाशिक तालुक्यातील 12 गावे</li>
                    <li>पेठ तालुक्यातील 8 गावे</li>
                    <li>सुरगाणा तालुक्यातील 5 गावे</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-green-700 mb-2">प्रमुख आकडेवारी</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><span className="font-medium">एकूण क्षेत्रफळ:</span> 1,200 चौ.किमी.</li>
                    <li><span className="font-medium">एकूण गावे:</span> 145</li>
                    <li><span className="font-medium">शेती क्षेत्र:</span> 78,000 हेक्टर</li>
                    <li><span className="font-medium">सिंचन क्षेत्र:</span> 45,000 हेक्टर</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-green-800 mb-4">प्रमुख बाजारपेठा</h3>
            
            <div className="overflow-x-auto mb-8">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr className="bg-green-700 text-white">
                    <th className="py-3 px-4 border">बाजारपेठ</th>
                    <th className="py-3 px-4 border">स्थापना वर्ष</th>
                    <th className="py-3 px-4 border">बाजार दिवस</th>
                    <th className="py-3 px-4 border">प्रमुख उत्पादने</th>
                    <th className="py-3 px-4 border">वार्षिक व्यवहार (मेट्रिक टन)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-3 px-4 border font-medium">दिंडोरी मुख्य बाजार</td>
                    <td className="py-3 px-4 border">1987</td>
                    <td className="py-3 px-4 border">दररोज</td>
                    <td className="py-3 px-4 border">कांदा, द्राक्षे, टोमॅटो, भाजीपाला</td>
                    <td className="py-3 px-4 border">75,000</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4 border font-medium">वणी उपबाजार</td>
                    <td className="py-3 px-4 border">2010</td>
                    <td className="py-3 px-4 border">मंगळवार, शुक्रवार</td>
                    <td className="py-3 px-4 border">कांदा, मिरची, वांगी</td>
                    <td className="py-3 px-4 border">28,000</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border font-medium">मोहाडी उपबाजार</td>
                    <td className="py-3 px-4 border">2015</td>
                    <td className="py-3 px-4 border">सोमवार, गुरुवार</td>
                    <td className="py-3 px-4 border">भात, नागली, वरई</td>
                    <td className="py-3 px-4 border">12,000</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4 border font-medium">उमराळे साप्ताहिक बाजार</td>
                    <td className="py-3 px-4 border">2018</td>
                    <td className="py-3 px-4 border">बुधवार</td>
                    <td className="py-3 px-4 border">डाळींब, पपई, केळी</td>
                    <td className="py-3 px-4 border">8,500</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border font-medium">निमगाव हंगामी बाजार</td>
                    <td className="py-3 px-4 border">2020</td>
                    <td className="py-3 px-4 border">शनिवार</td>
                    <td className="py-3 px-4 border">डाळी, खाद्यान्ने</td>
                    <td className="py-3 px-4 border">5,200</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold text-green-800 mb-4">क्षेत्रातील प्रमुख पिके</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h4 className="font-medium text-green-700 mb-2">खरीप हंगाम</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>भात</li>
                  <li>नागली</li>
                  <li>वरई</li>
                  <li>भुईमूग</li>
                  <li>सोयाबीन</li>
                  <li>मका</li>
                  <li>तूर</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h4 className="font-medium text-green-700 mb-2">रब्बी हंगाम</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>गहू</li>
                  <li>हरभरा</li>
                  <li>ज्वारी</li>
                  <li>कांदा</li>
                  <li>लसूण</li>
                  <li>मिरची</li>
                  <li>टोमॅटो</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h4 className="font-medium text-green-700 mb-2">बागायती पिके</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>द्राक्ष</li>
                  <li>डाळींब</li>
                  <li>पपई</li>
                  <li>केळी</li>
                  <li>सीताफळ</li>
                  <li>आंबा</li>
                  <li>चिकू</li>
                </ul>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-green-800 mb-4">क्षेत्रातील जमीन वर्गीकरण</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="relative pt-1">
                    <div className="flex mb-2 items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200">
                          बागायती जमीन
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-semibold inline-block text-green-600">
                          48%
                        </span>
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-200">
                      <div style={{ width: "48%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-600"></div>
                    </div>
                  </div>
                  
                  <div className="relative pt-1">
                    <div className="flex mb-2 items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-yellow-600 bg-yellow-200">
                          जिरायती जमीन
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-semibold inline-block text-yellow-600">
                          32%
                        </span>
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-yellow-200">
                      <div style={{ width: "32%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-600"></div>
                    </div>
                  </div>
                  
                  <div className="relative pt-1">
                    <div className="flex mb-2 items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-200">
                          वनक्षेत्र / बिगर शेती
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-semibold inline-block text-gray-600">
                          20%
                        </span>
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                      <div style={{ width: "20%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-600"></div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h4 className="font-medium text-green-700 mb-2">संसाधन उपलब्धता</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><span className="font-medium">सिंचन स्त्रोत:</span> कालवा (30%), विहिरी (45%), बोअरवेल (20%), नदी (5%)</li>
                    <li><span className="font-medium">पावसाचे प्रमाण:</span> वार्षिक सरासरी 750-900 मिमी</li>
                    <li><span className="font-medium">मातीचे प्रकार:</span> काळी मृदा (40%), लाल मृदा (35%), रेताड मृदा (15%), अन्य (10%)</li>
                    <li><span className="font-medium">प्रमुख नद्या:</span> गोदावरी, कादवा, दारणा, मोसम</li>
                    <li><span className="font-medium">धरणे/जलसाठे:</span> कादवा धरण, दारणा धरण, वालदेवी धरण</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border border-green-200 mb-8">
              <h3 className="text-xl font-semibold text-green-800 mb-4">क्षेत्रातील शेतकरी वर्गीकरण</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-green-700 mb-2">जमीन आकारमानानुसार वर्गीकरण</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><span className="font-medium">सीमांत शेतकरी (0-1 हेक्टर):</span> 35%</li>
                    <li><span className="font-medium">लहान शेतकरी (1-2 हेक्टर):</span> 30%</li>
                    <li><span className="font-medium">मध्यम शेतकरी (2-4 हेक्टर):</span> 22%</li>
                    <li><span className="font-medium">मोठे शेतकरी (4-10 हेक्टर):</span> 10%</li>
                    <li><span className="font-medium">अतिमोठे शेतकरी (10+ हेक्टर):</span> 3%</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-green-700 mb-2">शेतीपद्धतीनुसार वर्गीकरण</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><span className="font-medium">पारंपारिक शेती:</span> 55%</li>
                    <li><span className="font-medium">अर्ध-यांत्रिक शेती:</span> 30%</li>
                    <li><span className="font-medium">आधुनिक यांत्रिक शेती:</span> 12%</li>
                    <li><span className="font-medium">सेंद्रिय / जैविक शेती:</span> 3%</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-800 mb-4">नवीन समावेश क्षेत्र प्रस्ताव</h3>
              <p className="mb-4">
                दिंडोरी बाजार समितीकडून 2025 मध्ये नवीन 22 गावे बाजार क्षेत्रात समाविष्ट करण्याचा प्रस्ताव सादर करण्यात आला आहे. यामध्ये खालील क्षेत्रांचा समावेश आहे:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>कोळवण क्षेत्रातील 8 गावे</li>
                <li>चांदवड सीमेवरील 6 गावे</li>
                <li>नाशिक तालुक्यातील पूर्व भागातील 4 गावे</li>
                <li>पेठ तालुक्यातील उत्तर भागातील 4 गावे</li>
              </ul>
              <p className="mt-4 text-sm text-gray-600">
                * हा प्रस्ताव महाराष्ट्र राज्य कृषि पणन मंडळाकडे मंजुरीसाठी सादर केला असून, त्यावर अंतिम निर्णय अपेक्षित आहे.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
