const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const OrderSchema = new Schema({
  order_number: {
    type: Number
  },
  date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    default: 'В процессе' //Передан в доставку, В процессе, Завершён
  },
  payment_status: {
    type: String,
    default: 'Не оплачен' //Оплачен, Не оплачен
  },
  price: {
    type: Number
  },
  delivery_id: {
    type: Schema.Types.ObjectId
  },
  adress_id: {
    type: Schema.Types.ObjectId
  },
  user_id: {
    type: Schema.Types.ObjectId
  }
}, {collection: 'order'});

const OrderModel = mongoose.model('OrderModel', OrderSchema);

module.exports = OrderModel;
