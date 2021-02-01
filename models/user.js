const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const UserSchema = new Schema({
  email: {
    type: String,
    required: [true, 'Введите E-mail.']
  },
  password: {
    type: String,
    required: [true, 'Введите пароль.']
  },
  phone_number: {
    type: String,
    required: [true, 'Введите номер телефона.']
  },
  name: {
    type: String,
    required: [true, 'Введите имя.']
  },
  surname: {
    type: String,
    required: [true, 'Введите фамилию.']
  },
  fathers_name: {
    type: String,
    required: [true, 'Введите отчество.']
  }
}, {collection: 'user'});

const UserModel = mongoose.model('UserModel', UserSchema);

module.exports = UserModel;
