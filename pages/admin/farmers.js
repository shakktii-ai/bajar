'use client';
import { useState, useEffect } from 'react';
import { FaEdit, FaTrash, FaPlus, FaSave, FaTimes, FaUser, FaSearch, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import Link from 'next/link';
import AdminLayout from '../../components/AdminLayout';

export default function FarmersManagement() {

  // Sample farmers data
  const [farmers, setFarmers] = useState([
    { id: 1, name: 'रमेश पाटील', registrationNo: 'FR00123', village: 'दिंडोरी', phone: '9876543210', landArea: '5 हेक्टर', crops: 'कांदा, टोमॅटो, मिरची', registrationDate: '2023-05-20', status: 'active' },
    { id: 2, name: 'सुनिता जाधव', registrationNo: 'FR00124', village: 'वनी', phone: '9876543211', landArea: '3.5 हेक्टर', crops: 'गहू, तांदूळ', registrationDate: '2023-06-12', status: 'active' },
    { id: 3, name: 'सुरेश शिंदे', registrationNo: 'FR00125', village: 'मोहाडी', phone: '9876543212', landArea: '4 हेक्टर', crops: 'सोयाबीन, तूर', registrationDate: '2023-07-05', status: 'active' },
    { id: 4, name: 'अनिता ताम्हाणे', registrationNo: 'FR00126', village: 'नांदगाव', phone: '9876543213', landArea: '2.5 हेक्टर', crops: 'मका, ज्वारी', registrationDate: '2023-08-17', status: 'active' },
    { id: 5, name: 'विलास मोरे', registrationNo: 'FR00127', village: 'उमराळे', phone: '9876543214', landArea: '6 हेक्टर', crops: 'द्राक्षे, डाळिंब', registrationDate: '2023-09-23', status: 'active' },
    { id: 6, name: 'राजेंद्र कदम', registrationNo: 'FR00128', village: 'वाडी', phone: '9876543215', landArea: '3 हेक्टर', crops: 'कापूस, तूर', registrationDate: '2023-10-10', status: 'inactive' },
    { id: 7, name: 'पल्लवी सावंत', registrationNo: 'FR00129', village: 'मालेगाव', phone: '9876543216', landArea: '4.5 हेक्टर', crops: 'बाजरी, मका', registrationDate: '2023-11-15', status: 'active' },
    { id: 8, name: 'संतोष गायकवाड', registrationNo: 'FR00130', village: 'येवला', phone: '9876543217', landArea: '5.5 हेक्टर', crops: 'कांदा, बटाटा', registrationDate: '2023-12-20', status: 'active' },
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    village: '',
    phone: '',
    landArea: '',
    crops: '',
    status: 'active'
  });
  const [showAddForm, setShowAddForm] = useState(false);

  // Get today's date in Marathi
  const today = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const todayMarathi = today.toLocaleDateString('mr-IN', options);

  // Pagination
  const itemsPerPage = 5;
  const filteredFarmers = farmers.filter(farmer => 
    farmer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    farmer.village.toLowerCase().includes(searchQuery.toLowerCase()) ||
    farmer.registrationNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
    farmer.phone.includes(searchQuery)
  );
  const totalPages = Math.ceil(filteredFarmers.length / itemsPerPage);
  const currentFarmers = filteredFarmers.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  // Handle form change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Start editing a farmer
  const startEdit = (farmer) => {
    setEditingId(farmer.id);
    setFormData({
      name: farmer.name,
      village: farmer.village,
      phone: farmer.phone,
      landArea: farmer.landArea,
      crops: farmer.crops,
      status: farmer.status
    });
  };

  // Cancel editing
  const cancelEdit = () => {
    setEditingId(null);
    setFormData({
      name: '',
      village: '',
      phone: '',
      landArea: '',
      crops: '',
      status: 'active'
    });
  };

  // Save edited farmer
  const saveFarmer = (id) => {
    setFarmers(farmers.map(farmer => 
      farmer.id === id ? {
        ...farmer,
        name: formData.name,
        village: formData.village,
        phone: formData.phone,
        landArea: formData.landArea,
        crops: formData.crops,
        status: formData.status
      } : farmer
    ));
    setEditingId(null);
  };

  // Add new farmer
  const addFarmer = () => {
    const newFarmer = {
      id: farmers.length > 0 ? Math.max(...farmers.map(f => f.id)) + 1 : 1,
      name: formData.name,
      registrationNo: `FR${String(Math.floor(10000 + Math.random() * 90000)).padStart(5, '0')}`,
      village: formData.village,
      phone: formData.phone,
      landArea: formData.landArea,
      crops: formData.crops,
      registrationDate: new Date().toISOString().split('T')[0],
      status: formData.status
    };
    setFarmers([...farmers, newFarmer]);
    setShowAddForm(false);
    setFormData({
      name: '',
      village: '',
      phone: '',
      landArea: '',
      crops: '',
      status: 'active'
    });
  };

  // Delete farmer
  const deleteFarmer = (id) => {
    if (window.confirm('या शेतकऱ्याची माहिती हटवायची आहे का?')) {
      setFarmers(farmers.filter(farmer => farmer.id !== id));
    }
  };

  return (
    <AdminLayout>
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-800">शेतकरी व्यवस्थापन</h2>
              <button 
                onClick={() => setShowAddForm(true)}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md flex items-center"
              >
                <FaPlus className="mr-2" /> नवीन शेतकरी जोडा
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
                  placeholder="शोधा (नाव, गाव, क्रमांक)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="text-sm text-gray-600">
                एकूण शेतकरी: <span className="font-semibold">{farmers.length}</span> | 
                सक्रिय: <span className="font-semibold">{farmers.filter(f => f.status === 'active').length}</span> | 
                निष्क्रिय: <span className="font-semibold">{farmers.filter(f => f.status === 'inactive').length}</span>
              </div>
            </div>

            {/* Add Form */}
            {showAddForm && (
              <div className="bg-green-50 p-4 rounded-md mb-6 border border-green-200">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium text-green-800">नवीन शेतकरी नोंदणी</h3>
                  <button onClick={() => setShowAddForm(false)} className="text-gray-500 hover:text-gray-700">
                    <FaTimes />
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">शेतकऱ्याचे नाव</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">गाव</label>
                    <input
                      type="text"
                      name="village"
                      value={formData.village}
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
                    <label className="block text-sm font-medium text-gray-700 mb-1">जमीन क्षेत्रफळ</label>
                    <input
                      type="text"
                      name="landArea"
                      value={formData.landArea}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="उदा. 5 हेक्टर"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">पिके</label>
                    <input
                      type="text"
                      name="crops"
                      value={formData.crops}
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
                    onClick={addFarmer}
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md flex items-center"
                  >
                    <FaSave className="mr-2" /> जतन करा
                  </button>
                </div>
              </div>
            )}

            {/* Farmers Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-2 px-4 border-b text-left text-sm font-semibold text-gray-700">क्र.</th>
                    <th className="py-2 px-4 border-b text-left text-sm font-semibold text-gray-700">नोंदणी क्र.</th>
                    <th className="py-2 px-4 border-b text-left text-sm font-semibold text-gray-700">शेतकऱ्याचे नाव</th>
                    <th className="py-2 px-4 border-b text-left text-sm font-semibold text-gray-700">गाव</th>
                    <th className="py-2 px-4 border-b text-left text-sm font-semibold text-gray-700">मोबाईल क्रमांक</th>
                    <th className="py-2 px-4 border-b text-left text-sm font-semibold text-gray-700">जमीन क्षेत्रफळ</th>
                    <th className="py-2 px-4 border-b text-left text-sm font-semibold text-gray-700">पिके</th>
                    <th className="py-2 px-4 border-b text-left text-sm font-semibold text-gray-700">स्थिती</th>
                    <th className="py-2 px-4 border-b text-left text-sm font-semibold text-gray-700">कृती</th>
                  </tr>
                </thead>
                <tbody>
                  {currentFarmers.map((farmer, index) => (
                    <tr key={farmer.id} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      {editingId === farmer.id ? (
                        <>
                          <td className="py-2 px-4 border-b">{(currentPage - 1) * itemsPerPage + index + 1}</td>
                          <td className="py-2 px-4 border-b">{farmer.registrationNo}</td>
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
                              name="village"
                              value={formData.village}
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
                            <input
                              type="text"
                              name="landArea"
                              value={formData.landArea}
                              onChange={handleChange}
                              className="w-full border border-gray-300 rounded-md px-2 py-1 text-sm"
                            />
                          </td>
                          <td className="py-2 px-4 border-b">
                            <input
                              type="text"
                              name="crops"
                              value={formData.crops}
                              onChange={handleChange}
                              className="w-full border border-gray-300 rounded-md px-2 py-1 text-sm"
                            />
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
                              <button onClick={() => saveFarmer(farmer.id)} className="text-green-600 hover:text-green-800">
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
                          <td className="py-2 px-4 border-b">{farmer.registrationNo}</td>
                          <td className="py-2 px-4 border-b">{farmer.name}</td>
                          <td className="py-2 px-4 border-b">{farmer.village}</td>
                          <td className="py-2 px-4 border-b">{farmer.phone}</td>
                          <td className="py-2 px-4 border-b">{farmer.landArea}</td>
                          <td className="py-2 px-4 border-b">{farmer.crops}</td>
                          <td className="py-2 px-4 border-b">
                            <span className={`px-2 py-1 rounded-full text-xs ${farmer.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                              {farmer.status === 'active' ? 'सक्रिय' : 'निष्क्रिय'}
                            </span>
                          </td>
                          <td className="py-2 px-4 border-b">
                            <div className="flex space-x-2">
                              <button onClick={() => startEdit(farmer)} className="text-blue-600 hover:text-blue-800">
                                <FaEdit />
                              </button>
                              <button onClick={() => deleteFarmer(farmer.id)} className="text-red-600 hover:text-red-800">
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
                <h3 className="text-gray-500 text-sm">एकूण शेतकरी</h3>
                <p className="text-2xl font-bold">{farmers.length}</p>
                <p className="text-xs text-green-600">+23 मागील महिन्यापेक्षा</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
              <div className="rounded-full bg-blue-100 p-3 mr-4">
                <FaMapMarkerAlt className="text-blue-600 text-2xl" />
              </div>
              <div>
                <h3 className="text-gray-500 text-sm">गावे</h3>
                <p className="text-2xl font-bold">{new Set(farmers.map(f => f.village)).size}</p>
                <p className="text-xs text-green-600">+3 नवीन गावे</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
              <div className="rounded-full bg-yellow-100 p-3 mr-4">
                <FaPhoneAlt className="text-yellow-600 text-2xl" />
              </div>
              <div>
                <h3 className="text-gray-500 text-sm">एकूण संपर्क</h3>
                <p className="text-2xl font-bold">{farmers.length}</p>
                <p className="text-xs text-green-600">100% अद्यतनित</p>
              </div>
            </div>
          </div>
    </AdminLayout>
  );
}
