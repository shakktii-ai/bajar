import mongoose from 'mongoose';
import Products from '../../models/Products'; // Path to your Products model
import DailyProducts from '../../models/DailyProducts'; // New model for daily products

// Ensure database connection
const connectDB = async () => {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGODB_URI);
  }
};

// GET request - Get all products with optional date filtering
const getProducts = async (req, res) => {
  try {
    await connectDB();
    
    const { id, date } = req.query;
    
    // If ID is provided, get specific product
    if (id) {
      const product = await Products.findById(id);
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
      return res.status(200).json(product);
    }
    
    // If date is provided, get daily products for that date
    if (date) {
      const dailyProducts = await DailyProducts.find({ date: new Date(date) })
        .populate('product');
      return res.status(200).json(dailyProducts);
    }
    
    // Otherwise, get all products
    const products = await Products.find().sort({ productNameMarathi: 1 });
    res.status(200).json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
};

// GET - Get all daily products
const getDailyProducts = async (req, res) => {
  try {
    await connectDB();
    
    const { startDate, endDate } = req.query;
    
    const query = {};
    
    // If date range is provided
    if (startDate && endDate) {
      query.date = {
        $gte: new Date(startDate),
        $lte: new Date(endDate)
      };
    } else if (startDate) {
      query.date = { $gte: new Date(startDate) };
    } else if (endDate) {
      query.date = { $lte: new Date(endDate) };
    }
    
    const dailyProducts = await DailyProducts.find(query)
      .populate('product')
      .sort({ date: -1 });
      
    res.status(200).json(dailyProducts);
  } catch (error) {
    console.error('Error fetching daily products:', error);
    res.status(500).json({ error: 'Failed to fetch daily products' });
  }
};

// POST request - Create a new product
const createProduct = async (req, res) => {
  try {
    await connectDB();
    const { productNameMarathi, productNameEnglish, PriceMax, PriceMin, ProductInUnit, date } = req.body;

    // Create a new product
    const newProduct = new Products({
      productNameMarathi,
      productNameEnglish,
      PriceMax,
      PriceMin,
      ProductInUnit,
      updatedAt: date ? new Date(date) : new Date()
    });

    // Save the product to the database
    await newProduct.save();
    
    // If date is provided, also create a daily product entry
    if (date) {
      const dailyProduct = new DailyProducts({
        product: newProduct._id,
        date: new Date(date),
        PriceMax: PriceMax,
        PriceMin: PriceMin
      });
      
      await dailyProduct.save();
    }

    res.status(201).json(newProduct);
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ error: 'Failed to create product' });
  }
};

// POST - Add daily product price
const addDailyPrice = async (req, res) => {
  try {
    await connectDB();
    const { productId, date, PriceMax, PriceMin } = req.body;
    
    // Validate required fields
    if (!productId) {
      return res.status(400).json({ error: 'Product ID is required' });
    }
    
    if (!date) {
      return res.status(400).json({ error: 'Date is required' });
    }
    
    if (PriceMax === undefined || PriceMin === undefined) {
      return res.status(400).json({ error: 'Both minimum and maximum prices are required' });
    }
    
    // Verify product exists
    const productExists = await Products.findById(productId);
    if (!productExists) {
      return res.status(404).json({ error: 'Product not found with ID: ' + productId });
    }
    
    // Parse prices to numbers
    const maxPrice = Number(PriceMax);
    const minPrice = Number(PriceMin);
    
    if (isNaN(maxPrice) || isNaN(minPrice)) {
      return res.status(400).json({ error: 'Prices must be valid numbers' });
    }
    
    // Format date properly
    let formattedDate;
    try {
      formattedDate = new Date(date);
      if (isNaN(formattedDate.getTime())) {
        throw new Error('Invalid date');
      }
    } catch (err) {
      return res.status(400).json({ error: 'Invalid date format: ' + date });
    }
    
    console.log('Adding daily price for product:', productId, 'date:', formattedDate.toISOString());
    
    // Check if entry for this product and date already exists
    let dailyProduct = await DailyProducts.findOne({
      product: productId,
      date: formattedDate
    });
    
    if (dailyProduct) {
      // Update existing entry
      console.log('Updating existing daily price entry id:', dailyProduct._id);
      dailyProduct.PriceMax = maxPrice;
      dailyProduct.PriceMin = minPrice;
      await dailyProduct.save();
    } else {
      // Create new entry
      console.log('Creating new daily price entry');
      dailyProduct = new DailyProducts({
        product: productId,
        date: formattedDate,
        PriceMax: maxPrice,
        PriceMin: minPrice
      });
      await dailyProduct.save();
    }
    
    // Also update the main product with latest prices
    await Products.findByIdAndUpdate(productId, {
      PriceMax: maxPrice,
      PriceMin: minPrice,
      updatedAt: formattedDate
    });
    
    console.log('Daily price added successfully:', dailyProduct._id);
    res.status(201).json(dailyProduct);
  } catch (error) {
    console.error('Error adding daily price:', error);
    res.status(500).json({ error: 'Failed to add daily price: ' + error.message });
  }
};

