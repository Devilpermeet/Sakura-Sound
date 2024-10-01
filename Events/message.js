const { Collection } = require('discord.js');
const Prefix = require('../models/Prefix');

module.exports = async (client, message) => {
  if (!message.content.startsWith(client.config.prefix) || message.author.bot) return;

  const args = message.content.slice(client.config.prefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();

  const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
  if (!command) return;

  const userPrefix = await Prefix.findOne({ userId: message.author.id });
  const prefix = userPrefix ? userPrefix.prefix : client.config.prefix;

  command.execute(client, message, args);
};
