import mongoose from 'mongoose';
import Products from '../../models/Products'; // Path to your Products model


// GET request - Get all products
const getProducts = async (req, res) => {
  try {
    if (!mongoose.connections[0].readyState) {
        await mongoose.connect(process.env.MONGODB_URI)
      }
    const products = await Products.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
};

// POST request - Create a new product
const createProduct = async (req, res) => {
  try {
    if (!mongoose.connections[0].readyState) {
        await mongoose.connect(process.env.MONGODB_URI)
      }
    const { productNameMarathi, productNameEnglish, PriceMax, PriceMin, ProductInUnit } = req.body;

    // Create a new product
    const newProduct = new Products({
      productNameMarathi,
      productNameEnglish,
      PriceMax,
      PriceMin,
      ProductInUnit,
    });

    // Save the product to the database
    await newProduct.save();

    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create product' });
  }
};

// API handler for GET and POST
export default async function handler(req, res) {
  if (req.method === 'GET') {
    return getProducts(req, res);
  } else if (req.method === 'POST') {
    return createProduct(req, res);
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
