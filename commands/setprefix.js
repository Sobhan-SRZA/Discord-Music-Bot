const Discord = require('discord.js')
module.exports = {
  info: {
    name:"setprefix",
    description: "Change bot prefix in server",
    usage: "[setprefix <new-prefix>]",
    aliases: ["set-prefix","stp"],
    cooldown: 5,
  },
 run: async (client, message, args) => {
        try {
            if (!message.member.hasPermission('ADMINISTRATOR')) {
                let pererrorEmbed = new Discord.MessageEmbed()
                              .setColor("0xFF0000")
                               .setTitel(`**❌ | Error**`)
                               .setDescription(`Dastresi Morede Niaz Ra Nadarid🤕`)
                message.channel.send(pererrorEmbed)
                
                
            }
            var prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`);
            if (prefix == null) prefix = client.config.prefix;
            var newPrefix = args.join(' ')
            if (!newPrefix) {
                require('quick.db').set(`prefix_${message.guild.id}`, client.config.prefix);
                   let errorprefixEmbed = new Discord.MessageEmbed()
                              .setColor("RANDOM")
                           .setThumbnail(client.user.displayAvatarURL())
                               .setTimestamp(Date.now())
                               .setAuthor(`prefix of ${client.user.tag} changed👌🏻`,client.user.displayAvatarURL())
                                .setFooter(`prefix changed by ${message.author.tag} |`,message.author.displayAvatarURL())
                               .setDescription(`Prefix Bot Be Halat Default **${client.config.prefix}** Taghir Yaft`)
                message.channel.send(errorprefixEmbed)
            } else if (newPrefix) {
                if (newPrefix.length > 7) { 
                  let errorEmbed = new Discord.MessageEmbed()
                              .setColor("")
                               .setTitel(`**❌ | Error**`)
                               .setDescription(`Shotor Prefixet Kheili Tolanoe😶‍🌫️`)
                    message.channel.send(errorEmbed)
                }
                require('quick.db').set(`prefix_${message.guild.id}`, newPrefix);
                  let prefixEmbed = new Discord.MessageEmbed()
                              .setThumbnail(client.user.displayAvatarURL())
                              .setColor("RANDOM")
                               .setDescription(`Prefix Bot Dar In Server Be **${newPrefix}** Taghir Yaft😁`)
                               .setTimestamp(Date.now())
                               .setAuthor(`prefix of ${client.user.tag} changed👌🏻`,client.user.displayAvatarURL())
                                .setFooter(`prefix changed by ${message.author.tag} |`,message.author.displayAvatarURL())
              message.channel.send(prefixEmbed)
            }
        } catch (err) {
            return;
        }
    }
}