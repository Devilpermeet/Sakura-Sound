module.exports = {
  name: 'autoplay',
  description: 'Toggle autoplay for the queue',
  async execute(client, message) {
    const queue = client.distube.getQueue(message);
    if (!queue) return message.channel.send('There is nothing playing right now! 🎧');

    queue.autoplay = !queue.autoplay;
    message.channel.send(`Autoplay is now ${queue.autoplay ? 'enabled' : 'disabled'}! 🎶`);
  },
};
