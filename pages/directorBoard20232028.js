import { useState } from 'react';

export default function DirectorBoard() {
  const [language, setLanguage] = useState('marathi'); // Default language

  // Board members data
  const boardMembers = [
    { id: 1, name: 'मा.श्री.प्रशाांत प्रकाश कड', position: 'सभापती' },
    { id: 2, name: 'मा.श्री.योगेश माधवराव बडे', position: 'उपसभापती' },
    { id: 3, name: 'मा.श्री.कैलास बाबुराव मवाळ', position: 'सदस्य' },
    { id: 4, name: 'मा.श्री.नरेंद्र कोंडाजी जाधव', position: 'सदस्य' },
    { id: 5, name: 'मा.श्री.गांगाधर खांडेराव ननखाडे', position: 'सदस्य' },
    { id: 6, name: 'मा.श्री.पाांडुरांग ननवृत्ती गडकरी', position: 'सदस्य' },
    { id: 7, name: 'मा.श्री.बाळासाहेब नवश्वनाथ पाटील', position: 'सदस्य' },
    { id: 8, name: 'मा.श्री.दत्तु नामदेव भेरे', position: 'सदस्या' },
    { id: 9, name: 'मा.श्री.दत्ता पाांडुरांग शशगाडे', position: 'सदस्य' },
    { id: 10, name: 'मा.श्री.दत्तू शिंतामण राऊत', position: 'सदस्य' },
    { id: 11, name: 'मा.सौ.अिंचना अरुण अपसु ांदे', position: 'सदस्या' },
    { id: 12, name: 'मा.सौ.नवमल गुलाबराव जाधव', position: 'सदस्या' },
    { id: 13, name: 'मा.श्री.प्रवीण एकनाथ जाधव', position: 'सदस्य' },
    { id: 14, name: 'मा.श्री.शाम गणपत बोडके', position: 'सदस्य' },
    { id: 15, name: 'मा.श्री.दत्तात्रय रामिंांद्र पाटील', position: 'सदस्य' },
    { id: 16, name: 'मा.श्री.नांदलाल मोतीलाल िंोपडा', position: 'सदस्य' },
    { id: 17, name: 'मा.श्री.अनमत कमलेश िंोरनडया', position: 'सदस्य' },
    { id: 18, name: 'मा.सहाय्यक ननबंधक सो,सह.संस्था', position: 'शासकीय सदस्य' },
    { id: 19, name: 'मा.श्री. जगन्नाथ कारभारी जाधव', position: 'सदस्य सनचव' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h1 className="text-3xl font-bold text-center text-green-800 mb-8">
            ददडोरी कृषि उत्पन्न बाजार सषमती.षज.नाषिक
          </h1>
          <h2 className="text-2xl font-semibold text-center text-green-700 mb-6">
            संचालक मंडळ यादी (2023-2028)
          </h2>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr className="bg-green-700 text-white text-center">
                  <th className="py-3 px-4 border">अ.क्र</th>
                  <th className="py-3 px-4 border">संचालकाचे नांव</th>
                  <th className="py-3 px-4 border">हुद्दा</th>
                </tr>
              </thead>
              <tbody>
                {boardMembers.map((member) => (
                  <tr key={member.id} className={member.id % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="py-3 px-4 border text-center">{member.id}</td>
                    <td className="py-3 px-4 border">{member.name}</td>
                    <td className="py-3 px-4 border text-center">{member.position}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
