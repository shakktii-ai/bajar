import { useState } from 'react';

export default function DirectorBoard20082015() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h1 className="text-3xl font-bold text-center text-green-800 mb-8">
            ददडोरी कृषि उत्पन्न बाजार सषमती.षज.नाषिक
          </h1>
          <h2 className="text-2xl font-semibold text-center text-green-700 mb-6">
            संचालक मंडळ यादी (2008-2015)
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
                  { id: 1, name: 'मा.श्री.विष्णु शंकर पवार', position: 'सभापती' },
                  { id: 2, name: 'मा.श्री.रामदास शिवाजी शेळके', position: 'उपसभापती' },
                  { id: 3, name: 'मा.श्री.दिलीप धोंडिराम बैरागी', position: 'सदस्य' },
                  { id: 4, name: 'मा.श्री.भगवान रामचंद्र पाटील', position: 'सदस्य' },
                  { id: 5, name: 'मा.श्री.दिलीप हिरामण पवार', position: 'सदस्य' },
                  { id: 6, name: 'मा.श्री.राजेंद्र सखाराम निकम', position: 'सदस्य' },
                  { id: 7, name: 'मा.श्री.सखाराम नथू गिते', position: 'सदस्य' },
                  { id: 8, name: 'मा.सौ.मंगल सुदाम पवार', position: 'सदस्या' },
                  { id: 9, name: 'मा.सौ.ताराबाई भाऊसाहेब मोरे', position: 'सदस्या' },
                  { id: 10, name: 'मा.श्री.दिलीप महादू बोरसे', position: 'सदस्य' },
                  { id: 11, name: 'मा.श्री.हिरामण केशव खैरनार', position: 'सदस्य' },
                  { id: 12, name: 'मा.श्री.विजय रावसाहेब पगार', position: 'सदस्य' },
                  { id: 13, name: 'मा.श्री.राजेंद्र नथू मोरे', position: 'सदस्य' },
                  { id: 14, name: 'मा.श्री.उत्तम महादू साबळे', position: 'सदस्य' },
                  { id: 15, name: 'मा.श्री.प्रभाकर गंगाराम आहेर', position: 'सदस्य' },
                  { id: 16, name: 'मा.सहाय्यक निबंधक सो,सह.संस्था', position: 'शासकीय सदस्य' },
                  { id: 17, name: 'मा.श्री.संदीप गणेश देवरे', position: 'सदस्य सचिव' }
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
              <li>वणी येथे उपबाजार विकास</li>
              <li>दिंडोरी मुख्य बाजारपेठेचा विस्तार</li>
              <li>प्रशासकीय इमारत बांधकाम</li>
              <li>शेतकरी विश्रामगृह निर्मिती</li>
              <li>कांदा मार्केट प्रकल्प सुरुवात</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
