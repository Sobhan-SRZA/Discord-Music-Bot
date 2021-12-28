//express
const express = require('express')
const app = express();
const port = 3000
app.get('/', (req, res) => res.send('Yaro Botet Run Shod!'))
app.listen(port, () =>
console.log(`Your app is listening a http://localhost/${port}`)
);


require("dotenv").config();//Loading .env
const fs = require("fs");
const { Collection, Client } = require("discord.js");

const client = new Client();//Making a discord bot client
client.commands = new Collection();//Making client.commands as a Discord.js Collection
client.queue = new Map()

client.config = {
  prefix: process.env.PREFIX
}

//Loading Events
fs.readdir(__dirname + "/events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    const event = require(__dirname + `/events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
    console.log("Loading Event: "+eventName)
  });
});

//Loading Commands
fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
    console.log("Loading Command: "+commandName)
  });
},
        
);

//status
const srza = require('discord.js');
srza.Constants.DefaultOptions.ws.properties.$browser = "Discord Android";
client.on("ready", () => {
   function YousamPower() {
    let vazyiat = ["dnd","idle","online"] // online | dnd | idle | offline
    let godrat = Math.floor(Math.random() * vazyiat.length)
   client.user.setPresence({
     status: vazyiat[godrat] })
}; setInterval(YousamPower, 3000)
   function srza() {
    let sezar = [`${prefix}help`, `${prefix}play`,"Mr.SIN RE" , `🔰Sizar Team🔰`,`${client.guilds.cache.size} Servers` ]
    let Power = Math.floor(Math.random() * sezar.length);
    let statusPlay = ["LISTENING","WATCHING","PLAYING"] //can be LISTENING, WATCHING, PLAYING, STREAMING  
    let godratPlay = Math.floor(Math.random() * statusPlay.length);     
   client.user.setActivity(sezar[Power], {type: statusPlay[godratPlay]});
        }; setInterval(srza, 3000)
});

//serverlist
client.on('message', message => {
  if (message.content === `${prefix}serverlist`) { 
    const Guilds = client.guilds.cache.array().map((G, I) => `${I + 1}. **${G.name}** - **${G.id}**`).join("\n");
    if (!Guilds) return message.channel.send("No Guild");
    return message.channel.send(Guilds, { split: { char: "\n" } }); }
});

//bot stats
client.on('message', message => {
    if(message.author.bot) return;
    if(message.content.startsWith(`${prefix}stats`)){
    let infoEmbed = new Discord.MessageEmbed()
      infoEmbed.setColor("RANDOM");
      infoEmbed.setTitle(`Stats from \`${client.user.username}\``);
      infoEmbed.addField(":ping_pong: Ping",`┕\`${Math.round(client.ws.ping)}ms\``,true);

      infoEmbed.addField(":clock1: Uptime", `┕\`${moment.duration(message.client.uptime)}\``,true);
      infoEmbed.addField(":file_cabinet: Memory",`┕\`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(
            2
          )}mb\``,true);

      infoEmbed.addField(":homes: Servers",`┕\`${client.guilds.cache.size}\``, true);
      infoEmbed.addField(":busts_in_silhouette: Users",`┕\`${client.users.cache.size}\``,true);
      infoEmbed.addField(":control_knobs: API Latency",`┕\`${message.client.ws.ping}ms\``,true);
      infoEmbed.addField(":robot: Version",`┕\`Alpha 1.0.0\``,true);

      infoEmbed.addField(":blue_book: Discord.js",`┕\`v12.2.1\``,true);

          infoEmbed.addField(":green_book: Node",`┕\`14.5.6\``,true);
      infoEmbed.setTimestamp();
      
            message.channel.send(infoEmbed)
    }
    });

//Logging in to discord
client.login(process.env.TOKEN)
