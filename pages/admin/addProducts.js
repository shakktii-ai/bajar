// import { useState } from 'react';

// export default function AddProducts() {
//   const [formData, setFormData] = useState({
//     productNameMarathi: '',
//     productNameEnglish: '',
//     PriceMax: '',
//     PriceMin: '',
//     ProductInUnit: '',
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [error, setError] = useState('');

//   // Handle form input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   // Handle form submission to create a new product
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setError('');

//     try {
//       const response = await fetch('/api/addAndGetProducts', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to create product');
//       }

//       const newProduct = await response.json();
//       alert('Product created successfully!');
//       setFormData({
//         productNameMarathi: '',
//         productNameEnglish: '',
//         PriceMax: '',
//         PriceMin: '',
//         ProductInUnit: '',
//       });
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="max-w-2xl mx-auto p-6">
//       <h1 className="text-3xl font-bold text-center mb-6">Add New Product</h1>

//       {error && <div className="text-red-500 text-center mb-4">{error}</div>}

//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Product Name (Marathi)</label>
//           <input
//             type="text"
//             name="productNameMarathi"
//             value={formData.productNameMarathi}
//             onChange={handleInputChange}
//             className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//             required
//           />
//         </div>
        
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Product Name (English)</label>
//           <input
//             type="text"
//             name="productNameEnglish"
//             value={formData.productNameEnglish}
//             onChange={handleInputChange}
//             className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//             required
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700">Price Max</label>
//           <input
//             type="number"
//             name="PriceMax"
//             value={formData.PriceMax}
//             onChange={handleInputChange}
//             className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//             required
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700">Price Min</label>
//           <input
//             type="number"
//             name="PriceMin"
//             value={formData.PriceMin}
//             onChange={handleInputChange}
//             className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//             required
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700">Product In Unit (e.g., Kg, pcs)</label>
//           <input
//             type="text"
//             name="ProductInUnit"
//             value={formData.ProductInUnit}
//             onChange={handleInputChange}
//             className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//             required
//           />
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600"
//           disabled={isSubmitting}
//         >
//           {isSubmitting ? 'Submitting...' : 'Add Product'}
//         </button>
//       </form>
//     </div>
//   );
// }



// import { useState, useEffect } from 'react';

// export default function AddProducts() {
//   const [formData, setFormData] = useState({
//     productNameMarathi: '',
//     productNameEnglish: '',
//     PriceMax: '',
//     PriceMin: '',
//     ProductInUnit: '',
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [error, setError] = useState('');
//   const [products, setProducts] = useState([]);  // Store products

//   // Fetch products when component mounts
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch('/api/addAndGetProducts');
//         if (!response.ok) {
//           throw new Error('Failed to fetch products');
//         }
//         const productsData = await response.json();
//         setProducts(productsData);
//       } catch (err) {
//         setError(err.message);
//       }
//     };

//     fetchProducts();
//   }, []); // Empty dependency array means it will only run once when the component mounts

//   // Handle form input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   // Handle form submission to create a new product
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setError('');

//     try {
//       const response = await fetch('/api/addAndGetProducts', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to create product');
//       }

//       const newProduct = await response.json();
//       alert('Product created successfully!');
      
//       // Add the new product to the products list
//       setProducts((prevProducts) => [...prevProducts, newProduct]);

//       // Clear form data
//       setFormData({
//         productNameMarathi: '',
//         productNameEnglish: '',
//         PriceMax: '',
//         PriceMin: '',
//         ProductInUnit: '',
//       });
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="max-w-2xl mx-auto p-6">
//       <h1 className="text-3xl font-bold text-center mb-6">Add New Product</h1>

//       {error && <div className="text-red-500 text-center mb-4">{error}</div>}

//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Product Name (Marathi)</label>
//           <input
//             type="text"
//             name="productNameMarathi"
//             value={formData.productNameMarathi}
//             onChange={handleInputChange}
//             className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//             required
//           />
//         </div>
        
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Product Name (English)</label>
//           <input
//             type="text"
//             name="productNameEnglish"
//             value={formData.productNameEnglish}
//             onChange={handleInputChange}
//             className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//             required
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700">Price Max</label>
//           <input
//             type="number"
//             name="PriceMax"
//             value={formData.PriceMax}
//             onChange={handleInputChange}
//             className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//             required
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700">Price Min</label>
//           <input
//             type="number"
//             name="PriceMin"
//             value={formData.PriceMin}
//             onChange={handleInputChange}
//             className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//             required
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700">Product In Unit (e.g., Kg, pcs)</label>
//           <input
//             type="text"
//             name="ProductInUnit"
//             value={formData.ProductInUnit}
//             onChange={handleInputChange}
//             className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//             required
//           />
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600"
//           disabled={isSubmitting}
//         >
//           {isSubmitting ? 'Submitting...' : 'Add Product'}
//         </button>
//       </form>

