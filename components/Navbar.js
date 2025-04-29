
// import { useState } from "react";
// import Link from "next/link";

// const Navbar = () => {
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   return (<>
//   <header className="">
//     <div className=" ml-7 p-5 ">
//       <div className="logo ">
// <img src="https://apmcpimpalgaon.com/img/logo.png" className="ml-60" height={70} width={350} />
//       </div>
//       <div className="heading">

//       </div>
//     </div>
//     <div>
//       <div className="english">

//       </div>
//       <div className="social media">

//       </div>
//     </div>
//   </header>

// <hr />
//     <nav className="  -mt-3 -mb-4  border-pink-800 border-b-5 mx-20">

//       <div className=" mx-auto px-4">
//         <div className="flex justify-center items-center py-3">
//           {/* Logo */}
         

//           {/* Menu Items */}
//           <div className="  flex  border-l-2 ">
//             <Link href="/" className="text-gray-700 p-3 px-12 hover:text-red-600 hover:border-t-2 hover:border-t-red-700">
//               Home
//             </Link>
             
//             {/* Dropdown for About Us */}
//             <div
//               className="relative "
//               onMouseEnter={() => setDropdownOpen(true)}
//               onMouseLeave={() => setDropdownOpen(false)}
//             >
//               <button className="text-gray-700 p-3 px-12 hover:text-red-600 border-l-2 hover:border-t-2 hover:border-t-red-700">About-us</button>
//               {dropdownOpen && (
//                 <div className="absolute left-0   z-50 w-48 bg-white shadow-lg rounded-md border border-gray-300">
//                   <Link href="/about" className="block px-4 py-2 border-b-2 hover:bg-gray-100">
//                     About Us
//                   </Link>
                  
//                   <Link href="/sabha-speech" className="block px-4 py-2 border-b-2 hover:bg-gray-100">
//                     Sabhapati Speech
//                   </Link>
//                   <Link href="/directors-2015-2020" className="block px-4 py-2 border-b-2 hover:bg-gray-100">
//                     Board of Directors 2015-2020
//                   </Link>
//                   <Link href="/directors-2008-2015" className="block px-4 py-2 border-b-2 hover:bg-gray-100">
//                     Board of Directors 2008-2015
//                   </Link>
//                   <Link href="/directors-2023-2028" className="block px-4 py-2 border-b-2 hover:bg-gray-100">
//                     Board of Directors 2023-2028
//                   </Link>
//                   <Link href="/staff" className="block px-4 py-2 border-b-2 hover:bg-gray-100">
//                     Staff
//                   </Link>
//                   <Link href="/social-work" className="block px-4 py-2 border-b-2 hover:bg-gray-100">
//                     Social Work
//                   </Link>
//                   <Link href="/awards" className="block px-4 py-2 border-b-2 hover:bg-gray-100">
//                     Awards
//                   </Link>
//                   <Link href="/future-plans" className="block px-4 py-2 border-b-2 hover:bg-gray-100">
//                     Future Plans
//                   </Link>
//                 </div>
//               )}
//             </div>

//             <Link href="/market" className="text-gray-700 p-3 px-12 hover:text-red-600 border-l-2 hover:border-t-2 hover:border-t-red-700">
//               Market Details
//             </Link>
//             <Link href="/products" className="text-gray-700 p-3 px-12 hover:text-red-600 border-l-2 hover:border-t-2 hover:border-t-red-700">
//               Products
//             </Link>
//             <Link href="/daily-rate" className="text-gray-700 p-3 px-12 hover:text-red-600 border-l-2 hover:border-t-2 hover:border-t-red-700">
//               Daily Rate
//             </Link>
//             <Link href="/gallery" className="text-gray-700 p-3 px-12 hover:text-red-600 border-l-2 hover:border-t-2 hover:border-t-red-700">
//               Gallery
//             </Link>
//             <Link href="/contact" className="text-gray-700 p-3 px-12 hover:text-red-600 border-l-2 border-r-2 hover:border-t-2 hover:border-t-red-700">
//               Contact
//             </Link>
//           </div>

         
//         </div>
//       </div>
//     </nav>
//     </>
//   );
// };

// export default Navbar;



// import { useState } from "react";
// import { useRouter } from "next/router";
// import Link from "next/link";

// const Navbar = () => {
//   const router = useRouter();
//   const [dropdownOpen, setDropdownOpen] = useState(null);

//   return (
//     <>
//       <header className="">
//         <div className="ml-7 p-5">
//           <div className="logo">
//             <img src="https://apmcpimpalgaon.com/img/logo.png" className="ml-60" height={70} width={350} />
//           </div>

//         </div>
//       </header>
//       <hr />
//       <nav className="-mt-3 -mb-4 border-pink-800 border-b-5 mx-20">
//         <div className="mx-auto px-4">
//           <div className="flex justify-center items-center py-3">
//             <div className="flex border-l-2 ">
//               <Link href="/" className={`text-gray-700 p-3 px-12  hover:border-t-2 hover:border-t-red-700  ${router.pathname === "/" ? "" : "border-t-2 border-t-red-700" }`}>
//               <div className="bock"> Home</div>
//                 <div className="bock text-[0.7rem] hover:text-red-600 ">Welcome</div>
//               </Link>
              
//               {/* About Us Dropdown */}
//               <div className="relative" onMouseEnter={() => setDropdownOpen('about')} onMouseLeave={() => setDropdownOpen(null)}>
//                 <button className="text-gray-700 p-3 px-12  border-l-2 hover:border-t-2 hover:border-t-red-700">About-us
//                   <div className="bock text-[0.7rem] hover:text-red-600">information</div>
//                 </button>
//                 {dropdownOpen === 'about' && (
//                   <div className="absolute left-0 z-50 w-48 bg-white shadow-lg  border border-gray-300">
//                     <Link href="/about" className="block px-4 py-2 border-b-2 hover:bg-gray-100">About Us</Link>
//                     <Link href="/sabha-speech" className="block px-4 py-2 border-b-2 hover:bg-gray-100">Sabhapati Speech</Link>
//                     <Link href="/directors-2015-2020" className="block px-4 py-2 border-b-2 hover:bg-gray-100">Board of Directors 2015-2020</Link>
//                     <Link href="/directors-2008-2015" className="block px-4 py-2 border-b-2 hover:bg-gray-100">Board of Directors 2008-2015</Link>
//                     <Link href="/directors-2023-2028" className="block px-4 py-2 border-b-2 hover:bg-gray-100">Board of Directors 2023-2028</Link>
//                     <Link href="/staff" className="block px-4 py-2 border-b-2 hover:bg-gray-100">Staff</Link>
//                     <Link href="/social-work" className="block px-4 py-2 border-b-2 hover:bg-gray-100">Social Work</Link>
//                     <Link href="/awards" className="block px-4 py-2 border-b-2 hover:bg-gray-100">Awards</Link>
//                     <Link href="/future-plans" className="block px-4 py-2 border-b-2 hover:bg-gray-100">Future Plans</Link>
//                   </div>
//                 )}
//               </div>

//               {/* Market Details Dropdown */}
//               <div className="relative" onMouseEnter={() => setDropdownOpen('market')} onMouseLeave={() => setDropdownOpen(null)}>
//                 <button className="text-gray-700 p-3 px-12 hover:text-red-600 border-l-2 hover:border-t-2 hover:border-t-red-700">Market Details
//                 <div className="bock text-[0.7rem] hover:text-red-600">bazar</div>
//                 </button>
//                 {dropdownOpen === 'market' && (
//                   <div className="absolute left-0 z-50 w-48 bg-white shadow-lg  border border-gray-300">
//                     <Link href="/market-overview" className="block px-4 py-2 border-b-2 hover:bg-gray-100">Market Overview</Link>
//                     <Link href="/market-trends" className="block px-4 py-2 border-b-2 hover:bg-gray-100">Market Trends</Link>
//                   </div>
//                 )}
//               </div>

//               <Link href="/products" className="text-gray-700 p-3 px-12 hover:text-red-600 border-l-2 hover:border-t-2 hover:border-t-red-700">
//               <div className="bock"> Products</div>
//                 <div className="bock text-[0.7rem] hover:text-red-600 text-center">Products</div>
//               </Link>
//               <Link href="/daily-rate" className="text-gray-700 p-3 px-12 hover:text-red-600 border-l-2 hover:border-t-2 hover:border-t-red-700">
//               <div className="bock"> Daily Rate</div>
//               <div className="bock text-[0.7rem] hover:text-red-600 text-center">daily rate</div>
//               </Link>
              
//               {/* Gallery Dropdown */}
//               <div className="relative" onMouseEnter={() => setDropdownOpen('gallery')} onMouseLeave={() => setDropdownOpen(null)}>
//                 <button className="text-gray-700 p-3 px-12 hover:text-red-600 border-l-2 hover:border-t-2 hover:border-t-red-700">Gallery
//                 <div className="bock text-[0.7rem] hover:text-red-600">gallery</div>
//                 </button>
//                 {dropdownOpen === 'gallery' && (
//                   <div className="absolute left-0 z-50 w-48 bg-white shadow-lg  border border-gray-300">
//                     <Link href="/photos" className="block px-4 py-2 border-b-2 hover:bg-gray-100">Photos</Link>
//                     <Link href="/videos" className="block px-4 py-2 border-b-2 hover:bg-gray-100">Videos</Link>
//                   </div>
//                 )}
//               </div>

//               <Link href="/contact" className="text-gray-700 p-3 px-12 hover:text-red-600 border-l-2 border-r-2 hover:border-t-2 hover:border-t-red-700">
//               <div className="bock">Contact</div>
//               <div className="bock text-[0.7rem] hover:text-red-600 text-center">contact us</div>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;







import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
// Using individual imports instead of destructuring
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Header with Logo */}
      <header className="flex justify-center items-center p-4 mb-4">
        <div className="flex items-center">
          <div className="relative w-24 h-24 md:w-28 md:h-28">
            <Image 
              src="/logo.jpg" 
              alt="Bajar Logo" 
              width={112} 
              height={112}
              className="rounded-full"
            />
          </div>
          <div className="ml-4 text-center">
            <h1 className="text-xl md:text-2xl font-bold text-green-800">Krishi Utpann Bajar Samiti</h1>
            <p className="text-sm md:text-md text-gray-600">Agricultural Market Committee</p>
          </div>
        </div>
      </header>

      <button className="md:hidden ml-5 mt-2 text-3xl" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        {mobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      <nav className="hidden md:block bg-white shadow-md rounded-lg mx-4 md:mx-10 lg:mx-20">
        <div className="mx-auto px-4">
          <div className="flex justify-center items-center py-2">
            <div className="flex flex-wrap">
          
              {/* Home */}
              <Link
                href="/"
                className={`text-gray-700 p-2 px-6 md:px-8 hover:border-t-2 hover:border-t-red-700 ${
                  router.pathname === "/" ? "border-t-2 border-t-red-700" : ""
                }`}
              >
                Home
              </Link>

              {/* About Us Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setDropdownOpen("about")}
                onMouseLeave={() => setDropdownOpen(null)}
              >
                <button
                  className={`text-gray-700 p-2 px-6 md:px-8 hover:border-t-2 hover:border-t-red-700 ${
                    router.pathname.includes("/about") ? "border-t-2 border-t-red-700" : ""
                  }`}
                >
                  About-us</button>
                {dropdownOpen === "about" && (
                  <div className="absolute left-0 z-50 w-48 bg-white shadow-lg border border-gray-300">
                    <Link href="/about" className="block px-4 py-2 border-b-2 hover:bg-gray-100">
                      About Us
                    </Link>
                    <Link href="/sabhapatiSpeech" className="block px-4 py-2 border-b-2 hover:bg-gray-100">
                      Sabhapati Speech
                    </Link>
                    <Link href="/directorBoard20082015" className="block px-4 py-2 border-b-2 hover:bg-gray-100">
                    Director Board 2008-2015
                    </Link>
                    <Link href="/directorBoard20152020" className="block px-4 py-2 border-b-2 hover:bg-gray-100">
                    Director Board 2015-2020
                    </Link>
                    <Link href="/directorBoard20232028" className="block px-4 py-2 border-b-2 hover:bg-gray-100">
                    Director Board 2023-2028
                    </Link>
                    <Link href="/financialReport" className="block px-4 py-2 border-b-2 hover:bg-gray-100">
                    Financial Report
                    </Link>
                    <Link href="/staff" className="block px-4 py-2 border-b-2 hover:bg-gray-100">
                    Staff
                    </Link>
                    <Link href="/socialWork" className="block px-4 py-2 border-b-2 hover:bg-gray-100">
                    Social Work
                    </Link>
                    <Link href="/awards" className="block px-4 py-2 border-b-2 hover:bg-gray-100">
                    Awards
                    </Link>
                    <Link href="/futurePlans" className="block px-4 py-2 border-b-2 hover:bg-gray-100">
                    Future Plans
                    </Link>
                  </div>
                )}
              </div>

              {/* Market Details Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setDropdownOpen("market")}
                onMouseLeave={() => setDropdownOpen(null)}
              >
                <button
                  className={`text-gray-700 p-2 px-6 md:px-8 hover:text-red-600 hover:border-t-2 hover:border-t-red-700 ${
                    router.pathname.includes("/market") ? "border-t-2 border-t-red-700" : ""
                  }`}
                >
                  Market Details</button>
                {dropdownOpen === "market" && (
                  <div className="absolute left-0 z-50 w-48 bg-white shadow-lg border border-gray-300">
                    <Link href="/marketDetails" className="block px-4 py-2 border-b-2 hover:bg-gray-100">
                    Market Details
                    </Link>
                    <Link href="/marketPremises" className="block px-4 py-2 border-b-2 hover:bg-gray-100">
                    Market Premises
                    </Link>
                    <Link href="/marketArea" className="block px-4 py-2 border-b-2 hover:bg-gray-100">
                      Market Area
                    </Link>
                    <Link href="/marketFeatures" className="block px-4 py-2 border-b-2 hover:bg-gray-100">
                    Market Features
                    </Link>
                    <Link href="/developmentWork" className="block px-4 py-2 border-b-2 hover:bg-gray-100">
                    Development Work
                    </Link>
                    <Link href="/facilities" className="block px-4 py-2 border-b-2 hover:bg-gray-100">
                    Facilities
                    </Link>
                  </div>
                )}
              </div>

              {/* Products */}
              <Link
                href="/products"
                className={`text-gray-700 p-2 px-6 md:px-8 hover:text-red-600 hover:border-t-2 hover:border-t-red-700 ${
                  router.pathname === "/products" ? "border-t-2 border-t-red-700" : ""
                }`}
              >
                Products</Link>

              {/* Daily Rate */}
              <Link
                href="/daily-rate"
                className={`text-gray-700 p-2 px-6 md:px-8 hover:text-red-600 hover:border-t-2 hover:border-t-red-700 ${
                  router.pathname === "/daily-rate" ? "border-t-2 border-t-red-700" : ""
                }`}
              >
                Daily Rate</Link>

              {/* Gallery Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setDropdownOpen("gallery")}
                onMouseLeave={() => setDropdownOpen(null)}
              >
                <button
                  className={`text-gray-700 p-2 px-6 md:px-8 hover:text-red-600 hover:border-t-2 hover:border-t-red-700 ${
                    router.pathname.includes("/gallery") ? "border-t-2 border-t-red-700" : ""
                  }`}
                >
                  Gallery</button>
                {dropdownOpen === "gallery" && (
                  <div className="absolute left-0 z-50 w-48 bg-white shadow-lg border border-gray-300">
                    <Link href="/photosGallery" className="block px-4 py-2 border-b-2 hover:bg-gray-100">
                      Photos Gallery
                    </Link>
                    <Link href="/videosGallery" className="block px-4 py-2 border-b-2 hover:bg-gray-100">
                      Videos Gallery
                    </Link>
                  </div>
                )}
              </div>

              {/* Contact */}
              <Link
                href="/contact"
                className={`text-gray-700 p-2 px-6 md:px-8 hover:text-red-600 hover:border-t-2 hover:border-t-red-700 ${
                  router.pathname === "/contact" ? "border-t-2 border-t-red-700" : ""
                }`}
              >
                Contact</Link>
            </div>
            
          </div>
        </div>
      </nav>

{mobileMenuOpen && (
  <div className="md:hidden bg-white border-t shadow-lg pb-4">
    <div className="flex flex-col p-4 space-y-3">
      <Link href="/" className="p-3 hover:text-red-700 border-b" onClick={() => setMobileMenuOpen(false)}>
        Home
      </Link>

      {/* Mobile Dropdowns */}
      <div className="border-b">
        <button className="p-3 w-full text-left flex justify-between items-center" onClick={() => setDropdownOpen(dropdownOpen === "about" ? null : "about")}>
          <span>About Us</span>
          <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-transform ${dropdownOpen === "about" ? "transform rotate-180" : ""}`} viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
        {dropdownOpen === "about" && (
          <div className="bg-gray-100 pl-4">
            <Link href="/about" className="block px-4 py-2 hover:bg-gray-200" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
            <Link href="/sabhapatiSpeech" className="block px-4 py-2 hover:bg-gray-200" onClick={() => setMobileMenuOpen(false)}>Sabhapati Speech</Link>
            <Link href="/directorBoard20082015" className="block px-4 py-2 hover:bg-gray-200" onClick={() => setMobileMenuOpen(false)}>Director Board 2008-2015</Link>
            <Link href="/directorBoard20152020" className="block px-4 py-2 hover:bg-gray-200" onClick={() => setMobileMenuOpen(false)}>Director Board 2015-2020</Link>
            <Link href="/directorBoard20232028" className="block px-4 py-2 hover:bg-gray-200" onClick={() => setMobileMenuOpen(false)}>Director Board 2023-2028</Link>
            <Link href="/financialReport" className="block px-4 py-2 hover:bg-gray-200" onClick={() => setMobileMenuOpen(false)}>Financial Report</Link>
            <Link href="/staff" className="block px-4 py-2 hover:bg-gray-200" onClick={() => setMobileMenuOpen(false)}>Staff</Link>
            <Link href="/socialWork" className="block px-4 py-2 hover:bg-gray-200" onClick={() => setMobileMenuOpen(false)}>Social Work</Link>
            <Link href="/awards" className="block px-4 py-2 hover:bg-gray-200" onClick={() => setMobileMenuOpen(false)}>Awards</Link>
            <Link href="/futurePlans" className="block px-4 py-2 hover:bg-gray-200" onClick={() => setMobileMenuOpen(false)}>Future Plans</Link>
          </div>
        )}
      </div>

      <div className="border-b">
        <button className="p-3 w-full text-left flex justify-between items-center" onClick={() => setDropdownOpen(dropdownOpen === "market" ? null : "market")}>
          <span>Market Details</span>
          <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-transform ${dropdownOpen === "market" ? "transform rotate-180" : ""}`} viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
        {dropdownOpen === "market" && (
          <div className="bg-gray-100 pl-4">
            <Link href="/marketDetails" className="block px-4 py-2 hover:bg-gray-200" onClick={() => setMobileMenuOpen(false)}>Market Details</Link>
            <Link href="/marketPremises" className="block px-4 py-2 hover:bg-gray-200" onClick={() => setMobileMenuOpen(false)}>Market Premises</Link>
            <Link href="/marketArea" className="block px-4 py-2 hover:bg-gray-200" onClick={() => setMobileMenuOpen(false)}>Market Area</Link>
            <Link href="/marketFeatures" className="block px-4 py-2 hover:bg-gray-200" onClick={() => setMobileMenuOpen(false)}>Market Features</Link>
            <Link href="/developmentWork" className="block px-4 py-2 hover:bg-gray-200" onClick={() => setMobileMenuOpen(false)}>Development Work</Link>
            <Link href="/facilities" className="block px-4 py-2 hover:bg-gray-200" onClick={() => setMobileMenuOpen(false)}>Facilities</Link>
          </div>
        )}
      </div>

      <Link href="/products" className="p-3 hover:text-red-700 border-b" onClick={() => setMobileMenuOpen(false)}>
        Products
      </Link>

      <Link href="/daily-rate" className="p-3 hover:text-red-700 border-b" onClick={() => setMobileMenuOpen(false)}>
        Daily Rate
      </Link>

      <div className="border-b">
        <button className="p-3 w-full text-left flex justify-between items-center" onClick={() => setDropdownOpen(dropdownOpen === "gallery" ? null : "gallery")}>
          <span>Gallery</span>
          <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-transform ${dropdownOpen === "gallery" ? "transform rotate-180" : ""}`} viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
        {dropdownOpen === "gallery" && (
          <div className="bg-gray-100 pl-4">
            <Link href="/photosGallery" className="block px-4 py-2 hover:bg-gray-200" onClick={() => setMobileMenuOpen(false)}>Photos Gallery</Link>
            <Link href="/videosGallery" className="block px-4 py-2 hover:bg-gray-200" onClick={() => setMobileMenuOpen(false)}>Videos Gallery</Link>
          </div>
        )}
      </div>

      <Link href="/contact" className="p-3 hover:text-red-700 border-b" onClick={() => setMobileMenuOpen(false)}>
        Contact
      </Link>
    </div>
  </div>
)}
    </>
  );
};

export default Navbar;

