const mongoose = require('mongoose');
const { Schema } = mongoose;
// const RecipientSchema = require('./Recipient');

const searchSchema = new Schema({
  body: String,
  _user: { type: Schema.Types.ObjectId, ref: 'User' },

});

mongoose.model('search', searchSchema);
