import Head from "next/head";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaLeaf, FaHandshake, FaChartLine, FaBuilding, FaCalendarAlt, FaUsers, FaMapMarkerAlt, FaFilter } from "react-icons/fa";
import Carousel from "@/components/carousel";

export default function Home({Logout, user}) {
  const [dropdown, setDropdown] = useState(false);
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]); // This will hold the products fetched from the API
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedMarket, setSelectedMarket] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideCount = 4; // Total number of leader slides
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [marketStatus, setMarketStatus] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // Market filter options
  const marketOptions = [
    { value: '', label: 'सर्व बाजार' },
    { value: 'दिंडोरी मुख्य बाजार', label: 'दिंडोरी मुख्य बाजार' },
    { value: 'वणी उप बाजार', label: 'वणी उप बाजार' },
    { value: 'खोरीपाडा उप बाजार', label: 'खोरीपाडा उप बाजार' },
    { value: 'मोहाडी उप बाजार', label: 'मोहाडी उप बाजार' },
   
  ];

  // Toggle dropdown menu
  const toggleDropdown = () => setDropdown((prev) => !prev);

  // Fetch only today's products using a GET API call
  const fetchProducts = async () => {
    try {
      setLoading(true);
      // Get today's date in YYYY-MM-DD format for API filtering
      const today = new Date().toISOString().split('T')[0];
      
      // First, check if there's a market status set for today
      let marketQuery = '';
      if (selectedMarket) {
        marketQuery = `&marketName=${encodeURIComponent(selectedMarket)}`;
      }
      
      const marketStatusResponse = await fetch(`/api/marketStatus?date=${today}${marketQuery}`);
      if (marketStatusResponse.ok) {
        const statusData = await marketStatusResponse.json();
        if (statusData && statusData.length > 0) {
          // Find status for the selected market or any market if none selected
          const relevantStatus = selectedMarket 
            ? statusData.find(s => s.marketName === selectedMarket)
            : statusData[0];
            
          if (relevantStatus && relevantStatus.status) {
            setMarketStatus(relevantStatus);
            console.log('Market status found:', relevantStatus);
          } else {
            setMarketStatus(null);
          }
        } else {
          setMarketStatus(null);
        }
      }
      
      // Try to get products from DailyProducts with today's date
      const res = await fetch(`/api/addAndGetProducts?date=${today}`);
      let data = await res.json();
      
      // If no data in DailyProducts, fetch from Products and filter by today's date
      if (!data || data.length === 0) {
        const productsRes = await fetch('/api/addAndGetProducts');
        const allProducts = await productsRes.json();
        
        // Filter products created today AND only include products with price information
        data = allProducts.filter(product => {
          if (!product.createdAt) return false;
          if (!product.PriceMin || !product.PriceMax) return false; // Only show products with price info
          const productDate = new Date(product.createdAt);
          return productDate.toISOString().split('T')[0] === today;
        });
      }
      
      console.log('Today\'s products:', data);
      setProducts(data); // Set today's products
      setFilteredProducts(data); // Initialize filtered products with all data
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setLoading(false);
    }
  };
  
  // Filter products based on selected market
  useEffect(() => {
    console.log("Market filter changed to:", selectedMarket);
    console.log("Total products before filtering:", products.length);
    
    if (selectedMarket && selectedMarket !== '') {
      const filtered = products.filter(item => {
        // Check item structure and get marketName depending on the format
        let marketName;
        
        if (item.product) {
          // DailyProducts format
          marketName = item.marketName || 'दिंडोरी मुख्य बाजार';
        } else {
          // Direct Products format
          marketName = item.marketName || 'दिंडोरी मुख्य बाजार';
        }
        
        console.log("Item market name:", marketName, "comparing with", selectedMarket);
        return marketName === selectedMarket;
      });
      
      console.log("Filtered products after market filter:", filtered.length);
      setFilteredProducts(filtered);
    } else {
      console.log("No market filter, showing all products");
      setFilteredProducts(products);
    }
  }, [selectedMarket, products]);

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
  
  // Manual navigation functions
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideCount);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slideCount - 1 : prev - 1));
  };
  
  // Touch handlers for swipe functionality
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Swipe left, go to next slide
      nextSlide();
    }
    
    if (touchStart - touchEnd < -75) {
      // Swipe right, go to previous slide
      prevSlide();
    }
  };
  
  // Automatic slider for the mobile leaders carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideCount);
    }, 3000); // Change slide every 3 seconds
    
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <Head>
        <title>दिंडोरी कृषि उत्पन्न बाजार समिती </title>
        <meta name="description" content="दिंडोरी कृषी उत्पन्न बाजार समितीची अधिकृत वेबसाइट - दिंडोरी प्रदेशातील शेतकरी आणि व्यापाऱ्यांना दर्जेदार सेवा प्रदान करते." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    {/* Hero Section */}
    <div className="text-center px-4 py-10 md:py-16 lg:py-16 bg-gradient-to-b from-green-50 to-white overflow-hidden">
      <div className="flex justify-center flex-col items-center font-bold text-3xl md:text-5xl lg:text-6xl" data-aos="fade-down" data-aos-delay="100">
        <h1 className="block text-green-800">दिंडोरी कृषि उत्पन्न बाजार समिती</h1>
        <h2 className="text-green-700 mt-2">Dindori Krushi Utpann Bajar Samiti</h2>
      </div>
      <h2 
        className="text-sm md:text-base block mt-6 md:mt-8 max-w-3xl mx-auto text-gray-700"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        A modern agricultural market committee providing quality services to farmers and traders across the Dindori region.
      </h2>
      <div className="mt-8 flex justify-center space-x-4" data-aos="zoom-in" data-aos-delay="500">
        <Link href="/daily-rate" className="bg-green-600 hover:bg-green-700 hover:scale-105 text-white px-5 py-2 rounded-lg shadow-md transition-all duration-300 font-medium">
          दैनिक बाजार दर
        </Link>
        <Link href="/contact" className="bg-white hover:bg-gray-100 hover:scale-105 text-green-700 border border-green-600 px-5 py-2 rounded-lg shadow-md transition-all duration-300 font-medium">
          संपर्क करा
        </Link>
      </div>
    </div>

    {/* Advertisement Carousel Section */}
    <div className="py-10 px-4 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6" data-aos="fade-up">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="w-1.5 h-10 bg-green-600 rounded-full mr-3" data-aos="fade-right" data-aos-delay="100"></div>
            <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-800 to-green-500" data-aos="fade-up" data-aos-delay="200">जाहिराती</h2>
            <div className="ml-3 px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full" data-aos="fade-left" data-aos-delay="300">FEATURED</div>
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

    {/* Government Leaders Section */}
    <div className="py-6 bg-white border-l-4 border-green-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-8" data-aos="fade-right">
          <h2 className="text-2xl md:text-3xl font-bold text-green-800">महाराष्ट्र राज्य नेतृत्व</h2>
          <div className="ml-3 px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full" data-aos="zoom-in" data-aos-delay="200">LEADERSHIP</div>
        </div>

        {/* Desktop View - Regular Grid */}
        <div className="hidden md:grid grid-cols-4 gap-8">
          <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center" data-aos="fade-up" data-aos-delay="100">
            <div className="relative mx-auto w-48 h-48 overflow-hidden mb-4">
              <Image src="/images/leaders/devendra_fadnavis.png" alt="Shri. Devendra Fadnavis" layout="fill" objectFit="contain" className="rounded-lg" />
            </div>
            <h3 className="font-semibold text-gray-900 text-lg">श्री. देवेंद्र फडणवीस</h3>
            <p className="text-sm text-gray-600">मा. मुख्यमंत्री, महाराष्ट्र राज्य</p>
          </div>

          <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center" data-aos="fade-up" data-aos-delay="200">
            <div className="relative mx-auto w-48 h-48 overflow-hidden mb-4">
              <Image src="/images/leaders/eknath_shinde.png" alt="Shri. Eknath Shinde" layout="fill" objectFit="contain" className="rounded-lg" />
            </div>
            <h3 className="font-semibold text-gray-900 text-lg">श्री. एकनाथ शिंदे</h3>
            <p className="text-sm text-gray-600">मा. उपमुख्यमंत्री, महाराष्ट्र राज्य</p>
          </div>

          <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center" data-aos="fade-up" data-aos-delay="300">
            <div className="relative mx-auto w-48 h-48 overflow-hidden mb-4">
              <Image src="/images/leaders/ajit_pawar.png" alt="Shri. Ajit Pawar" layout="fill" objectFit="contain" className="rounded-lg" />
            </div>
            <h3 className="font-semibold text-gray-900 text-lg">श्री. अजित पवार</h3>
            <p className="text-sm text-gray-600">मा. उपमुख्यमंत्री, महाराष्ट्र राज्य</p>
          </div>

          <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center" data-aos="fade-up" data-aos-delay="400">
            <div className="relative mx-auto w-48 h-48 overflow-hidden mb-4">
              <Image src="/images/leaders/jaykumar_rawal.png" alt="Shri. Jaykumar Rawal" layout="fill" objectFit="contain" className="rounded-lg" />
            </div>
            <h3 className="font-semibold text-gray-900 text-lg">श्री. जयकुमार रावल</h3>
            <p className="text-sm text-gray-600">मा. विपणन व प्रोटोकॉल मंत्री, महाराष्ट्र राज्य</p>
          </div>
        </div>

        {/* Mobile View - Carousel */}
        <div className="block md:hidden">
          <div className="relative overflow-hidden p-4 bg-gray-50 rounded-xl shadow-sm mx-auto max-w-md">
            {/* No arrow controls as requested */}
            
            {/* Mobile leaders carousel */}
            <div 
              className="overflow-hidden" 
              onTouchStart={handleTouchStart} 
              onTouchMove={handleTouchMove} 
              onTouchEnd={handleTouchEnd}
            >
              {/* All slides with absolute positioning and opacity transitions */}
              <div className="relative h-32 sm:h-36"> 
                {/* Slide 1 */}
                <div 
                  className={`absolute inset-0 flex flex-row items-center transition-opacity duration-700 ease-in-out ${currentSlide === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                >
                  <div className="relative w-32 h-32 sm:w-36 sm:h-36 overflow-hidden rounded-lg flex-shrink-0">
                    <Image src="/images/leaders/devendra_fadnavis.png" alt="Shri. Devendra Fadnavis" layout="fill" objectFit="contain" className="rounded-lg bg-slate-50" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900 text-lg">Shri. Devendra Fadnavis</h3>
                    <p className="text-sm text-gray-600">Hon'ble Chief Minister,<br />Maharashtra State</p>
                  </div>
                </div>
                
                {/* Slide 2 */}
                <div 
                  className={`absolute inset-0 flex flex-row items-center transition-opacity duration-700 ease-in-out ${currentSlide === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                >
                  <div className="relative w-32 h-32 sm:w-36 sm:h-36 overflow-hidden rounded-lg flex-shrink-0">
                    <Image src="/images/leaders/eknath_shinde.png" alt="Shri. Eknath Shinde" layout="fill" objectFit="contain" className="rounded-lg bg-slate-50" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900 text-lg">Shri. Eknath Shinde</h3>
                    <p className="text-sm text-gray-600">Hon'ble Deputy Chief Minister,<br />Maharashtra State</p>
                  </div>
                </div>
                
                {/* Slide 3 */}
                <div 
                  className={`absolute inset-0 flex flex-row items-center transition-opacity duration-700 ease-in-out ${currentSlide === 2 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                >
                  <div className="relative w-32 h-32 sm:w-36 sm:h-36 overflow-hidden rounded-lg flex-shrink-0">
                    <Image src="/images/leaders/ajit_pawar.png" alt="Shri. Ajit Pawar" layout="fill" objectFit="contain" className="rounded-lg bg-slate-50" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900 text-lg">Shri. Ajit Pawar</h3>
                    <p className="text-sm text-gray-600">Hon'ble Deputy Chief Minister,<br />Maharashtra State</p>
                  </div>
                </div>
                
                {/* Slide 4 */}
                <div 
                  className={`absolute inset-0 flex flex-row items-center transition-opacity duration-700 ease-in-out ${currentSlide === 3 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                >
                  <div className="relative w-32 h-32 sm:w-36 sm:h-36 overflow-hidden rounded-lg flex-shrink-0">
                    <Image src="/images/leaders/jaykumar_rawal.png" alt="Shri. Jaykumar Rawal" layout="fill" objectFit="contain" className="rounded-lg bg-slate-50" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900 text-lg">Shri. Jaykumar Rawal</h3>
                    <p className="text-sm text-gray-600">Hon'ble Minister of Marketing and Protocol,<br />Maharashtra State</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Scroll indicator dots */}
            <div className="flex justify-center mt-4 space-x-2">
              {[...Array(slideCount)].map((_, index) => (
                <div 
                  key={index} 
                  className={`w-2 h-2 rounded-full ${index === currentSlide ? 'bg-green-600' : 'bg-gray-300'} transition-colors duration-300 cursor-pointer`}
                  onClick={() => setCurrentSlide(index)}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    
    {/* Mission & Overview Section */}
    <div className="py-12 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-green-800">आमच्याबद्दल</h2>
          <div className="h-1 w-20 bg-green-600 mx-auto mt-2"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div 
              className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <h3 className="text-xl font-semibold text-green-800 mb-2">उद्देश आणि ध्येय</h3>
              <p className="text-gray-700">दिंडोरी कृषि उत्पन्न बाजार समितीचे मुख्य उद्दिष्ट शेतकरी व व्यापारी यांच्यादरम्यान पारदर्शक व्यापार प्रक्रिया निर्माण करणे आहे. आमचे ध्येय शेतकऱ्यांना त्यांच्या उत्पादनांची योग्य किंमत मिळवून देणे आणि व्यापारांना विश्वासार्ह बाजारपेठ उपलब्ध करून देणे आहे.</p>
            </div>
            
            <div 
              className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <h3 className="text-xl font-semibold text-green-800 mb-2">इतिहास आणि परंपरा</h3>
              <p className="text-gray-700">१९८९ मध्ये स्थापित, आमची बाजार समिती नाशिक जिल्ह्यातील दिंडोरी तालुक्यातील शेतकऱ्यांसाठी एक विश्वासार्ह व्यासपीठ म्हणून काम करत आहे. गेल्या ५० वर्षांहून अधिक काळात, आम्ही कृषी क्षेत्रातील विविध संकटांवर मात करत प्रगती केली आहे.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4" data-aos="fade-left">
            <div 
              className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              data-aos="zoom-in"
              data-aos-delay="150"
            >
              <div className="text-green-600 flex justify-center mb-4">
                <FaUsers size={48} className="animate-bounce" />
              </div>
              <h3 className="font-bold text-xl text-gray-800 mb-2">१९</h3>
              <p className="text-gray-600 text-sm">समिती सदस्य २०२३-२८</p>
            </div>
            
            <div 
              className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div className="text-green-600 flex justify-center mb-4">
                <FaBuilding size={48} className="animate-pulse" />
              </div>
              <h3 className="font-bold text-xl text-gray-800 mb-2">१२.५ एकर</h3>
              <p className="text-gray-600 text-sm">बाजार आवार क्षेत्र</p>
            </div>
            
            <div 
              className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              data-aos="zoom-in"
              data-aos-delay="450"
            >
              <div className="text-green-600 flex justify-center mb-4">
                <FaLeaf size={48} className="animate-bounce" />
              </div>
              <h3 className="font-bold text-xl text-gray-800 mb-2">५८+</h3>
              <p className="text-gray-600 text-sm">शेती उत्पादने प्रकार</p>
            </div>
            
            <div 
              className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <div className="text-green-600 flex justify-center mb-4">
                <FaHandshake size={48} className="animate-pulse" />
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
          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center" data-aos="fade-up" data-aos-delay="100">
            <div className="inline-block p-4 bg-green-100 rounded-full mb-4 animate-pulse">
              <FaLeaf className="text-green-600 text-3xl" />
            </div>
            <h3 className="text-xl font-semibold text-green-800 mb-3">शेतकरी सहाय्य</h3>
            <p className="text-gray-600">शेतकरी व उत्पादकांसाठी मार्केटिंग, प्रशिक्षण, आणि वित्तीय सहाय्य.</p>
            <Link href="/services/farmer-support" className="block mt-4 text-green-600 hover:text-green-700 font-medium transition-transform duration-300 hover:translate-x-2">अधिक माहिती →</Link>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center" data-aos="fade-up" data-aos-delay="300">
            <div className="inline-block p-4 bg-green-100 rounded-full mb-4 animate-bounce">
              <FaHandshake className="text-green-600 text-3xl" />
            </div>
            <h3 className="text-xl font-semibold text-green-800 mb-3">व्यापारी सेवा</h3>
            <p className="text-gray-600">परवाने, नोंदणी, आणि विविध व्यापारी सेवांसाठी आमच्या सुविधा उपलब्ध आहेत.</p>
            <Link href="/services/trader-services" className="block mt-4 text-green-600 hover:text-green-700 font-medium transition-transform duration-300 hover:translate-x-2">अधिक माहिती →</Link>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center" data-aos="fade-up" data-aos-delay="500">
            <div className="inline-block p-4 bg-green-100 rounded-full mb-4 animate-pulse">
              <FaChartLine className="text-green-600 text-3xl" />
            </div>
            <h3 className="text-xl font-semibold text-green-800 mb-3">बाजार माहिती</h3>
            <p className="text-gray-600">दैनिक दर, मार्केट ट्रेंड्स, आणि विविध उत्पादनांची सविस्तर माहिती आमच्या वेबसाइटवर उपलब्ध.</p>
            <Link href="/daily-rate" className="block mt-4 text-green-600 hover:text-green-700 font-medium transition-transform duration-300 hover:translate-x-2">अधिक माहिती →</Link>
          </div>
        </div>
      </div>
    </div>
    
      <div className="px-4 py-8 bg-gray-50">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-4 md:mb-0">आजचे बाजार दर</h2>
          
          <div className="flex items-center space-x-2">
            <FaMapMarkerAlt className="text-green-600 mr-1" />
            <label className="font-medium text-gray-700 mr-2">बाजार:</label>
            <div className="relative">
              <select
                value={selectedMarket}
                onChange={(e) => setSelectedMarket(e.target.value)}
                className="bg-white border border-gray-300 rounded-md px-4 py-2 pr-8 appearance-none focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                {marketOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                <svg className="h-4 w-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            
            {selectedMarket && (
              <button
                onClick={() => setSelectedMarket('')}
                className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-2 rounded-md flex items-center text-sm"
              >
                <FaFilter className="mr-1" /> सर्व बाजार
              </button>
            )}
          </div>
        </div>
        <div className="max-w-7xl mx-auto rounded-xl overflow-hidden">
          {loading ? (
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="animate-spin h-10 w-10 border-4 border-green-500 border-t-transparent rounded-full mx-auto mb-4"></div>
              <p className="text-gray-600"></p>
            </div>
          ) : marketStatus ? (
            <div className="bg-amber-50 rounded-lg shadow-md p-8 text-center border border-amber-200">
              <div className="text-amber-500 text-4xl mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-amber-700 mb-2">
                {marketStatus.status === 'आवक नाही' ? 'आज बाजारात आवक नाही' : 
                 marketStatus.status === 'सप्ताहिक सुट्टी' ? 'आज बाजाराची सप्ताहिक सुट्टी आहे' : ''}
              </h3>
              <p className="text-gray-600 text-lg">
                {marketStatus.marketName || selectedMarket || ''} - {new Date().toLocaleDateString('mr-IN', { day: 'numeric', month: 'long', year: 'numeric', weekday: 'long' })}
              </p>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-md p-4">
             
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-4">
                {!filteredProducts || !Array.isArray(filteredProducts) || filteredProducts.length === 0 ? (
                  <div className="col-span-full text-center py-10">
                    <p className="text-lg text-gray-600">{products.length > 0 ? '' : ''}</p>
                  </div>
                ) : (
                  Array.isArray(filteredProducts) && filteredProducts.map((product) => {
                    // Handle both DailyProducts and direct Products format
                    const isFromDailyProducts = product.product && product.product._id;
                    const productData = isFromDailyProducts ? product.product : product;
                    const priceMin = product.PriceMin;
                    const priceMax = product.PriceMax;
                    const priceAvg = product.PriceAvg;
                    const timestamp = isFromDailyProducts ? product.date : product.createdAt;
                    
                    return (
                      <div key={product._id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 p-4">
                        {(product.marketName || (product.product && product.product.marketName)) && (
                          <div className="mb-2">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                              <FaMapMarkerAlt className="mr-1" size={10} />
                              {product.marketName || (product.product && product.product.marketName) || 'दिंडोरी मुख्य बाजार'}
                            </span>
                          </div>
                        )}
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
                              कमाल: <span className="text-red-600 font-bold">₹{priceMax}</span>
                            </p>
                            <p className="text-gray-500 text-sm md:text-base">
                              किमान: <span className="text-green-600 font-bold">₹{priceMin}</span>
                            </p>
                            <p className="text-gray-700 text-sm md:text-base mt-1">
                              सरासरी: <span className="text-gray-800 font-bold">₹{priceAvg}</span>
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
            </div>
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

