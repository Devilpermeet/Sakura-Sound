module.exports = {
  name: 'leave',
  description: 'Leave the voice channel',
  async execute(client, message) {
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) return message.channel.send('You need to be in a voice channel to use this command! 🎤');

    await voiceChannel.leave();
    message.channel.send(`Left ${voiceChannel.name}! 👋`);
  },
};
