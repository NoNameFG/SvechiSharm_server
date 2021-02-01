const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const DeliverySchema = new Schema({
  type: {
    type: String
  }
}, {collection: 'delivery'});

const DeliveryModel = mongoose.model('DeliveryModel', DeliverySchema);

module.exports = DeliveryModel;
