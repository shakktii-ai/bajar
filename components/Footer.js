import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (<>
     {/* Footer Section */}
     <footer className="bg-green-800 text-white py-12">
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
         {/* Logo and Contact */}
         <div className="col-span-1 md:col-span-1">
           <h3 className="text-xl font-bold mb-4">दिंडोरी कृषि उत्पन्न बाजार समिती</h3>
           <p className="text-sm text-green-100 mb-2">निळवंडी रोड, दिंडोरी,</p>
           <p className="text-sm text-green-100 mb-2">ता. दिंडोरी, जि. नाशिक - 422202</p>
           <p className="text-sm text-green-100 mb-2">स्थापना: ५ जानेवारी १९८९</p>
           <p className="text-sm text-green-100 mt-4 mb-2">फोन: (02557) 221097</p>
           <p className="text-sm text-green-100">ईमेल: am_dindori@msamb.com</p>
         </div>
         
         {/* Quick Links */}
         <div className="col-span-1">
           <h3 className="text-lg font-semibold mb-4">त्वरित लिंक्स</h3>
           <ul className="space-y-2">
             <li><Link href="/" className="text-green-100 hover:text-white transition-colors duration-200">मुख्यपृष्ठ</Link></li>
             <li><Link href="/about" className="text-green-100 hover:text-white transition-colors duration-200">आमच्याबद्दल</Link></li>
             <li><Link href="/board-of-directors" className="text-green-100 hover:text-white transition-colors duration-200">संचालक मंडळ</Link></li>
             <li><Link href="/gallery" className="text-green-100 hover:text-white transition-colors duration-200">गॅलरी</Link></li>
             <li><Link href="/contact" className="text-green-100 hover:text-white transition-colors duration-200">संपर्क करा</Link></li>
           </ul>
         </div>
         
         {/* Services */}
         <div className="col-span-1">
           <h3 className="text-lg font-semibold mb-4">सेवा</h3>
           <ul className="space-y-2">
             <li><Link href="/daily-rate" className="text-green-100 hover:text-white transition-colors duration-200">दैनिक बाजार दर</Link></li>
             <li><Link href="/market-details" className="text-green-100 hover:text-white transition-colors duration-200">बाजार माहिती</Link></li>
             <li><Link href="/financial-reports" className="text-green-100 hover:text-white transition-colors duration-200">आर्थिक अहवाल</Link></li>
             <li><Link href="/facilities" className="text-green-100 hover:text-white transition-colors duration-200">सुविधा</Link></li>
             <li><Link href="/future-plans" className="text-green-100 hover:text-white transition-colors duration-200">भविष्यातील योजना</Link></li>
           </ul>
         </div>
         
         {/* Working Hours */}
         <div className="col-span-1">
           <h3 className="text-lg font-semibold mb-4">कामाची वेळ</h3>
           <ul className="space-y-2">
             <li className="text-green-100">सोमवार - शनिवार: सकाळी ७:00 - संध्याकाळी ७:00</li>
             <li className="text-green-100">रविवार: सकाळी ७:00 - दुपारी १६:00</li>
           </ul>
           
         </div>
       </div>
       
       <div className="border-t border-green-700 mt-10 pt-6 text-center text-green-200">
         <p>&copy; {new Date().getFullYear()} दिंडोरी कृषि उत्पन्न बाजार समिती - सर्व हक्क राखीव</p>
       </div>
     </div>
   </footer>
   </>
  );
};

export default Footer;
