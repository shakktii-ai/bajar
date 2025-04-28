'use client';
import { useState, useEffect } from 'react';
import { FaEdit, FaTrash, FaPlus, FaSave, FaTimes, FaUser, FaSearch, FaStoreAlt, FaIdCard } from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function TradersManagement() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [adminUser, setAdminUser] = useState(null);
  
  // Check authentication status on component mount
  useEffect(() => {
    const checkAuth = () => {
      const adminAuth = localStorage.getItem('adminAuth');
      if (!adminAuth) {
        router.push('/admin/login');
        return;
      }
      
      try {
        const authData = JSON.parse(adminAuth);
        if (!authData.isLoggedIn || !authData.token) {
          router.push('/admin/login');
          return;
        }
        
        setIsAuthenticated(true);
        setAdminUser(authData.user);
      } catch (err) {
        console.error('Auth parsing error:', err);
        router.push('/admin/login');
      }
    };
    
    checkAuth();
  }, [router]);
  
  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    router.push('/admin/login');
  };

  // Sample traders data
  const [traders, setTraders] = useState([
    { id: 1, name: 'विकास शेट्टी', licenseNo: 'TR00123', shop: 'श्री गणेश ट्रेडर्स', address: 'दिंडोरी मुख्य रस्ता', phone: '9876543210', products: 'कांदा, टोमॅटो, मिरची', licenseDate: '2023-05-20', licenseExpiry: '2024-05-19', status: 'active' },
    { id: 2, name: 'अमोल पटेल', licenseNo: 'TR00124', shop: 'किसान ट्रेडिंग कंपनी', address: 'दिंडोरी बाजार', phone: '9876543211', products: 'गहू, तांदूळ, ज्वारी', licenseDate: '2023-06-12', licenseExpiry: '2024-06-11', status: 'active' },
    { id: 3, name: 'प्रमोद शर्मा', licenseNo: 'TR00125', shop: 'नवीन फ्रूट एजन्सी', address: 'मौजे वणी', phone: '9876543212', products: 'आंबा, केळी, द्राक्षे', licenseDate: '2023-07-05', licenseExpiry: '2024-07-04', status: 'active' },
    { id: 4, name: 'राजेश गुप्ता', licenseNo: 'TR00126', shop: 'गुप्ता ट्रेडर्स', address: 'नांदगाव रोड', phone: '9876543213', products: 'मका, ज्वारी, गहू', licenseDate: '2023-08-17', licenseExpiry: '2024-08-16', status: 'active' },
    { id: 5, name: 'रुचिता देसाई', licenseNo: 'TR00127', shop: 'श्री कृष्णा ट्रेडिंग', address: 'उमराळे', phone: '9876543214', products: 'द्राक्षे, डाळिंब, सीताफळ', licenseDate: '2023-09-23', licenseExpiry: '2024-09-22', status: 'active' },
    { id: 6, name: 'मनोज वर्मा', licenseNo: 'TR00128', shop: 'दिंडोरी फूड्स प्रायव्हेट लिमिटेड', address: 'दिंडोरी रोड', phone: '9876543215', products: 'कापूस, सोयाबीन, तूर', licenseDate: '2023-10-10', licenseExpiry: '2024-10-09', status: 'inactive' },
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    shop: '',
    address: '',
    phone: '',
    products: '',
    status: 'active'
  });
  const [showAddForm, setShowAddForm] = useState(false);

  // Get today's date in Marathi
  const today = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const todayMarathi = today.toLocaleDateString('mr-IN', options);

  // Pagination
  const itemsPerPage = 5;
  const filteredTraders = traders.filter(trader => 
    trader.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    trader.shop.toLowerCase().includes(searchQuery.toLowerCase()) ||
    trader.licenseNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
    trader.phone.includes(searchQuery)
  );
  const totalPages = Math.ceil(filteredTraders.length / itemsPerPage);
  const currentTraders = filteredTraders.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  // Handle form change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Start editing a trader
  const startEdit = (trader) => {
    setEditingId(trader.id);
    setFormData({
      name: trader.name,
      shop: trader.shop,
      address: trader.address,
      phone: trader.phone,
      products: trader.products,
      status: trader.status
    });
  };

  // Cancel editing
  const cancelEdit = () => {
    setEditingId(null);
    setFormData({
      name: '',
      shop: '',
      address: '',
      phone: '',
      products: '',
      status: 'active'
    });
  };

  // Save edited trader
  const saveTrader = (id) => {
    setTraders(traders.map(trader => 
      trader.id === id ? {
        ...trader,
        name: formData.name,
        shop: formData.shop,
        address: formData.address,
        phone: formData.phone,
        products: formData.products,
        status: formData.status
      } : trader
    ));
    setEditingId(null);
  };

  // Add new trader
  const addTrader = () => {
    // Generate a license expiry date one year from today
    const expiryDate = new Date();
    expiryDate.setFullYear(expiryDate.getFullYear() + 1);
    expiryDate.setDate(expiryDate.getDate() - 1);
    
    const newTrader = {
      id: traders.length > 0 ? Math.max(...traders.map(t => t.id)) + 1 : 1,
      name: formData.name,
      licenseNo: `TR${String(Math.floor(10000 + Math.random() * 90000)).padStart(5, '0')}`,
      shop: formData.shop,
      address: formData.address,
      phone: formData.phone,
      products: formData.products,
      licenseDate: new Date().toISOString().split('T')[0],
      licenseExpiry: expiryDate.toISOString().split('T')[0],
      status: formData.status
    };
    setTraders([...traders, newTrader]);
    setShowAddForm(false);
    setFormData({
      name: '',
      shop: '',
      address: '',
      phone: '',
      products: '',
      status: 'active'
    });
  };

  // Delete trader
  const deleteTrader = (id) => {
    if (window.confirm('या व्यापाऱ्याची माहिती हटवायची आहे का?')) {
      setTraders(traders.filter(trader => trader.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Admin Header */}
      <header className="bg-green-800 text-white shadow-lg">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">दिंडोरी कृषि उत्पन्न बाजार समिती - प्रशासक पॅनल</h1>
            <p className="text-sm">{todayMarathi}</p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="bg-green-700 px-3 py-1 rounded-full text-sm">{adminUser || 'Admin'}</span>
            <button 
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-sm">
              लॉग आउट
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar Navigation */}
        <aside className="w-64 bg-white shadow-md h-screen sticky top-0 pt-6">
          <nav>
            <ul className="space-y-2 px-4">
              <li>
                <Link href="/admin" className="block hover:bg-green-100 px-4 py-2 rounded font-medium text-green-800">
                  डॅशबोर्ड
                </Link>
              </li>
              <li>
                <Link href="/admin/market-rates" className="block hover:bg-green-100 px-4 py-2 rounded font-medium text-green-800">
                  दैनिक दर व्यवस्थापन
                </Link>
              </li>
              <li>
                <Link href="/admin/farmers" className="block hover:bg-green-100 px-4 py-2 rounded font-medium text-green-800">
                  शेतकरी व्यवस्थापन
                </Link>
              </li>
              <li>
                <Link href="/admin/traders" className="block bg-green-600 text-white px-4 py-2 rounded font-medium">
                  व्यापारी व्यवस्थापन
                </Link>
              </li>
              <li>
                <Link href="/admin/products" className="block hover:bg-green-100 px-4 py-2 rounded font-medium text-green-800">
                  उत्पादन व्यवस्थापन
                </Link>
              </li>
              <li>
                <Link href="/admin/gallery" className="block hover:bg-green-100 px-4 py-2 rounded font-medium text-green-800">
                  फोटो/व्हिडिओ अपलोड
                </Link>
              </li>
              <li>
                <Link href="/admin/reports" className="block hover:bg-green-100 px-4 py-2 rounded font-medium text-green-800">
                  अहवाल
                </Link>
              </li>
              <li>
                <Link href="/admin/settings" className="block hover:bg-green-100 px-4 py-2 rounded font-medium text-green-800">
                  सेटिंग्ज
                </Link>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-800">व्यापारी व्यवस्थापन</h2>
              <button 
                onClick={() => setShowAddForm(true)}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md flex items-center"
              >
                <FaPlus className="mr-2" /> नवीन व्यापारी जोडा
              </button>
            </div>

            {/* Search and Filters */}
            <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <FaSearch className="text-gray-400" />
                </div>
                <input
                  type="text"
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="शोधा (नाव, दुकान, लायसन्स)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="text-sm text-gray-600">
                एकूण व्यापारी: <span className="font-semibold">{traders.length}</span> | 
                सक्रिय: <span className="font-semibold">{traders.filter(t => t.status === 'active').length}</span> | 
                निष्क्रिय: <span className="font-semibold">{traders.filter(t => t.status === 'inactive').length}</span>
              </div>
            </div>

            {/* Add Form */}
            {showAddForm && (
              <div className="bg-green-50 p-4 rounded-md mb-6 border border-green-200">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium text-green-800">नवीन व्यापारी नोंदणी</h3>
                  <button onClick={() => setShowAddForm(false)} className="text-gray-500 hover:text-gray-700">
                    <FaTimes />
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">व्यापाऱ्याचे नाव</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">दुकानाचे नाव</label>
                    <input
                      type="text"
                      name="shop"
                      value={formData.shop}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">पत्ता</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">मोबाईल क्रमांक</label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">उत्पादने</label>
                    <input
                      type="text"
                      name="products"
                      value={formData.products}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="उदा. कांदा, टोमॅटो, मिरची"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">स्थिती</label>
                    <select
                      name="status"
                      value={formData.status}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                      <option value="active">सक्रिय</option>
                      <option value="inactive">निष्क्रिय</option>
                    </select>
                  </div>
                </div>
                <div className="flex justify-end">
                  <button
                    onClick={() => setShowAddForm(false)}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-md mr-2"
                  >
                    रद्द करा
                  </button>
                  <button
                    onClick={addTrader}
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md flex items-center"
                  >
                    <FaSave className="mr-2" /> जतन करा
                  </button>
                </div>
              </div>
            )}

            {/* Traders Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-2 px-4 border-b text-left text-sm font-semibold text-gray-700">क्र.</th>
                    <th className="py-2 px-4 border-b text-left text-sm font-semibold text-gray-700">लायसन्स क्र.</th>
                    <th className="py-2 px-4 border-b text-left text-sm font-semibold text-gray-700">व्यापाऱ्याचे नाव</th>
                    <th className="py-2 px-4 border-b text-left text-sm font-semibold text-gray-700">दुकानाचे नाव</th>
                    <th className="py-2 px-4 border-b text-left text-sm font-semibold text-gray-700">पत्ता</th>
                    <th className="py-2 px-4 border-b text-left text-sm font-semibold text-gray-700">मोबाईल क्रमांक</th>
                    <th className="py-2 px-4 border-b text-left text-sm font-semibold text-gray-700">लायसन्स कालावधी</th>
                    <th className="py-2 px-4 border-b text-left text-sm font-semibold text-gray-700">स्थिती</th>
                    <th className="py-2 px-4 border-b text-left text-sm font-semibold text-gray-700">कृती</th>
                  </tr>
                </thead>
                <tbody>
                  {currentTraders.map((trader, index) => (
                    <tr key={trader.id} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      {editingId === trader.id ? (
                        <>
                          <td className="py-2 px-4 border-b">{(currentPage - 1) * itemsPerPage + index + 1}</td>
                          <td className="py-2 px-4 border-b">{trader.licenseNo}</td>
                          <td className="py-2 px-4 border-b">
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              className="w-full border border-gray-300 rounded-md px-2 py-1 text-sm"
                            />
                          </td>
                          <td className="py-2 px-4 border-b">
                            <input
                              type="text"
                              name="shop"
                              value={formData.shop}
                              onChange={handleChange}
                              className="w-full border border-gray-300 rounded-md px-2 py-1 text-sm"
                            />
                          </td>
                          <td className="py-2 px-4 border-b">
                            <input
                              type="text"
                              name="address"
                              value={formData.address}
                              onChange={handleChange}
                              className="w-full border border-gray-300 rounded-md px-2 py-1 text-sm"
                            />
                          </td>
                          <td className="py-2 px-4 border-b">
                            <input
                              type="text"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              className="w-full border border-gray-300 rounded-md px-2 py-1 text-sm"
                            />
                          </td>
                          <td className="py-2 px-4 border-b">
                            {trader.licenseDate} - {trader.licenseExpiry}
                          </td>
                          <td className="py-2 px-4 border-b">
                            <select
                              name="status"
                              value={formData.status}
                              onChange={handleChange}
                              className="w-full border border-gray-300 rounded-md px-2 py-1 text-sm"
                            >
                              <option value="active">सक्रिय</option>
                              <option value="inactive">निष्क्रिय</option>
                            </select>
                          </td>
                          <td className="py-2 px-4 border-b">
                            <div className="flex space-x-2">
                              <button onClick={() => saveTrader(trader.id)} className="text-green-600 hover:text-green-800">
                                <FaSave />
                              </button>
                              <button onClick={cancelEdit} className="text-red-600 hover:text-red-800">
                                <FaTimes />
                              </button>
                            </div>
                          </td>
                        </>
                      ) : (
                        <>
                          <td className="py-2 px-4 border-b">{(currentPage - 1) * itemsPerPage + index + 1}</td>
                          <td className="py-2 px-4 border-b">{trader.licenseNo}</td>
                          <td className="py-2 px-4 border-b">{trader.name}</td>
                          <td className="py-2 px-4 border-b">{trader.shop}</td>
                          <td className="py-2 px-4 border-b">{trader.address}</td>
                          <td className="py-2 px-4 border-b">{trader.phone}</td>
                          <td className="py-2 px-4 border-b">
                            {trader.licenseDate} - <span className={new Date(trader.licenseExpiry) < new Date() ? 'text-red-600 font-medium' : ''}>{trader.licenseExpiry}</span>
                          </td>
                          <td className="py-2 px-4 border-b">
                            <span className={`px-2 py-1 rounded-full text-xs ${trader.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                              {trader.status === 'active' ? 'सक्रिय' : 'निष्क्रिय'}
                            </span>
                          </td>
                          <td className="py-2 px-4 border-b">
                            <div className="flex space-x-2">
                              <button onClick={() => startEdit(trader)} className="text-blue-600 hover:text-blue-800">
                                <FaEdit />
                              </button>
                              <button onClick={() => deleteTrader(trader.id)} className="text-red-600 hover:text-red-800">
                                <FaTrash />
                              </button>
                            </div>
                          </td>
                        </>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-between items-center mt-4">
                <div className="text-sm text-gray-600">
                  पृष्ठ {currentPage} / {totalPages}
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className={`px-3 py-1 rounded-md ${currentPage === 1 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-green-100 text-green-800 hover:bg-green-200'}`}
                  >
                    मागील
                  </button>
                  <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className={`px-3 py-1 rounded-md ${currentPage === totalPages ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-green-100 text-green-800 hover:bg-green-200'}`}
                  >
                    पुढील
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
              <div className="rounded-full bg-green-100 p-3 mr-4">
                <FaUser className="text-green-600 text-2xl" />
              </div>
              <div>
                <h3 className="text-gray-500 text-sm">एकूण व्यापारी</h3>
                <p className="text-2xl font-bold">{traders.length}</p>
                <p className="text-xs text-green-600">+8 मागील तिमाहीपेक्षा</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
              <div className="rounded-full bg-blue-100 p-3 mr-4">
                <FaStoreAlt className="text-blue-600 text-2xl" />
              </div>
              <div>
                <h3 className="text-gray-500 text-sm">एकूण दुकाने</h3>
                <p className="text-2xl font-bold">{traders.length}</p>
                <p className="text-xs text-green-600">100% नोंदणीकृत</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
              <div className="rounded-full bg-yellow-100 p-3 mr-4">
                <FaIdCard className="text-yellow-600 text-2xl" />
              </div>
              <div>
                <h3 className="text-gray-500 text-sm">सक्रिय परवाने</h3>
                <p className="text-2xl font-bold">{traders.filter(t => t.status === 'active').length}</p>
                <p className="text-xs text-green-600">{((traders.filter(t => t.status === 'active').length / traders.length) * 100).toFixed(0)}% सक्रिय</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
