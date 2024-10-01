module.exports = {
  name: 'uptime',
  description: 'View the bot\'s uptime',
  execute(message) {
    const uptime = process.uptime();
    const seconds = Math.floor(uptime % 60);
    const minutes = Math.floor((uptime / 60) % 60);
    const hours = Math.floor((uptime / 3600) % 24);
    const days = Math.floor(uptime / 86400);

    message.channel.send(`Uptime: ${days}d ${hours}h ${minutes
