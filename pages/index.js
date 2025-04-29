import Head from "next/head";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaLeaf, FaHandshake, FaChartLine, FaBuilding, FaCalendarAlt, FaUsers } from "react-icons/fa";
import Carousel from "@/components/carousel";

export default function Home({Logout, user}) {
  const [dropdown, setDropdown] = useState(false);
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]); // This will hold the products fetched from the API

  // Toggle dropdown menu
  const toggleDropdown = () => setDropdown((prev) => !prev);

  // Fetch only today's products using a GET API call
  const fetchProducts = async () => {
    try {
      // Get today's date in YYYY-MM-DD format for API filtering
      const today = new Date().toISOString().split('T')[0];
      
      // First, try to get products from DailyProducts with today's date
      const res = await fetch(`/api/addAndGetProducts?date=${today}`);
      let data = await res.json();
      
      // If no data in DailyProducts, fetch from Products and filter by today's date
      if (!data || data.length === 0) {
        const productsRes = await fetch('/api/addAndGetProducts');
        const allProducts = await productsRes.json();
        
        // Filter products created today
        data = allProducts.filter(product => {
          if (!product.createdAt) return false;
          const productDate = new Date(product.createdAt);
          return productDate.toISOString().split('T')[0] === today;
        });
      }
      
      console.log('Today\'s products:', data);
      setProducts(data); // Set today's products
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // Add a product to the cart
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Function to calculate time ago
  const timeAgo = (timestamp) => {
    const currentTime = new Date();
    const productTime = new Date(timestamp);
    const diffInMinutes = Math.floor((currentTime - productTime) / (1000 * 60));
    return diffInMinutes <= 0 ? "Just now" : `${diffInMinutes} min ago`;
  };

  // Function to calculate average price
  const calculateAvgPrice = (max, min) => {
    return ((max + min) / 2).toFixed(2);
  };

  // UseEffect to fetch products when the component mounts
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      <Head>
        <title>दिंडोरी कृषि उत्पन्न बाजार समिती</title>
        <meta name="description" content="The official website of Dindori Krishi Utpann Bajar Samiti - providing quality services to farmers and traders in Dindori region" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    {/* Hero Section */}
    <div className="text-center px-4 py-10 md:py-16 lg:py-16 bg-gradient-to-b from-green-50 to-white">
      <div className="flex justify-center flex-col items-center font-bold text-3xl md:text-5xl lg:text-6xl">
        <h1 className="block text-green-800">दिंडोरी कृषि उत्पन्न बाजार समिती</h1>
        <h2 className="text-green-700 mt-2">Dindori Krishi Utpann Bajar Samiti</h2>
      </div>
      <h2 className="text-sm md:text-base block mt-6 md:mt-8 max-w-3xl mx-auto text-gray-700">
        A modern agricultural market committee providing quality services to farmers and traders across the Dindori region.
      </h2>
      <div className="mt-8 flex justify-center space-x-4">
        <Link href="/daily-rate" className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg shadow-md transition-all duration-300 font-medium">
          दैनिक बाजार दर
        </Link>
        <Link href="/contact" className="bg-white hover:bg-gray-100 text-green-700 border border-green-600 px-5 py-2 rounded-lg shadow-md transition-all duration-300 font-medium">
          संपर्क करा
        </Link>
      </div>
    </div>

    {/* Advertisement Carousel Section */}
    <div className="py-10 px-4 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="w-1.5 h-10 bg-green-600 rounded-full mr-3"></div>
            <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-800 to-green-500">जाहिराती</h2>
            <div className="ml-3 px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">FEATURED</div>
          </div>
          <a href="/contact" className="group bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white px-5 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center">
            <span className="mr-2">जाहिरात देण्यासाठी संपर्क करा</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>

        <div className="relative">
          {/* Decorative elements */}
          <div className="absolute -top-4 -left-4 w-16 h-16 bg-yellow-400 opacity-20 rounded-full blur-xl"></div>
          <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-green-400 opacity-20 rounded-full blur-xl"></div>
          
          {/* Carousel container with decorative border */}
          <div className="relative h-[15rem] sm:h-[20rem] md:h-[25rem] overflow-hidden rounded-2xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.2)] border-4 border-white">
            <Carousel />
          </div>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <span className="font-medium text-gray-800">(02557) 221097</span>
          </div>
          <div className="h-6 border-l border-gray-300 hidden sm:block"></div>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <a href="mailto:am_dindori@msamb.com" className="text-green-600 hover:text-green-800 hover:underline transition-colors">am_dindori@msamb.com</a>
          </div>
          <div className="h-6 border-l border-gray-300 hidden sm:block"></div>
          <div className="px-4 py-1.5 bg-green-50 text-green-800 rounded-full text-sm font-medium">आजच्या दिवशी जाहिरात द्या, आजच प्रकाशित होएल</div>
        </div>
      </div>
    </div>
    
    {/* Mission & Overview Section */}
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-green-800">आमच्याबद्दल</h2>
          <div className="h-1 w-20 bg-green-600 mx-auto mt-2"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600">
              <h3 className="text-xl font-semibold text-green-800 mb-2">उद्देश आणि ध्येय</h3>
              <p className="text-gray-700">दिंडोरी कृषि उत्पन्न बाजार समितीचे मुख्य उद्दिष्ट शेतकरी व व्यापारी यांच्यादरम्यान पारदर्शक व्यापार प्रक्रिया निर्माण करणे आहे. आमचे ध्येय शेतकऱ्यांना त्यांच्या उत्पादनांची योग्य किंमत मिळवून देणे आणि व्यापारांना विश्वासार्ह बाजारपेठ उपलब्ध करून देणे आहे.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600">
              <h3 className="text-xl font-semibold text-green-800 mb-2">इतिहास आणि परंपरा</h3>
              <p className="text-gray-700">१९७२ मध्ये स्थापित, आमची बाजार समिती नाशिक जिल्ह्यातील दिंडोरी तालुक्यातील शेतकऱ्यांसाठी एक विश्वासार्ह व्यासपीठ म्हणून काम करत आहे. गेल्या ५० वर्षांहून अधिक काळात, आम्ही कृषी क्षेत्रातील विविध संकटांवर मात करत प्रगती केली आहे.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-all duration-300">
              <div className="text-green-600 flex justify-center mb-4">
                <FaUsers size={48} />
              </div>
              <h3 className="font-bold text-xl text-gray-800 mb-2">१९</h3>
              <p className="text-gray-600 text-sm">समिती सदस्य २०२३-२८</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-all duration-300">
              <div className="text-green-600 flex justify-center mb-4">
                <FaBuilding size={48} />
              </div>
              <h3 className="font-bold text-xl text-gray-800 mb-2">१२.५ एकर</h3>
              <p className="text-gray-600 text-sm">बाजार आवार क्षेत्र</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-all duration-300">
              <div className="text-green-600 flex justify-center mb-4">
                <FaLeaf size={48} />
              </div>
              <h3 className="font-bold text-xl text-gray-800 mb-2">५८+</h3>
              <p className="text-gray-600 text-sm">शेती उत्पादने प्रकार</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-all duration-300">
              <div className="text-green-600 flex justify-center mb-4">
                <FaHandshake size={48} />
              </div>
              <h3 className="font-bold text-xl text-gray-800 mb-2">३००+</h3>
              <p className="text-gray-600 text-sm">नोंदणीकृत व्यापारी</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Services Section */}
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-green-800">आमच्या सेवा आणि सुविधा</h2>
          <div className="h-1 w-20 bg-green-600 mx-auto mt-2"></div>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">दिंडोरी कृषि उत्पन्न बाजार समिती शेतकरी आणि व्यापारी यांना विविध सेवा देते जेणेकरून त्यांचा व्यवसाय वृद्धिंगत होईल.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center">
            <div className="inline-block p-4 bg-green-100 rounded-full mb-4">
              <FaLeaf className="text-green-600 text-3xl" />
            </div>
            <h3 className="text-xl font-semibold text-green-800 mb-3">शेतकरी सहाय्य</h3>
            <p className="text-gray-600">शेतकरी व उत्पादकांसाठी मार्केटिंग, प्रशिक्षण, आणि वित्तीय सहाय्य.</p>
            <Link href="/services/farmer-support" className="block mt-4 text-green-600 hover:text-green-700 font-medium">अधिक माहिती →</Link>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center">
            <div className="inline-block p-4 bg-green-100 rounded-full mb-4">
              <FaHandshake className="text-green-600 text-3xl" />
            </div>
            <h3 className="text-xl font-semibold text-green-800 mb-3">व्यापारी सेवा</h3>
            <p className="text-gray-600">परवाने, नोंदणी, आणि विविध व्यापारी सेवांसाठी आमच्या सुविधा उपलब्ध आहेत.</p>
            <Link href="/services/trader-services" className="block mt-4 text-green-600 hover:text-green-700 font-medium">अधिक माहिती →</Link>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center">
            <div className="inline-block p-4 bg-green-100 rounded-full mb-4">
              <FaChartLine className="text-green-600 text-3xl" />
            </div>
            <h3 className="text-xl font-semibold text-green-800 mb-3">बाजार माहिती</h3>
            <p className="text-gray-600">दैनिक दर, मार्केट ट्रेंड्स, आणि विविध उत्पादनांची सविस्तर माहिती आमच्या वेबसाइटवर उपलब्ध.</p>
            <Link href="/daily-rate" className="block mt-4 text-green-600 hover:text-green-700 font-medium">अधिक माहिती →</Link>
          </div>
        </div>
      </div>
    </div>
    
      <div className="px-4 py-8 bg-gray-50">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-green-800 mb-8">आजचे बाजार दर</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto">
          {!products || !Array.isArray(products) || products.length === 0 ? (
            <div className="col-span-full text-center py-10">
              <p className="text-lg text-gray-600">आजचे बाजार भाव लोड करत आहे...</p>
            </div>
          ) : (
            Array.isArray(products) && products.map((product) => {
              // Handle both DailyProducts and direct Products format
              const isFromDailyProducts = product.product && product.product._id;
              const productData = isFromDailyProducts ? product.product : product;
              const priceMin = product.PriceMin;
              const priceMax = product.PriceMax;
              const timestamp = isFromDailyProducts ? product.date : product.createdAt;
              
              return (
                <div key={product._id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 p-4">
                  <div className="flex gap-2 items-center">
                    <span className="bg-green-700 text-white text-xs md:text-sm px-2 md:px-3 py-1 rounded-md">
                      {timeAgo(timestamp)}
                    </span>
                    <span className="hidden md:inline-block bg-green-700 text-white text-xs md:text-sm px-2 md:px-3 py-1 rounded-md">
                      {typeof timestamp === 'string' ? timestamp.split('T')[0] : new Date(timestamp).toISOString().split('T')[0]}
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between gap-3 mt-3">
                    {/* Product Info */}
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-bold text-gray-800">
                        {productData.productNameMarathi || productData.productNameEnglish}
                      </h3>
                      <p className="text-gray-500 text-sm md:text-base">
                        {isFromDailyProducts ? productData.productNameEnglish : productData.productNameMarathi}
                      </p>
                    </div>
                    {/* Price Details */}
                    <div className="bg-gray-50 p-3 rounded-lg text-right">
                      <p className="text-gray-500 text-sm md:text-base">
                        अधिकतम: <span className="text-red-600 font-bold">₹{priceMax}</span>
                      </p>
                      <p className="text-gray-500 text-sm md:text-base">
                        न्यूनतम: <span className="text-green-600 font-bold">₹{priceMin}</span>
                      </p>
                      <p className="text-gray-700 text-sm md:text-base mt-1">
                        औसत: <span className="text-gray-800 font-bold">₹{calculateAvgPrice(priceMax, priceMin)}</span>
                      </p>
                      <p className="text-xs text-gray-400 mt-1">
                        (प्रति {productData.ProductInUnit || "किलो"})
                      </p>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
        
        {/* View All Rates Button */}
        <div className="text-center pt-8 pb-4">
          <Link href="/daily-rate" className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg shadow-md transition-all duration-300 font-medium">
            सर्व बाजार दर पहा
          </Link>
        </div>
      </div>
      
     
    </>
  );
}

