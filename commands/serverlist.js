module.exports = {
  info: {
    name: "serverlist",
    description: "List of all servers that bot :D",
    usage: "",
    aliases: ["sl","servers"],
  },
 run: async (client, message, args) => {
//serverlist
    const Guilds = client.guilds.cache.array().map((G, I) => `${I + 1}. **${G.name}** - **${G.id}**`).join("\n");
    if (!Guilds) return message.channel.send("No Guild");
    return message.channel.send(Guilds, { split: { char: "\n" } }); }
   
};