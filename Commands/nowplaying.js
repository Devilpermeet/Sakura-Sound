module.exports = {
  name: 'nowplaying',
  description: 'View the currently playing song',
  async execute(client, message) {
    const queue = client.distube.getQueue(message);
    if (!queue) return message.channel.send('There is nothing playing right now! 🎧');

    const song = queue.songs[0];
    message.channel.send(`Now Playing: **${song.name}** - \`${song.formattedDuration}\``);
  },
};
