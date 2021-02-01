const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const AdressSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectID
  },
  adress: {
    type: String
  },
  index: {
    type: String
  }
}, {collection: 'adress'});

const AdressModel = mongoose.model('AdressModel', AdressSchema);

module.exports = AdressModel;
