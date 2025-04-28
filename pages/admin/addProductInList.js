// pages/productList.js

import { useState, useEffect } from 'react';
import axios from 'axios';

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [productNameMarathi, setProductNameMarathi] = useState('');
  const [productNameEnglish, setProductNameEnglish] = useState('');
  const [editingProduct, setEditingProduct] = useState(null);

  // Fetch products when the component mounts
  useEffect(() => {
    fetchProducts();
  }, []);

  // Function to fetch all products
  const fetchProducts = async () => {
    try {
      const response = await axios.get('/api/productList');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  // Function to handle form submission for creating or updating a product
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newProduct = { productNameMarathi, productNameEnglish };

    try {
      if (editingProduct) {
        // If we're editing, update the product
        await axios.put(`/api/productList?id=${editingProduct._id}`, newProduct);
      } else {
        // Otherwise, create a new product
        await axios.post('/api/productList', newProduct);
      }

      // Reset form and fetch updated products
      setProductNameMarathi('');
      setProductNameEnglish('');
      setEditingProduct(null);
      fetchProducts();
    } catch (error) {
      console.error('Error submitting product:', error);
    }
  };

  // Function to handle deleting a product
  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/productList?id=${id}`);
      fetchProducts(); // Fetch the updated list of products
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  // Function to handle editing a product
  const handleEdit = (product) => {
    setProductNameMarathi(product.productNameMarathi);
    setProductNameEnglish(product.productNameEnglish);
    setEditingProduct(product);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Product List</h1>

      <form onSubmit={handleSubmit} className="mb-6">
        <div className="mb-4">
          <label htmlFor="productNameMarathi" className="block text-sm font-medium text-gray-700">
            Product Name (Marathi)
          </label>
          <input
            type="text"
            id="productNameMarathi"
            value={productNameMarathi}
            onChange={(e) => setProductNameMarathi(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="productNameEnglish" className="block text-sm font-medium text-gray-700">
            Product Name (English)
          </label>
          <input
            type="text"
            id="productNameEnglish"
            value={productNameEnglish}
            onChange={(e) => setProductNameEnglish(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md"
        >
          {editingProduct ? 'Update Product' : 'Add Product'}
        </button>
      </form>

      <table className="min-w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b">Product Name (Marathi)</th>
            <th className="px-4 py-2 border-b">Product Name (English)</th>
            <th className="px-4 py-2 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.length === 0 ? (
            <tr>
              <td colSpan="3" className="px-4 py-2 text-center">
                No products found
              </td>
            </tr>
          ) : (
            products.map((product) => (
              <tr key={product._id}>
                <td className="px-4 py-2 border-b">{product.productNameMarathi}</td>
                <td className="px-4 py-2 border-b">{product.productNameEnglish}</td>
                <td className="px-4 py-2 border-b text-center">
                  <button
                    onClick={() => handleEdit(product)}
                    className="px-3 py-1 bg-yellow-400 text-white rounded-md mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="px-3 py-1 bg-red-600 text-white rounded-md"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
