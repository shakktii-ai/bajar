
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
//                     <Link href="/interviews" className="block px-4 py-2 border-b-2 hover:bg-gray-100">Interviews</Link>
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







// import { useState } from "react";
// import { useRouter } from "next/router";
// import Link from "next/link";
// import Image from "next/image";
// // Using individual imports instead of destructuring
// import { FaBars } from "react-icons/fa";
// import { FaTimes } from "react-icons/fa";

// const Navbar = () => {
//   const router = useRouter();
//   const [products, setProducts] = useState([]);
//   const [dropdownOpen, setDropdownOpen] = useState(null);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const fetchProducts = async () => {
//     try {
//       // Get today's date in YYYY-MM-DD format for API filtering
//       const today = new Date().toISOString().split('T')[0];
      
//       // First, try to get products from DailyProducts with today's date
//       const res = await fetch(`/api/addAndGetProducts?date=${today}`);
//       let data = await res.json();
      
//       // If no data in DailyProducts, fetch from Products and filter by today's date
//       if (!data || data.length === 0) {
//         const productsRes = await fetch('/api/addAndGetProducts');
//         const allProducts = await productsRes.json();
        
//         // Filter products created today
//         data = allProducts.filter(product => {
//           if (!product.createdAt) return false;
//           const productDate = new Date(product.createdAt);
//           return productDate.toISOString().split('T')[0] === today;
//         });
//       }
      
