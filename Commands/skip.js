module.exports = {
  name: 'skip',
  description: 'Skip the currently playing song',
  async execute(client, message) {
    const queue = client.distube.getQueue(message);
    if (!queue) return message.channel.send('There is nothing playing right now! 🎧');

    const song = await client.distube.skip(message);
    message.channel.send(`Skipped to **${song.name}**! ✅`);
  },
};
