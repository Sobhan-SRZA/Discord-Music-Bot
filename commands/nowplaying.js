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
      .setAuthor("Now Playing", "https://cdn.discordapp.com/attachments/902034609661943809/903788153826082836/894939860199174206.gif")
      .setThumbnail(`${message.author.displayAvatarURL()}`)
      .setColor("RANDOM")
    .setImage(song.img)
      .addField("Name", song.title, true)
      .addField("Duration", song.duration, true)
      .setFooter(`Requested by ${message.author.username} 
       Views:${song.views} 
       ${song.ago}`)
    return message.channel.send(thing)
  },
};