const Product = require("../models/ECommerce");
const {ecommerce}=require('../thirdpartyjson')


const createProduct = async (req, res) => {
  try {
    const { name, price, description } = req.body;

    const newProduct = new Product({
        name, price, description 
    });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: "Failed to create Product" });
  }
};

const fetchProduct = async (req, res) => {
  try {
    console.log("eee",ecommerce)

    const product = await Product.find().populate("name", "price", "description" );
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch product" });
  }
};
const fetchndCreateProduct = async (req, res) => {
  try {
    const product = await Product.insertMany(ecommerce)
    res.status(200).json(product);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Failed to fetch product" });
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
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch product" });
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
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: "Failed to update product" });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.productId);
    if (!product) {
      return res.status(404).json({ error: "product not found" });
    }
    res.status(200).json({ message: "product deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete product" });
  }
};

const serachProduct = async (req, res) => {
    try {
        const searchQuery = req.query.q;
        const products = await Product.find({
          name: { $regex: searchQuery, $options: 'i' }, 
        });
        res.json(products);
      } catch (error) {
        res.status(500).json({ error: error.message });
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
        res.json(products);
      } catch (error) {
        res.status(500).json({ error: error.message });
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
