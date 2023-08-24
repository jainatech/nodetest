const Product = require("../models/ECommerce");
const {ecommerce}=require('../thirdpartyjson')


const createProduct = async (req, res) => {
  try {
    const { name, price, description } = req.body;

    const newProduct = new Product({
        name, price, description 
    });
    await newProduct.save();
    return res.status(201).json(newProduct);
  } catch (error) {
    return res.status(500).json({ error: "Failed to create Product" });
  }
};

const fetchProduct = async (req, res) => {
  try {
    
    const product = await Product.find().populate("name", "price", "description" );
    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({ error: "Failed to fetch product" });
  }
};
const fetchndCreateProduct = async (req, res) => {
  try {
    const product = await Product.insertMany(ecommerce)
    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({ error: "Failed to fetch product" });
  }
};
const fetchProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId).populate(
        "name", "price", 
    );
    if (!product) {
      return res.status(404).json({ error: "product not found" });
    }
    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({ error: "Failed to fetch product" });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { name, price, description } = req.body;
    const product = await Product.findByIdAndUpdate(
      req.params.productId,
      { name, price, description },
      { new: true }
    );
    if (!product) {
      return res.status(404).json({ error: "product not found" });
    }
    return  res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({ error: "Failed to update product" });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.productId);
    if (!product) {
      return res.status(404).json({ error: "product not found" });
    }
   return res.status(200).json({ message: "product deleted successfully" });
  } catch (error) {
    return res.status(500).json({ error: "Failed to delete product" });
  }
};

const serachProduct = async (req, res) => {
    try {
        const searchQuery = req.query.q;
        const products = await Product.find({
          name: { $regex: searchQuery, $options: 'i' }, 
        });
        return  res.json(products);
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
};


const filterProduct = async (req, res) => {
    try {
        const category = req.query.category;
        const minPrice = parseInt(req.query.minPrice);
        const maxPrice = parseInt(req.query.maxPrice);
    
        let filter = {};
    
        if (category) {
          filter.category = category;
        }
    
        if (!isNaN(minPrice) && !isNaN(maxPrice)) {
          filter.price = { $gte: minPrice, $lte: maxPrice };
        } else if (!isNaN(minPrice)) {
          filter.price = { $gte: minPrice };
        } else if (!isNaN(maxPrice)) {
          filter.price = { $lte: maxPrice };
        }
    
        const products = await Product.find(filter);
        return res.json(products);
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
};
module.exports = {
  createProduct,
  fetchProduct,
  fetchProductById,
  updateProduct,
  deleteProduct,
  serachProduct,
  filterProduct,
  fetchndCreateProduct
};
