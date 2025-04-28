// pages/api/products/[id].js

import connectMongo from '../../middleware/mongoose';
import ProductsList from '../../models/ProductsList';

export default async function handler(req, res) {
    await connectMongo();
  
    // Handle GET request - Fetch all products
    if (req.method === 'GET') {
      try {
        const products = await ProductsList.find();
        return res.status(200).json(products);
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
    }
  
    // Handle POST request - Create a new product
    if (req.method === 'POST') {
      const { productNameMarathi, productNameEnglish } = req.body;
  
      try {
        const newProduct = new ProductsList({
          productNameMarathi,
          productNameEnglish,
        });
        await newProduct.save();
        return res.status(201).json(newProduct);
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
    }
  
    // Handle PUT request - Update an existing product
    if (req.method === 'PUT') {
      const { id } = req.query;
      const { productNameMarathi, productNameEnglish } = req.body;
  
      try {
        const updatedProduct = await ProductsList.findByIdAndUpdate(
          id,
          { productNameMarathi, productNameEnglish },
          { new: true }
        );
        if (!updatedProduct) {
          return res.status(404).json({ message: 'Product not found' });
        }
        return res.status(200).json(updatedProduct);
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
    }
  
    // Handle DELETE request - Delete a specific product
    if (req.method === 'DELETE') {
      const { id } = req.query;
  
      try {
        const deletedProduct = await ProductsList.findByIdAndDelete(id);
        if (!deletedProduct) {
          return res.status(404).json({ message: 'Product not found' });
        }
        return res.status(200).json({ message: 'Product deleted successfully' });
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
    }
  
    // Return 405 if method is not allowed
    return res.status(405).json({ message: 'Method Not Allowed' });
  }