//       {/* Table to display added products */}
//       <div className="mt-8">
//         <h2 className="text-2xl font-bold text-center mb-4">Added Products</h2>
//         <table className="w-full table-auto border-collapse">
//           <thead>
//             <tr className="border-b">
//               <th className="p-2 text-left">Product Name (Marathi)</th>
//               <th className="p-2 text-left">Product Name (English)</th>
//               <th className="p-2 text-left">Price Max</th>
//               <th className="p-2 text-left">Price Min</th>
//               <th className="p-2 text-left">Unit</th>
//             </tr>
//           </thead>
//           <tbody>
//             {products.map((product, index) => (
//               <tr key={index} className="border-b">
//                 <td className="p-2">{product.productNameMarathi}</td>
//                 <td className="p-2">{product.productNameEnglish}</td>
//                 <td className="p-2">{product.PriceMax}</td>
//                 <td className="p-2">{product.PriceMin}</td>
//                 <td className="p-2">{product.ProductInUnit}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }




// import { useState, useEffect } from 'react';

// export default function AddProducts() {
//   const [formData, setFormData] = useState({
//     productNameMarathi: '',
//     productNameEnglish: '',
//     PriceMax: '',
//     PriceMin: '',
//     ProductInUnit: '',
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [error, setError] = useState('');
//   const [products, setProducts] = useState([]);  // Store products

//   // Fetch products when component mounts
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch('/api/addAndGetProducts');
//         if (!response.ok) {
//           throw new Error('Failed to fetch products');
//         }
//         const productsData = await response.json();
        
//         // Sort products in descending order based on the created date or another identifier
//         const sortedProducts = productsData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        
//         setProducts(sortedProducts);
//       } catch (err) {
//         setError(err.message);
//       }
//     };

//     fetchProducts();
//   }, []); // Empty dependency array means it will only run once when the component mounts

//   // Handle form input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   // Handle form submission to create a new product
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setError('');

//     try {
//       const response = await fetch('/api/addAndGetProducts', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to create product');
//       }

//       const newProduct = await response.json();
//       alert('Product created successfully!');
      
//       // Prepend the new product to the beginning of the products list (show it first)
//       setProducts((prevProducts) => [newProduct, ...prevProducts]);

//       // Clear form data
//       setFormData({
//         productNameMarathi: '',
//         productNameEnglish: '',
//         PriceMax: '',
//         PriceMin: '',
//         ProductInUnit: '',
//       });
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="max-w-2xl mx-auto p-6">
//       <h1 className="text-3xl font-bold text-center mb-6">Add New Product</h1>

//       {error && <div className="text-red-500 text-center mb-4">{error}</div>}

//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Product Name (Marathi)</label>
//           <input
//             type="text"
//             name="productNameMarathi"
//             value={formData.productNameMarathi}
//             onChange={handleInputChange}
//             className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//             required
//           />
//         </div>
        
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Product Name (English)</label>
//           <input
//             type="text"
//             name="productNameEnglish"
//             value={formData.productNameEnglish}
//             onChange={handleInputChange}
//             className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//             required
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700">Price Max</label>
//           <input
//             type="number"
//             name="PriceMax"
//             value={formData.PriceMax}
//             onChange={handleInputChange}
//             className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//             required
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700">Price Min</label>
//           <input
//             type="number"
//             name="PriceMin"
//             value={formData.PriceMin}
//             onChange={handleInputChange}
//             className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//             required
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700">Product In Unit (e.g., Kg, pcs)</label>
//           <input
//             type="text"
//             name="ProductInUnit"
//             value={formData.ProductInUnit}
//             onChange={handleInputChange}
//             className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//             required
//           />
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600"
//           disabled={isSubmitting}
//         >
//           {isSubmitting ? 'Submitting...' : 'Add Product'}
//         </button>
//       </form>

//       {/* Table to display added products */}
//       <div className="mt-8">
//   <h2 className="text-2xl font-bold text-center mb-6">Added Products</h2>
//   <div className="overflow-x-auto">
//     <table className="min-w-full table-auto bg-white border border-gray-200 shadow-md rounded-lg">
//       <thead>
//         <tr className="bg-gray-100 text-left text-sm font-semibold text-gray-700 border-b">
//           <th className="p-3">Product Name (Marathi)</th>
//           <th className="p-3">Product Name (English)</th>
//           <th className="p-3">Price Max</th>
//           <th className="p-3">Price Min</th>
//           <th className="p-3">Unit</th>
//           <th className="p-3 text-center">Actions</th>
//         </tr>
//       </thead>
//       <tbody>
//         {products.map((product, index) => (
//           <tr
//             key={index}
//             className="hover:bg-gray-50 transition-colors duration-200 border-b"
//           >
//             <td className="p-3">{product.productNameMarathi}</td>
//             <td className="p-3">{product.productNameEnglish}</td>
//             <td className="p-3">{product.PriceMax}</td>
//             <td className="p-3">{product.PriceMin}</td>
//             <td className="p-3">{product.ProductInUnit}</td>
//             <td className="p-3 text-center">
//               <button className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200 mr-2">
//                 Edit
//               </button></td>
//               <td className="p-3 text-center">
//               <button className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-200">
//                 Delete
//               </button>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   </div>
// </div>

