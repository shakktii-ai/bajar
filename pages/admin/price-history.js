'use client';
import { useState, useEffect } from 'react';
import { FaCalendarAlt, FaSearch, FaFileDownload, FaArrowUp, FaArrowDown, FaFilter } from 'react-icons/fa';
import AdminLayout from '../../components/AdminLayout';

export default function PriceHistoryPage() {
  const [products, setProducts] = useState([]);
  const [dailyPrices, setDailyPrices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Date range for filtering
  const today = new Date().toISOString().split('T')[0];
  const oneMonthAgo = new Date();
  oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
  const oneMonthAgoStr = oneMonthAgo.toISOString().split('T')[0];
  
  const [startDate, setStartDate] = useState(oneMonthAgoStr);
  const [endDate, setEndDate] = useState(today);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Fetch all products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('/api/addAndGetProducts');
        if (!res.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await res.json();
        setProducts(data.filter(product => product.isActive !== false));
      } catch (err) {
        setError(err.message);
      }
    };
    
    fetchProducts();
  }, []);
  
  // Fetch price history
  useEffect(() => {
    const fetchPriceHistory = async () => {
      try {
        setLoading(true);
        const queryParams = new URLSearchParams();
        // Ensure we're setting the path parameter correctly
        queryParams.append('path', 'daily');
        
        if (startDate) {
          queryParams.append('startDate', startDate);
        }
        
        if (endDate) {
          queryParams.append('endDate', endDate);
        }
        
        console.log('Fetching price history with params:', queryParams.toString());
        const res = await fetch(`/api/addAndGetProducts?${queryParams.toString()}`);
        if (!res.ok) {
          throw new Error('Failed to fetch price history');
        }
        
        const data = await res.json();
        console.log('Received price history data:', data.length, 'records');
        setDailyPrices(data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching price history:', err);
        setError(err.message);
        setLoading(false);
      }
    };
    
    fetchPriceHistory();  // Always fetch on component mount or date change
  }, [startDate, endDate]);
  
  // Filter and prepare the data
  const getFilteredData = () => {
    let filteredData = [...dailyPrices];
    
    // Filter by product if selected
    if (selectedProduct) {
      filteredData = filteredData.filter(item => 
        item.product?._id === selectedProduct
      );
    }
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filteredData = filteredData.filter(item => 
        item.product?.productNameMarathi?.toLowerCase().includes(query) ||
        item.product?.productNameEnglish?.toLowerCase().includes(query)
      );
    }
    
    // Sort by date (newest first)
    filteredData.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    return filteredData;
  };
  
  // Group by date
  const groupByDate = (data) => {
    const grouped = {};
    
    data.forEach(item => {
      const date = new Date(item.date).toISOString().split('T')[0];
      
      if (!grouped[date]) {
        grouped[date] = [];
      }
      
      grouped[date].push(item);
    });
    
    return grouped;
  };
  
  // Calculate price change percentage compared to previous day
  const calculatePriceChange = (currentPrice, previousPrice) => {
    if (!previousPrice) return 0;
    
    const avgCurrent = (currentPrice.PriceMax + currentPrice.PriceMin) / 2;
    const avgPrevious = (previousPrice.PriceMax + previousPrice.PriceMin) / 2;
    
    if (avgPrevious === 0) return 0;
    
    return Math.round(((avgCurrent - avgPrevious) / avgPrevious) * 100);
  };
  
  // Format date for display
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('mr-IN', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      weekday: 'long'
    });
  };
  
  // Export price history as CSV
  const exportToCSV = () => {
    const data = getFilteredData();
    
    // Prepare CSV content
    let csvContent = 'दिनांक,उत्पादन (मराठी),उत्पादन (इंग्रजी),जास्तीत जास्त किंमत,किमान किंमत,सरासरी किंमत,यूनिट\n';
    
    data.forEach(item => {
      const date = new Date(item.date).toLocaleDateString('mr-IN');
      const avgPrice = ((item.PriceMax + item.PriceMin) / 2).toFixed(2);
      
      csvContent += `${date},${item.product?.productNameMarathi || ''},${item.product?.productNameEnglish || ''},${item.PriceMax},${item.PriceMin},${avgPrice},${item.product?.ProductInUnit || 'किलो'}\n`;
    });
    
    // Create and download CSV file
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `दिंडोरी-बाजार-भाव-इतिहास-${startDate}-ते-${endDate}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  // Get filtered data and group by date
  const filteredData = getFilteredData();
  const groupedData = groupByDate(filteredData);
  const dates = Object.keys(groupedData).sort((a, b) => new Date(b) - new Date(a));
  
  return (
    <AdminLayout>
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">बाजार भाव इतिहास</h2>
          <button 
            onClick={exportToCSV}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center"
          >
            <FaFileDownload className="mr-2" /> एक्सपोर्ट CSV
          </button>
        </div>

        {/* Filters */}
        <div className="mb-6 bg-gray-50 p-4 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">प्रारंभ तारीख</label>
              <div className="flex items-center">
                <FaCalendarAlt className="text-gray-400 mr-2" />
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">अंतिम तारीख</label>
              <div className="flex items-center">
                <FaCalendarAlt className="text-gray-400 mr-2" />
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">उत्पादन</label>
              <select
                value={selectedProduct}
                onChange={(e) => setSelectedProduct(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="">सर्व उत्पादने</option>
                {products.map(product => (
                  <option key={product._id} value={product._id}>
                    {product.productNameMarathi} ({product.productNameEnglish})
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">शोध</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <FaSearch className="text-gray-400" />
                </div>
                <input
                  type="text"
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="उत्पादन शोधा..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="mt-2 text-sm text-gray-600">
            <span className="font-semibold">{filteredData.length}</span> नोंदी सापडल्या | <span className="font-semibold">{dates.length}</span> दिवस
          </div>
        </div>

        {/* Day-wise Price Display */}
        {loading ? (
          <div className="flex justify-center py-8">
            <div className="animate-spin h-8 w-8 border-2 border-green-500 border-t-transparent rounded-full"></div>
            <span className="ml-2">लोड होत आहे...</span>
          </div>
        ) : dates.length === 0 ? (
          <div className="bg-gray-50 py-8 text-center text-gray-500">
            निवडलेल्या कालावधीत कोणतीही माहिती सापडली नाही
          </div>
        ) : (
          <div className="space-y-6">
            {dates.map((date, dateIndex) => {
              const dayPrices = groupedData[date];
              return (
                <div key={date} className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
                  <div className="bg-green-600 text-white px-4 py-2 font-medium">
                    {formatDate(date)}
                  </div>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            क्र.
                          </th>
                          <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            उत्पादन (मराठी)
                          </th>
                          <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            श्रेणी
                          </th>
                          <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            जास्तीत जास्त किंमत
                          </th>
                          <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            किमान किंमत
                          </th>
                          <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            सरासरी किंमत
                          </th>
                          <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            बदल %
                          </th>
                          <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            युनिट
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {dayPrices.map((item, index) => {
                          const avgPrice = ((item.PriceMax + item.PriceMin) / 2).toFixed(2);
                          
                          // Find previous day price for this product (if available)
                          let prevDayPrice = null;
                          if (dateIndex < dates.length - 1) {
                            const prevDate = dates[dateIndex + 1];
                            const prevDayPrices = groupedData[prevDate];
                            prevDayPrice = prevDayPrices.find(p => 
                              p.product?._id === item.product?._id
                            );
                          }
                          
                          const priceChange = calculatePriceChange(item, prevDayPrice);
                          
                          return (
                            <tr key={item._id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                              <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                                {index + 1}
                              </td>
                              <td className="px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                <div>
                                  <span className="font-semibold">{item.product?.productNameMarathi}</span>
                                  <span className="text-xs text-gray-500 block">{item.product?.productNameEnglish}</span>
                                </div>
                              </td>
                              <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                                <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                  {item.product?.category || 'भाज्या'}
                                </span>
                              </td>
                              <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                                ₹{item.PriceMax}
                              </td>
                              <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                                ₹{item.PriceMin}
                              </td>
                              <td className="px-3 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                ₹{avgPrice}
                              </td>
                              <td className="px-3 py-4 whitespace-nowrap text-sm">
                                <div className={`flex items-center ${priceChange > 0 ? 'text-green-600' : priceChange < 0 ? 'text-red-600' : 'text-gray-500'}`}>
                                  {priceChange > 0 ? (
                                    <FaArrowUp className="mr-1" />
                                  ) : priceChange < 0 ? (
                                    <FaArrowDown className="mr-1" />
                                  ) : null}
                                  {Math.abs(priceChange)}%
                                </div>
                              </td>
                              <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                                {item.product?.ProductInUnit}
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
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
