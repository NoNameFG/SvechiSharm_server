const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ProductSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name required field']
  },
  description: {
    type: String,
    required: [true, 'Description required field']
  },
  price: {
    type: Number,
    required: [true, 'Price required field']
  },
  in_stock: {
    type: Boolean,
    default: true
  }
});

const ProductModel = mongoose.model('ProductModel', ProductSchema);

module.exports = ProductModel;
