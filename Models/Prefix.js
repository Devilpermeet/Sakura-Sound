const mongoose = require('mongoose');

const prefixSchema = new mongoose.Schema({
  userId: String,
  prefix: String,
});

module.exports = mongoose.model('Prefix', prefixSchema);
