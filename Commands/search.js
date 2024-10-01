module.exports = {
  name: 'search',
  description: 'Search for a song and add it to the queue',
  async execute(client, message, args) {
    const query = args.join(' ');
    if (!query) return message.channel.send('Please provide a search query! ❌');

    const results = await client.distube.search(query, { limit: 5 });
    const songList = results.map((song, index) => {
      return `${index + 1}. **${song.name}** - \`${song.formattedDuration}\``;
    }).join('\n');

    const reply = await message.channel.send(`**Select a song to add to the queue:**\n${songList}`);
    const filter = response => {
      const selectedIndex = parseInt(response.content) - 1;
      return response.author.id === message.author.id && !isNaN(selectedIndex) && selectedIndex >= 0 && selectedIndex < results.length;
    };

    message.channel.awaitMessages({ filter, max: 1, time: 30000, errors: ['time'] })
      .then(async collected => {
        const selectedIndex = parseInt(collected.first().content) - 1;
        await client.distube.play(message, results[selectedIndex].url);
        message.channel.send(`Added **${results[selectedIndex].name}** to the queue! ✅`);
      })
      .catch(() => {
        reply.edit('No song selected within the time limit. ❌');
      });
  },
};
