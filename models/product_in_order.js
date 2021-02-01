const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ProductInOrderSchema = new Schema({
  order_id: {
    type: Schema.Types.ObjectID
  },
  product_id: {
    type: Schema.Types.ObjectID
  },
  count: {
    type: Number
  }
}, {collection: 'product_in_order'})

const ProductInOrderModel = mongoose.model('ProductInOrderModel', ProductInOrderSchema);

module.exports = ProductInOrderModel;
