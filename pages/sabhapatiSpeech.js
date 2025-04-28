import React from 'react';

export default function SabhapatiSpeech() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h1 className="text-3xl font-bold text-center text-green-800 mb-8">
            ददडोरी कृषि उत्पन्न बाजार सषमती.षज.नाषिक
          </h1>
          <h2 className="text-2xl font-semibold text-center text-green-700 mb-6">
            सभापती यांचे मनोगत
          </h2>

          <div className="flex flex-col md:flex-row items-center md:items-start mb-8">
            <div className="w-48 h-48 bg-gray-200 rounded-full overflow-hidden flex-shrink-0 mb-4 md:mb-0 md:mr-6">
              <img 
                src="/images/sabhapati.jpg" 
                alt="मा.श्री.प्रशाांत प्रकाश कड - सभापती" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/200x200?text=Sabhapati";
                }}
              />
            </div>
            <div>
              <h3 className="text-xl font-medium text-green-800 mb-2">मा.श्री.प्रशाांत प्रकाश कड</h3>
              <p className="text-gray-700 font-medium mb-1">सभापती</p>
              <p className="text-gray-600 italic mb-4">ददडोरी कृषि उत्पन्न बाजार सषमती</p>
            </div>
          </div>

          <div className="prose max-w-none">
            <div className="mb-6">
              <p className="mb-4">
                नमस्कार,
              </p>
              <p className="mb-4">
                ददडोरी कृषि उत्पन्न बाजार सषमतीच्या वेबसाइटवर आपले स्वागत आहे. आपणास बाजार समितीच्या कार्यपद्धती, उपलब्ध सुविधा आणि प्रगतीचा आढावा याबद्दल माहिती मिळावी या हेतूने ही वेबसाईट विकसित करण्यात आली आहे.
              </p>
              <p className="mb-4">
                दिंडोरी कृषि उत्पन्न बाजार समितीची स्थापना 5 जानेवारी 1989 रोजी झाली असून गेल्या 35 वर्षांपासून या बाजार समितीने शेतकरी आणि ग्राहक यांच्यामध्ये सेतू म्हणून कार्य केले आहे. शेतकऱ्यांच्या हिताचे जतन करत त्यांना त्यांच्या उत्पादनाचे योग्य मूल्य मिळवून देण्यासाठी आम्ही नेहमीच कटिबद्ध आहोत.
              </p>
              <p className="mb-4">
                आमच्या बाजार समितीच्या मुख्य व दुय्यम बाजार आवारात शेतकऱ्यांसाठी आधुनिक सुविधा उपलब्ध करून देण्यात आल्या आहेत. यामध्ये इलेक्ट्रॉनिक वजन काटे, प्रशस्त खरेदी-विक्री स्थळ, शेतकरी विश्रामगृह, शौचालय, पिण्याच्या पाण्याची सुविधा, सेल हॉल इत्यादींचा समावेश आहे.
              </p>
              <p className="mb-4">
                आमची बाजार समिती कांदा, टोमॅटो, भाजीपाला, फळे आणि विविध धान्य प्रकारांसह एकूण 74 शेतमालाच्या व्यवहारांचे नियमन करते. 2022-2023 या आर्थिक वर्षात आमच्या बाजार समितीमध्ये एकूण 21 लाख 92 हजार 638 क्विंटल शेतमालाची आवक झाली, ज्याची किंमत सुमारे 203 कोटी रुपये आहे. हे आमच्या बाजार समितीवरील शेतकऱ्यांचा विश्वास दर्शविते.
              </p>
              <p className="mb-4">
                शेतकऱ्यांच्या हितासाठी आम्ही अनेक भविष्यातील योजना हाती घेत आहोत. यामध्ये मोहाडी येथे कांदा आणि फुले बाजार विकसित करणे, दिंडोरी येथे कृषि मॉल बांधणे, शीतगृह सुविधा निर्माण करणे आणि नवीन उपबाजार स्थापन करणे या बाबींचा समावेश आहे.
              </p>
              <p className="mb-4">
                मी शेतकरी बांधवांना आवाहन करतो की, त्यांनी आपला माल आमच्या बाजार समितीच्या आवारात आणावा आणि त्यांच्या मालाला योग्य भाव मिळवून घ्यावा. आम्ही नेहमीच शेतकऱ्यांच्या सेवेसाठी तत्पर आहोत.
              </p>
              <p className="mb-4">
                आपल्या सूचना, प्रतिक्रिया आणि अपेक्षा आम्हाला नक्की कळवा. आपण सर्वांच्या सहकार्याने आमची बाजार समिती अधिक सक्षम होईल असा विश्वास आहे.
              </p>
              <p className="mb-4">
                धन्यवाद!
              </p>
            </div>

            <div className="text-right">
              <p className="font-medium">आपला विश्वासू,</p>
              <p className="font-medium">प्रशांत प्रकाश कड</p>
              <p>सभापती</p>
              <p>दिंडोरी कृषि उत्पन्न बाजार समिती</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
