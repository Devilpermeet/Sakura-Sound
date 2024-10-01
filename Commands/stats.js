const Stats = require('../models/Stats');

module.exports = {
  name: 'stats',
  description: 'View bot statistics',
  async execute(client, message) {
    const totalSongsPlayed = await Stats.countDocuments();
    const uptime = process.uptime();
    
    const seconds = Math.floor(uptime % 60);
    const minutes = Math.floor((uptime / 60) % 60);
    const hours = Math.floor((uptime / 3600) % 24);
    const days = Math.floor(uptime / 86400);

    message.channel.send(`Statistics:\n- Total Songs Played: ${totalSongsPlayed}\n- Uptime: ${days}d ${hours}h ${minutes}m ${seconds}s`);
  },
};
