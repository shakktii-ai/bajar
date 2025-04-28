import { useState, useEffect } from 'react';
import { FaPlus, FaEdit, FaTrash, FaSave, FaLeaf, FaTimes } from 'react-icons/fa';
import AdminLayout from '../../components/AdminLayout';

export default function ProductCatalog() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    productNameMarathi: '',
    productNameEnglish: '',
    category: 'भाज्या',
    ProductInUnit: 'किलो',
    seasonStart: '',
    seasonEnd: '',
    isActive: true
  });
  const [editingId, setEditingId] = useState(null);

  // Fetch products when the component mounts
  useEffect(() => {
    fetchProducts();
  }, []);

  // Function to fetch all products
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/addAndGetProducts');
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching products:', err);
      setError(err.message);
      setLoading(false);
    }
  };

  // Handle form change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  // Function to handle form submission for creating a new product
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Create a product without prices
      const productData = {
        ...formData,
        PriceMax: 0,  // Default values, will be updated in the next step
        PriceMin: 0
      };

      const response = await fetch('/api/addAndGetProducts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
      });

      if (!response.ok) {
        throw new Error('Failed to create product');
      }

      // Reset form and fetch updated products
      setFormData({
        productNameMarathi: '',
        productNameEnglish: '',
        category: 'भाज्या',
        ProductInUnit: 'किलो',
        seasonStart: '',
        seasonEnd: '',
        isActive: true
      });
      fetchProducts();
      alert('उत्पादन यशस्वीरित्या जोडले गेले!');
    } catch (err) {
      console.error('Error submitting product:', err);
      setError(err.message);
    }
  };

  // Start editing a product
  const startEdit = (product) => {
    setEditingId(product._id);
    setFormData({
      productNameMarathi: product.productNameMarathi || '',
      productNameEnglish: product.productNameEnglish || '',
      category: product.category || 'भाज्या',
      ProductInUnit: product.ProductInUnit || 'किलो',
      seasonStart: product.seasonStart || '',
      seasonEnd: product.seasonEnd || '',
      isActive: product.isActive !== false
    });
  };

  // Cancel editing
  const cancelEdit = () => {
    setEditingId(null);
    setFormData({
      productNameMarathi: '',
      productNameEnglish: '',
      category: 'भाज्या',
      ProductInUnit: 'किलो',
      seasonStart: '',
      seasonEnd: '',
      isActive: true
    });
  };

  // Save edited product
  const saveProduct = async (id) => {
    try {
      const response = await fetch(`/api/addAndGetProducts?id=${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to update product');
      }

      setEditingId(null);
      fetchProducts();
    } catch (err) {
      console.error('Error updating product:', err);
      setError(err.message);
    }
  };

  // Delete a product
  const deleteProduct = async (id) => {
    if (!confirm('खरोखर हे उत्पादन हटवायचे आहे?')) {
      return;
    }

    try {
      const response = await fetch(`/api/addAndGetProducts?id=${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete product');
      }

      fetchProducts();
    } catch (err) {
      console.error('Error deleting product:', err);
      setError(err.message);
    }
  };

  return (
    <AdminLayout>
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">नवीन उत्पादन जोडा</h1>

        {/* Product Form */}
        <form onSubmit={handleSubmit} className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 p-4 rounded-lg">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">उत्पादन नाव (मराठी)</label>
            <input
              type="text"
              name="productNameMarathi"
              value={formData.productNameMarathi}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">उत्पादन नाव (इंग्रजी)</label>
            <input
              type="text"
              name="productNameEnglish"
              value={formData.productNameEnglish}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">श्रेणी</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="भाज्या">भाज्या</option>
              <option value="फळे">फळे</option>
              <option value="धान्य">धान्य</option>
              <option value="डाळी">डाळी</option>
              <option value="मसाले">मसाले</option>
              <option value="इतर">इतर</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">मापन एकक</label>
            <select
              name="ProductInUnit"
              value={formData.ProductInUnit}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="किलो">किलो</option>
              <option value="ग्रॅम">ग्रॅम</option>
              <option value="क्विंटल">क्विंटल</option>
              <option value="नग">नग</option>
              <option value="डझन">डझन</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">हंगामाची सुरुवात</label>
            <input
              type="text"
              name="seasonStart"
              value={formData.seasonStart}
              onChange={handleChange}
              placeholder="उदा. जानेवारी"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">हंगामाचा शेवट</label>
            <input
              type="text"
              name="seasonEnd"
              value={formData.seasonEnd}
              onChange={handleChange}
              placeholder="उदा. मार्च"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="flex items-center md:col-span-2">
            <input
              type="checkbox"
              name="isActive"
              checked={formData.isActive}
              onChange={handleChange}
              className="h-4 w-4 text-green-600 rounded"
            />
            <label className="ml-2 block text-sm text-gray-700">सक्रिय उत्पादन</label>
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md flex items-center justify-center w-full md:w-auto"
            >
              <FaPlus className="mr-2" /> उत्पादन जोडा
            </button>
          </div>
        </form>

        {/* Products List */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">उत्पादने यादी</h2>
          
          {loading ? (
            <div className="text-center py-4">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600 mx-auto"></div>
              <p className="mt-2 text-gray-600">लोड करत आहे...</p>
            </div>
          ) : error ? (
            <div className="bg-red-100 text-red-700 p-4 rounded-lg mb-4">
              <p>{error}</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">क्र.</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">उत्पादन नाव</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">श्रेणी</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">एकक</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">हंगाम</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">स्थिती</th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">कृती</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {products.length === 0 ? (
                    <tr>
                      <td colSpan="7" className="px-6 py-4 text-center text-gray-500">
                        <FaLeaf className="mx-auto text-4xl text-gray-300 mb-2" />
                        <p>कोणतीही उत्पादने सापडली नाहीत.</p>
                      </td>
                    </tr>
                  ) : (
                    products.map((product, index) => (
                      <tr key={product._id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{index + 1}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {editingId === product._id ? (
                            <div className="flex flex-col gap-2">
                              <input
                                type="text"
                                name="productNameMarathi"
                                value={formData.productNameMarathi}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md px-2 py-1 text-sm"
                              />
                              <input
                                type="text"
                                name="productNameEnglish"
                                value={formData.productNameEnglish}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md px-2 py-1 text-sm"
                              />
                            </div>
                          ) : (
                            <div>
                              <span className="font-semibold">{product.productNameMarathi}</span>
                              <span className="text-xs text-gray-500 block">{product.productNameEnglish}</span>
                            </div>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {editingId === product._id ? (
                            <select
                              name="category"
                              value={formData.category}
                              onChange={handleChange}
                              className="border border-gray-300 rounded-md px-2 py-1 text-sm"
                            >
                              <option value="भाज्या">भाज्या</option>
                              <option value="फळे">फळे</option>
                              <option value="धान्य">धान्य</option>
                              <option value="डाळी">डाळी</option>
                              <option value="मसाले">मसाले</option>
                              <option value="इतर">इतर</option>
                            </select>
                          ) : (
                            <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              {product.category || 'भाज्या'}
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {editingId === product._id ? (
                            <select
                              name="ProductInUnit"
                              value={formData.ProductInUnit}
                              onChange={handleChange}
                              className="border border-gray-300 rounded-md px-2 py-1 text-sm"
                            >
                              <option value="किलो">किलो</option>
                              <option value="ग्रॅम">ग्रॅम</option>
                              <option value="क्विंटल">क्विंटल</option>
                              <option value="नग">नग</option>
                              <option value="डझन">डझन</option>
                            </select>
                          ) : (
                            product.ProductInUnit || 'किलो'
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {editingId === product._id ? (
                            <div className="flex flex-col gap-2">
                              <input
                                type="text"
                                name="seasonStart"
                                value={formData.seasonStart}
                                onChange={handleChange}
                                placeholder="सुरुवात"
                                className="w-full border border-gray-300 rounded-md px-2 py-1 text-sm"
                              />
                              <input
                                type="text"
                                name="seasonEnd"
                                value={formData.seasonEnd}
                                onChange={handleChange}
                                placeholder="शेवट"
                                className="w-full border border-gray-300 rounded-md px-2 py-1 text-sm"
                              />
                            </div>
                          ) : (
                            <span>
                              {product.seasonStart && product.seasonEnd ? 
                                `${product.seasonStart} - ${product.seasonEnd}` : 
                                'वर्षभर'}
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {editingId === product._id ? (
                            <label className="flex items-center">
                              <input
                                type="checkbox"
                                name="isActive"
                                checked={formData.isActive}
                                onChange={handleChange}
                                className="h-4 w-4 text-green-600 rounded"
                              />
                              <span className="ml-2">सक्रिय</span>
                            </label>
                          ) : (
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${product.isActive !== false ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                              {product.isActive !== false ? 'सक्रिय' : 'निष्क्रिय'}
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          {editingId === product._id ? (
                            <div className="flex justify-end space-x-2">
                              <button 
                                onClick={cancelEdit} 
                                className="text-gray-600 hover:text-gray-900"
                              >
                                <FaTimes />
                              </button>
                              <button 
                                onClick={() => saveProduct(product._id)} 
                                className="text-green-600 hover:text-green-900"
                              >
                                <FaSave />
                              </button>
                            </div>
                          ) : (
                            <div className="flex justify-end space-x-2">
                              <button 
                                onClick={() => startEdit(product)} 
                                className="text-blue-600 hover:text-blue-900"
                              >
                                <FaEdit />
                              </button>
                              <button 
                                onClick={() => deleteProduct(product._id)} 
                                className="text-red-600 hover:text-red-900"
                              >
                                <FaTrash />
                              </button>
                            </div>
                          )}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
}