//       console.log('Today\'s products:', data);
//       setProducts(data); // Set today's products
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   return (
//     <>
//       {/* Header with Logo */}
//       <header className="flex justify-center items-center p-4 mb-4">
//         <div className="flex items-center">
//           <div className="relative w-24 h-24 md:w-28 md:h-28">
//             <Image 
//               src="/logo.jpg" 
//               alt="Bajar Logo" 
//               width={112} 
//               height={112}
//               className="rounded-full"
//             />
//           </div>
//           <div className="ml-4 text-center">
//             <h1 className="text-xl md:text-2xl font-bold text-green-800">Krushi Utpann Bajar Samiti</h1>
//             <p className="text-sm md:text-md text-gray-600">Agricultural Market Committee</p>
//           </div>
//         </div>
//       </header>

//       {Array.isArray(products) && products.length > 0 && (
//         <div className="bg-green-100 py-2 overflow-hidden whitespace-nowrap border-y border-green-300">
//           <div className="animate-marquee flex gap-8 px-4 text-green-800 font-medium text-sm md:text-base">
//             {products.map((product) => {
//               const isFromDailyProducts = product.product && product.product._id;
//               const productData = isFromDailyProducts ? product.product : product;
//               const name = productData.productNameMarathi || productData.productNameEnglish;
//               const min = product.PriceMin;
//               const max = product.PriceMax;
//               return (
//                 <span key={product._id} className="flex-shrink-0">
//                   {name}: ₹{min} - ₹{max}
//                 </span>
//               );
//             })}
//           </div>
//         </div>
//       )}

//       <button className="md:hidden ml-5 mt-2 text-3xl" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
//         {mobileMenuOpen ? <FaTimes /> : <FaBars />}
//       </button>



//       {/* Hamburger Button for Mobile */}
      


//       <nav className="hidden md:block bg-white shadow-md rounded-lg mx-4 md:mx-10 lg:mx-20">
//         <div className="mx-auto px-4">
//           <div className="flex justify-center items-center py-2">
//             <div className="flex flex-wrap">
          
//               {/* Home */}
//               <Link
//                 href="/"
//                 className={`text-gray-700 p-2 px-6 md:px-8 hover:border-t-2 hover:border-t-red-700 ${
//                   router.pathname === "/" ? "border-t-2 border-t-red-700" : ""
//                 }`}
//               >
//                 Home
//               </Link>

//               {/* About Us Dropdown */}
//               <div
//                 className="relative"
//                 onMouseEnter={() => setDropdownOpen("about")}
//                 onMouseLeave={() => setDropdownOpen(null)}
//               >
//                 <button
//                   className={`text-gray-700 p-2 px-6 md:px-8 hover:border-t-2 hover:border-t-red-700 ${
//                     router.pathname.includes("/about") ? "border-t-2 border-t-red-700" : ""
//                   }`}
//                 >
//                   About-us</button>
//                 {dropdownOpen === "about" && (
//                   <div className="absolute left-0 z-50 w-48 bg-white shadow-lg border border-gray-300">
//                     <Link href="/about" className="block px-4 py-2 border-b-2 hover:bg-gray-100">
//                       About Us
//                     </Link>
//                     <Link href="/sabhapatiSpeech" className="block px-4 py-2 border-b-2 hover:bg-gray-100">
//                       Sabhapati Speech
//                     </Link>
//                     <Link href="/directorBoard20232028" className="block px-4 py-2 border-b-2 hover:bg-gray-100">
//                     Director Board 2023-2028
//                     </Link>
//                     <Link href="/financialReport" className="block px-4 py-2 border-b-2 hover:bg-gray-100">
//                     Financial Report
//                     </Link>
//                     <Link href="/staff" className="block px-4 py-2 border-b-2 hover:bg-gray-100">
//                     Staff
//                     </Link>
//                     <Link href="/socialWork" className="block px-4 py-2 border-b-2 hover:bg-gray-100">
//                     Social Work
//                     </Link>
//                     <Link href="/awards" className="block px-4 py-2 border-b-2 hover:bg-gray-100">
//                     Awards
//                     </Link>
//                     <Link href="/futurePlans" className="block px-4 py-2 border-b-2 hover:bg-gray-100">
//                     Future Plans
//                     </Link>
//                   </div>
//                 )}
//               </div>

//               {/* Market Details Dropdown */}
//               <div
//                 className="relative"
//                 onMouseEnter={() => setDropdownOpen("market")}
//                 onMouseLeave={() => setDropdownOpen(null)}
//               >
//                 <button
//                   className={`text-gray-700 p-2 px-6 md:px-8 hover:text-red-600 hover:border-t-2 hover:border-t-red-700 ${
//                     router.pathname.includes("/market") ? "border-t-2 border-t-red-700" : ""
//                   }`}
//                 >
//                   Market Details</button>
//                 {dropdownOpen === "market" && (
//                   <div className="absolute left-0 z-50 w-48 bg-white shadow-lg border border-gray-300">
//                     <Link href="/marketDetails" className="block px-4 py-2 border-b-2 hover:bg-gray-100">
//                     Market Details
//                     </Link>
//                     {/* <Link href="/marketPremises" className="block px-4 py-2 border-b-2 hover:bg-gray-100">
//                     Market Premises
//                     </Link>
//                     <Link href="/marketArea" className="block px-4 py-2 border-b-2 hover:bg-gray-100">
//                       Market Area
//                     </Link>
//                     <Link href="/marketFeatures" className="block px-4 py-2 border-b-2 hover:bg-gray-100">
//                     Market Features
//                     </Link>
//                     <Link href="/developmentWork" className="block px-4 py-2 border-b-2 hover:bg-gray-100">
//                     Development Work
//                     </Link>
//                     <Link href="/facilities" className="block px-4 py-2 border-b-2 hover:bg-gray-100">
//                     Facilities
//                     </Link> */}
//                   </div>
//                 )}
//               </div>

//               {/* Products */}
//               <Link
//                 href="/products"
//                 className={`text-gray-700 p-2 px-6 md:px-8 hover:text-red-600 hover:border-t-2 hover:border-t-red-700 ${
//                   router.pathname === "/products" ? "border-t-2 border-t-red-700" : ""
//                 }`}
//               >
//                 Products</Link>

//               {/* Daily Rate */}
//               <Link
//                 href="/daily-rate"
//                 className={`text-gray-700 p-2 px-6 md:px-8 hover:text-red-600 hover:border-t-2 hover:border-t-red-700 ${
//                   router.pathname === "/daily-rate" ? "border-t-2 border-t-red-700" : ""
//                 }`}
//               >
//                 Daily Rate</Link>

//               {/* Gallery Dropdown */}
//               <div
//                 className="relative"
//                 onMouseEnter={() => setDropdownOpen("gallery")}
//                 onMouseLeave={() => setDropdownOpen(null)}
//               >
//                 <button
//                   className={`text-gray-700 p-2 px-6 md:px-8 hover:text-red-600 hover:border-t-2 hover:border-t-red-700 ${
//                     router.pathname.includes("/gallery") ? "border-t-2 border-t-red-700" : ""
//                   }`}
//                 >
//                   Gallery</button>
//                 {dropdownOpen === "gallery" && (
//                   <div className="absolute left-0 z-50 w-48 bg-white shadow-lg border border-gray-300">
//                     <Link href="/photosGallery" className="block px-4 py-2 border-b-2 hover:bg-gray-100">
//                       Photos Gallery
//                     </Link>
//                     <Link href="/videosGallery" className="block px-4 py-2 border-b-2 hover:bg-gray-100">
//                       Videos Gallery
//                     </Link>
//                     <Link href="/interviews" className="block px-4 py-2 border-b-2 hover:bg-gray-100">
//                       Interviews
//                     </Link>
//                   </div>
//                 )}
//               </div>

//               {/* Blogs */}
//               <Link
//                 href="/blogs"
//                 className={`text-gray-700 p-2 px-6 md:px-8 hover:text-red-600 hover:border-t-2 hover:border-t-red-700 ${
//                   router.pathname === "/blogs" ? "border-t-2 border-t-red-700" : ""
//                 }`}
//               >
//                 Blogs</Link>
                
//               {/* Contact */}
//               <Link
//                 href="/contact"
//                 className={`text-gray-700 p-2 px-6 md:px-8 hover:text-red-600 hover:border-t-2 hover:border-t-red-700 ${
//                   router.pathname === "/contact" ? "border-t-2 border-t-red-700" : ""
//                 }`}
//               >
//                 Contact</Link>
//             </div>
            
//           </div>
//         </div>
//       </nav>

// {mobileMenuOpen && (
//   <div className="md:hidden bg-white border-t shadow-lg pb-4">
//     <div className="flex flex-col p-4 space-y-3">
//       <Link href="/" className="p-3 hover:text-red-700 border-b" onClick={() => setMobileMenuOpen(false)}>
//         Home
//       </Link>

//       {/* Mobile Dropdowns */}
//       <div className="border-b">
//         <button className="p-3 w-full text-left flex justify-between items-center" onClick={() => setDropdownOpen(dropdownOpen === "about" ? null : "about")}>
//           <span>About Us</span>
//           <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-transform ${dropdownOpen === "about" ? "transform rotate-180" : ""}`} viewBox="0 0 20 20" fill="currentColor">
//             <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//           </svg>
//         </button>
//         {dropdownOpen === "about" && (
//           <div className="bg-gray-100 pl-4">
//             <Link href="/about" className="block px-4 py-2 hover:bg-gray-200" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
//             <Link href="/sabhapatiSpeech" className="block px-4 py-2 hover:bg-gray-200" onClick={() => setMobileMenuOpen(false)}>Sabhapati Speech</Link>
//             <Link href="/directorBoard20232028" className="block px-4 py-2 hover:bg-gray-200" onClick={() => setMobileMenuOpen(false)}>Director Board 2023-2028</Link>
//             <Link href="/financialReport" className="block px-4 py-2 hover:bg-gray-200" onClick={() => setMobileMenuOpen(false)}>Financial Report</Link>
//             <Link href="/staff" className="block px-4 py-2 hover:bg-gray-200" onClick={() => setMobileMenuOpen(false)}>Staff</Link>
//             <Link href="/socialWork" className="block px-4 py-2 hover:bg-gray-200" onClick={() => setMobileMenuOpen(false)}>Social Work</Link>
//             <Link href="/awards" className="block px-4 py-2 hover:bg-gray-200" onClick={() => setMobileMenuOpen(false)}>Awards</Link>
//             <Link href="/futurePlans" className="block px-4 py-2 hover:bg-gray-200" onClick={() => setMobileMenuOpen(false)}>Future Plans</Link>
//           </div>
//         )}
//       </div>

//       <div className="border-b">
//         <button className="p-3 w-full text-left flex justify-between items-center" onClick={() => setDropdownOpen(dropdownOpen === "market" ? null : "market")}>
//           <span>Market Details</span>
//           <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-transform ${dropdownOpen === "market" ? "transform rotate-180" : ""}`} viewBox="0 0 20 20" fill="currentColor">
//             <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//           </svg>
//         </button>
//         {dropdownOpen === "market" && (
//           <div className="bg-gray-100 pl-4">
//             <Link href="/marketDetails" className="block px-4 py-2 hover:bg-gray-200" onClick={() => setMobileMenuOpen(false)}>Market Details</Link>
//             {/* <Link href="/marketPremises" className="block px-4 py-2 hover:bg-gray-200" onClick={() => setMobileMenuOpen(false)}>Market Premises</Link>
//             <Link href="/marketArea" className="block px-4 py-2 hover:bg-gray-200" onClick={() => setMobileMenuOpen(false)}>Market Area</Link>
//             <Link href="/marketFeatures" className="block px-4 py-2 hover:bg-gray-200" onClick={() => setMobileMenuOpen(false)}>Market Features</Link>
//             <Link href="/developmentWork" className="block px-4 py-2 hover:bg-gray-200" onClick={() => setMobileMenuOpen(false)}>Development Work</Link>
//             <Link href="/facilities" className="block px-4 py-2 hover:bg-gray-200" onClick={() => setMobileMenuOpen(false)}>Facilities</Link> */}
//           </div>
//         )}
//       </div>

//       <Link href="/products" className="p-3 hover:text-red-700 border-b" onClick={() => setMobileMenuOpen(false)}>
//         Products
//       </Link>

//       <Link href="/daily-rate" className="p-3 hover:text-red-700 border-b" onClick={() => setMobileMenuOpen(false)}>
//         Daily Rate
//       </Link>

//       <Link href="/blogs" className="p-3 hover:text-red-700 border-b" onClick={() => setMobileMenuOpen(false)}>
//         Blogs
//       </Link>

//       <div className="border-b">
//         <button className="p-3 w-full text-left flex justify-between items-center" onClick={() => setDropdownOpen(dropdownOpen === "gallery" ? null : "gallery")}>
//           <span>Gallery</span>
//           <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-transform ${dropdownOpen === "gallery" ? "transform rotate-180" : ""}`} viewBox="0 0 20 20" fill="currentColor">
//             <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//           </svg>
//         </button>
//         {dropdownOpen === "gallery" && (
//           <div className="bg-gray-100 pl-4">
//             <Link href="/photosGallery" className="block px-4 py-2 hover:bg-gray-200" onClick={() => setMobileMenuOpen(false)}>Photos Gallery</Link>
//             <Link href="/videosGallery" className="block px-4 py-2 hover:bg-gray-200" onClick={() => setMobileMenuOpen(false)}>Videos Gallery</Link>
//             <Link href="/interviews" className="block px-4 py-2 hover:bg-gray-200" onClick={() => setMobileMenuOpen(false)}>Interviews</Link>
//           </div>
//         )}
//       </div>

//       <Link href="/contact" className="p-3 hover:text-red-700 border-b" onClick={() => setMobileMenuOpen(false)}>
//         Contact
//       </Link>
//     </div>
//   </div>
// )}
//     </>
//   );
// };

// export default Navbar;


// import { useState, useEffect } from "react";
// import { useRouter } from "next/router";
// import Link from "next/link";
// import Image from "next/image";
// import { FaBars, FaTimes } from "react-icons/fa";

// const timeAgo = (date) => {
//   const now = new Date();
//   const past = new Date(date);
//   const diff = Math.floor((now - past) / (1000 * 60 * 60)); // hours
//   if (diff < 1) return "आत्ता";
//   if (diff < 24) return `${diff} तासांपूर्वी`;
//   const days = Math.floor(diff / 24);
//   return `${days} दिवसांपूर्वी`;
// };

// const calculateAvgPrice = (max, min) => {
//   return Math.round((Number(max) + Number(min)) / 2);
// };

// const Navbar = () => {
//   const router = useRouter();
//   const [products, setProducts] = useState([]);
//   const [dropdownOpen, setDropdownOpen] = useState(null);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const fetchProducts = async () => {
//     try {
//       const today = new Date().toISOString().split("T")[0];

//       const res = await fetch(`/api/addAndGetProducts?date=${today}`);
//       let data = await res.json();

//       if (!data || data.length === 0) {
//         const productsRes = await fetch("/api/addAndGetProducts");
//         const allProducts = await productsRes.json();
//         data = allProducts.filter((product) => {
//           if (!product.createdAt) return false;
//           const productDate = new Date(product.createdAt);
//           return productDate.toISOString().split("T")[0] === today;
//         });
//       }

//       setProducts(data);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   return (
//     <>
//       {/* Header with Logo */}
//       <header className="flex justify-center items-center p-4 mb-4">
//         <div className="flex items-center">
//           <div className="relative w-24 h-24 md:w-28 md:h-28">
//             <Image
//               src="/logo.jpg"
//               alt="Bajar Logo"
//               width={112}
//               height={112}
//               className="rounded-full"
//             />
//           </div>
//           <div className="ml-4 text-center">
//             <h1 className="text-xl md:text-2xl font-bold text-green-800">
//               Krushi Utpann Bajar Samiti
//             </h1>
//             <p className="text-sm md:text-md text-gray-600">
//               Agricultural Market Committee
//             </p>
//           </div>
//         </div>
//       </header>

//       {/* Marquee for Daily Products */}
//       {Array.isArray(products) && products.length > 0 && (
//   <div className="bg-green-50 py-6 px-4 border-y border-green-300">
//     <h2 className="text-xl md:text-2xl font-bold text-green-800 mb-4 text-center">
//       आजचे बाजार दर
//     </h2>
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto">
//       {products.map((product) => {
//         const isFromDailyProducts = product.product && product.product._id;
//         const productData = isFromDailyProducts ? product.product : product;
//         const priceMin = product.PriceMin;
//         const priceMax = product.PriceMax;
//         const timestamp = isFromDailyProducts ? product.date : product.createdAt;

//         const timeAgo = (date) => {
//           const now = new Date();
//           const past = new Date(date);
//           const diff = Math.floor((now - past) / (1000 * 60 * 60));
//           if (diff < 1) return "आत्ता";
//           if (diff < 24) return `${diff} तासांपूर्वी`;
//           return `${Math.floor(diff / 24)} दिवसांपूर्वी`;
//         };

//         const calculateAvgPrice = (max, min) =>
//           Math.round((Number(max) + Number(min)) / 2);

//         return (
//           <div
//             key={product._id}
//             className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 p-4"
//           >
//             <div className="flex gap-2 items-center">
//               <span className="bg-green-700 text-white text-xs md:text-sm px-2 md:px-3 py-1 rounded-md">
//                 {timeAgo(timestamp)}
//               </span>
//               <span className="hidden md:inline-block bg-green-700 text-white text-xs md:text-sm px-2 md:px-3 py-1 rounded-md">
//                 {typeof timestamp === "string"
//                   ? timestamp.split("T")[0]
//                   : new Date(timestamp).toISOString().split("T")[0]}
//               </span>
//             </div>
//             <div className="flex flex-col sm:flex-row justify-between gap-3 mt-3">
//               {/* Product Info */}
//               <div className="flex-1">
//                 <h3 className="text-lg md:text-xl font-bold text-gray-800">
//                   {productData.productNameMarathi || productData.productNameEnglish}
//                 </h3>
//                 <p className="text-gray-500 text-sm md:text-base">
//                   {productData.productNameEnglish}
//                 </p>
//               </div>
//               {/* Price Details */}
//               <div className="bg-gray-50 p-3 rounded-lg text-right">
//                 <p className="text-gray-500 text-sm md:text-base">
//                   अधिकतम: <span className="text-red-600 font-bold">₹{priceMax}</span>
//                 </p>
//                 <p className="text-gray-500 text-sm md:text-base">
//                   न्यूनतम: <span className="text-green-600 font-bold">₹{priceMin}</span>
//                 </p>
//                 <p className="text-gray-700 text-sm md:text-base mt-1">
//                   औसत:{" "}
//                   <span className="text-gray-800 font-bold">
//                     ₹{calculateAvgPrice(priceMax, priceMin)}
//                   </span>
//                 </p>
//                 <p className="text-xs text-gray-400 mt-1">
//                   (प्रति {productData.ProductInUnit || "किलो"})
//                 </p>
//               </div>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   </div>
// )}


//       {/* Hamburger Button for Mobile */}
//       <button
//         className="md:hidden ml-5 mt-2 text-3xl"
//         onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//       >
//         {mobileMenuOpen ? <FaTimes /> : <FaBars />}
//       </button>

//       {/* Download Button */}
//       <div className="absolute right-4 top-4 z-50">
//         <a 
//           href="/download-site.pdf" 
//           target="_blank" 
//           rel="noopener noreferrer"
//       {/* Desktop Navbar */}
//       <nav className="hidden md:block bg-white shadow-md rounded-lg mx-4 md:mx-10 lg:mx-20">
//         <div className="mx-auto px-4">
//           <div className="flex justify-center items-center py-2">
//             <div className="flex flex-wrap">
//               {/* Single Links */}
//               <Link
//                 href="/"
//                 className={`text-gray-700 p-2 px-6 md:px-8 hover:border-t-2 hover:border-t-red-700 ${
//                   router.pathname === "/" ? "border-t-2 border-t-red-700" : ""
//                 }`}
//               >
//                 Home
//               </Link>

//               {/* About Us Dropdown */}
//               <div
//                 className="relative"
//                 onMouseEnter={() => setDropdownOpen("about")}
//                 onMouseLeave={() => setDropdownOpen(null)}
//               >
//                 <button
//                   className={`text-gray-700 p-2 px-6 md:px-8 hover:border-t-2 hover:border-t-red-700 ${
//                     router.pathname.includes("/about")
//                       ? "border-t-2 border-t-red-700"
//                       : ""
//                   }`}
//                 >
//                   About Us
//                 </button>
//                 {dropdownOpen === "about" && (
//                   <div className="absolute left-0 z-50 w-48 bg-white shadow-lg border border-gray-300">
//                     {[
//                       ["About Us", "/about"],
//                       ["Sabhapati Speech", "/sabhapatiSpeech"],
//                       ["Director Board 2023-2028", "/directorBoard20232028"],
//                       ["Financial Report", "/financialReport"],
//                       ["Staff", "/staff"],
//                       ["Social Work", "/socialWork"],
//                       ["Awards", "/awards"],
//                       ["Future Plans", "/futurePlans"],
//                     ].map(([label, path]) => (
//                       <Link
//                         key={path}
//                         href={path}
//                         className="block px-4 py-2 border-b hover:bg-gray-100"
//                       >
//                         {label}
//                       </Link>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               {/* Market Details Dropdown */}
//               <div
//                 className="relative"
//                 onMouseEnter={() => setDropdownOpen("market")}
//                 onMouseLeave={() => setDropdownOpen(null)}
//               >
//                 <button
//                   className={`text-gray-700 p-2 px-6 md:px-8 hover:border-t-2 hover:border-t-red-700 ${
//                     router.pathname.includes("/market")
//                       ? "border-t-2 border-t-red-700"
//                       : ""
//                   }`}
//                 >
//                   Market Details
//                 </button>
//                 {dropdownOpen === "market" && (
//                   <div className="absolute left-0 z-50 w-48 bg-white shadow-lg border border-gray-300">
//                     <Link
//                       href="/marketDetails"
//                       className="block px-4 py-2 border-b hover:bg-gray-100"
//                     >
//                       Market Details
//                     </Link>
//                   </div>
//                 )}
//               </div>

//               {/* Other Pages */}
//               <Link
//                 href="/products"
//                 className={`text-gray-700 p-2 px-6 md:px-8 hover:border-t-2 hover:border-t-red-700 ${
//                   router.pathname === "/products"
//                     ? "border-t-2 border-t-red-700"
//                     : ""
//                 }`}
//               >
//                 Products
//               </Link>
//               <Link
//                 href="/daily-rate"
//                 className={`text-gray-700 p-2 px-6 md:px-8 hover:border-t-2 hover:border-t-red-700 ${
//                   router.pathname === "/daily-rate"
//                     ? "border-t-2 border-t-red-700"
//                     : ""
//                 }`}
//               >
//                 Daily Rate
//               </Link>

//               {/* Gallery Dropdown */}
//               <div
//                 className="relative"
//                 onMouseEnter={() => setDropdownOpen("gallery")}
//                 onMouseLeave={() => setDropdownOpen(null)}
//               >
//                 <button
//                   className={`text-gray-700 p-2 px-6 md:px-8 hover:border-t-2 hover:border-t-red-700 ${
//                     router.pathname.includes("/gallery")
//                       ? "border-t-2 border-t-red-700"
//                       : ""
//                   }`}
//                 >
//                   Gallery
//                 </button>
//                 {dropdownOpen === "gallery" && (
//                   <div className="absolute left-0 z-50 w-48 bg-white shadow-lg border border-gray-300">
//                     <Link
//                       href="/photosGallery"
//                       className="block px-4 py-2 border-b hover:bg-gray-100"
//                     >
//                       Photos Gallery
//                     </Link>
//                     <Link
//                       href="/videosGallery"
//                       className="block px-4 py-2 border-b hover:bg-gray-100"
//                     >
//                       Videos Gallery
//                     </Link>
//                     <Link
//                       href="/interviews"
//                       className="block px-4 py-2 border-b hover:bg-gray-100"
//                     >
//                       Interviews
//                     </Link>
//                   </div>
//                 )}
//               </div>

//               <Link
//                 href="/blogs"
//                 className={`text-gray-700 p-2 px-6 md:px-8 hover:border-t-2 hover:border-t-red-700 ${
//                   router.pathname === "/blogs"
//                     ? "border-t-2 border-t-red-700"
//                     : ""
//                 }`}
//               >
//                 Blogs
//               </Link>
//               <Link
//                 href="/contact"
//                 className={`text-gray-700 p-2 px-6 md:px-8 hover:border-t-2 hover:border-t-red-700 ${
//                   router.pathname === "/contact"
//                     ? "border-t-2 border-t-red-700"
//                     : ""
//                 }`}
//               >
//                 Contact
//               </Link>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Mobile Menu */}
//       {mobileMenuOpen && (
//         <div className="md:hidden bg-white border-t shadow-lg pb-4">
//           <div className="flex flex-col p-4 space-y-3">
//             <Link
//               href="/"
//               className="p-3 hover:text-red-700 border-b"
//               onClick={() => setMobileMenuOpen(false)}
//             >
//               Home
//             </Link>

//             {/* Mobile Dropdown: About Us */}
//             <DropdownMobile
//               title="About Us"
//               open={dropdownOpen === "about"}
//               toggle={() =>
//                 setDropdownOpen(dropdownOpen === "about" ? null : "about")
//               }
//               links={[
//                 ["/about", "About Us"],
//                 ["/sabhapatiSpeech", "Sabhapati Speech"],
//                 ["/directorBoard20232028", "Director Board 2023-2028"],
//                 ["/financialReport", "Financial Report"],
//                 ["/staff", "Staff"],
//                 ["/socialWork", "Social Work"],
//                 ["/awards", "Awards"],
//                 ["/futurePlans", "Future Plans"],
//               ]}
//               closeMenu={() => setMobileMenuOpen(false)}
//             />

//             {/* Mobile Dropdown: Market */}
//             <DropdownMobile
//               title="Market Details"
//               open={dropdownOpen === "market"}
//               toggle={() =>
//                 setDropdownOpen(dropdownOpen === "market" ? null : "market")
//               }
//               links={[["/marketDetails", "Market Details"]]}
//               closeMenu={() => setMobileMenuOpen(false)}
//             />

//             {/* Other Links */}
//             {[
//               ["/products", "Products"],
//               ["/daily-rate", "Daily Rate"],
//               ["/photosGallery", "Photos Gallery"],
//               ["/videosGallery", "Videos Gallery"],
//               ["/interviews", "Interviews"],
//               ["/blogs", "Blogs"],
//               ["/contact", "Contact"],
//             ].map(([href, label]) => (
//               <Link
//                 key={href}
//                 href={href}
//                 className="p-3 hover:text-red-700 border-b"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 {label}
//               </Link>
//             ))}
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// const DropdownMobile = ({ title, open, toggle, links, closeMenu }) => (
//   <div className="border-b">
//     <button
//       className="p-3 w-full text-left flex justify-between items-center"
//       onClick={toggle}
//     >
//       <span>{title}</span>
//       <svg
//         className={`h-5 w-5 transition-transform ${
//           open ? "rotate-180" : ""
//         }`}
//         viewBox="0 0 20 20"
//         fill="currentColor"
//       >
//         <path
//           fillRule="evenodd"
//           d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 
//           1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//           clipRule="evenodd"
//         />
//       </svg>
//     </button>
//     {open && (
//       <div className="bg-gray-100 pl-4">
//         {links.map(([href, label]) => (
//           <Link
//             key={href}
//             href={href}
//             className="block px-4 py-2 hover:bg-gray-200"
//             onClick={closeMenu}
//           >
//             {label}
//           </Link>
//         ))}
//       </div>
//     )}
//   </div>
// );

// export default Navbar;


import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

// Utility Functions


const calculateAvgPrice = (max, min) =>
  Math.round((Number(max) + Number(min)) / 2);

// Dropdown component for mobile view
const DropdownMobile = ({ title, open, toggle, links, closeMenu }) => (
  <div>
    <button onClick={toggle} className="p-3 font-medium border-b w-full text-left">
      {title}
    </button>
    {open && (
      <div className="pl-4 bg-gray-50">
        {links.map(([href, label]) => (
          <Link
            key={href}
            href={href}
            className="block py-2 text-sm text-gray-700 hover:text-red-700"
            onClick={closeMenu}
          >
            {label}
          </Link>
        ))}
      </div>
    )}
  </div>
);

const Navbar = () => {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const fetchProducts = async () => {
    try {
      const today = new Date().toISOString().split("T")[0];
      const res = await fetch(`/api/addAndGetProducts?date=${today}`);
      let data = await res.json();

      if (!data || data.length === 0) {
        const fallbackRes = await fetch("/api/addAndGetProducts");
        const fallbackData = await fallbackRes.json();
        data = fallbackData.filter((product) => {
          if (!product.createdAt) return false;
          return new Date(product.createdAt).toISOString().split("T")[0] === today;
        });
      }

      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      {/* Logo, Title, and Download Button */}
      <header className="flex justify-center items-center p-4 mb-4 relative">
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
            <h1 className="text-xl md:text-2xl font-bold text-green-800">
              Krushi Utpann Bajar Samiti
            </h1>
            <p className="text-sm md:text-md text-gray-600">
              Agricultural Market Committee
            </p>
          </div>
        </div>
        {/* Download Button */}
        {/* <div className="absolute right-4 top-4 z-50">
          <button 
            onClick={() => {
              // Create Chrome shortcut
              const url = window.location.origin;
              const shortcutName = 'Krushi Utpann Bajar Samiti';
              navigator.clipboard.writeText(url).then(() => {
                alert('URL copied to clipboard! You can now create a shortcut manually or use Chrome settings to create a site shortcut.');
              }).catch(err => {
                console.error('Failed to copy URL:', err);
                alert('Failed to copy URL. Please copy the URL manually: ' + url);
              });
            }}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            <span className="mr-2">Create Shortcut</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div> */}
      </header>

      {/* Product Rates Section */}
      <style jsx>{`
  .marquee-container {
    background: transparent;
    overflow: hidden;
    
    
  }

  .scrolling-marquee {
    display: flex;
    gap: 1rem;
    animation: marquee 60s linear infinite; /* Slower speed */
    flex-wrap: nowrap;
    white-space: nowrap;
    width: max-content;
  }

  .product-card {
    background: transparent;
    border-radius: 12px;
    padding: 0.5rem;
    min-width: 160px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    transition: transform 2s ease;
    flex-shrink: 0;
  }

  .product-card:hover {
    transform: translateY(-2px);
  }

  .product-card .content {
    display: flex;
    flex-direction: column;
  }

  .product-card h3 {
    font-size: 0.875rem;
    color: #1f2937;
    font-weight: 600;
    line-height: 1.2;
  }

  .product-card p {
    font-size: 0.75rem;
    color: #6b7280;
    margin: 0;
  }

  @keyframes marquee {
    0% {
      transform: translateX(100%);
    }
    99% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%); /* Immediately resets to the start */
    }
  }
`}</style>

<div className="bg-green-300 overflow-hidden">
  <div className="marquee-container">
    <div className="scrolling-marquee">
      {Array.isArray(products) && products.length > 0 && (
        <>
          {[...Array(Math.ceil(30 / products.length))] // Repeat enough to fill all screens
            .flatMap((_, repeatIndex) =>
              products.map((product, index) => {
                const isFromDailyProducts = product.product && product.product._id;
                const productData = isFromDailyProducts ? product.product : product;
                const priceMin = product.PriceMin;
                const priceMax = product.PriceMax;

                return (
                  <div
                    key={`${product._id}-${index}-${repeatIndex}`}
                    className="product-card"
                  >
                    <div className="content text-center">
                      <h3>
                        {productData.productNameMarathi || productData.productNameEnglish}
                      </h3>
                    </div>
                    <div className="bg-transparent rounded-lg">
                      <p className="text-gray-500 text-xxs md:text-xs">
                        अधिकतम: <span className="text-red-600 font-bold">₹{priceMax}</span>
                      </p>
                      <p className="text-gray-500 text-xxs md:text-xs">
                        न्यूनतम: <span className="text-green-600 font-bold">₹{priceMin}</span>
                      </p>
                    </div>
                  </div>
                );
              })
            )}
        </>
      )}
    </div>
  </div>
</div>






      {/* Hamburger Icon */}
      <button className="md:hidden ml-5 mt-2 text-3xl" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        {mobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      <nav className="hidden md:block bg-white shadow-md rounded-lg mx-4 md:mx-10 lg:mx-10">
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
                    {/* <Link href="/marketPremises" className="block px-4 py-2 border-b-2 hover:bg-gray-100">
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
                    </Link> */}
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
                    <Link href="/interviews" className="block px-4 py-2 border-b-2 hover:bg-gray-100">
                      Interviews
                    </Link>
                  </div>
                )}
              </div>

              {/* Blogs */}
              <Link
                href="/blogs"
                className={`text-gray-700 p-2 px-6 md:px-8 hover:text-red-600 hover:border-t-2 hover:border-t-red-700 ${
                  router.pathname === "/blogs" ? "border-t-2 border-t-red-700" : ""
                }`}
              >
                Blogs</Link>
                
              {/* Contact */}
              <Link
                href="/contact"
                className={`text-gray-700 p-2 px-6 md:px-8 hover:text-red-600 hover:border-t-2 hover:border-t-red-700 ${
                  router.pathname === "/contact" ? "border-t-2 border-t-red-700" : ""
                }`}
              >
                Contact</Link>
              <Link
                href="/complaints"
                className={`text-gray-700 p-2 px-6 md:px-8 hover:text-red-600 hover:border-t-2 hover:border-t-red-700 ${
                  router.pathname === "/complaints" ? "border-t-2 border-t-red-700" : ""
                }`}
              >
                Complaints</Link>
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
            {/* <Link href="/marketPremises" className="block px-4 py-2 hover:bg-gray-200" onClick={() => setMobileMenuOpen(false)}>Market Premises</Link>
            <Link href="/marketArea" className="block px-4 py-2 hover:bg-gray-200" onClick={() => setMobileMenuOpen(false)}>Market Area</Link>
            <Link href="/marketFeatures" className="block px-4 py-2 hover:bg-gray-200" onClick={() => setMobileMenuOpen(false)}>Market Features</Link>
            <Link href="/developmentWork" className="block px-4 py-2 hover:bg-gray-200" onClick={() => setMobileMenuOpen(false)}>Development Work</Link>
            <Link href="/facilities" className="block px-4 py-2 hover:bg-gray-200" onClick={() => setMobileMenuOpen(false)}>Facilities</Link> */}
          </div>
        )}
      </div>

      <Link href="/products" className="p-3 hover:text-red-700 border-b" onClick={() => setMobileMenuOpen(false)}>
        Products
      </Link>

      <Link href="/daily-rate" className="p-3 hover:text-red-700 border-b" onClick={() => setMobileMenuOpen(false)}>
        Daily Rate
      </Link>

      <Link href="/blogs" className="p-3 hover:text-red-700 border-b" onClick={() => setMobileMenuOpen(false)}>
        Blogs
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
            <Link href="/interviews" className="block px-4 py-2 hover:bg-gray-200" onClick={() => setMobileMenuOpen(false)}>Interviews</Link>
          </div>
        )}
      </div>

      <Link href="/contact" className="p-3 hover:text-red-700 border-b" onClick={() => setMobileMenuOpen(false)}>
        Contact
      </Link>
      <Link href="/complaints" className="p-3 hover:text-red-700 border-b" onClick={() => setMobileMenuOpen(false)}>
        Complaints
      </Link>
    </div>
  </div>
)}
    </>
  );
};

export default Navbar;
