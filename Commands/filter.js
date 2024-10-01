module.exports = {
  name: 'filter',
  description: 'Apply a filter to the currently playing song',
  async execute(client, message, args) {
    const queue = client.distube.getQueue(message);
    if (!queue) return message.channel.send('There is nothing playing right now! 🎧');

    const filter = args[0];
    if (!filter) return message.channel.send('Please provide a filter to apply! ❌');

    queue.filter = filter;
    message.channel.send(`Filter applied: ${filter} 🎶`);
  },
};
