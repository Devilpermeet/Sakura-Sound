module.exports = {
  name: 'voteskip',
  description: 'Vote to skip the currently playing song',
  async execute(client, message) {
    const queue = client.distube.getQueue(message);
    if (!queue) return message.channel.send('There is nothing playing right now! 🎧');

    const requiredVotes = Math.ceil(queue.songs.length / 2);
    const votes = queue.votes || new Set();
    
    if (votes.has(message.author.id)) {
      return message.channel.send('You have already voted to skip! ❌');
    }
    
    votes.add(message.author.id);
    queue.votes = votes;

    if (votes.size >= requiredVotes) {
      const skippedSong = await client.distube.skip(message);
      message.channel.send(`Skipped to **${skippedSong.name}**! ✅`);
    } else {
      message.channel.send(`Vote added! ${votes.size}/${requiredVotes} needed to skip. 🗳️`);
    }
  },
};
