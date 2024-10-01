module.exports = {
  name: 'help',
  description: 'List all available commands',
  execute(message) {
    const commands = [
      '!play <song> - Play a song',
      '!join - Join your voice channel',
      '!leave - Leave the voice channel',
      '!nowplaying - Show the currently playing song',
      '!stop - Stop the music and clear the queue',
      '!skip - Skip the currently playing song',
      '!resume - Resume the currently paused song',
      '!uptime - Show the bot\'s uptime',
      '!voteskip - Vote to skip the currently playing song',
      '!setprefix <newPrefix> - Set a new command prefix',
      '!playlist <create|add|view> <name> [song] - Manage playlists',
      '!filter <filterName> - Apply a filter to the currently playing song',
      '!help - Show this help message',
    ];

    message.channel.send(`Available Commands:\n${commands.join('\n')}`);
  },
};
