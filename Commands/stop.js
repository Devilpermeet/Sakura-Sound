module.exports = {
  name: 'stop',
  description: 'Stop the current song and clear the queue',
  async execute(client, message) {
    const queue = client.distube.getQueue(message);
    if (!queue) return message.channel.send('There is nothing playing right now! 🎧');

    await client.distube.stop(message);
    message.channel.send('Stopped the music and cleared the queue! 🛑');
  },
};
