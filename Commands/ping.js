module.exports = {
  name: 'ping',
  description: 'Check the bot\'s ping',
  execute(message) {
    message.channel.send(`Pong! 🏓 Latency: ${Date.now() - message.createdTimestamp}ms`);
  },
};
