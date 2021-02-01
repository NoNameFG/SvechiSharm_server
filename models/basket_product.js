const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const BasketProductSchema = new Schema({
  product_id: {
    type: Schema.Types.ObjectID
  },
  count: {
    type: Number
  }
}, {collection: 'basket_product'});

const BasketProductModel = mongoose.model('BasketProductModel', BasketProductSchema);

module.exports = BasketProductModel;
