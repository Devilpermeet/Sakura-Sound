const Playlist = require('../models/Playlist');

module.exports = {
  name: 'playlist',
  description: 'Create and manage playlists',
  async execute(client, message, args) {
    // Example implementation for adding songs to a playlist
    const action = args[0];
    const playlistName = args[1];
    const song = args.slice(2).join(' ');

    if (!action || !playlistName) return message.channel.send('Usage: !playlist <create|add|view> <name> [song]');

    if (action === 'create') {
      await Playlist.create({ name: playlistName, songs: [] });
      return message.channel.send(`Playlist **${playlistName}** created! 🎵`);
    }

    if (action === 'add') {
      const playlist = await Playlist.findOne({ name: playlistName });
      if (!playlist) return message.channel.send(`Playlist **${playlistName}** not found! ❌`);

      playlist.songs.push(song);
      await playlist.save();
      return message.channel.send(`Added **${song}** to playlist **${playlistName}**! ✅`);
    }

    if (action === 'view') {
      const playlist = await Playlist.findOne({ name: playlistName });
      if (!playlist) return message.channel.send(`Playlist **${playlistName}** not found! ❌`);

      const songList = playlist.songs.join('\n') || 'No songs in this playlist! 📜';
      return message.channel.send(`Playlist **${playlistName}**:\n${songList}`);
    }

    message.channel.send('Invalid action! ❌');
  },
};
