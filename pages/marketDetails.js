import { useState } from 'react';

export default function MarketDetails() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h1 className="text-3xl font-bold text-center text-green-800 mb-8">
            दिंडोरी कृषि उत्पन्न बाजार समिती
          </h1>
          <h2 className="text-2xl font-semibold text-center text-green-700 mb-6">
            बाजार तपशील
          </h2>

          {/* Market Areas Section */}
          <div className="mb-10">
            {/* <h3 className="text-xl font-semibold text-green-700 mb-4">बाजार सनमतीचे मुख्् व उप बाजार आवारांचे क्षेत्र</h3> */}
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr className="bg-green-700 text-white text-center">
                    <th className="py-3 px-4 border">अ.नं.</th>
                    <th className="py-3 px-4 border">बाजार आवार</th>
                    <th className="py-3 px-4 border">गट नंबर</th>
                    <th className="py-3 px-4 border">क्षेत्र</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-3 px-4 border text-center" rowSpan="4">१</td>
                    <td className="py-3 px-4 border">दिंडोरी (मुख्य बाजार आवार)</td>
                    <td className="py-3 px-4 border text-center">९३१</td>
                    <td className="py-3 px-4 border">१ हेक्टर २४ आर</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border"></td>
                    <td className="py-3 px-4 border text-center">९३० पै.</td>
                    <td className="py-3 px-4 border">०.०५आर</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border">दिंडोरी (उमराळे बु. रोड)</td>
                    <td className="py-3 px-4 border text-center">९२७/२</td>
                    <td className="py-3 px-4 border">२ हेक्टर ६५ आर</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border">दिंडोरी (कृ नष नवभाग कळवण रोड)</td>
                    <td className="py-3 px-4 border text-center">१०६५ व १०६६ पै.</td>
                    <td className="py-3 px-4 border">४ हेक्टर</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="py-3 px-4 border text-center" colSpan="2">दिंडोरी एकूण क्षेत्र</td>
                    <td className="py-3 px-4 border text-center" colSpan="2"><strong>७ हेक्टर ९४ आर</strong></td>
                  </tr>
                  
                  <tr>
                    <td className="py-3 px-4 border text-center" rowSpan="2">२</td>
                    <td className="py-3 px-4 border" rowSpan="2">दुय्यम बाजार आवार कसबे वणी</td>
                    <td className="py-3 px-4 border text-center">३६३ ब</td>
                    <td className="py-3 px-4 border">१ हेक्टर २२ आर</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border text-center">५१० पै.</td>
                    <td className="py-3 px-4 border">३ हेक्टर ६० आर</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="py-3 px-4 border text-center" colSpan="2">कसबे वणी एकूण क्षेत्र</td>
                    <td className="py-3 px-4 border text-center" colSpan="2"><strong>४ हेक्टर ८२ आर</strong></td>
                  </tr>
                  
                  <tr>
                    <td className="py-3 px-4 border text-center">३</td>
                    <td className="py-3 px-4 border">दुय्यम बाजार आवार मोहाडी</td>
                    <td className="py-3 px-4 border text-center">१२८६ पै.</td>
                    <td className="py-3 px-4 border">२ हेक्टर</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="py-3 px-4 border text-center" colSpan="2">मोहाडी एकूण क्षेत्र</td>
                    <td className="py-3 px-4 border text-center" colSpan="2"><strong>२ हेक्टर</strong></td>
                  </tr>
                  
                  <tr className="bg-green-100 font-bold">
                    <td className="py-3 px-4 border text-center" colSpan="2">बाजार सषमतीचे एकूण क्षेत्र</td>
                    <td className="py-3 px-4 border text-center" colSpan="2"><strong>१४ हेक्टर ७६ आर</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            
          </div>

          {/* Controlled Farm Produce */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-green-700 mb-4">नियंत्रित शेतीमाल</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {[
                'कपाशी', 'भुईमुग', 'शेंगा', 'गुळ', 'हरभरा', 'कांदा', 'बिािा',
                'राताळी', 'विाणा', 'खुरासणी', 'तुर', 'उडीद', 'मुग',
                'नमरची', 'ज्वारी', 'बाजरी', 'गहु', 'नागली', 'लसून',
                'भात', 'शेळया', 'मेंढया', 'आंबा', 'गवत', 'वैरण',
                'नवडीची पाने', 'सववजातीची गुरे', 'एरंडी', 'वरई', 'तांदुळ', 'पेरू',
                'नहरवी नमरची', 'नवडयाची पाने (नागवेलीची)', 'डलगु', 'द्राक्ष', 'मसुर', 'सोयाबीन',
                'फळभाज्या', 'सवव प्रकारच्या पालेभाज्या', 'मका', 'बोर', 'नचक्कू', 'पपई',
                'कोंबडी व अंडे', 'मोहफुले व फळे', 'कडलगड', 'स्ट्रॉबेरी', 'फणस', 'काजू',
                'तंबाखू', 'कापूस (सरकीचा व नबनसरकीचा)', 'नसताफळ', 'डडक', 'चवळी', 'बेदाणा',
                'आळशी', 'चामडी व कातडी', 'करडई', 'ऊस', 'डचच', 'मठ',
                'कुळीद', 'सवव प्रकारची फुले', 'सरकी', 'तीळ', 'गवार', 'राई',
                'शेंगदाणे', 'सवव प्रकारची मासळी', 'सुरण', 'मुळा', 'काकडी', 'गाजर',
                'घोडा', 'सुयवफुल'
              ].map((item, index) => (
                <div key={index} className="bg-white p-2 border border-green-200 rounded text-center hover:bg-green-50">
                  {item}
                </div>
              ))}
            </div>
            <p className="mt-4 text-gray-700">वरील प्रमाणे एकूण 74 वस्तूंचे ननयमन करण्यांत आलेले आहे.</p>
          </div>

          {/* Market Inflow and Sales */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-green-700 mb-4">आवक व वक्री :-</h3>
            <p className="mb-4">
            वरील नोंदणीकृत शेतमालापासून बाजार समितीस 2022-2023 या आर्थिक वर्षात मुख्य व दुय्यम बाजार आवारात खालील प्रमाणे आवक झालेली आहे.
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr className="bg-green-700 text-white text-center">
                    <th className="py-3 px-4 border">अ.नं.</th>
                    <th className="py-3 px-4 border">शेतमालाचा प्रकार</th>
                    <th className="py-3 px-4 border">आवक (क्विंटलमध्ये किम्मत)</th>
                    <th className="py-3 px-4 border">किम्मत</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-3 px-4 border text-center">1</td>
                    <td className="py-3 px-4 border">धान्य</td>
                    <td className="py-3 px-4 border text-center">११७९१.००<br/><span className="text-sm text-gray-600">११ हजार ७९१ क्विंटल</span></td>
                    <td className="py-3 px-4 border">७४९४८५००.००<br/><span className="text-sm text-gray-600">(7 कोटी 49 लाख 48 हजार 500 रुपये मात्र)</span></td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4 border text-center">2</td>
                    <td className="py-3 px-4 border">कांदे</td>
                    <td className="py-3 px-4 border text-center">१८७४८९९.००<br/><span className="text-sm text-gray-600">१८ लाख ७४ हजार ८९९ क्विंटल</span></td>
                    <td className="py-3 px-4 border">१५९४५०१३००.००<br/><span className="text-sm text-gray-600">(159 कोटी 45 लाख 1 हजार 300 रुपये मात्र)</span></td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border text-center">3</td>
                    <td className="py-3 px-4 border">भाजीपाला</td>
                    <td className="py-3 px-4 border text-center">३०५९४८.००<br/><span className="text-sm text-gray-600">३ लाख ५ हजार ९४८ क्विंटल</span></td>
                    <td className="py-3 px-4 border">३६०५६९१००.००<br/><span className="text-sm text-gray-600">(36 कोटी 5 लाख 69 हजार 100 रुपये मात्र)</span></td>
                  </tr>
                  <tr className="bg-green-100 font-bold">
                    <td className="py-3 px-4 border text-center"></td>
                    <td className="py-3 px-4 border">एकूण</td>
                    <td className="py-3 px-4 border text-center">२१९२६३८<br/><span className="text-sm">२१ लाख ९२ हजार ६३८ क्विंटल</span></td>
                    <td className="py-3 px-4 border">२०३००१८९००.००<br/><span className="text-sm">(२०३ कोटी १८ हजार ९०० रुपये मात्र)</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* License Holders */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-green-700 mb-4">बाजार समितीच्या परवानाधारकांची संख्या:-</h3>
            <p className="mb-4">
              बाजार समितीच्या सन 2022-2023 या वषामध्ये खालील प्रमाणे अनुज्ञप्तत देण्यांत आलेल्या आहेत.
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr className="bg-green-700 text-white text-center">
                    <th className="py-3 px-4 border">अ.नं.</th>
                    <th className="py-3 px-4 border">अनुज्ञप्तिचा प्रकार</th>
                    <th className="py-3 px-4 border">अनुज्ञप्तिधारकांची संख्या</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-3 px-4 border text-center">1</td>
                    <td className="py-3 px-4 border">जनरल कमिशन एजंट</td>
                    <td className="py-3 px-4 border text-center">१०४</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4 border text-center">2</td>
                    <td className="py-3 px-4 border">अ वर्ग  व्यापारी</td>
                    <td className="py-3 px-4 border text-center">७१</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border text-center">3</td>
                    <td className="py-3 px-4 border">ब वर्ग  व्यापारी</td>
                    <td className="py-3 px-4 border text-center">३०१</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4 border text-center">4</td>
                    <td className="py-3 px-4 border">तोलणार</td>
                    <td className="py-3 px-4 border text-center">१४</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border text-center">5</td>
                    <td className="py-3 px-4 border">हमाल</td>
                    <td className="py-3 px-4 border text-center">३६</td>
                  </tr>
                  <tr className="bg-green-100 font-bold">
                    <td className="py-3 px-4 border text-center"></td>
                    <td className="py-3 px-4 border">एकूण</td>
                    <td className="py-3 px-4 border text-center">५२६</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
