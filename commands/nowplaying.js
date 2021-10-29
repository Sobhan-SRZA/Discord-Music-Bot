const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error")

module.exports = {
  info: {
    name: "nowplaying",
    description: "To show the music which is currently playing in this server",
    usage: "",
    aliases: ["np"],
  },

  run: async function (client, message, args) {
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue) return sendError("There is nothing playing in your queue", message.channel);
    let song = serverQueue.songs[0]
    let thing = new MessageEmbed()
      .setAuthor("Now Playing", "https://cdn.discordapp.com/attachments/865859167557255178/897552744402026556/undefined_-_Imgur.gif")
      .setThumbnail(song.img)
      .setColor("RANDOM")
      .addField("Name", song.title, true)
      .addField("Duration", song.duration, true)
      .setFooter(`Requested by ${message.author.username} | Views:${song.views} | ${song.ago}`,` ${message.author.displayAvatarURL()}`)
    return message.channel.send(thing)
  },
};
