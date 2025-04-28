import { useState } from 'react';

export default function DirectorBoard20152020() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h1 className="text-3xl font-bold text-center text-green-800 mb-8">
            ददडोरी कृषि उत्पन्न बाजार सषमती.षज.नाषिक
          </h1>
          <h2 className="text-2xl font-semibold text-center text-green-700 mb-6">
            संचालक मंडळ यादी (2015-2020)
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
                {[
                  { id: 1, name: 'मा.श्री.रामदास शिवाजी शेळके', position: 'सभापती' },
                  { id: 2, name: 'मा.श्री.दिलीप हिरामण पवार', position: 'उपसभापती' },
                  { id: 3, name: 'मा.श्री.प्रमोद हरिश्चंद्र जाधव', position: 'सदस्य' },
                  { id: 4, name: 'मा.श्री.गणेश भास्कर निकम', position: 'सदस्य' },
                  { id: 5, name: 'मा.श्री.बाळासाहेब सोमनाथ आहेर', position: 'सदस्य' },
                  { id: 6, name: 'मा.श्री.सुभाष नामदेव आहेर', position: 'सदस्य' },
                  { id: 7, name: 'मा.श्री.अशोक राजाराम भोये', position: 'सदस्य' },
                  { id: 8, name: 'मा.सौ.शांताबाई बाबुराव निकम', position: 'सदस्या' },
                  { id: 9, name: 'मा.सौ.सुशीला मच्छिंद्र शिंदे', position: 'सदस्या' },
                  { id: 10, name: 'मा.श्री.शांताराम अमृत मोरे', position: 'सदस्य' },
                  { id: 11, name: 'मा.श्री.किशोर नाना कोकाटे', position: 'सदस्य' },
                  { id: 12, name: 'मा.श्री.चंद्रकांत रामकृष्ण पाटील', position: 'सदस्य' },
                  { id: 13, name: 'मा.श्री.दत्तात्रेय हरिश्चंद्र दुसाने', position: 'सदस्य' },
                  { id: 14, name: 'मा.श्री.शिवाजी तुकाराम शेलार', position: 'सदस्य' },
                  { id: 15, name: 'मा.श्री.प्रवीण बाजीराव खैरनार', position: 'सदस्य' },
                  { id: 16, name: 'मा.श्री.रमेश नाथाजी झावरे', position: 'सदस्य' },
                  { id: 17, name: 'मा.सहाय्यक निबंधक सो,सह.संस्था', position: 'शासकीय सदस्य' },
                  { id: 18, name: 'मा.श्री.राजाराम पुंडलिक गांगुर्डे', position: 'सदस्य सचिव' }
                ].map((member) => (
                  <tr key={member.id} className={member.id % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="py-3 px-4 border text-center">{member.id}</td>
                    <td className="py-3 px-4 border">{member.name}</td>
                    <td className="py-3 px-4 border text-center">{member.position}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-green-700 mb-3">कार्यकाळ विशेष कामगिरी</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>सेलहॉल व प्रशासकीय इमारत नूतनीकरण</li>
              <li>कांदा मार्केट विकास</li>
              <li>इलेक्ट्रॉनिक वजन काट्यांची सुविधा</li>
              <li>मोहाडी येथे उपबाजार विकासासाठी सुरुवात</li>
              <li>कोविड-19 काळात बाजारपेठ सुरळित चालविण्यासाठी विशेष उपाययोजना</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
