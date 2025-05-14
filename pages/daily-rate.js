import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FaCalendarAlt, FaFilter, FaMapMarkerAlt, FaSync, FaInfoCircle, FaExclamationTriangle, FaArrowRight } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function DailyRate() {
  const [dailyPrices, setDailyPrices] = useState([]);
  const [filteredPrices, setFilteredPrices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [marketStatus, setMarketStatus] = useState(null);
  
  // Date selection
  const today = new Date().toISOString().split('T')[0];
  const [selectedDate, setSelectedDate] = useState(today);
  const [prevDayData, setPrevDayData] = useState([]);
  
  // Complaint form state
  const [showComplaintForm, setShowComplaintForm] = useState(false);
  const [complaintData, setComplaintData] = useState({
    fullName: '',
    mobileNumber: '',
    marketName: 'दिंडोरी मुख्य बाजार',
    complaintText: ''
  });
  const [complaintSuccess, setComplaintSuccess] = useState(false);
  const [complaintError, setComplaintError] = useState(null);
  const [submittingComplaint, setSubmittingComplaint] = useState(false);
  
  // Market filter
  const [selectedMarket, setSelectedMarket] = useState('');
  const marketOptions = [
    { value: '', label: 'सर्व बाजार' },
    { value: 'दिंडोरी मुख्य बाजार', label: 'दिंडोरी मुख्य बाजार' },
    { value: 'वणी उप बाजार', label: 'वणी उप बाजार' },
    { value: 'खोरीपाडा उप बाजार', label: 'खोरीपाडा उप बाजार' },
    { value: 'मोहाडी उप बाजार', label: 'मोहाडी उप बाजार' },
   
  ];
  
  // Format date for display
  const formatDateMarathi = (dateString) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric', weekday: 'long' };
    return new Date(dateString).toLocaleDateString('mr-IN', options);
  };
  
  // Initialize AOS animation library
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
      mirror: false
    });
  }, []);
  
  // Fetch daily products and market status for the selected date
  useEffect(() => {
    fetchDailyProducts();
  }, [selectedDate, selectedMarket]);
  
  // Function to fetch daily products
  const fetchDailyProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      setMarketStatus(null);
      
      // Format the selected date for comparison
      // Create date object without timezone issues
      const dateParts = selectedDate.split('-');
      const year = parseInt(dateParts[0], 10);
      const month = parseInt(dateParts[1], 10) - 1; // Month is 0-indexed in JavaScript
      const day = parseInt(dateParts[2], 10);
      
      // Create date using local components to avoid timezone issues
      const dateObj = new Date(year, month, day);
      
      // Format date as YYYY-MM-DD
      const formattedDate = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      console.log('Selected date:', selectedDate);
      console.log('Parsed date object:', dateObj.toString());
      console.log('Fetching data for date:', formattedDate);
      
      // Check for market status first
      let marketQuery = '';
      if (selectedMarket) {
        marketQuery = `&marketName=${encodeURIComponent(selectedMarket)}`;
      }
      
      const marketStatusResponse = await fetch(`/api/marketStatus?date=${formattedDate}${marketQuery}`);
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
          }
        }
      }
      
      // First, try to get products from DailyProducts collection
      // We'll fetch ALL products for the date and filter client-side to ensure consistency
      let response = await fetch(`/api/addAndGetProducts?date=${formattedDate}&path=daily`);
      let data = await response.json();
      console.log('Daily products data from API:', data);
      
      // Apply market filtering immediately on the raw data
      if (selectedMarket && selectedMarket !== '') {
        data = data.filter(item => {
          const itemMarket = item.marketName || 'दिंडोरी मुख्य बाजार';
          return itemMarket === selectedMarket;
        });
        console.log(`Filtered data for market ${selectedMarket}, found ${data.length} items`);
      }
      
      // If no data from DailyProducts, get data from Products collection and filter by date
      if (!data || data.length === 0) {
        console.log('No data in DailyProducts, retrieving from Products collection');
        
        // Fetch all products and filter by createdAt date that matches selected date
        const productsResponse = await fetch('/api/addAndGetProducts');
        if (productsResponse.ok) {
          const productsData = await productsResponse.json();
          
          // Convert products to expected format (similar to DailyProducts schema)
          // Filter products that were created on the selected date AND have valid price information
          // AND match the selected market if one is selected
          const filteredProducts = productsData.filter(product => {
            if (!product.createdAt) return false;
            if (!product.PriceMin || !product.PriceMax) return false; // Only show products with price info
            
            // Apply market filtering
            if (selectedMarket && selectedMarket !== '') {
              const productMarket = product.marketName || 'दिंडोरी मुख्य बाजार';
              if (productMarket !== selectedMarket) return false;
            }
            
            const productDate = new Date(product.createdAt);
            return productDate.toISOString().split('T')[0] === formattedDate;
          });
          
          console.log('Filtered products by date:', filteredProducts);
          
          // Format data as if it came from DailyProducts
          const formattedData = filteredProducts.map(product => ({
            _id: product._id,
            PriceMax: product.PriceMax,
            PriceMin: product.PriceMin,
            date: product.createdAt,
            product: {
              _id: product._id,
              productNameMarathi: product.productNameMarathi,
              productNameEnglish: product.productNameEnglish,
              ProductInUnit: product.ProductInUnit,
              category: product.category || 'भाज्या' // Default category
            }
          }));
          
          data = formattedData;
        }
      }
      
      setDailyPrices(data);
      
      // Get previous day data for comparison
      const prevDay = new Date(selectedDate);
      prevDay.setDate(prevDay.getDate() - 1); // Subtract one day
      const prevDayString = prevDay.toISOString().split('T')[0];
      console.log('Fetching previous day data for:', prevDayString);
      
      // Get previous day data from DailyProducts
      const prevResponse = await fetch(`/api/addAndGetProducts?date=${prevDayString}&path=daily`);
      let prevData = [];
      
      if (prevResponse.ok) {
        prevData = await prevResponse.json();
        console.log('Previous day data from DailyProducts:', prevData);
      }
      
      // If no previous day data in DailyProducts, get from Products
      if (!prevData || prevData.length === 0) {
        console.log('No previous day data in DailyProducts, getting from Products');
        
        // For each current day product, try to find its previous data
        // This is a more reliable approach than just filtering by date
        const productsToFind = data.map(item => 
          isProductFormat(item) ? item._id : item.product?._id
        ).filter(id => id); // Filter out any undefined IDs
        
        if (productsToFind.length > 0) {
          console.log('Looking for previous data for', productsToFind.length, 'products');
          
          // Get all products
          const prevProductsResponse = await fetch('/api/addAndGetProducts?path=products');
          if (prevProductsResponse.ok) {
            const allProducts = await prevProductsResponse.json();
            console.log('Found', allProducts.length, 'total products');
            
            // Group products by ID to find the most recent previous version
            const productGroups = {};
            
            // Group all products by their ID
            allProducts.forEach(product => {
              if (!product._id) return;
              
              if (!productGroups[product._id]) {
                productGroups[product._id] = [];
              }
              productGroups[product._id].push(product);
            });
            
            // For each product we're showing today, find its previous entry
            prevData = [];
            
            productsToFind.forEach(productId => {
              const productVersions = productGroups[productId] || [];
              
              // Sort by creation date, newest first
              productVersions.sort((a, b) => {
                const dateA = new Date(a.createdAt);
                const dateB = new Date(b.createdAt);
                return dateB - dateA;
              });
              
              // Get the most recent version before the selected date
              const selectedDateObj = new Date(selectedDate);
              selectedDateObj.setHours(0, 0, 0, 0);
              
              // Find previous versions (created before selected date)
              const previousVersions = productVersions.filter(p => {
                const createDate = new Date(p.createdAt);
                return createDate < selectedDateObj;
              });
              
              if (previousVersions.length > 0) {
                // Get the most recent previous version
                const prevProduct = previousVersions[0];
                
                // Format as DailyProducts structure
                prevData.push({
                  _id: prevProduct._id,
                  PriceMax: prevProduct.PriceMax,
                  PriceMin: prevProduct.PriceMin,
                  date: prevProduct.createdAt,
                  product: {
                    _id: prevProduct._id,
                    productNameMarathi: prevProduct.productNameMarathi,
                    productNameEnglish: prevProduct.productNameEnglish,
                    ProductInUnit: prevProduct.ProductInUnit,
                    category: prevProduct.category
                  }
                });
              }
            });
            
            console.log('Found previous data for', prevData.length, 'products');
          }
        }
      }
      
      setPrevDayData(prevData);
      setDailyPrices(data);
      setFilteredPrices(data); // This will be filtered by the useEffect when selectedMarket changes
      setLoading(false);
    } catch (err) {
      console.error('Error fetching daily products:', err);
      setError(err.message);
      setLoading(false);
      setDailyPrices([]);
      setFilteredPrices([]);
      setPrevDayData([]);
    }
  };
  
  // Filter daily prices based on selected market
  useEffect(() => {
    console.log("Daily rate - Market filter changed to:", selectedMarket);
    console.log("Daily rate - Total items before filtering:", dailyPrices.length);
    
    if (selectedMarket && selectedMarket !== '') {
      const filtered = dailyPrices.filter(item => {
        // Get marketName with fallback to default
        // If no marketName is explicitly set, it's from the main market
        const marketName = item.marketName || 'दिंडोरी मुख्य बाजार';
        
        console.log("Daily item market name:", marketName, "comparing with", selectedMarket);
        
        // Strict equality - only show exact market matches
        return marketName === selectedMarket;
      });
      
      console.log("Daily rate - Filtered items after market filter:", filtered.length);
      setFilteredPrices(filtered);
    } else {
      // When no specific market is selected, only show items from the main market
      const mainMarketItems = dailyPrices.filter(item => {
        const marketName = item.marketName || 'दिंडोरी मुख्य बाजार';
        return marketName === 'दिंडोरी मुख्य बाजार';
      });
      
      console.log("Daily rate - No market filter, showing main market items:", mainMarketItems.length);
      setFilteredPrices(mainMarketItems);
    }
  }, [selectedMarket, dailyPrices]);
  
  // Find previous day price for a product
  const findPrevDayPrice = (productId) => {
    if (!prevDayData.length) return null;
    return prevDayData.find(item => item.product?._id === productId);
  };
  
  // Group products by category
  const groupByCategory = (items) => {
    const grouped = {};
    
    if (!items || !items.length) return grouped;
    
    items.forEach(item => {
      // Make sure product exists and has category property
      if (!item.product) return;
      
      // Default to भाज्या (vegetables) if no category
      const category = item.product.category || 'भाज्या';
      
      if (!grouped[category]) {
        grouped[category] = [];
      }
      
      grouped[category].push(item);
    });
    
    return grouped;
  };
  
  // Helper function to calculate average price
  const calculateAvgPrice = (max, min) => {
    const maxVal = parseFloat(max);
    const minVal = parseFloat(min);
    if (isNaN(maxVal) || isNaN(minVal)) return 0;
    return ((maxVal + minVal) / 2).toFixed(2);
  };

  // Helper function to determine if an item is in the direct Products format or DailyProducts format
  const isProductFormat = (item) => {
    return !item.product && item.productNameEnglish !== undefined;
  };

  // Group products and prepare for display
  const groupedProducts = groupByCategory(filteredPrices);
  const categories = Object.keys(groupedProducts).sort();

  // Handle complaint form input changes
  const handleComplaintInputChange = (e) => {
    const { name, value } = e.target;
    setComplaintData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Handle complaint form submission
  const submitComplaint = async (e) => {
    e.preventDefault();
    setSubmittingComplaint(true);
    setComplaintError(null);
    
    try {
      const response = await fetch('/api/complaints', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(complaintData),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'तक्रार नोंदवताना काहीतरी चूक झाली');
      }
      
      setComplaintSuccess(true);
      setComplaintData({
        fullName: '',
        mobileNumber: '',
        marketName: 'दिंडोरी मुख्य बाजार',
        complaintText: ''
      });
      
      // Auto-hide form after success
      setTimeout(() => {
        setShowComplaintForm(false);
        setComplaintSuccess(false);
      }, 3000);
      
    } catch (err) {
      setComplaintError(err.message);
    } finally {
      setSubmittingComplaint(false);
    }
  };

  return (
    <>
      <Head>
        <title>दैनिक बाजारभाव - दिंडोरी कृषि उत्पन्न बाजार समिती</title>
        <meta name="description" content="दिंडोरी कृषि उत्पन्न बाजार समिती दैनिक बाजारभाव" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      
      
      <div className="min-h-screen bg-green-50 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8" data-aos="fade-up">
            <h1 className="text-3xl font-bold text-center text-green-800 mb-4" data-aos="fade-down" data-aos-delay="100">
            {selectedMarket === 'वणी उप बाजार'
    ? 'वणी कृषि उत्पन्न उप-बाजार समिती, दिंडोरी, जि.नाशिक'
    : selectedMarket === 'खोरीपाडा उप बाजार'
    ? 'खोरीपाडा कृषि उत्पन्न उप-बाजार समिती, दिंडोरी, जि.नाशिक'
    : selectedMarket === 'मोहाडी उप बाजार'
    ? 'मोहाडी कृषि उत्पन्न उप-बाजार समिती, दिंडोरी, जि.नाशिक'
    : 'दिंडोरी कृषि उत्पन्न बाजार समिती, जि.नाशिक'} </h1>
            <h2 className="text-2xl font-semibold text-center text-green-700 mb-6" data-aos="fade-up" data-aos-delay="200">
              दैनिक बाजारभाव
            </h2>
          
          {/* Date Filter */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 bg-gray-50 p-4 rounded-lg" data-aos="fade-up" data-aos-delay="300">
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-4 sm:mb-0 w-full sm:w-auto">
              <div className="flex items-center w-full sm:w-auto" data-aos="fade-right" data-aos-delay="400">
                <FaCalendarAlt className="text-green-600 mr-2" />
                <label className="font-medium text-gray-700 mr-2">दिनांक निवडा:</label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
                  max={today}
                />
              </div>
              
              <div className="flex items-center w-full sm:w-auto" data-aos="fade-right" data-aos-delay="500">
                <FaMapMarkerAlt className="text-green-600 mr-2" />
                <label className="font-medium text-gray-700 mr-2">बाजार:</label>
                <select
                  value={selectedMarket}
                  onChange={(e) => setSelectedMarket(e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
                >
                  {marketOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="flex items-center gap-2" data-aos="fade-left" data-aos-delay="600">
              <button
                onClick={() => setSelectedDate(today)}
                className="bg-green-100 hover:bg-green-200 text-green-800 px-4 py-2 rounded-md transition-all duration-300 flex items-center"
              >
                <FaCalendarAlt className="mr-1" />
                आजचे भाव
              </button>
              {selectedMarket && (
                <button
                  onClick={() => setSelectedMarket('')}
                  className="bg-red-100 hover:bg-red-200 text-red-800 px-4 py-2 rounded-md transition-all duration-300 flex items-center"
                  data-aos="zoom-in" data-aos-delay="700"
                >
                  <FaFilter className="mr-1" />
                  बाजार फिल्टर रद्द करा
                </button>
              )}
            </div>
          </div>

          {loading ? (
            <div className="flex flex-col items-center justify-center py-12" data-aos="fade">
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-green-500 mb-4"></div>
              <p className="text-gray-600 text-lg"></p>
            </div>
          ) : error ? (
            <div className="bg-red-100 text-red-700 p-4 rounded-lg mb-6" data-aos="fade-up">
              <p className="font-medium flex items-center"><FaExclamationTriangle className="mr-2" />त्रुटी: {error}</p>
            </div>
          ) : marketStatus ? (
            <div className="text-center py-12 bg-amber-50 rounded-lg border border-amber-200" data-aos="fade-up">
              <FaInfoCircle className="mx-auto text-4xl text-amber-500 mb-4" />
              <h3 className="text-xl font-bold text-amber-700 mb-2">
                {marketStatus.status === 'आवक नाही' ? 'आज बाजारात आवक नाही' : 
                 marketStatus.status === 'सप्ताहिक सुट्टी' ? 'आज बाजाराची सप्ताहिक सुट्टी आहे' : ''}
              </h3>
              <p className="text-gray-600 text-lg">
                {marketStatus.marketName || selectedMarket || ''} - {formatDateMarathi(selectedDate)}
              </p>
            </div>
          ) : !dailyPrices || !Array.isArray(dailyPrices) || dailyPrices.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-lg shadow-sm" data-aos="fade-up">
              <div className="text-gray-400 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-600 mb-2">
                
              </h3>
              <p className="text-gray-500 mt-1">
                {formatDateMarathi(selectedDate)}
              </p>
            </div>
          ) : (
            <div className="prose max-w-none">
              <p className="mb-6" data-aos="fade-up" data-aos-delay="300">
                दिंडोरी बाजार समितीमध्ये विकल्या जाणार्या प्रमुख कृषी उत्पादनांचे <strong>{formatDateMarathi(selectedDate)}</strong> बाजारभाव खालीलप्रमाणे आहेत. हे दर सरासरी असून, गुणवत्तेनुसार त्यात बदल होऊ शकतो.
              </p>
              
              {/* Dynamic Category Tables */}
              {Array.isArray(categories) && categories.map((category, categoryIndex) => {
                const items = groupedProducts && groupedProducts[category];
                if (!items || !Array.isArray(items) || items.length === 0) return null;
                
                // Get product unit from first item to use in category header
                const firstProduct = items[0]?.product;
                let unitDisplay = 'किलो'; // Default: kilo
                
                if (firstProduct && firstProduct.ProductInUnit) {
                  unitDisplay = firstProduct.ProductInUnit;
                }
                
                return (
                  <div key={category + categoryIndex} className="mb-10" data-aos="fade-up" data-aos-delay={200 + categoryIndex * 100}>
                    <h3 className="text-xl font-medium mb-3 text-green-800 border-b pb-2" data-aos="fade-right" data-aos-delay={300 + categoryIndex * 100}>
                      {category === 'भाजीपाला' ? 'भाजीपाला' : 
                       category === 'फळे' ? 'फळे' : 
                       category === 'कडधान्य' || category === 'डाळी' ? 'कडधान्य' : 
                       category === 'मसाला पदार्थ' || category === 'मसाले' ? 'मसाला पदार्थ' : category}
                      ({unitDisplay === 'किलो' || unitDisplay === 'kilo' ? 'प्रति किलो दर' : 
                        unitDisplay === 'क्विंटल' || unitDisplay === 'kuintal' ? 'प्रति क्विंटल दर' : 
                        'प्रति ' + unitDisplay + ' दर'})
                    </h3>
                    
                    <div className="overflow-x-auto">
                      <table className="min-w-full border border-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="py-3 px-4 border text-left font-medium">उत्पादन</th>
                            <th className="py-3 px-4 border text-center font-medium">ग्रेड</th>
                            <th className="py-3 px-4 border text-center font-medium">न्यूनतम</th>
                            <th className="py-3 px-4 border text-center font-medium">अधिकतम</th>
                            <th className="py-3 px-4 border text-center font-medium">सरासरी</th>
                          </tr>
                        </thead>
                        <tbody>
                          {Array.isArray(items) && items.map((item, index) => {
                            // Extract data carefully with fallbacks
                            if (!item || !item.product) {
                              return null; // Skip if product data is missing
                            }
                            
                            // Find previous day data for this product
                            const prevDayItem = findPrevDayPrice(item.product._id);
                            
                            // Calculate average prices
                            const currentAvg = calculateAvgPrice(item.PriceMax, item.PriceMin);
                            const prevDayAvg = prevDayItem ? calculateAvgPrice(prevDayItem.PriceMax, prevDayItem.PriceMin) : null;
                            
                            // Calculate price change percentage and handle case where there's no previous day data
                            let priceChange = '0.00';
                            let isPositiveChange = false;
                            let isNegativeChange = false;
                            let prevDayDisplay = '-';
                            
                            if (prevDayAvg && prevDayAvg > 0) {
                              priceChange = ((currentAvg - prevDayAvg) / prevDayAvg * 100).toFixed(2);
                              isPositiveChange = parseFloat(priceChange) > 0;
                              isNegativeChange = parseFloat(priceChange) < 0;
                              prevDayDisplay = prevDayAvg;
                            }
                            
                            return (
                              <tr key={item._id || index} className={index % 2 === 1 ? 'bg-gray-50' : ''}>
                                <td className="py-3 px-4 border font-medium">
                                  {item.product.productNameMarathi || item.product.productNameEnglish || "अज्ञात उत्पादन"}
                                </td>
                                <td className="py-3 px-4 border">अ</td>
                                <td className="py-3 px-4 border">{item.PriceMin}</td>
                                <td className="py-3 px-4 border">{item.PriceMax}</td>
                                <td className="py-3 px-4 border">{currentAvg}</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                );
              })}

              {/* Note about market data source */}
              <div className="mt-10 mb-4 text-center">
                <p className="text-sm text-gray-600">
                  <strong>माहिती स्त्रोत:</strong> हे बाजारभाव दिंडोरी कृषि उत्पन्न बाजार समितीच्या अधिकृत नोंदींवर आधारित आहेत. सर्व दर सरासरी असून प्रत्यक्ष व्यापारात गुणवत्तेनुसार तफावत असू शकतो.
                </p>
              </div>
            </div>
          )}
        </div>
        
        {/* Complaints section with animations */}
        <div className="bg-white rounded-lg shadow-lg p-6 mt-8" data-aos="fade-up">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-green-800" data-aos="fade-right">
              <FaExclamationTriangle className="inline-block mr-2 text-yellow-500" />
              तक्रार नोंदवा
            </h2>
            <button 
              onClick={() => setShowComplaintForm(!showComplaintForm)}
              className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition-all duration-300 flex items-center"
              data-aos="fade-left"
            >
              {showComplaintForm ? 'फॉर्म बंद करा' : 'तक्रार नोंदवा'}
              {!showComplaintForm && <FaArrowRight className="ml-2" />}
            </button>
          </div>
          
          {showComplaintForm && (
            <div className="border border-gray-200 rounded-md p-6" data-aos="zoom-in">
              {complaintSuccess ? (
                <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-md" data-aos="fade">
                  <p className="font-medium">आपली तक्रार यशस्वीरित्या नोंदवली गेली आहे. धन्यवाद!</p>
                </div>
              ) : (
                <form onSubmit={submitComplaint}>
                  {complaintError && (
                    <div className="bg-red-50 border border-red-200 text-red-800 p-4 rounded-md mb-4">
                      <p>{complaintError}</p>
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2" htmlFor="fullName">पूर्ण नाव*</label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={complaintData.fullName}
                        onChange={handleComplaintInputChange}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 font-medium mb-2" htmlFor="mobileNumber">मोबाईल नंबर*</label>
                      <input
                        type="tel"
                        id="mobileNumber"
                        name="mobileNumber"
                        value={complaintData.mobileNumber}
                        onChange={handleComplaintInputChange}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                        pattern="[0-9]{10}"
                        title="कृपया 10 अंकी मोबाईल नंबर टाका"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 font-medium mb-2" htmlFor="marketName">बाजार*</label>
                      <select
                        id="marketName"
                        name="marketName"
                        value={complaintData.marketName}
                        onChange={handleComplaintInputChange}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                      >
                        {marketOptions.slice(1).map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    
                    <div className="sm:col-span-2">
                      <label className="block text-gray-700 font-medium mb-2" htmlFor="complaintText">तक्रार विवरण*</label>
                      <textarea
                        id="complaintText"
                        name="complaintText"
                        value={complaintData.complaintText}
                        onChange={handleComplaintInputChange}
                        rows="4"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                      ></textarea>
                    </div>
                  </div>
                  
                  <div className="mt-6 text-right">
                    <button
                      type="submit"
                      className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-8 rounded-md transition-all duration-300"
                      disabled={submittingComplaint}
                    >
                      {submittingComplaint ? 'प्रक्रिया सुरू आहे...' : 'तक्रार नोंदवा'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
          
          <div className="mt-6" data-aos="fade-up" data-aos-delay="200">
            <p className="text-sm text-gray-600">
              <FaInfoCircle className="inline-block mr-1 text-blue-500" />
              आपल्या तक्रारीचे निराकरण 48 तासांच्या आत केले जाईल. आपल्या नोंदणीकृत मोबाईल नंबरवर अपडेट मिळेल.
            </p>
          </div>
        </div>
      </div>
      </div>
    </>
    
  );
}