import { useState, useEffect } from 'react';
import { FaPlus, FaSave, FaCalendarAlt, FaSearch, FaFilter, FaTimes } from 'react-icons/fa';
import AdminLayout from '../../components/AdminLayout';

export default function DailyPricing() {
  const [products, setProducts] = useState([]);
  const [dailyProducts, setDailyProducts] = useState([]);
  const [filteredDailyProducts, setFilteredDailyProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [selectedTableMarket, setSelectedTableMarket] = useState('');
  const [priceData, setPriceData] = useState({
    PriceMax: '',
    PriceMin: '',
    notes: '',
    marketName: 'दिंडोरी मुख्य बाजार',
    marketStatus: ''
  });
  
  // Market status options
  const marketStatusOptions = [
    { value: '', label: 'नियमित बाजार' },
    { value: 'आवक नाही', label: 'आवक नाही' },
    { value: 'सप्ताहिक सुट्टी', label: 'सप्ताहिक सुट्टी' }
  ];
  
  // Market options
  const marketOptions = [
    { value: '', label: 'सर्व बाजार' },
    { value: 'दिंडोरी मुख्य बाजार', label: 'दिंडोरी मुख्य बाजार' },
    { value: 'वणी उप बाजार', label: 'वणी उप बाजार' },
    { value: 'खोरीपाडा उप बाजार', label: 'खोरीपाडा उप बाजार' },
    { value: 'मोहाडी उप बाजार', label: 'मोहाडी उप बाजार' }
  ];
  
  // Get today's date in YYYY-MM-DD format for the date input
  const today = new Date().toISOString().split('T')[0];
  const [selectedDate, setSelectedDate] = useState(today);
  
  // Fetch all products when the component mounts
  useEffect(() => {
    fetchProducts();
  }, []);
  
  // Fetch daily products when the date changes
  useEffect(() => {
    if (selectedDate) {
      fetchDailyProducts();
    }
  }, [selectedDate]);
  
  // Function to fetch all products
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/addAndGetProducts');
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      // Filter out inactive products
      setProducts(data.filter(product => product.isActive !== false));
      setLoading(false);
    } catch (err) {
      console.error('Error fetching products:', err);
      setError(err.message);
      setLoading(false);
    }
  };
  
  // Function to fetch daily products and market status for the selected date
  const fetchDailyProducts = async () => {
    try {
      setLoading(true);
      
      // Format date properly to avoid timezone issues
      // Parse the date parts to ensure consistent formatting
      const dateParts = selectedDate.split('-');
      const year = parseInt(dateParts[0], 10);
      const month = parseInt(dateParts[1], 10);
      const day = parseInt(dateParts[2], 10);
      
      // Format date as YYYY-MM-DD ensuring proper padding
      const formattedDate = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      
      console.log(`Fetching daily prices for date: ${formattedDate}`);
      
      // First fetch market status for the day
      const marketStatusResponse = await fetch(`/api/marketStatus?date=${formattedDate}`);
      if (marketStatusResponse.ok) {
        const statusData = await marketStatusResponse.json();
        if (statusData && statusData.length > 0) {
          // If we have market status data, show it in the UI
          console.log('Market status found:', statusData);
          // We will handle this in the UI
        }
      }
      
      const response = await fetch(`/api/addAndGetProducts?date=${formattedDate}&path=daily`);
      if (!response.ok) {
        throw new Error('Failed to fetch daily products');
      }
      const data = await response.json();
      console.log(`Retrieved ${data.length} daily price entries`);
      setDailyProducts(data);
      setFilteredDailyProducts(data);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching daily products:', err);
      setError(err.message);
      setLoading(false);
    }
  };
  
  // Handle price input change
  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setPriceData(prev => ({
      ...prev,
      [name]: name === 'PriceMax' || name === 'PriceMin' ? Number(value) : value
    }));
  };
  
  // Add/update daily price for the selected product
  const addDailyPrice = async (e) => {
    e.preventDefault();
    setError(null); // Clear previous errors
    
    if (!selectedProduct) {
      alert('कृपया उत्पादन निवडा!');
      return;
    }
    
    // Validate price values
    if (!priceData.PriceMax || !priceData.PriceMin) {
      alert('कृपया शक्य ती कमाल व किमान किंमत भरा'); // Please enter both minimum and maximum prices
      return;
    }

    // Make sure prices are valid numbers
    const maxPrice = Number(priceData.PriceMax);
    const minPrice = Number(priceData.PriceMin);
    
    if (isNaN(maxPrice) || isNaN(minPrice)) {
      alert('किंमती अंकात असणे आवश्यक आहे'); // Prices must be valid numbers
      return;
    }
    
    try {
      // Format date properly to avoid timezone issues
      // Parse the date parts to ensure consistent formatting
      const dateParts = selectedDate.split('-');
      const year = parseInt(dateParts[0], 10);
      const month = parseInt(dateParts[1], 10);
      const day = parseInt(dateParts[2], 10);
      
      // Format date as YYYY-MM-DD ensuring proper padding
      const formattedDate = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      
      const data = {
        productId: selectedProduct,
        date: formattedDate, // Use the properly formatted date
        marketName: priceData.marketName,
        PriceMax: maxPrice,
        PriceMin: minPrice,
        notes: priceData.notes || ''
      };
      
      console.log('Submitting daily price data:', data);
      
      const response = await fetch('/api/addAndGetProducts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          path: 'daily'
        }),
      });
      
      // Check for response errors
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: 'Unknown error' }));
        console.error('Server responded with error:', errorData);
        throw new Error(errorData.error || 'Failed to add daily price');
      }
      
      // Reset form and refresh data
      setPriceData({
        PriceMax: '',
        PriceMin: '',
        notes: '',
        marketName: priceData.marketName, // Keep the selected market name
        marketStatus: priceData.marketStatus // Keep the market status
      });
      setSelectedProduct('');
      fetchDailyProducts();
      alert('आजची किंमत यशस्वीरित्या जोडली गेली!');
    } catch (err) {
      console.error('Error adding daily price:', err);
      setError(err.message);
      alert('त्रुटी: ' + err.message); // Error: [error message]
    }
  };
  
  // Calculate average price
  const calculateAvgPrice = (max, min) => {
    return Math.round((max + min) / 2);
  };
  
  // Group products by category
  const groupByCategory = (products) => {
    const grouped = {};
    
    products.forEach(product => {
      const category = product.category || 'भाज्या';
      
      if (!grouped[category]) {
        grouped[category] = [];
      }
      
      grouped[category].push(product);
    });
    
    return grouped;
  };
  
  // Filter daily products based on selected market
  useEffect(() => {
    console.log("Admin table - Market filter changed to:", selectedTableMarket);
    console.log("Admin table - Total items before filtering:", dailyProducts.length);
    
    if (selectedTableMarket && selectedTableMarket !== '') {
      const filtered = dailyProducts.filter(item => {
        const marketName = item.marketName || 'दिंडोरी मुख्य बाजार';
        return marketName === selectedTableMarket;
      });
      
      console.log("Admin table - Filtered items after market filter:", filtered.length);
      setFilteredDailyProducts(filtered);
    } else {
      console.log("Admin table - No market filter, showing all items");
      setFilteredDailyProducts(dailyProducts);
    }
  }, [selectedTableMarket, dailyProducts]);
  
  const groupedProducts = groupByCategory(products);
  const categories = Object.keys(groupedProducts).sort();
  
  return (
    <AdminLayout>
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">आजचे बाजार भाव जोडा</h1>
        
        <div className="mb-6 flex flex-col md:flex-row items-center gap-4 bg-gray-50 p-4 rounded-lg">
          <div className="w-full md:w-1/3">
            <label className="block text-sm font-medium text-gray-700 mb-1">दिनांक</label>
            <div className="flex items-center">
              <FaCalendarAlt className="text-gray-400 mr-2" />
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>
          
          <div className="text-center md:text-right w-full md:w-auto">
            <p className="text-sm text-gray-500 mb-1">आत्तापर्यंत जोडलेले</p>
            <p className="text-xl font-bold text-green-600">{dailyProducts.length} / {products.length}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-6 mb-6">
          {/* Daily Price Form */}
          <div className="mb-6 bg-gray-50 p-4 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">बाजार स्थिती सेट करा</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 p-4 bg-white rounded-lg shadow-sm">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">बाजार निवडा</label>
                <select
                  name="marketName"
                  value={priceData.marketName}
                  onChange={handlePriceChange}
                  className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="सर्व बाजार">सर्व बाजार</option>
                  <option value="दिंडोरी मुख्य बाजार">दिंडोरी मुख्य बाजार</option>
                  <option value="वणी उप बाजार">वणी उप बाजार</option>
                  <option value="खोरीपाडा उप बाजार">खोरीपाडा उप बाजार</option>
                  <option value="मोहाडी उप बाजार">मोहाडी उप बाजार</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">बाजार स्थिती</label>
                <select
                  name="marketStatus"
                  value={priceData.marketStatus}
                  onChange={handlePriceChange}
                  className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  {marketStatusOptions.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>
              <div className="flex items-end">
                <button
                  onClick={async (e) => {
                    e.preventDefault();
                    try {
                      // Format date properly
                      const dateParts = selectedDate.split('-');
                      const year = parseInt(dateParts[0], 10);
                      const month = parseInt(dateParts[1], 10);
                      const day = parseInt(dateParts[2], 10);
                      const formattedDate = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                      
                      await fetch('/api/marketStatus', {
                        method: 'POST',
                        headers: {
                          'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                          date: formattedDate,
                          marketName: priceData.marketName,
                          status: priceData.marketStatus
                        }),
                      });
                      
                      alert('बाजार स्थिती यशस्वीरित्या अपडेट झाली!');
                    } catch (err) {
                      console.error('Error setting market status:', err);
                      alert('बाजार स्थिती अपडेट करताना त्रुटी: ' + err.message);
                    }
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md w-full"
                >
                  बाजार स्थिती सेट करा
                </button>
              </div>
            </div>
            
            <h2 className="text-lg font-semibold mb-4">नवीन दर जोडा</h2>
            
            <form onSubmit={addDailyPrice} className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">उत्पादन निवडा</label>
                <select
                  value={selectedProduct}
                  onChange={(e) => setSelectedProduct(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                >
                  <option value="">-- उत्पादन निवडा --</option>
                  {categories.map((category) => (
                    <optgroup label={category} key={category}>
                      {groupedProducts[category].map((product) => (
                        <option value={product._id} key={product._id}>
                          {product.productNameMarathi} ({product.ProductInUnit})
                        </option>
                      ))}
                    </optgroup>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">किमान किंमत</label>
                <div className="flex items-center">
                  <span className="text-gray-500 mr-2">₹</span>
                  <input
                    type="number"
                    name="PriceMin"
                    value={priceData.PriceMin}
                    onChange={handlePriceChange}
                    placeholder="0"
                    min="0"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">जास्त किंमत</label>
                <div className="flex items-center">
                  <span className="text-gray-500 mr-2">₹</span>
                  <input
                    type="number"
                    name="PriceMax"
                    value={priceData.PriceMax}
                    onChange={handlePriceChange}
                    placeholder="0"
                    min="0"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
              </div>
              
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">बाजार नाव</label>
                <select
                  name="marketName"
                  value={priceData.marketName}
                  onChange={handlePriceChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="दिंडोरी मुख्य बाजार">दिंडोरी मुख्य बाजार</option>
                  <option value="वणी उप बाजार">वणी उप बाजार</option>
                  <option value="खोरीपाडा उप बाजार">खोरीपाडा उप बाजार</option>
                  <option value="मोहाडी उप बाजार">मोहाडी उप बाजार</option>
                 
                 
                 
                </select>
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">नोट्स (वैकल्पिक)</label>
                <input
                  type="text"
                  name="notes"
                  value={priceData.notes}
                  onChange={handlePriceChange}
                  placeholder="वैकल्पिक टिप्पणी..."
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              
              <div>
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md flex items-center justify-center w-full h-full"
                >
                  <FaPlus className="mr-2" /> दर जोडा
                </button>
              </div>
            </form>
          </div>
          
          {/* Today's Prices */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">आजचे बाजार भाव</h2>
              
              <div className="flex items-center space-x-2">
                <label className="text-sm font-medium text-gray-700">बाजार फिल्टर:</label>
                <div className="relative">
                  <select
                    value={selectedTableMarket}
                    onChange={(e) => setSelectedTableMarket(e.target.value)}
                    className="border border-gray-300 rounded-md px-3 py-2 pr-8 appearance-none focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                  >
                    {marketOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            
            {loading ? (
              <div className="text-center py-4">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600 mx-auto"></div>
                <p className="mt-2 text-gray-600">लोड करत आहे...</p>
              </div>
            ) : error ? (
              <div className="bg-red-100 text-red-700 p-4 rounded-lg mb-4">
                <p>{error}</p>
              </div>
            ) : filteredDailyProducts.length === 0 ? (
              <div className="text-center py-8 bg-gray-50 rounded-lg">
                <FaFilter className="mx-auto text-4xl text-gray-300 mb-2" />
                <p className="text-gray-500">
                  {dailyProducts.length > 0 && selectedTableMarket 
                    ? `निवडलेल्या बाजारासाठी कोणतेही दर उपलब्ध नाहीत` 
                    : `सध्या कोणतेही बाजार भाव जोडले नाहीत. भाव जोडण्यासाठी वरील फॉर्म वापरा`}
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">क्र.</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">उत्पादन नाव</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">श्रेणी</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">बाजार</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">किमान किंमत</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">जास्त किंमत</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">सरासरी</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">एकक</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">नोट्स</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredDailyProducts.map((item, index) => (
                      <tr key={item._id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{index + 1}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          <div>
                            <span className="font-semibold">{item.product?.productNameMarathi}</span>
                            <span className="text-xs text-gray-500 block">{item.product?.productNameEnglish}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            {item.product?.category || 'भाज्या'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            {item.marketName || 'दिंडोरी मुख्य बाजार'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">₹{item.PriceMin}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">₹{item.PriceMax}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">₹{calculateAvgPrice(item.PriceMax, item.PriceMin)}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.product?.ProductInUnit || 'किलो'}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.notes || '-'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
