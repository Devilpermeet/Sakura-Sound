module.exports = {
  name: 'join',
  description: 'Join your voice channel',
  async execute(client, message) {
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) return message.channel.send('You need to be in a voice channel to use this command! 🎤');
    
    await voiceChannel.join();
    message.channel.send(`Joined ${voiceChannel.name}! 🎉`);
  },
};
