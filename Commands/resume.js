module.exports = {
  name: 'resume',
  description: 'Resume the currently paused song',
  async execute(client, message) {
    const queue = client.distube.getQueue(message);
    if (!queue) return message.channel.send('There is nothing playing right now! 🎧');
    
    if (queue.paused) {
      await client.distube.resume(message);
      message.channel.send('Resumed the music! ▶️');
    } else {
      message.channel.send('The music is already playing! 🎵');
    }
  },
};
