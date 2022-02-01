const { MessageEmbed } = require('discord.js')

module.exports = {
    info: {
        name: "help",
        description: "To show all commands",
        usage: "[command]",
        aliases: ["commands", "help me", "pls help", "h"]
    },

    run: async function(client, message, args){


      const db = require("quick.db");
    var prefix = await db.fetch(`prefix_${message.guild.id}`)||process.env.PREFIX;
    let music = new MessageEmbed()
      music.setAuthor(`Requested by ${message.author.username}`, `${message.author.displayAvatarURL()}`)
      music.setThumbnail(message.client.user.displayAvatarURL({ format: "png" }))
      music.setTitle(`${client.user.username}  Help  :)`)
      music.setDescription('List of all commands')
      music.setFooter(`To get info of each command you can do ${prefix}help | Create by Mr.SIN RE#1528 :)`, `https://cdn.discordapp.com/attachments/902034619791196221/905054458793312327/2GU.gif`)
      music.setColor("RANDOM")
           var allcmds = "";   
        client.commands.forEach(cmd => {
            let cmdinfo = cmd.info

      music.addField(
        `**${prefix}${cmdinfo.name}${cmdinfo.usage}**`,
        `\`Description: ${cmdinfo.description} | Aliases: (${cmdinfo.aliases})\``,
        true
      );
    })
      music.addField(`**Links**`, `**[Support Server](${"https://discord.gg/5GYNec4urW"}) • [Invite](https://discord.com/oauth2/authorize?client_id=${message.client.user.id}&permissions=137775017040&scope=bot)**`)

      message.channel.send(music)
    
    }
}