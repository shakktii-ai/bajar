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
                    alt="श्री. वामनराव शिवराम पाटील" 
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    priority
                    style={{objectFit: 'contain'}}
                  />
                </div>
                <div className="p-3 text-center">
                  <p className="font-medium text-green-800">श्री. वामनराव शिवराम पाटील</p>
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
                    alt="श्री. जीव चौधरी श्रावण" 
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    priority
                    style={{objectFit: 'contain'}}
                  />
                </div>
                <div className="p-3 text-center">
                  <p className="font-medium text-green-800">श्री. जीव चौधरी श्रावण</p>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-60 w-full">
                  <Image 
                    src="/samiti/member4.png" 
                    alt="श्री. संगपाल महेंद्र शिंदत" 
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    priority
                    style={{objectFit: 'contain'}}
                  />
                </div>
                <div className="p-3 text-center">
                  <p className="font-medium text-green-800">श्री. संगपाल महेंद्र शिंदत</p>
                </div>
              </div>

              {/* Row 2 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-60 w-full">
                  <Image 
                    src="/samiti/member5.png" 
                    alt="श्री. उत्तमराव रामचंद्र पाटील" 
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    priority
                    style={{objectFit: 'contain'}}
                  />
                </div>
                <div className="p-3 text-center">
                  <p className="font-medium text-green-800">श्री. उत्तमराव रामचंद्र पाटील</p>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-60 w-full">
                  <Image 
                    src="/samiti/member6new.png" 
                    alt="श्री. सुरेश निंबाजी पवरेकर" 
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    priority
                    style={{objectFit: 'contain'}}
                  />
                </div>
                <div className="p-3 text-center">
                  <p className="font-medium text-green-800">श्री. सुरेश निंबाजी पवरेकर</p>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-60 w-full">
                  <Image 
                    src="/samiti/member7.png" 
                    alt="श्री. संदिप बेलदारे श्रावण" 
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    priority
                    style={{objectFit: 'contain'}}
                  />
                </div>
                <div className="p-3 text-center">
                  <p className="font-medium text-green-800">श्री. संदिप बेलदारे श्रावण</p>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-60 w-full">
                  <Image 
                    src="/samiti/member8new.png" 
                    alt="सौ. अंजना डल्लू आघाडे" 
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    priority
                    style={{objectFit: 'contain'}}
                  />
                </div>
                <div className="p-3 text-center">
                  <p className="font-medium text-green-800">सौ. अंजना डल्लू आघाडे</p>
                </div>
              </div>

              {/* Row 3 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-60 w-full">
                  <Image 
                    src="/samiti/member9new.png" 
                    alt="सौ. विजया गुलाबराव जाधव" 
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    priority
                    style={{objectFit: 'contain'}}
                  />
                </div>
                <div className="p-3 text-center">
                  <p className="font-medium text-green-800">सौ. विजया गुलाबराव जाधव</p>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-60 w-full">
                  <Image 
                    src="/samiti/member10.png" 
                    alt="श्री. राम भागवत वाटले" 
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    priority
                    style={{objectFit: 'contain'}}
                  />
                </div>
                <div className="p-3 text-center">
                  <p className="font-medium text-green-800">श्री. राम भागवत वाटले</p>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-60 w-full">
                  <Image 
                    src="/samiti/member11new.png" 
                    alt="श्री. दत्तू मारुती शिंदले" 
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    priority
                    style={{objectFit: 'contain'}}
                  />
                </div>
                <div className="p-3 text-center">
                  <p className="font-medium text-green-800">श्री. दत्तू मारुती शिंदले</p>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-60 w-full">
                  <Image 
                    src="/samiti/member12.png" 
                    alt="श्री. दत्तू शिवाजीराव राऊत" 
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    priority
                    style={{objectFit: 'contain'}}
                  />
                </div>
                <div className="p-3 text-center">
                  <p className="font-medium text-green-800">श्री. दत्तू शिवाजीराव राऊत</p>
                </div>
              </div>

              {/* Row 4 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-60 w-full">
                  <Image 
                    src="/samiti/member13.png" 
                    alt="श्री. संतराम मनीराम वाघेला" 
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    priority
                    style={{objectFit: 'contain'}}
                  />
                </div>
                <div className="p-3 text-center">
                  <p className="font-medium text-green-800">श्री. संतराम मनीराम वाघेला</p>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-60 w-full">
                  <Image 
                    src="/samiti/member14.png" 
                    alt="श्री. अनिल कमलेश उटरेसिया" 
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    priority
                    style={{objectFit: 'contain'}}
                  />
                </div>
                <div className="p-3 text-center">
                  <p className="font-medium text-green-800">श्री. अनिल कमलेश उटरेसिया</p>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-60 w-full">
                  <Image 
                    src="/samiti/member15new.png" 
                    alt="श्री. फजलराज इशाकमिया मोहम" 
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    priority
                    style={{objectFit: 'contain'}}
                  />
                </div>
                <div className="p-3 text-center">
                  <p className="font-medium text-green-800">श्री. फजलराज इशाकमिया मोहम</p>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-60 w-full">
                  <Image 
                    src="/samiti/member16.png" 
                    alt="श्री. ईश्वर वारके" 
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    priority
                    style={{objectFit: 'contain'}}
                  />
                </div>
                <div className="p-3 text-center">
                  <p className="font-medium text-green-800">श्री. ईश्वर वारके</p>
                </div>
              </div>

              {/* Row 5 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-60 w-full">
                  <Image 
                    src="/samiti/member17new.png" 
                    alt="श्री. यशवंत दत्तात्रय जाधव" 
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    priority
                    style={{objectFit: 'contain'}}
                  />
                </div>
                <div className="p-3 text-center">
                  <p className="font-medium text-green-800">श्री. यशवंत दत्तात्रय जाधव</p>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-60 w-full">
                  <Image 
                    src="/samiti/member18new.png" 
                    alt="सचिव" 
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    priority
                    style={{objectFit: 'contain'}}
                  />
                </div>
                <div className="p-3 text-center">
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
