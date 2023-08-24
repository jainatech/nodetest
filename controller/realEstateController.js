const Property = require("../models/RealEstate");

const createProperty = async (req, res) => {
    try {
        const property = await Property.create(req.body);
        res.status(201).json(property);
      } catch (error) {
        res.status(500).json({ error: 'Error creating property' });
      }
};

const fetchProperty = async (req, res) => {
    try {
        const properties = await Property.find();
        res.json(properties);
      } catch (error) {
        res.status(500).json({ error: 'Error retrieving properties' });
      }
};

const updateProperty = async (req, res) => {
    const propertyId = req.params.id;
    try {
      await Property.findByIdAndUpdate(propertyId, req.body);
      res.json({ message: 'Property updated successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Error updating property' });
    }
};

const deleteProperty = async (req, res) => {
    const propertyId = req.params.id;
    try {
      await Property.findByIdAndDelete(propertyId);
      res.json({ message: 'Property deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Error deleting property' });
    }
};

const searchProperty = async (req, res) => {
    const location = req.query.location;
    try {
      const properties = await Property.find({ location });
      res.json(properties);
    } catch (error) {
      res.status(500).json({ error: 'Error searching properties' });
    }
};

const filterProperty = async (req, res) => {
    const { minPrice, maxPrice, propertyType } = req.query;
    const filterOptions = {};
  
    if (minPrice && !isNaN(minPrice)) {
      filterOptions.price = { $gte: parseFloat(minPrice) };
    }
  
    if (maxPrice && !isNaN(maxPrice)) {
      if (filterOptions.price) {
        filterOptions.price.$lte = parseFloat(maxPrice);
      } else {
        filterOptions.price = { $lte: parseFloat(maxPrice) };
      }
    }
  
    if (propertyType) {
      filterOptions.propertyType = propertyType;
    }
  
    try {
      const properties = await Property.find(filterOptions);
      res.json(properties);
    } catch (error) {
      res.status(500).json({ error: 'Error filtering properties' });
    }
};

module.exports = {
  createProperty,
  fetchProperty,
  updateProperty,
  deleteProperty,
  searchProperty,
  filterProperty,
};
