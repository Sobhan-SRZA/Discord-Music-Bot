module.exports = async (client, message) => {
        if(message.channel.type === 'dm'){
        if(!message.author.bot === message.user) return message.reply("You are Bot 🤖")
        if(message.content.includes(`@everyone`)) return
        if(message.author.id === client.user.id)return

        if(message.content.includes('@'))return message.channel.send('you can\'t mention someone')
const channelbug = client.channels.cache.get("988020418612961322");
        const embed = new MessageEmbed()
          .setColor("#2F3136")
          .setAuthor(`${message.author.username}`,message.author.displayAvatarURL({ dynamic: true }))
          .setTimestamp()
          .setTitle(`This Guy Have Report, User ID "${message.author.id}"`)
          .setDescription(`> ${message.content}`)
        channelbug.send(embed).then((msg)=> {
          msg.react("📞")
         }).then(message.reply('Your bug request or comment has been sent to the support server, or the admins will join the server and solve it, or give you a friend request. Thanks❤'))

    }
  if (message.author.bot) return;

  //Prefixes also have mention match
  const db = require("quick.db");
  const prefixMention = new RegExp(`^<@!?${client.user.id}> `);
    var prefix = await db.fetch(`prefix_${message.guild.id}`);
    if (prefix == null) prefix = message.content.match(prefixMention) ? message.content.match(prefixMention)[0] : client.config.prefix;


  if (message.content.indexOf(prefix) !== 0) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  //Making the command lowerCase because our file name will be in lowerCase
  const command = args.shift().toLowerCase();

  //Searching a command
  const cmd = client.commands.get(command);
  //Searching a command aliases
  const aliases = client.commands.find(x => x.info.aliases.includes(command))

  //if(message.channel.type === "dm")return message.channel.send("None of the commands work in DMs. So please use commands in server!")
process.on("unhandledRejection", (reason, promise) => {
    try {
        console.error("Unhandled Rejection at: ", promise, "reason: ", reason.stack || reason);
    } catch {
        console.error(reason);
    }
});
require('events').EventEmitter.defaultMaxListeners = 25


  //Executing the codes when we get the command or aliases
  if(cmd){
    cmd.run(client, message, args);
  }else if(aliases){
    aliases.run(client, message, args);
  }else return
};
