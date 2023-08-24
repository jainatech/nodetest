const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
  });

module.exports = mongoose.model('Property', propertySchema);
