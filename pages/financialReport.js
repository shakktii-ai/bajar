import { useState } from 'react';

export default function FinancialReport() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h1 className="text-3xl font-bold text-center text-green-800 mb-8">
            दिंडोरी कृषि उत्पन्न बाजार समिती 
          </h1>
          <h2 className="text-2xl font-semibold text-center text-green-700 mb-6">
            वार्षिक आर्थिक अहवाल (01/04/2022 ते 31/03/2023)
          </h2>

          {/* Income Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-green-700 mb-4">उत्पन्न :-</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr className="bg-green-700 text-white text-center">
                    <th className="py-3 px-4 border">अ.नं.</th>
                    <th className="py-3 px-4 border">तपशील</th>
                    <th className="py-3 px-4 border">उत्पन्न</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-3 px-4 border text-center">1</td>
                    <td className="py-3 px-4 border">फी पासून मिळालेले उत्पन्न - बाजार फी</td>
                    <td className="py-3 px-4 border">
                      <div>20300189.00</div>
                      <div className="text-sm text-gray-600">2 कोटी 3 लाख 189 रुपये मात्र</div>
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4 border text-center">2</td>
                    <td className="py-3 px-4 border">इतर उत्पन्न वजन भाडे, गोदाम फी, नवलंब आकार, बँक व्याज इत्यादी.</td>
                    <td className="py-3 px-4 border">
                      <div>716934.30</div>
                      <div className="text-sm text-gray-600">7 लाख 16 हजार 934 रुपये 30 पैसे मात्र</div>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border text-center">3</td>
                    <td className="py-3 px-4 border">मालमतेपासून मिळालेले उत्पन्न बाजार समितीचे मुख्य व दुय्यम बाजार आवारातील व्यापारी गाळे व भुखंड</td>
                    <td className="py-3 px-4 border">
                      <div>2748543.00</div>
                      <div className="text-sm text-gray-600">27 लाख 48 हजार 543 रुपये मात्र.</div>
                    </td>
                  </tr>
                  <tr className="bg-gray-100 font-bold">
                    <td className="py-3 px-4 border text-center"></td>
                    <td className="py-3 px-4 border">एकूण उत्पन्न</td>
                    <td className="py-3 px-4 border">
                      <div>23765666.30</div>
                      <div className="text-sm">२ कोटी ३७ लाख ६५ हजार ६६६ रुपये ३० पैसे मात्र.</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Expenses Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-green-700 mb-4">खर्च :-</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr className="bg-green-700 text-white text-center">
                    <th className="py-3 px-4 border">अ.नं.</th>
                    <th className="py-3 px-4 border">तपशील</th>
                    <th className="py-3 px-4 border">खर्च</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-3 px-4 border text-center">1</td>
                    <td className="py-3 px-4 border">सभापती/उपसभापती मानधन, सभा उपप्स्थती भत्ता, सदस्य प्रवास व दैनिक भत्ता व सभा खर्च</td>
                    <td className="py-3 px-4 border">
                      <div>325590.00</div>
                      <div className="text-sm text-gray-600">3 लाख 25 हजार 590 रुपये मात्र</div>
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4 border text-center">2</td>
                    <td className="py-3 px-4 border">स्थापना खर्च - कर्मचा-यांचे पगार, कालबद्ध पदोन्नती रक्कम, अर्जित रजा रक्कम, महागाई भत्ता, घरभाडे भत्ता, प्रवास खर्च इ. तसेच सन 2021-2022 या आर्थिक वर्षात बाजार समितीचे 4 सेवक सेवाननवृत्त झालेले आहे त्यांच्या देय असलेल्या रकमा इत्यादी.</td>
                    <td className="py-3 px-4 border">
                      <div>8647305.00</div>
                      <div className="text-sm text-gray-600">८६ लाख ४७ हजार ३०५ रुपये मात्र.</div>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border text-center">3</td>
                    <td className="py-3 px-4 border">प्रशासन खर्च –मालमत्ता (इमारत ई.) कृ नष पणन मंडळ अंशदान, नवद्युत, अकृषक सारा इ. घसारा, नवद्युत खर्च, ऑडीि फी, पणन मंडळ अंशदान, अकृषक सारा, निवडणूक खर्च.</td>
                    <td className="py-3 px-4 border">
                      <div>9470951.21</div>
                      <div className="text-sm text-gray-600">९४ लाख ७० हजार ९८१ रुपये २१ पैसे मात्र.</div>
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4 border text-center">4</td>
                    <td className="py-3 px-4 border">कर्जावरील व्याज- समितीचे नवकास कामांसाठी घेतलेल्या कर्जावरील व्याज</td>
                    <td className="py-3 px-4 border">
                      <div>१०४१३५.००</div>
                      <div className="text-sm text-gray-600">१ लाख ४ हजार १३५ रुपये मात्र</div>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border text-center">5</td>
                    <td className="py-3 px-4 border">मुख्य व दुय्यम बाजार आवार - मुख्य व दुय्यम बाजार आवार साफसफाई, संरक्षण देखभाल, नकरकोळ दुरूस्त्या इतर खर्च</td>
                    <td className="py-3 px-4 border">
                      <div>1455026.00</div>
                      <div className="text-sm text-gray-600">१४ लाख ५५ हजार २६ रुपये मात्र</div>
                    </td>
                  </tr>
                  <tr className="bg-gray-100 font-bold">
                    <td className="py-3 px-4 border text-center"></td>
                    <td className="py-3 px-4 border">एकूण खर्च</td>
                    <td className="py-3 px-4 border">
                      <div>२०००३००७.२१</div>
                      <div className="text-sm">२ कोटी ३ हजार ७ रुपये २१ पैसे मात्र</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Profit Section */}
          <div className="mb-8 bg-green-50 p-4 rounded-lg border border-green-200">
            <h3 className="text-xl font-semibold text-green-700 mb-2">वाढावा:</h3>
            <p className="text-lg">
              बाजार सनमतीस सन 2022-2023 मध्ये रूपये- <span className="font-bold">3762659.09</span> 
              (<span className="font-bold">३७ लाख ६२ हजार ६५९ रुपये ०९ पैसे मात्र</span>) इतका वाढावा झालेला आहे.
            </p>
          </div>

          {/* Financial Status Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-green-700 mb-4">बाजार समितीची संपत्तीक परस्थिती :-</h3>
            <div className="bg-white p-4 rounded border border-gray-300">
              <p className="mb-4">
                बाजार सनमतीच्या 31/03/2023 च्या ताळेबंदा नुसार सनमतीस मुख्् व दुय्यम बाजारातील व्यापारी संकुले
                व व्यापारी गाळे यांचे नडपॉनझि पासून रू. ९०७८७९२८/- (९ कोटी ७ लाख ८७ हजार ९२८ रुपये मात्र)
                इतकी रक्कम प्रातत झालेली आहे. अहवाल वर्षात बाजार सनमतीने नव्याने कोणतेही नवकासकामे सुरु केलेले नाही.
              </p>
              <p>
                तसेच बाजार सनमतीच्या मुख्् व दुय्यम आवारातील स्थावर मालमत्तेची डकमत रु.२२४४२८७५८.50 (22 कोटी
                ४४ लाख २८ हजार ७५८ रुपये ५० पैसे मात्र) इतक्या रकमेची नहशोबी दततरा प्रमाणे असून नद.31/3/2023
                अखेर बाजार सनमतीच्या सवर्व मालमत्तेची चालू बाजारभावा प्रमाणे डकमत सुमारे रु.160 कोिी पेक्षाही जास्त रकमेची
                आहे.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
