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

    const { MessageButton } = require('discord-buttons');
 let btn2 = new MessageButton()
    .setStyle('url') 
    .setLabel('🤖Invite Bot') 
    .setURL(`https://discord.com/api/oauth2/authorize?client_id=${message.client.user.id}&permissions=412353895745&scope=bot`)
     let btn = new MessageButton()
    .setStyle('url') 
    .setLabel('🦾Server Support') 
    .setURL(`https://discord.com/invite/bNpqrdXNNn`)
    message.channel.send( { button: [btn,btn2],embed: music });
    }
}