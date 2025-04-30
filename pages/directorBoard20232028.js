import { useState } from 'react';
import Image from 'next/image';

export default function DirectorBoard() {
  const [language, setLanguage] = useState('marathi'); // Default language

  // Board members data
  const boardMembers = [
    { id: 1, name: 'मा.श्री.प्रशाांत प्रकाश कड', position: 'सभापती' },
    { id: 2, name: 'मा.श्री.योगेश माधवराव बडे', position: 'उपसभापती' },
    { id: 3, name: 'मा.श्री.कैलास बाबुराव मवाळ', position: 'सदस्य' },
    { id: 4, name: 'मा.श्री.नरेंद्र कोंडाजी जाधव', position: 'सदस्य' },
    { id: 5, name: 'मा.श्री.गांगाधर खंडेराव निरवाडे', position: 'सदस्य' },
    { id: 6, name: 'मा.श्री.पांडुरंग निवृत्ती गडकरी', position: 'सदस्य' },
    { id: 7, name: 'मा.श्री.बाळासाहेब विश्वनाथ पाटील', position: 'सदस्य' },
    { id: 8, name: 'मा.श्री.दत्तु नामदेव भेरे', position: 'सदस्या' },
    { id: 9, name: 'मा.श्री.दत्ता पांडुरंग शिंगाडे ', position: 'सदस्य' },
    { id: 10, name: 'मा.श्री.दत्तू चिंतामण राऊत', position: 'सदस्य' },
    { id: 11, name: 'मा.सौ.अर्चना अरुण अपसुंदे ', position: 'सदस्या' },
    { id: 12, name: 'मा.सौ.विमल गुलाबराव जाधव', position: 'सदस्या' },
    { id: 13, name: 'मा.श्री.प्रवीण एकनाथ जाधव', position: 'सदस्य' },
    { id: 14, name: 'मा.श्री.शाम गणपत बोडके', position: 'सदस्य' },
    { id: 15, name: 'मा.श्री.दत्तात्रय रामचंद पाटील', position: 'सदस्य' },
    { id: 16, name: 'मा.श्री.नंदलाल मोतीलाल चोपडा ', position: 'सदस्य' },
    { id: 17, name: 'मा.श्री.अमित कमलेश चोरडिया ', position: 'सदस्य' },
    { id: 18, name: 'मा.श्री.फय्याज मुलानी साहेब', position: 'जिल्हा उपनिबंधक , नाशिक  ' },
    { id: 19, name: 'मा.श्री. वैभव मोरडे ', position: 'मा. सहाय्यक निबंधक , दिंडोरी ' },
    { id: 20, name: 'मा.श्री. जगन्नाथ कारभारी जाधव', position: 'सचिव' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h1 className="text-3xl font-bold text-center text-green-800 mb-8">
            दिंडोरी कृषि उत्पन्न बाजार समिती.जि.नाशिक
          </h1>
          <h2 className="text-2xl font-semibold text-center text-green-700 mb-6">
            संचालक मंडळ यादी (2023-2028)
          </h2>
          
          {/* Leaders Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-green-800 mb-4">संचालक मंडळ</h3>
            <div className="flex justify-center mb-6">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg p-4 max-w-2xl">
                <div className="relative h-[400px] w-full">
                  <Image 
                    src="/samiti/leaders.png" 
                    alt="Leaders" 
                    fill
                    style={{objectFit: 'contain'}}
                    priority
                  />
                </div>
                <div className="p-4 text-center">
                  <p className="font-bold text-lg text-green-800 mb-2">
                    श्री. प्रशांत प्रकाशराव कड (सभापती)
                  </p>
                  <p className="font-bold text-lg text-green-800">
                    श्री. योगेश माधवराव बर्डे (उपसभापती)
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="overflow-x-auto mb-8">
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
          
          {/* All Committee Members with Photos */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-green-800 mb-4">सर्व समिती सदस्य</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {/* Row 1 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-60 w-full">
                  <Image 
                    src="/samiti/member1.png" 
                    alt="श्री.बाळासाहेब विश्वनाथ पाटील" 
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    priority
                    style={{objectFit: 'contain'}}
                  />
                </div>
                <div className="p-3 text-center">
                  <p className="font-medium text-green-800">श्री.बाळासाहेब विश्वनाथ पाटील</p>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-60 w-full">
                  <Image 
                    src="/samiti/member2new.png" 
                    alt="श्री. कैलास माधवराव बारसे" 
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    priority
                    style={{objectFit: 'contain'}}
                  />
                </div>
                <div className="p-3 text-center">
                  <p className="font-medium text-green-800">श्री. कैलास माधवराव बारसे</p>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-60 w-full">
                  <Image 
                    src="/samiti/member3.png" 
                    alt="श्री.नरेंद्र कोंडाजी जाधव" 
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    priority
                    style={{objectFit: 'contain'}}
                  />
                </div>
                <div className="p-3 text-center">
                  <p className="font-medium text-green-800">श्री. नरेंद्र कोंडाजी जाधव</p>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-60 w-full">
                  <Image 
                    src="/samiti/member4.png" 
                    alt="श्री.गांगाधर खंडेराव निरवाडे" 
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    priority
                    style={{objectFit: 'contain'}}
                  />
                </div>
                <div className="p-3 text-center">
                  <p className="font-medium text-green-800">श्री.गांगाधर खंडेराव निरवाडे</p>
                </div>
              </div>

              {/* Row 2 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-60 w-full">
                  <Image 
                    src="/samiti/member5.png" 
                    alt="श्री.दत्तात्रय रामचंद पाटील" 
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    priority
                    style={{objectFit: 'contain'}}
                  />
                </div>
                <div className="p-3 text-center">
                  <p className="font-medium text-green-800">श्री.दत्तात्रय रामचंद पाटील</p>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-60 w-full">
                  <Image 
                    src="/samiti/member6new.png" 
                    alt="श्री.पांडुरंग निवृत्ती गडकरी" 
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    priority
                    style={{objectFit: 'contain'}}
                  />
                </div>
                <div className="p-3 text-center">
                  <p className="font-medium text-green-800">श्री.पांडुरंग निवृत्ती गडकरी</p>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-60 w-full">
                  <Image 
                    src="/samiti/member7.png" 
                    alt="श्री.प्रवीण एकनाथ जाधव" 
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    priority
                    style={{objectFit: 'contain'}}
                  />
                </div>
                <div className="p-3 text-center">
                  <p className="font-medium text-green-800">श्री.प्रवीण एकनाथ जाधव</p>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-60 w-full">
                  <Image 
                    src="/samiti/member8new.png" 
                    alt="सौ.अर्चना अरुण अपसुंदे" 
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    priority
                    style={{objectFit: 'contain'}}
                  />
                </div>
                <div className="p-3 text-center">
                  <p className="font-medium text-green-800">सौ.अर्चना अरुण अपसुंदे</p>
                </div>
              </div>

              {/* Row 3 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-60 w-full">
                  <Image 
                    src="/samiti/member9new.png" 
                    alt="सौ.विमल गुलाबराव जाधव" 
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    priority
                    style={{objectFit: 'contain'}}
                  />
                </div>
                <div className="p-3 text-center">
                  <p className="font-medium text-green-800">सौ.विमल गुलाबराव जाधव</p>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-60 w-full">
                  <Image 
                    src="/samiti/member10.png" 
                    alt="श्री.शाम गणपत बोडके" 
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    priority
                    style={{objectFit: 'contain'}}
                  />
                </div>
                <div className="p-3 text-center">
                  <p className="font-medium text-green-800">श्री.शाम गणपत बोडके</p>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-60 w-full">
                  <Image 
                    src="/samiti/member11new.png" 
                    alt="श्री.दत्तु नामदेव भेरे" 
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    priority
                    style={{objectFit: 'contain'}}
                  />
                </div>
                <div className="p-3 text-center">
                  <p className="font-medium text-green-800">श्री.दत्तु नामदेव भेरे</p>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-60 w-full">
                  <Image 
                    src="/samiti/member12.png" 
                    alt="श्री.दत्ता पांडुरंग शिंगाडे " 
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    priority
                    style={{objectFit: 'contain'}}
                  />
                </div>
                <div className="p-3 text-center">
                  <p className="font-medium text-green-800">श्री.दत्ता पांडुरंग शिंगाडे </p>
                </div>
              </div>

              {/* Row 4 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-60 w-full">
                  <Image 
                    src="/samiti/member13.png" 
                    alt="श्री.दत्तू चिंतामण राऊत" 
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    priority
                    style={{objectFit: 'contain'}}
                  />
                </div>
                <div className="p-3 text-center">
                  <p className="font-medium text-green-800">श्री.दत्तू चिंतामण राऊत</p>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-60 w-full">
                  <Image 
                    src="/samiti/member14.png" 
                    alt="श्री.नंदलाल मोतीलाल चोपडा " 
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    priority
                    style={{objectFit: 'contain'}}
                  />
                </div>
                <div className="p-3 text-center">
                  <p className="font-medium text-green-800">श्री.नंदलाल मोतीलाल चोपडा </p>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-60 w-full">
                  <Image 
                    src="/samiti/member15neww.png" 
                    alt="श्री.अमित कमलेश चोरडिया" 
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    priority
                    style={{objectFit: 'contain'}}
                  />
                </div>
                <div className="p-3 text-center">
                  <p className="font-medium text-green-800">श्री.अमित कमलेश चोरडिया</p>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-60 w-full">
                  <Image 
                    src="/samiti/member16.png" 
                    alt="श्री.फय्याज मुलानी साहेब" 
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    priority
                    style={{objectFit: 'contain'}}
                  />
                </div>
                <div className="p-3 text-center">
                  <p className="font-medium text-green-800">श्री.फय्याज मुलानी साहेब</p>
                  <p className="font-medium text-green-800">जिल्हा उपनिबंधक , नाशिक  </p>
                </div>
              </div>

              {/* Row 5 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-60 w-full">
                  <Image 
                    src="/samiti/member17new.png" 
                    alt="श्री.  वैभव मोरडे " 
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    priority
                    style={{objectFit: 'contain'}}
                  />
                </div>
                <div className="p-3 text-center">
                  <p className="font-medium text-green-800">श्री. वैभव मोरडे </p>
                  <p className="font-medium text-green-800">मा. सहाय्यक निबंधक , दिंडोरी </p>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-60 w-full">
                  <Image 
                    src="/samiti/member18new.png" 
                    alt="श्री. जगन्नाथ कारभारी जाधव" 
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    priority
                    style={{objectFit: 'contain'}}
                  />
                </div>
                <div className="p-3 text-center">
                  <p className="font-medium text-green-800">श्री. जगन्नाथ कारभारी जाधव</p>
                  <p className="font-medium text-green-800">सचिव</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
