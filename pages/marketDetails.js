import { useState } from 'react';

export default function MarketDetails() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h1 className="text-3xl font-bold text-center text-green-800 mb-8">
            ददडोरी कृषि उत्पन्न बाजार सषमती.षज.नाषिक
          </h1>
          <h2 className="text-2xl font-semibold text-center text-green-700 mb-6">
            बाजार तपशील
          </h2>

          {/* Market Areas Section */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-green-700 mb-4">बाजार सनमतीचे मुख्् व उप बाजार आवारांचे क्षेत्र</h3>
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
                    <td className="py-3 px-4 border text-center" rowSpan="3">1</td>
                    <td className="py-3 px-4 border">डदडोरी (मुख्य बाजार आवार)</td>
                    <td className="py-3 px-4 border text-center">९३१</td>
                    <td className="py-3 px-4 border">1 हेक्िर 24 आर</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border">डदडोरी (उमराळे बु. रोड)</td>
                    <td className="py-3 px-4 border text-center">९२७/२</td>
                    <td className="py-3 px-4 border">2 हेक्िर 65 आर</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border">डदडोरी (कृ नष नवभाग कळवण रोड)</td>
                    <td className="py-3 px-4 border text-center">1065 व 1066 पै.</td>
                    <td className="py-3 px-4 border">4 हेक्िर</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="py-3 px-4 border text-center" colSpan="2">ददडोरी एकूण क्षेत्र</td>
                    <td className="py-3 px-4 border text-center" colSpan="2"><strong>7 हेक्टर 94 आर</strong></td>
                  </tr>
                  
                  <tr>
                    <td className="py-3 px-4 border text-center" rowSpan="2">2</td>
                    <td className="py-3 px-4 border" rowSpan="2">दुय्यम बाजार आवार कसबे वणी</td>
                    <td className="py-3 px-4 border text-center">363 ब</td>
                    <td className="py-3 px-4 border">1 हेक्िर 22 आर</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border text-center">510 पै.</td>
                    <td className="py-3 px-4 border">3 हेक्िर 60 आर</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="py-3 px-4 border text-center" colSpan="2">कसबे वणी एकूण क्षेत्र</td>
                    <td className="py-3 px-4 border text-center" colSpan="2"><strong>4 हेक्टर 82 आर</strong></td>
                  </tr>
                  
                  <tr>
                    <td className="py-3 px-4 border text-center">3</td>
                    <td className="py-3 px-4 border">दुय्यम बाजार आवार मोहाडी</td>
                    <td className="py-3 px-4 border text-center">1286 पै.</td>
                    <td className="py-3 px-4 border">2 हेक्िर</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="py-3 px-4 border text-center" colSpan="2">मोहाडी एकूण क्षेत्र</td>
                    <td className="py-3 px-4 border text-center" colSpan="2"><strong>2 हेक्टर</strong></td>
                  </tr>
                  
                  <tr className="bg-green-100 font-bold">
                    <td className="py-3 px-4 border text-center" colSpan="2">बाजार सषमतीचे एकूण क्षेत्र</td>
                    <td className="py-3 px-4 border text-center" colSpan="2"><strong>१४ हेक्टर ७६ आर</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-6 bg-white p-4 rounded border border-gray-300">
              <p className="mb-4">
                वरील प्रमाणे बाजार सनमतीचे मुख्् व दुय्यम बाजार आवारांचे एकूण 14 हेक्टर 76 आर क्षेत्र असून मुख्य
                बाजार आवार डदडोरी व उप बाजार आवार क.वणी व मोहाडी येथे स््त:च्या मालकीच्या कायालयीन इमारती असून
                सेलहॉल, िॉयलेि ब्लॉकचे बांधकाम केलेले आहेत.
              </p>
              <p>
                डदडोरी व क.वणी याडववर 50 िनी इलेट्रॉननक भुईकाियाची सुनवधा उपलब्् केलेली आहे. डदडोरी येनथल धान्य माकेि करीता 1.50 क्क्विलचे 9 इलेक्ट्रॉननक काियांची सुनवधा केलेली आहे. तसेच बाजार सनमतीने महाराष्ट्र स्पधाक्षम कृ नष नवकास प्रकल्पांतगवत डदडोरी येथल सीड फामव जागेत व वणी येनथल सापुतारा रोडवरील गि नं.510 येथे अंतगवत रस्ते, सेलहॉल, पाण्याची िाकी, स्ट्रीि लाईि, प्रसाधन गृह व 50 मे.िनी इलेक्ट्रॉननक भुईकाियांची सुनवधा ननमाण केलेली आहे.
              </p>
            </div>
          </div>

          {/* Controlled Farm Produce */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-green-700 mb-4">षनयंषत्रत िेतीमाल</h3>
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
            <h3 className="text-xl font-semibold text-green-700 mb-4">आवक व षवक्री :-</h3>
            <p className="mb-4">
              वरील ननयंनत्रत केलेल्या शेतमाला पासून बाजार सनमतीस 2022-2023 या आनथक वषात मुख्य व दुय्यम बाजार आवारात खालील प्रमाणे आवक झालेली आहे.
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr className="bg-green-700 text-white text-center">
                    <th className="py-3 px-4 border">अ.नं.</th>
                    <th className="py-3 px-4 border">िेतमालाचा प्रकार</th>
                    <th className="py-3 px-4 border">आवक (क्क्वटल मध्ये)</th>
                    <th className="py-3 px-4 border">दकमत</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-3 px-4 border text-center">1</td>
                    <td className="py-3 px-4 border">धान्य</td>
                    <td className="py-3 px-4 border text-center">11791.00<br/><span className="text-sm text-gray-600">11 हजार 791 क्क्विल</span></td>
                    <td className="py-3 px-4 border">74948500.00<br/><span className="text-sm text-gray-600">(7 कोटी 49 लाख 48 हजार 500 रुपये मात्र)</span></td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4 border text-center">2</td>
                    <td className="py-3 px-4 border">कांदे</td>
                    <td className="py-3 px-4 border text-center">1874899.00<br/><span className="text-sm text-gray-600">18 लाख 74 हजार 899 क्क्विल</span></td>
                    <td className="py-3 px-4 border">१५९४५०१३००.००<br/><span className="text-sm text-gray-600">(159 कोटी 45 लाख 1 हजार 300 रुपये मात्र)</span></td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border text-center">3</td>
                    <td className="py-3 px-4 border">भाजीपाला</td>
                    <td className="py-3 px-4 border text-center">305948.00<br/><span className="text-sm text-gray-600">3 लाख 5 हजार 948 क्क्विल</span></td>
                    <td className="py-3 px-4 border">360569100.00<br/><span className="text-sm text-gray-600">(36 कोटी 5 लाख 69 हजार 100 रुपये मात्र)</span></td>
                  </tr>
                  <tr className="bg-green-100 font-bold">
                    <td className="py-3 px-4 border text-center"></td>
                    <td className="py-3 px-4 border">एकूण</td>
                    <td className="py-3 px-4 border text-center">2192638<br/><span className="text-sm">21 लाख 92 हजार 638 क्क्वटल</span></td>
                    <td className="py-3 px-4 border">२०३००१८९००.००<br/><span className="text-sm">(२०३ कोटी १८ हजार ९०० रुपये मात्र)</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* License Holders */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-green-700 mb-4">बाजार सषमतीच्या परवानाधारकांची संख्या:-</h3>
            <p className="mb-4">
              बाजार सनमतीच्या सन 2022-2023 या वषामध्ये खालील प्रमाणे अनुज्ञप्तत देण्यांत आलेल्या आहेत.
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr className="bg-green-700 text-white text-center">
                    <th className="py-3 px-4 border">अ.नं.</th>
                    <th className="py-3 px-4 border">अनुज्ञप्ततचा प्रकार</th>
                    <th className="py-3 px-4 border">अनुज्ञप्ततधारकांची संख्या</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-3 px-4 border text-center">1</td>
                    <td className="py-3 px-4 border">जनरल कनमशन एजंि</td>
                    <td className="py-3 px-4 border text-center">१०४</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4 border text-center">2</td>
                    <td className="py-3 px-4 border">अ वगव व्यापारी</td>
                    <td className="py-3 px-4 border text-center">७१</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border text-center">3</td>
                    <td className="py-3 px-4 border">ब वगव व्यापारी</td>
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
