const Prefix = require('../models/Prefix');

module.exports = {
  name: 'setprefix',
  description: 'Set a new prefix for your commands',
  async execute(client, message, args) {
    const newPrefix = args[0];
    if (!newPrefix) return message.channel.send('Please provide a new prefix! ❌');

    await Prefix.findOneAndUpdate(
      { userId: message.author.id },
      { prefix: newPrefix },
      { upsert: true, new: true }
    );

    message.channel.send(`Prefix changed to: \`${newPrefix}\` 🎉`);
  },
};
