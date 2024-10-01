module.exports = {
  name: 'play',
  description: 'Play a song',
  async execute(client, message, args) {
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) return message.channel.send('You need to be in a voice channel to play music! 🎤');

    const song = args.join(' ');
    if (!song) return message.channel.send('Please provide a song to play! 🎶');

    await client.distube.play(voiceChannel, song, { textChannel: message.channel, member: message.member });
    message.channel.send(`Now playing: **${song}** 🎧`);
  },
};
