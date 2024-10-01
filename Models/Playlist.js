const mongoose = require('mongoose');

const playlistSchema = new mongoose.Schema({
  name: { type: String, unique: true },
  songs: [String],
});

module.exports = mongoose.model('Playlist', playlistSchema);
