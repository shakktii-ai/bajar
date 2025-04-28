import React from 'react';

export default function Products() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h1 className="text-3xl font-bold text-center text-green-800 mb-8">
            ददडोरी कृषि उत्पन्न बाजार सषमती.षज.नाषिक
          </h1>
          <h2 className="text-2xl font-semibold text-center text-green-700 mb-6">
            प्रमुख उत्पादने
          </h2>

          <div className="prose max-w-none">
            <p className="mb-6">
              दिंडोरी कृषि उत्पन्न बाजार समितीच्या बाजारपेठेत विविध प्रकारची कृषी उत्पादने विक्रीसाठी आणली जातात. या उत्पादनांची गुणवत्ता, व्यापार परिमाण आणि मूल्य वर्षभर बदलत असते. येथे प्रमुख उत्पादनांची माहिती दिली आहे.
            </p>

            <div className="mb-10">
              <h3 className="text-xl font-semibold text-green-800 mb-4">प्रमुख फळे</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h4 className="text-lg font-medium text-green-800 mb-2">द्राक्षे</h4>
                  <p className="text-gray-700 mb-3">
                    नाशिक जिल्हा द्राक्ष उत्पादनासाठी प्रसिद्ध आहे. दिंडोरी तालुक्यात उत्तम प्रतीच्या द्राक्षांचे उत्पादन होते.
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li><span className="font-medium">प्रमुख जाती:</span> थॉमसन, सोनाका, शरदा, फ्लेम</li>
                    <li><span className="font-medium">हंगाम:</span> जानेवारी ते एप्रिल</li>
                    <li><span className="font-medium">वार्षिक व्यापार:</span> 8,500 मेट्रिक टन</li>
                    <li><span className="font-medium">प्रमुख बाजारपेठा:</span> मुंबई, दिल्ली, निर्यात</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h4 className="text-lg font-medium text-green-800 mb-2">डाळिंब</h4>
                  <p className="text-gray-700 mb-3">
                    दिंडोरी तालुक्यात डाळिंबाचे मोठ्या प्रमाणात उत्पादन होते. विशेषत: भगवा जातीचे डाळिंब उत्तम प्रतीचे आहेत.
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li><span className="font-medium">प्रमुख जाती:</span> भगवा, गणेश, मृदुला</li>
                    <li><span className="font-medium">हंगाम:</span> वर्षभर (प्रामुख्याने फेब्रुवारी ते मे)</li>
                    <li><span className="font-medium">वार्षिक व्यापार:</span> 5,200 मेट्रिक टन</li>
                    <li><span className="font-medium">प्रमुख बाजारपेठा:</span> मुंबई, पुणे, निर्यात</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h4 className="text-lg font-medium text-green-800 mb-2">केळी</h4>
                  <p className="text-gray-700 mb-3">
                    केळीचे उत्पादन दिंडोरी तालुक्यातील काही भागात केले जाते. श्रीमंती, रोबस्टा आणि ग्रँड नैन जातीचे केळी प्रसिद्ध आहेत.
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li><span className="font-medium">प्रमुख जाती:</span> श्रीमंती, रोबस्टा, ग्रँड नैन</li>
                    <li><span className="font-medium">हंगाम:</span> वर्षभर</li>
                    <li><span className="font-medium">वार्षिक व्यापार:</span> 4,800 मेट्रिक टन</li>
                    <li><span className="font-medium">प्रमुख बाजारपेठा:</span> नाशिक, मुंबई, पुणे</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-10">
              <h3 className="text-xl font-semibold text-green-800 mb-4">प्रमुख भाजीपाला</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h4 className="text-lg font-medium text-green-800 mb-2">कांदा</h4>
                  <p className="text-gray-700 mb-3">
                    दिंडोरी बाजार समितीमध्ये सर्वाधिक व्यापार होणारे प्रमुख उत्पादन म्हणजे कांदा. नाशिक जिल्हा कांदा उत्पादनासाठी देशात प्रसिद्ध आहे.
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li><span className="font-medium">प्रमुख जाती:</span> लाल कांदा, पांढरा कांदा</li>
                    <li><span className="font-medium">हंगाम:</span> खरीप, रब्बी, उन्हाळी</li>
                    <li><span className="font-medium">वार्षिक व्यापार:</span> 35,000 मेट्रिक टन</li>
                    <li><span className="font-medium">प्रमुख बाजारपेठा:</span> सर्व राज्ये, निर्यात</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h4 className="text-lg font-medium text-green-800 mb-2">टोमॅटो</h4>
                  <p className="text-gray-700 mb-3">
                    दिंडोरी तालुक्यातील अनेक गावांमध्ये टोमॅटोचे मोठ्या प्रमाणात उत्पादन घेतले जाते. हे उत्पादन बाजारपेठेत मोठ्या प्रमाणात येते.
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li><span className="font-medium">प्रमुख जाती:</span> पुसा रुबी, अर्का सौरभ, अर्का विकास</li>
                    <li><span className="font-medium">हंगाम:</span> वर्षभर (प्रामुख्याने नोव्हेंबर ते मार्च)</li>
                    <li><span className="font-medium">वार्षिक व्यापार:</span> 12,500 मेट्रिक टन</li>
                    <li><span className="font-medium">प्रमुख बाजारपेठा:</span> नाशिक, मुंबई, पुणे</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h4 className="text-lg font-medium text-green-800 mb-2">मिरची</h4>
                  <p className="text-gray-700 mb-3">
                    दिंडोरी तालुक्यातील शेतकरी मिरचीचे उत्पादन मोठ्या प्रमाणात घेतात. हिरवी मिरची आणि लाल मिरची अशा दोन्ही प्रकारच्या मिरचीचे उत्पादन केले जाते.
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li><span className="font-medium">प्रमुख जाती:</span> पुसा ज्वाला, पंत C-1, भारत</li>
                    <li><span className="font-medium">हंगाम:</span> ऑक्टोबर ते मार्च</li>
                    <li><span className="font-medium">वार्षिक व्यापार:</span> 9,800 मेट्रिक टन</li>
                    <li><span className="font-medium">प्रमुख बाजारपेठा:</span> नाशिक, मुंबई, सोलापूर</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-10">
              <h3 className="text-xl font-semibold text-green-800 mb-4">प्रमुख धान्य व कडधान्य</h3>
              
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300">
                  <thead>
                    <tr className="bg-green-700 text-white">
                      <th className="py-3 px-4 border">उत्पादन</th>
                      <th className="py-3 px-4 border">प्रमुख जाती</th>
                      <th className="py-3 px-4 border">हंगाम</th>
                      <th className="py-3 px-4 border">वार्षिक व्यापार (MT)</th>
                      <th className="py-3 px-4 border">विशेष वैशिष्ट्य</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-3 px-4 border font-medium">भात</td>
                      <td className="py-3 px-4 border">इंद्रायणी, अंबमोहर, सोना</td>
                      <td className="py-3 px-4 border">जून-नोव्हेंबर</td>
                      <td className="py-3 px-4 border">8,200</td>
                      <td className="py-3 px-4 border">आदिवासी क्षेत्रात उत्पादन</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="py-3 px-4 border font-medium">गहू</td>
                      <td className="py-3 px-4 border">HD-2189, LOK-1, GW-496</td>
                      <td className="py-3 px-4 border">नोव्हेंबर-मार्च</td>
                      <td className="py-3 px-4 border">5,500</td>
                      <td className="py-3 px-4 border">उच्च गुणवत्ता</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 border font-medium">ज्वारी</td>
                      <td className="py-3 px-4 border">मालदांडी, संगम, CSV-15</td>
                      <td className="py-3 px-4 border">ऑक्टोबर-फेब्रुवारी</td>
                      <td className="py-3 px-4 border">3,800</td>
                      <td className="py-3 px-4 border">शुष्क क्षेत्रात उत्पादन</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="py-3 px-4 border font-medium">नागली</td>
                      <td className="py-3 px-4 border">दखनी, छत्रपती, GPU-26</td>
                      <td className="py-3 px-4 border">जून-ऑक्टोबर</td>
                      <td className="py-3 px-4 border">2,500</td>
                      <td className="py-3 px-4 border">पौष्टिक मूल्य जास्त</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 border font-medium">हरभरा</td>
                      <td className="py-3 px-4 border">विजय, विशाल, JAKI-9218</td>
                      <td className="py-3 px-4 border">ऑक्टोबर-फेब्रुवारी</td>
                      <td className="py-3 px-4 border">4,200</td>
                      <td className="py-3 px-4 border">रब्बी हंगामातील प्रमुख पीक</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="py-3 px-4 border font-medium">तूर</td>
                      <td className="py-3 px-4 border">BSMR-736, ICPL-87119</td>
                      <td className="py-3 px-4 border">जून-जानेवारी</td>
                      <td className="py-3 px-4 border">3,700</td>
                      <td className="py-3 px-4 border">दिर्घकालीन पीक</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="text-xl font-semibold text-green-800 mb-4">तेलबिया</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>
                    <span className="font-medium">भुईमूग:</span> वार्षिक व्यापार 2,800 MT<br />
                    <span className="text-sm">हंगाम: जून-ऑक्टोबर, जाती: टीएजी-24, जेएल-24</span>
                  </li>
                  <li>
                    <span className="font-medium">सोयाबीन:</span> वार्षिक व्यापार 3,500 MT<br />
                    <span className="text-sm">हंगाम: जून-ऑक्टोबर, जाती: JS-335, MACS-450</span>
                  </li>
                  <li>
                    <span className="font-medium">करडई:</span> वार्षिक व्यापार 1,200 MT<br />
                    <span className="text-sm">हंगाम: ऑक्टोबर-फेब्रुवारी, जाती: भीमा, अन्नीगेरी</span>
                  </li>
                  <li>
                    <span className="font-medium">सूर्यफुल:</span> वार्षिक व्यापार 1,800 MT<br />
                    <span className="text-sm">हंगाम: ऑक्टोबर-जानेवारी, जाती: MSFH-17, KBSH-1</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="text-xl font-semibold text-green-800 mb-4">मसाले</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>
                    <span className="font-medium">हळद:</span> वार्षिक व्यापार 1,500 MT<br />
                    <span className="text-sm">हंगाम: मे-जानेवारी, जाती: सलेम, करिमुंडा</span>
                  </li>
                  <li>
                    <span className="font-medium">लसूण:</span> वार्षिक व्यापार 2,200 MT<br />
                    <span className="text-sm">हंगाम: ऑक्टोबर-मार्च, जाती: लोकल, पावडेर वाईट</span>
                  </li>
                  <li>
                    <span className="font-medium">जिरे:</span> वार्षिक व्यापार 950 MT<br />
                    <span className="text-sm">हंगाम: नोव्हेंबर-मार्च, जाती: GC-1, GC-2</span>
                  </li>
                  <li>
                    <span className="font-medium">आले:</span> वार्षिक व्यापार 1,100 MT<br />
                    <span className="text-sm">हंगाम: जून-डिसेंबर, जाती: रायगड, महिम</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border border-green-200 mb-8">
              <h3 className="text-xl font-semibold text-green-800 mb-4">विशेष उत्पादने</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-green-700 mb-2">आदिवासी क्षेत्रातील पारंपारिक उत्पादने</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>वरई (वार्षिक व्यापार: 180 MT)</li>
                    <li>नाचणी (वार्षिक व्यापार: 320 MT)</li>
                    <li>कारळा (वार्षिक व्यापार: 120 MT)</li>
                    <li>रानभाज्या (वार्षिक व्यापार: 95 MT)</li>
                    <li>महुआ फुले व बियाणे (वार्षिक व्यापार: 210 MT)</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-green-700 mb-2">जैविक उत्पादने</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>जैविक भाजीपाला (वार्षिक व्यापार: 350 MT)</li>
                    <li>जैविक फळे (वार्षिक व्यापार: 280 MT)</li>
                    <li>जैविक धान्य (वार्षिक व्यापार: 420 MT)</li>
                    <li>जैविक कडधान्य (वार्षिक व्यापार: 180 MT)</li>
                    <li>जैविक मसाले (वार्षिक व्यापार: 120 MT)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-800 mb-4">गुणवत्ता व प्रमाणीकरण</h3>
              <p className="mb-4">
                दिंडोरी बाजार समितीमध्ये कृषी उत्पादनांची गुणवत्ता तपासणी व प्रमाणीकरणासाठी विशेष प्रयोगशाळा स्थापन केली आहे. यात विशेषत: निर्यातीसाठी उत्पादनांची तपासणी केली जाते. शेतकऱ्यांना योग्य भाव मिळावा यासाठी उत्पादनांचे वर्गीकरण केले जाते आणि त्यानुसार किंमत निश्चित केली जाते.
              </p>
              <p>
                विशेष प्रोत्साहन योजनांतर्गत उच्च गुणवत्तेच्या उत्पादनासाठी शेतकऱ्यांना विशेष बक्षिसे दिली जातात. याशिवाय जैविक उत्पादनांसाठी वेगळी विक्री व्यवस्था केली जाते.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
