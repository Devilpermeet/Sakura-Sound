const mongoose = require('mongoose');

const statsSchema = new mongoose.Schema({
  totalSongsPlayed: Number,
});

module.exports = mongoose.model('Stats', statsSchema);
