const mongoose = require('mongoose');

const weatherSchema = new mongoose.Schema({
  city: { type: String, required: true },
  temperature: { type: Number, required: true },
  conditions: { type: String, required: true },
});

module.exports = mongoose.model('Weather', weatherSchema);