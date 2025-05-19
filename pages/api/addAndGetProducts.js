import mongoose from 'mongoose';
import Products from '../../models/Products'; // Path to your Products model
import DailyProducts from '../../models/DailyProducts'; // New model for daily products

// Check and rebuild index if needed
let indexRebuildAttempted = false;
const rebuildIndex = async () => {
  try {
    if (mongoose.connection.readyState !== 1) {
      await mongoose.connect(process.env.MONGODB_URI);
    }
    
    console.log('Attempting to rebuild DailyProducts index...');
    // Drop the old index
    await mongoose.connection.collection('dailyproducts').dropIndex('product_1_date_1');
    console.log('Old index dropped successfully');
    
    // Create the new index
    await mongoose.connection.collection('dailyproducts').createIndex(
      { product: 1, date: 1, marketName: 1 }, 
      { unique: true }
    );
    
    console.log('New index created successfully with marketName included');
    return true;
  } catch (err) {
    console.error('Error rebuilding index:', err);
    return false;
  }
};

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
    
    const { startDate, endDate, date, marketName } = req.query;
    
    const query = {};
    
    // If a specific date is provided
    if (date) {
      // Log raw date input for debugging
      console.log('Raw date input:', date, 'Type:', typeof date);
      
      // Create date objects for start and end of the day to match exact date
      const selectedDate = new Date(date);
      console.log('Parsed date object:', selectedDate, 'Valid?', !isNaN(selectedDate.getTime()));
      
      // Set to start of day in local timezone
      selectedDate.setHours(0, 0, 0, 0);
      
      const nextDay = new Date(selectedDate);
      nextDay.setDate(nextDay.getDate() + 1);
      
      console.log('Date range for query:', {
        'Start (local)': selectedDate.toString(),
        'Start (ISO)': selectedDate.toISOString(),
        'End (local)': nextDay.toString(),
        'End (ISO)': nextDay.toISOString()
      });
      
      // For MongoDB date queries, we need to ensure proper date matching
      // Approach 1: Use date string comparison (more reliable across timezones)
      // Parse the date parts to avoid timezone issues
      const dateParts = date.split('-');
      const year = parseInt(dateParts[0], 10);
      const month = parseInt(dateParts[1], 10);
      const day = parseInt(dateParts[2], 10);
      
      // Create date strings for the start and end of the day in YYYY-MM-DD format
      const dateStart = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      
      console.log('Looking for documents with date matching:', dateStart);
      
      // Use $expr and $dateToString to compare date parts only, ignoring time
      query.$expr = {
        $eq: [
          { $dateToString: { format: "%Y-%m-%d", date: "$date" } },
          dateStart
        ]
      };
      
      // Alternatively, keep the date range approach as a fallback
      /*
      query.date = {
        $gte: selectedDate,
        $lt: nextDay
      };
      */
      
      // For debugging, also fetch all documents to check date formats in DB
      console.log('Getting all documents to check date formats...');
      DailyProducts.find({}).then(allDocs => {
        console.log('Total documents in collection:', allDocs.length);
        if (allDocs.length > 0) {
          console.log('Sample document dates:');
          allDocs.slice(0, 5).forEach(doc => {
            console.log('- Document date:', doc.date, 'Type:', typeof doc.date, 'ISO:', doc.date instanceof Date ? doc.date.toISOString() : 'Not a Date');
          });
        }
      }).catch(err => console.error('Error fetching all docs:', err));
      
      console.log('Filtering daily products for date:', selectedDate.toISOString());
    }
    // If date range is provided
    else if (startDate && endDate) {
      query.date = {
        $gte: new Date(startDate),
        $lte: new Date(endDate)
      };
    } else if (startDate) {
      query.date = { $gte: new Date(startDate) };
    } else if (endDate) {
      query.date = { $lte: new Date(endDate) };
    }
    
    // Filter by market name if provided
    if (marketName) {
      query.marketName = marketName;
    }
    
    const dailyProducts = await DailyProducts.find(query)
      .populate('product')
      .sort({ date: -1 });
      
    console.log(`Found ${dailyProducts.length} daily products matching query:`, query);
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
  // Try to handle adding the daily price with retry logic for index issues
  const tryAddDailyPrice = async () => {
    try {
    await connectDB();
    const { productId, date, PriceMax, PriceMin, PriceAvg, marketName } = req.body;
    
    // Validate required fields
    if (!productId) {
      return res.status(400).json({ error: 'Product ID is required' });
    }
    
    if (!date) {
      return res.status(400).json({ error: 'Date is required' });
    }
    
    if (PriceMax === undefined || PriceMin === undefined || PriceAvg === undefined) {
      return res.status(400).json({ error: 'Minimum, maximum, and average prices are all required' });
    }
    
    // Verify product exists
    const productExists = await Products.findById(productId);
    if (!productExists) {
      return res.status(404).json({ error: 'Product not found with ID: ' + productId });
    }
    
    // Parse prices to numbers
    const maxPrice = Number(PriceMax);
    const minPrice = Number(PriceMin);
    const avgPrice = Number(PriceAvg);
    
    if (isNaN(maxPrice) || isNaN(minPrice) || isNaN(avgPrice)) {
      return res.status(400).json({ error: 'All prices must be valid numbers' });
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
    
    // Check if entry for this product, date, and market already exists
    let dailyProduct = await DailyProducts.findOne({
      product: productId,
      date: formattedDate,
      marketName: req.body.marketName || 'दिंडोरी मुख्य बाजार'
    });
    
    if (dailyProduct) {
      // Update existing entry
      console.log('Updating existing daily price entry id:', dailyProduct._id);
      dailyProduct.PriceMax = maxPrice;
      dailyProduct.PriceMin = minPrice;
      dailyProduct.PriceAvg = avgPrice;
      
      // Update marketName if provided
      if (marketName) {
        dailyProduct.marketName = marketName;
      }
      
      await dailyProduct.save();
    } else {
      // Create new entry
      console.log('Creating new daily price entry');
      dailyProduct = new DailyProducts({
        product: productId,
        date: formattedDate,
        marketName: marketName || 'दिंडोरी मुख्य बाजार',
        PriceMax: maxPrice,
        PriceMin: minPrice,
        PriceAvg: avgPrice
      });
      await dailyProduct.save();
    }
    
    // Also update the main product with latest prices
    await Products.findByIdAndUpdate(productId, {
      PriceMax: maxPrice,
      PriceMin: minPrice,
      updatedAt: formattedDate
    });
    
    // Clear any market status for this date and market when prices are added
    try {
      const marketStatusCollection = mongoose.connection.collection('marketStatus');
      const formattedDateString = formattedDate.toISOString().split('T')[0];
      
      // Delete the market status for this specific date and market
      await marketStatusCollection.deleteOne({
        date: formattedDateString,
        marketName: marketName || 'दिंडोरी मुख्य बाजार'
      });
      
      console.log('Removed market status for date:', formattedDateString, 'and market:', marketName || 'दिंडोरी मुख्य बाजार');
    } catch (statusError) {
      console.error('Error removing market status:', statusError);
      // Continue execution even if clearing market status fails
    }
    
    console.log('Daily price added successfully:', dailyProduct._id);
    res.status(201).json(dailyProduct);
    } catch (error) {
      // Check if this is a duplicate key error with the old index format
      if (error.code === 11000 && error.keyPattern && 
          (error.keyPattern.product === 1 && error.keyPattern.date === 1 && !error.keyPattern.marketName)) {
        
        // Only try to rebuild the index once
        if (!indexRebuildAttempted) {
          console.log('Detected old index format, attempting to rebuild...');
          indexRebuildAttempted = true;
          const rebuilt = await rebuildIndex();
          
          if (rebuilt) {
            console.log('Index rebuilt, retrying the operation...');
            return { retry: true };
          }
        }
      }
      
      throw error;
    }
    return { retry: false, success: true };
  };
  
  try {
    // First attempt
    const result = await tryAddDailyPrice();
    
    // If we need to retry after rebuilding the index
    if (result && result.retry) {
      const retryResult = await tryAddDailyPrice();
      if (!retryResult.success) {
        throw new Error('Failed after index rebuild attempt');
      }
    }
  } catch (error) {
    console.error('Error adding daily price:', error);
    
    // Provide a more helpful error message for duplicate key errors
    if (error.code === 11000) {
      return res.status(409).json({ 
        error: 'दिलेल्या बाजारासाठी या उत्पादनाची किंमत आज आधीच जोडली गेली आहे. कृपया अन्य बाजार निवडा किंवा वेगळे उत्पादन निवडा.',
        details: error.message 
      });
    }
    
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
  
  // Handle requests with date parameter
  if (req.query.date && req.method === 'GET') {
    console.log('Date parameter detected:', req.query.date);
    // If path is 'daily' or not specified, route to getDailyProducts
    if (!path || path === 'daily') {
      console.log('Routing to getDailyProducts with date param');
      return getDailyProducts(req, res);
    } else if (path === 'products') {
      // If path is 'products', route to getProducts
      console.log('Routing to getProducts with date param');
      return getProducts(req, res);
    }
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
