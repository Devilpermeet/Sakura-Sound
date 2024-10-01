module.exports = {
  name: 'queue',
  description: 'View the current music queue',
  async execute(client, message) {
    const queue = client.distube.getQueue(message);
    if (!queue) return message.channel.send('There is nothing playing right now! 🎧');

    const songList = queue.songs.map((song, index) => {
      return `${index + 1}. **${song.name}** - \`${song.formattedDuration}\``;
    }).join('\n');

    message.channel.send(`Current Queue:\n${songList || 'No songs in the queue! 📜'}`);
  },
};
