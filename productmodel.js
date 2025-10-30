const mongoose = require('mongoose');

// Define nested schema for product variants
const variantSchema = new mongoose.Schema({
  color: String,
  size: String,
  stock: Number
});

// Define main product schema
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  variants: [variantSchema]  // Array of nested variant documents
});

module.exports = mongoose.model('Product', productSchema);
