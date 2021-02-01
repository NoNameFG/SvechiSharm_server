const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ProductImageSchema = new Schema({
  product_id: {
    type: Schema.Types.ObjectId,
    required: [true, 'ProductId required field']
  },
  image: {
    type: Buffer,
    required: [true, 'Image required field']
  }
}, {collection: 'product_image'});

const ProductImageModel = mongoose.model('ProductImageModel', ProductImageSchema);

module.exports = ProductImageModel;
