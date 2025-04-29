import { useState, useEffect } from 'react';
import { FaCalendarAlt, FaFilter } from 'react-icons/fa';

export default function DailyRate() {
  const [dailyPrices, setDailyPrices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Date selection
  const today = new Date().toISOString().split('T')[0];
  const [selectedDate, setSelectedDate] = useState(today);
  const [prevDayData, setPrevDayData] = useState([]);
  
  // Format date for display
  const formatDateMarathi = (dateString) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric', weekday: 'long' };
    return new Date(dateString).toLocaleDateString('mr-IN', options);
  };
  
  // Fetch daily products for the selected date
  useEffect(() => {
    fetchDailyProducts();
  }, [selectedDate]);
  
  // Function to fetch daily products
  const fetchDailyProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      
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
      
      // First, try to get products from DailyProducts collection
      let response = await fetch(`/api/addAndGetProducts?date=${formattedDate}&path=daily`);
      let data = await response.json();
      console.log('Daily products data from API:', data);
      
      // If no data from DailyProducts, get data from Products collection and filter by date
      if (!data || data.length === 0) {
        console.log('No data in DailyProducts, retrieving from Products collection');
        
        // Fetch all products and filter by createdAt date that matches selected date
        const productsResponse = await fetch('/api/addAndGetProducts');
        if (productsResponse.ok) {
          const productsData = await productsResponse.json();
          
          // Convert products to expected format (similar to DailyProducts schema)
          // Filter products that were created on the selected date
          const filteredProducts = productsData.filter(product => {
            if (!product.createdAt) return false;
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
      setLoading(false);
    } catch (err) {
      console.error('Error fetching daily products:', err);
      setError(err.message);
      setLoading(false);
      setDailyPrices([]);
      setPrevDayData([]);
    }
  };
  
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
  const groupedProducts = groupByCategory(dailyPrices);
  const categories = Object.keys(groupedProducts).sort();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h1 className="text-3xl font-bold text-center text-green-800 mb-4">
            दिंडोरी कृषि उत्पन्न बाजार समिती, जि.नाशिक
          </h1>
          <h2 className="text-2xl font-semibold text-center text-green-700 mb-6">
            दैनिक बाजारभाव
          </h2>
          
          {/* Date Filter */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center mb-4 sm:mb-0">
              <FaCalendarAlt className="text-green-600 mr-2" />
              <label className="font-medium text-gray-700 mr-2">दिनांक निवडा:</label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                max={today}
              />
            </div>
            <button
              onClick={() => setSelectedDate(today)}
              className="bg-green-100 hover:bg-green-200 text-green-800 px-4 py-2 rounded-md"
            >
              आजचे भाव
            </button>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-700 mx-auto"></div>
              <p className="mt-4 text-gray-600">माहिती लोड करत आहे...</p>
            </div>
          ) : error ? (
            <div className="bg-red-100 text-red-700 p-4 rounded-lg mb-6">
              <p>{error}</p>
            </div>
          ) : !dailyPrices || !Array.isArray(dailyPrices) || dailyPrices.length === 0 ? (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <FaFilter className="mx-auto text-4xl text-gray-300 mb-4" />
              <p className="text-gray-600 text-lg">निवडलेल्या तारखेसाठी कोणतेही बाजारभाव उपलब्ध नाहीत.</p>
              <p className="mt-2 text-gray-500">कृपया दुसरी तारीख निवडा किंवा नंतर पुन्हा प्रयत्न करा.</p>
            </div>
          ) : (
            <div className="prose max-w-none">
              <p className="mb-6">
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
                  <div className="mb-10" key={category}>
                    <h3 className="text-xl font-semibold text-green-800 mb-4">
                      {category === 'भाज्या' ? 'भाजीपाला' : 
                       category === 'फळे' ? 'फळे' : 
                       category === 'धान्य' ? 'धान्य व कडधान्य' : 
                       category === 'डाळी' ? 'कडधान्य' : 
                       category === 'मसाले' ? 'मसाला पदार्थ' : category}
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
                            <th className="py-3 px-4 border text-center font-medium">मागील सरासरी</th>
                            <th className="py-3 px-4 border text-center font-medium">बदल %</th>
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
                                <td className="py-3 px-4 border">{prevDayDisplay}</td>
                                <td className={`py-3 px-4 border ${isPositiveChange ? 'text-green-600' : isNegativeChange ? 'text-red-600' : 'text-gray-500'}`}>
                                  {prevDayAvg ? (isPositiveChange ? '+' : '') + priceChange + '%' : 'नवीन'}
                                </td>
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
      </div>
    </div>
  );
}