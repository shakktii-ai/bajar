import { useState, useEffect } from 'react';
import { FaPlus, FaSave, FaCalendarAlt, FaSearch, FaFilter, FaTimes } from 'react-icons/fa';
import AdminLayout from '../../components/AdminLayout';

export default function DailyPricing() {
  const [products, setProducts] = useState([]);
  const [dailyProducts, setDailyProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [priceData, setPriceData] = useState({
    PriceMax: '',
    PriceMin: '',
    notes: ''
  });
  
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
  
  // Function to fetch daily products for the selected date
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
      
      const response = await fetch(`/api/addAndGetProducts?date=${formattedDate}&path=daily`);
      if (!response.ok) {
        throw new Error('Failed to fetch daily products');
      }
      const data = await response.json();
      console.log(`Retrieved ${data.length} daily price entries`);
      setDailyProducts(data);
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
        notes: ''
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
          <div className="bg-gray-50 p-4 rounded-lg">
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
              
              <div className="md:col-span-3">
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
            <h2 className="text-lg font-semibold mb-4">आजचे बाजार भाव</h2>
            
            {loading ? (
              <div className="text-center py-4">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600 mx-auto"></div>
                <p className="mt-2 text-gray-600">लोड करत आहे...</p>
              </div>
            ) : error ? (
              <div className="bg-red-100 text-red-700 p-4 rounded-lg mb-4">
                <p>{error}</p>
              </div>
            ) : dailyProducts.length === 0 ? (
              <div className="text-center py-8 bg-gray-50 rounded-lg">
                <FaFilter className="mx-auto text-4xl text-gray-300 mb-2" />
                <p className="text-gray-500">सध्या कोणतेही बाजार भाव जोडले नाहीत. भाव जोडण्यासाठी वरील फॉर्म वापरा.</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">क्र.</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">उत्पादन नाव</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">श्रेणी</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">किमान किंमत</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">जास्त किंमत</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">सरासरी</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">एकक</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">नोट्स</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {dailyProducts.map((item, index) => (
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