//     </div>
//   );
// }

import { useState, useEffect } from 'react';

export default function AddProducts() {
  const [formData, setFormData] = useState({
    productNameMarathi: '',
    productNameEnglish: '',
    PriceMax: '',
    PriceMin: '',
    ProductInUnit: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [products, setProducts] = useState([]); // Store products
  const [filteredProducts, setFilteredProducts] = useState([]); // Filtered products
  const [filter, setFilter] = useState({
    productNameMarathi: '',
    date: new Date().toISOString().split('T')[0], // Default to today's date
  });

  // Helper function to check if a product's createdAt date is today's date
  const isToday = (dateString) => {
    const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
    const productDate = new Date(dateString).toISOString().split('T')[0]; // Convert createdAt date to YYYY-MM-DD
    return today === productDate;
  };

  // Fetch products when component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/addAndGetProducts');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const productsData = await response.json();

        // Sort products in descending order based on the created date
        const sortedProducts = productsData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

        setProducts(sortedProducts);
        setFilteredProducts(sortedProducts.filter((product) => isToday(product.createdAt))); // Initially, display only today's products
      } catch (err) {
        setError(err.message);
      }
    };

    fetchProducts();
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission to create a new product
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/addAndGetProducts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to create product');
      }

      const newProduct = await response.json();
      alert('Product created successfully!');

      // Prepend the new product to the beginning of the products list (show it first)
      setProducts((prevProducts) => [newProduct, ...prevProducts]);

      // Clear form data
      setFormData({
        productNameMarathi: '',
        productNameEnglish: '',
        PriceMax: '',
        PriceMin: '',
        ProductInUnit: '',
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Filter products based on filter criteria (product name and date)
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter((prevFilter) => {
      const newFilter = { ...prevFilter, [name]: value };

      // Filter the products based on product name and date
      const filtered = products.filter((product) => {
        const matchMarathiName = product.productNameMarathi.toLowerCase().includes(newFilter.productNameMarathi.toLowerCase());
        const matchDate = newFilter.date === new Date(product.createdAt).toISOString().split('T')[0]; // Match the selected date

        return matchMarathiName && matchDate;
      });

      setFilteredProducts(filtered);
      return newFilter;
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Add New Product</h1>

      {error && <div className="text-red-500 text-center mb-4">{error}</div>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Product Name (Marathi)</label>
          <input
            type="text"
            name="productNameMarathi"
            value={formData.productNameMarathi}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Product Name (English)</label>
          <input
            type="text"
            name="productNameEnglish"
            value={formData.productNameEnglish}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Price Max</label>
          <input
            type="number"
            name="PriceMax"
            value={formData.PriceMax}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Price Min</label>
          <input
            type="number"
            name="PriceMin"
            value={formData.PriceMin}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Product In Unit (e.g., Kg, pcs)</label>
          <input
            type="text"
            name="ProductInUnit"
            value={formData.ProductInUnit}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Add Product'}
        </button>
      </form>

      {/* Filter section */}
      <div className="mt-6 mb-4">
        <h2 className="text-2xl font-semibold text-center mb-4">Filter Products</h2>
        <div className="flex gap-4 justify-center">
          <div>
            <label className="block text-sm font-medium text-gray-700">Filter by Product Name (Marathi)</label>
            <input
              type="text"
              name="productNameMarathi"
              value={filter.productNameMarathi}
              onChange={handleFilterChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Filter by Date</label>
            <input
              type="date"
              name="date"
              value={filter.date}
              onChange={handleFilterChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>
        </div>
      </div>

      {/* Table to display added products */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-center mb-6">Added Products</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto bg-white border border-gray-200 shadow-md rounded-lg">
            <thead>
              <tr className="bg-gray-100 text-left text-sm font-semibold text-gray-700 border-b">
                <th className="p-3">Product Name (Marathi)</th>
                <th className="p-3">Product Name (English)</th>
                <th className="p-3">Price Max</th>
                <th className="p-3">Price Min</th>
                <th className="p-3">Unit</th>
                <th className="p-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors duration-200 border-b">
                  <td className="p-3">{product.productNameMarathi}</td>
                  <td className="p-3">{product.productNameEnglish}</td>
                  <td className="p-3">{product.PriceMax}</td>
                  <td className="p-3">{product.PriceMin}</td>
                  <td className="p-3">{product.ProductInUnit}</td>
                  <td className="p-3 text-center">
                    <button className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200 mr-2">
                      Edit
                    </button>
                    </td>
                    <td className="p-3 text-center">
                    <button className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-200">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
