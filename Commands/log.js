const Log = require('../models/Log');

module.exports = {
  name: 'log',
  description: 'View logs of bot activity',
  async execute(client, message) {
    const logs = await Log.find().sort({ createdAt: -1 }).limit(10);
    const logList = logs.map(log => `${log.createdAt}: ${log.message}`).join('\n') || 'No logs available. 📜';

    message.channel.send(`Recent Logs:\n${logList}`);
  },
};
