import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h1 className="text-3xl font-bold text-center text-green-800 mb-8">
            दिंडोरी कृषि उत्पन्न बाजार समिती.जि.नाशिक
          </h1>
          <h2 className="text-2xl font-semibold text-center text-green-700 mb-6">
            About Us
          </h2>

          <div className="prose max-w-none">
            <p className="mb-4">
              कृषि उत्पन्न बाजार समिती दिंडोरीची स्थापना 5 जानेवारी 1989 रोजी होवून संस्थापक सभापती
              मा.श्री.गणपतरावजी गंगाधर पाटील साहेब यांचे नेतृत्वाखाली दिंडोरी बाजार समितीचे कामकाजास सुरवात झालेली
              आहे. या बाजार समितीचे कार्यक्षेत्र दिंडोरी तालुक्याचे असून एकूण 157 इतकी गांवे यामध्ये समाविष्ट आहेत.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-green-700 mb-4">Our Mission</h3>
              <p className="mb-4">
                बाजार समितीची उद्दिष्टे खालील प्रमाणे आहेत:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>शेतकर्यांना त्यांच्या उत्पादनांसाठी योग्य बाजारपेठ पुरविणे</li>
                <li>शेतमालाच्या खरेदी-विक्रीसाठी पारदर्शक व्यवस्था निर्माण करणे</li>
                <li>शेतकरी आणि व्यापारी यांच्यामध्ये समन्वय साधून बाजारातील व्यवहारात पारदर्शकता आणणे</li>
                <li>शेतकर्यांचे हित जपून त्यांना उत्पादनांचे योग्य मूल्य मिळवून देणे</li>
                <li>कृषि उत्पादनांची गुणवत्ता वाढविण्यासाठी शेतकर्यांना प्रोत्साहन देणे</li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-green-700 mb-4">Our History</h3>
              <p className="mb-4">
                दिंडोरी बाजार समितीची स्थापना 1989 साली झाली असून गेल्या 35 वर्षांपासून या बाजार समितीने शेतकरी आणि ग्राहक यांच्यामध्ये सेतू म्हणून कार्य केले आहे. आरंभी केवळ निवडक शेतमालाच्या खरेदी-विक्रीसाठी स्थापन झालेल्या या बाजार समितीने आता 74 प्रकारच्या शेतमालाच्या व्यवहारांचे नियमन करून शेतकर्यांना त्यांच्या मालाची योग्य किंमत मिळवून देण्याचे कार्य केले आहे.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-green-700 mb-4">Our Facilities</h3>
              <p className="mb-4">
                बाजार समितीच्या मुख्य व दुय्यम बाजार आवारांचे एकूण 14 हेक्टर 76 आर क्षेत्र असून मुख्य बाजार आवार दिंडोरी व उप बाजार आवार क.वणी व मोहाडी येथे स्वत:च्या मालकीच्या कार्यालयीन इमारती आहेत. दिंडोरी व क.वणी येथे 50 टनी इलेक्ट्रॉनिक वजन काटे, धान्य मार्केटसाठी इलेक्ट्रॉनिक काटे, शेतकरी विश्रामगृह, शौचालय, पिण्याच्या पाण्याची सुविधा, सेल हॉल आदी सुविधा उपलब्ध आहेत.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-green-700 mb-4">Contact Information</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-medium mb-2">मुख्य मार्केट यार्ड:</h4>
                  <p>दिंडोरी कृषि उत्पन्न बाजार समिती</p>
                  <p>निंबवडी रोड, दिंडोरी,</p>
                  <p>ता. दिंडोरी, जि. नाशिक - 422202</p>
                  <p>स्थापना: ५ जानेवारी १९८९</p>
                </div>
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-medium mb-2">संपर्क तपशील:</h4>
                  <p>फोन: (02557) 221097</p>
                  <p>उपबाजार आवार (वणी): (02550) 320542</p>
                  <p>ई-मेल: am_dindori@msamb.com</p>
                  <p>कार्यालयीन वेळ: सोमवार-शनिवार, सकाळी 10:00 ते संध्याकाळी 6:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}