// PUT request - Update a product
const updateProduct = async (req, res) => {
  try {
    await connectDB();
    const { id } = req.query;
    
    if (!id) {
      return res.status(400).json({ error: 'Product ID is required' });
    }
    
    const updatedProduct = await Products.findByIdAndUpdate(
      id,
      { ...req.body, updatedAt: new Date() },
      { new: true, runValidators: true }
    );
    
    if (!updatedProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }
    
    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({ error: 'Failed to update product' });
  }
};

// DELETE request - Delete a product
const deleteProduct = async (req, res) => {
  try {
    await connectDB();
    const { id } = req.query;
    
    if (!id) {
      return res.status(400).json({ error: 'Product ID is required' });
    }
    
    const deletedProduct = await Products.findByIdAndDelete(id);
    
    if (!deletedProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }
    
    // Also delete any daily product entries for this product
    await DailyProducts.deleteMany({ product: id });
    
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ error: 'Failed to delete product' });
  }
};

// DELETE - Delete a daily product entry
const deleteDailyProduct = async (req, res) => {
  try {
    await connectDB();
    const { id } = req.query;
    
    if (!id) {
      return res.status(400).json({ error: 'Daily product ID is required' });
    }
    
    const deletedDailyProduct = await DailyProducts.findByIdAndDelete(id);
    
    if (!deletedDailyProduct) {
      return res.status(404).json({ error: 'Daily product entry not found' });
    }
    
    res.status(200).json({ message: 'Daily product entry deleted successfully' });
  } catch (error) {
    console.error('Error deleting daily product:', error);
    res.status(500).json({ error: 'Failed to delete daily product entry' });
  }
};

// API handler
export default async function handler(req, res) {
  // Check for path in query OR body
  const queryPath = req.query.path;
  const bodyPath = req.body?.path;
  const path = queryPath || bodyPath;
  
  console.log('API Request:', { method: req.method, path, bodyPath, queryPath, date: req.query.date });
  
  // Handle daily products API path
  if (path === 'daily') {
    console.log('Handling daily products API request');
    if (req.method === 'GET') {
      return getDailyProducts(req, res);
    } else if (req.method === 'POST') {
      console.log('Adding daily price');
      return addDailyPrice(req, res);
    } else if (req.method === 'DELETE') {
      return deleteDailyProduct(req, res);
    }
  }
  
  // Handle specific product API path
  if (path === 'products') {
    console.log('Handling products API request');
    if (req.method === 'GET') {
      return getProducts(req, res);
    } else if (req.method === 'POST') {
      console.log('Creating new product');
      return createProduct(req, res);
    } else if (req.method === 'PUT') {
      return updateProduct(req, res);
    } else if (req.method === 'DELETE') {
      return deleteProduct(req, res);
    }
  }
  
  // If no path specified but we have a date parameter, it's likely a daily products request
  if (!path && req.query.date && req.method === 'GET') {
    console.log('Date parameter detected, routing to getDailyProducts');
    return getDailyProducts(req, res);
  }
  
  // Default handlers (fallback for backward compatibility)
  if (req.method === 'GET') {
    return getProducts(req, res);
  } else if (req.method === 'POST') {
    console.log('Creating new product (fallback)');
    return createProduct(req, res);
  } else if (req.method === 'PUT') {
    return updateProduct(req, res);
  } else if (req.method === 'DELETE') {
    return deleteProduct(req, res);
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
