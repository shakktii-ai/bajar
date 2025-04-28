'use client';
import { useState, useEffect } from 'react';
import { FaImage, FaVideo, FaPlus, FaEdit, FaTrash, FaTimes, FaSave } from 'react-icons/fa';
import AdminLayout from '../../components/AdminLayout';

export default function GalleryManagement() {
  const [galleryItems, setGalleryItems] = useState([
    { id: 1, title: 'शेतकरी मेळावा २०२४', description: 'दिंडोरी कृषि उत्पन्न बाजार समिती येथे झालेला शेतकरी मेळावा', type: 'photo', url: '/images/gallery/photo1.jpg', category: 'Event', eventDate: '2024-02-15', isPublished: true },
    { id: 2, title: 'बाजार समिती नवीन इमारत', description: 'दिंडोरी कृषि उत्पन्न बाजार समिती नवीन प्रशासकीय इमारत उद्घाटन', type: 'photo', url: '/images/gallery/photo2.jpg', category: 'Facility', eventDate: '2024-01-26', isPublished: true },
    { id: 3, title: 'शेतकऱ्यांसाठी प्रशिक्षण', description: 'आधुनिक शेती पद्धती वर आधारित प्रशिक्षण कार्यक्रम', type: 'video', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', thumbnailUrl: '/images/gallery/thumbnail1.jpg', category: 'Training', eventDate: '2024-03-10', isPublished: true },
    { id: 4, title: 'बाजार समिती अहवाल २०२३', description: 'वार्षिक अहवाल प्रस्तुतीकरण', type: 'video', url: 'https://www.youtube.com/embed/VIDEO_ID_2', thumbnailUrl: '/images/gallery/thumbnail2.jpg', category: 'Report', eventDate: '2023-12-28', isPublished: true },
    { id: 5, title: 'शेतकरी सन्मान २०२४', description: 'उत्कृष्ट शेतकरी पुरस्कार वितरण', type: 'photo', url: '/images/gallery/photo3.jpg', category: 'Award', eventDate: '2024-04-10', isPublished: false },
  ]);

  const [activeTab, setActiveTab] = useState('all');
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    type: 'photo',
    url: '',
    thumbnailUrl: '',
    category: 'Event',
    eventDate: new Date().toISOString().split('T')[0],
    isPublished: true
  });

  // Get items based on active tab
  const getFilteredItems = () => {
    if (activeTab === 'all') return galleryItems;
    if (activeTab === 'photo') return galleryItems.filter(item => item.type === 'photo');
    if (activeTab === 'video') return galleryItems.filter(item => item.type === 'video');
    if (activeTab === 'unpublished') return galleryItems.filter(item => !item.isPublished);
    return galleryItems;
  };

  // Handle form change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  // Start editing an item
  const startEdit = (item) => {
    setEditingId(item.id);
    setFormData({
      title: item.title,
      description: item.description,
      type: item.type,
      url: item.url,
      thumbnailUrl: item.thumbnailUrl || '',
      category: item.category,
      eventDate: new Date(item.eventDate).toISOString().split('T')[0],
      isPublished: item.isPublished
    });
  };

  // Cancel editing
  const cancelEdit = () => {
    setEditingId(null);
    setFormData({
      title: '',
      description: '',
      type: 'photo',
      url: '',
      thumbnailUrl: '',
      category: 'Event',
      eventDate: new Date().toISOString().split('T')[0],
      isPublished: true
    });
  };

  // Save edited item
  const saveItem = (id) => {
    setGalleryItems(galleryItems.map(item => 
      item.id === id ? { ...item, ...formData } : item
    ));
    setEditingId(null);
  };

  // Add new item
  const addItem = () => {
    const newItem = {
      id: galleryItems.length > 0 ? Math.max(...galleryItems.map(item => item.id)) + 1 : 1,
      ...formData
    };
    setGalleryItems([...galleryItems, newItem]);
    setShowAddForm(false);
    setFormData({
      title: '',
      description: '',
      type: 'photo',
      url: '',
      thumbnailUrl: '',
      category: 'Event',
      eventDate: new Date().toISOString().split('T')[0],
      isPublished: true
    });
  };

  // Delete item
  const deleteItem = (id) => {
    if (window.confirm('हा गॅलरी आयटम हटवायचा आहे का?')) {
      setGalleryItems(galleryItems.filter(item => item.id !== id));
    }
  };

  // Format date
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('mr-IN');
  };

  return (
    <AdminLayout>
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">फोटो/व्हिडिओ व्यवस्थापन</h2>
          <button 
            onClick={() => setShowAddForm(true)}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md flex items-center"
          >
            <FaPlus className="mr-2" /> नवीन आयटम जोडा
          </button>
        </div>

        {/* Tabs */}
        <div className="mb-6">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-4" aria-label="Tabs">
              <button
                onClick={() => setActiveTab('all')}
                className={`py-2 px-3 border-b-2 font-medium text-sm ${
                  activeTab === 'all'
                    ? 'border-green-600 text-green-600'
                    : 'border-transparent text-gray-500 hover:border-gray-300'
                }`}
              >
                सर्व आयटम ({galleryItems.length})
              </button>
              <button
                onClick={() => setActiveTab('photo')}
                className={`py-2 px-3 border-b-2 font-medium text-sm ${
                  activeTab === 'photo'
                    ? 'border-green-600 text-green-600'
                    : 'border-transparent text-gray-500 hover:border-gray-300'
                }`}
              >
                <FaImage className="inline mr-1" /> फोटो ({galleryItems.filter(item => item.type === 'photo').length})
              </button>
              <button
                onClick={() => setActiveTab('video')}
                className={`py-2 px-3 border-b-2 font-medium text-sm ${
                  activeTab === 'video'
                    ? 'border-green-600 text-green-600'
                    : 'border-transparent text-gray-500 hover:border-gray-300'
                }`}
              >
                <FaVideo className="inline mr-1" /> व्हिडिओ ({galleryItems.filter(item => item.type === 'video').length})
              </button>
              <button
                onClick={() => setActiveTab('unpublished')}
                className={`py-2 px-3 border-b-2 font-medium text-sm ${
                  activeTab === 'unpublished'
                    ? 'border-green-600 text-green-600'
                    : 'border-transparent text-gray-500 hover:border-gray-300'
                }`}
              >
                अप्रकाशित ({galleryItems.filter(item => !item.isPublished).length})
              </button>
            </nav>
          </div>
        </div>

        {/* Add Form */}
        {showAddForm && (
          <div className="bg-green-50 p-4 rounded-md mb-6 border border-green-200">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium text-green-800">नवीन गॅलरी आयटम जोडा</h3>
              <button onClick={() => setShowAddForm(false)} className="text-gray-500 hover:text-gray-700">
                <FaTimes />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">शीर्षक</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">प्रकार</label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="photo">फोटो</option>
                  <option value="video">व्हिडिओ</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">URL</label>
                <input
                  type="text"
                  name="url"
                  value={formData.url}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder={formData.type === 'photo' ? '/images/gallery/image.jpg' : 'https://www.youtube.com/embed/VIDEO_ID'}
                />
              </div>
              {formData.type === 'video' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">थंबनेल URL</label>
                  <input
                    type="text"
                    name="thumbnailUrl"
                    value={formData.thumbnailUrl}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="/images/gallery/thumbnail.jpg"
                  />
                </div>
              )}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">श्रेणी</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="Event">कार्यक्रम</option>
                  <option value="Facility">सुविधा</option>
                  <option value="Training">प्रशिक्षण</option>
                  <option value="Award">पुरस्कार</option>
                  <option value="Report">अहवाल</option>
                  <option value="Other">इतर</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">तारीख</label>
                <input
                  type="date"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="col-span-1 md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">वर्णन</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="3"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                ></textarea>
              </div>
              <div>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="isPublished"
                    checked={formData.isPublished}
                    onChange={handleChange}
                    className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">प्रकाशित करा</span>
                </label>
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
                onClick={addItem}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md flex items-center"
              >
                <FaSave className="mr-2" /> जतन करा
              </button>
            </div>
          </div>
        )}

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getFilteredItems().length === 0 ? (
            <div className="col-span-full text-center py-8 text-gray-500">
              <p>कोणतेही आयटम सापडले नाहीत.</p>
            </div>
          ) : (
            getFilteredItems().map((item) => (
              <div 
                key={item.id} 
                className={`bg-white rounded-lg border shadow-sm overflow-hidden ${
                  !item.isPublished ? 'opacity-60' : ''
                }`}
              >
                {editingId === item.id ? (
                  <div className="p-4">
                    <div className="space-y-3">
                      <div>
                        <label className="block text-xs font-medium text-gray-500 mb-1">शीर्षक</label>
                        <input
                          type="text"
                          name="title"
                          value={formData.title}
                          onChange={handleChange}
                          className="w-full border border-gray-300 rounded-md px-2 py-1 text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-500 mb-1">वर्णन</label>
                        <textarea
                          name="description"
                          value={formData.description}
                          onChange={handleChange}
                          rows="2"
                          className="w-full border border-gray-300 rounded-md px-2 py-1 text-sm"
                        ></textarea>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="block text-xs font-medium text-gray-500 mb-1">प्रकार</label>
                          <select
                            name="type"
                            value={formData.type}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md px-2 py-1 text-sm"
                          >
                            <option value="photo">फोटो</option>
                            <option value="video">व्हिडिओ</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-gray-500 mb-1">श्रेणी</label>
                          <select
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md px-2 py-1 text-sm"
                          >
                            <option value="Event">कार्यक्रम</option>
                            <option value="Facility">सुविधा</option>
                            <option value="Training">प्रशिक्षण</option>
                            <option value="Award">पुरस्कार</option>
                            <option value="Report">अहवाल</option>
                            <option value="Other">इतर</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-500 mb-1">URL</label>
                        <input
                          type="text"
                          name="url"
                          value={formData.url}
                          onChange={handleChange}
                          className="w-full border border-gray-300 rounded-md px-2 py-1 text-sm"
                        />
                      </div>
                      <div>
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            name="isPublished"
                            checked={formData.isPublished}
                            onChange={handleChange}
                            className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                          />
                          <span className="ml-2 text-xs text-gray-700">प्रकाशित करा</span>
                        </label>
                      </div>
                      <div className="flex justify-end space-x-2 pt-2">
                        <button onClick={cancelEdit} className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm">
                          रद्द करा
                        </button>
                        <button onClick={() => saveItem(item.id)} className="bg-green-600 text-white px-2 py-1 rounded text-sm">
                          जतन करा
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="relative aspect-video overflow-hidden bg-gray-100">
                      {item.type === 'photo' ? (
                        <img 
                          src={item.url || '/placeholder.jpg'} 
                          alt={item.title}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.src = "/placeholder.jpg";
                          }}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gray-800">
                          <img 
                            src={item.thumbnailUrl || '/video-placeholder.jpg'} 
                            alt={item.title}
                            className="w-full h-full object-cover opacity-80"
                            onError={(e) => {
                              e.target.src = "/video-placeholder.jpg";
                            }}
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 rounded-full bg-green-600 bg-opacity-80 flex items-center justify-center">
                              <FaVideo className="text-white text-2xl" />
                            </div>
                          </div>
                        </div>
                      )}
                      <div className="absolute top-2 right-2 flex space-x-1">
                        <button 
                          onClick={() => startEdit(item)} 
                          className="p-1 bg-white bg-opacity-80 rounded-full text-blue-600 hover:text-blue-800"
                        >
                          <FaEdit />
                        </button>
                        <button 
                          onClick={() => deleteItem(item.id)} 
                          className="p-1 bg-white bg-opacity-80 rounded-full text-red-600 hover:text-red-800"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </div>
                    <div className="p-3">
                      <h3 className="font-semibold text-gray-800 truncate">{item.title}</h3>
                      <p className="text-sm text-gray-600 mt-1 line-clamp-2">{item.description}</p>
                      <div className="flex justify-between items-center mt-2 text-xs text-gray-500">
                        <span>
                          {item.category === 'Event' ? 'कार्यक्रम' : 
                           item.category === 'Facility' ? 'सुविधा' : 
                           item.category === 'Training' ? 'प्रशिक्षण' : 
                           item.category === 'Award' ? 'पुरस्कार' : 
                           item.category === 'Report' ? 'अहवाल' : 'इतर'}
                        </span>
                        <span>{formatDate(item.eventDate)}</span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </AdminLayout>
  );
}
