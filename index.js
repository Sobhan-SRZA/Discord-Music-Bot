//express
const express = require('express')
const app = express();
const port = 3000
app.get('/', (req, res) => res.send('Yaro Botet Run Shod!'))
app.listen(port, () =>
console.log(`Your app is listening a http://localhost/${port}`)
);

//consol
require("dotenv").config();//Loading .env
const fs = require("fs");
const { Collection, Client } = require("discord.js");
const Discord = require("discord.js");
const client = new Discord.Client();//Making a discord bot client
client.commands = new Collection();//Making client.commands as a Discord.js Collection
client.queue = new Map()
client.config = {
  prefix: process.env.PREFIX
}
const prefix = process.env.PREFIX;
require('discord-buttons')(client);


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
    let sezar = [`${prefix}help`,`${prefix}play`, `${client.guilds.cache.size} Servers` ]
    let Power = Math.floor(Math.random() * sezar.length);
    let statusPlay = ["PLAYING"] //can be LISTENING, WATCHING, PLAYING, STREAMING  
    let godratPlay = Math.floor(Math.random() * statusPlay.length);     
   client.user.setActivity(sezar[Power], {type: statusPlay[godratPlay]});
        }; setInterval(srza, 3000)
  console.log(`${client.user.tag} IS ONLINE`)
});

//===========================================================================================================//
//======== Bot Guild remove =========
client.on("guildDelete",async guild => {
    const channel = client.channels.cache.get(process.env.CHANNEL_ID);

    const embed = new Discord.MessageEmbed()
        .setAuthor(client.user.tag,client.user.displayAvatarURL())
    .setDescription(` Man Az Servere **${guild.name}** Left Dadam Va Tedad Server Hayi Ke Joinam Be Tedad: \`${client.guilds.cache.size}\` Ast`)
    .addField(`👑| Ownere Server: ` ,` tage owner: \` ${guild.owner.tag}\``,true)
    .addField(`📬| Invite Server: ` ,` linke invite server:  **Can't create Invite**`,true)
    .addField(`🗿| ID Server: ` ,` id server: \` ${guild.id}\``,true)
    .setColor("#2F3136")
    .setThumbnail(guild.iconURL({ dynamic: true }))
     .setTimestamp(Date.now())

    channel.send(embed)
  })


//===========================================================================================================//
//======== Bot Guild add =========
  client.on('guildCreate',async guild => {
   const channel = client.channels.cache.get(process.env.CHANNEL_ID);
    const inviteCH = client.channels.cache.get(guild.rulesChannelID);
        let invite = await inviteCH.createInvite({
            maxAge: 0, 
            maxUses: 5
        }, )
  const embed = new Discord.MessageEmbed()
    .setAuthor(client.user.tag,client.user.displayAvatarURL())
    .setDescription(` Man Be Servere **${guild.name}** Add Shodam Va Tedad Server Hayi Ke Joinam Be Tedad: \`${client.guilds.cache.size}\` Ast`)
    .setThumbnail(guild.iconURL({ dynamic: true }))
    .addField(`👑| Ownere Server: ` ,` tage owner: \` ${guild.owner.tag}\``,true)
    .addField(`📬| Invite Server: ` ,` linke invite server:  **${invite}**`,true)
    .addField(`🗿| ID Server: ` ,` id server: \` ${guild.id}\``,true)
    .setColor("#2F3136")
    .setTimestamp(Date.now())

    channel.send(embed)
  })


//===========================================================================================================//
//======== Bot Prefix ========
client.on('message', async message => {
if(!message.guild || message.author.bot) return;
if (message.content === `${prefix}prefix`) {
 var prf = await require('quick.db').fetch(`prefix_${message.guild.id}`)||process.env.PREFIX;
 let errorprefixEmbed = new Discord.MessageEmbed()
         .setColor("#2F3136")
         .setThumbnail(client.user.displayAvatarURL())
         .setTimestamp(Date.now())
         .setAuthor(`prefix of ${client.user.tag} shows👌🏻`,client.user.displayAvatarURL())
         .setFooter(`prefix shows to ${message.author.tag} |`,message.author.displayAvatarURL())
         .setDescription(`Prefix Dar In Server **${prf}** ASt`)
  message.channel.send(errorprefixEmbed)
    }
});  
//===========================================================================================================//
//========== Anti Crash
const clc = require("cli-color")//using this package on your codes is not important 
    console.log("\n")
    console.log(clc.red(`Starting AntiCrash`));
    process.on('unhandledRejection', (reason, promise) => {
            console.log(clc.redBright('=== [antiCrash] :: [unhandledRejection] :: [start] ==='));
            console.log(reason);
            console.log(clc.redBright('=== [antiCrash] :: [unhandledRejection] :: [end] ==='));
    });
    process.on('rejectionHandled', (promise) => {
            console.log(clc.redBright('=== [antiCrash] :: [rejectionHandled] :: [start] ==='));
            console.log(promise);
            console.log(clc.redBright('=== [antiCrash] :: [rejectionHandled] :: [end] ==='));
    })
    process.on("uncaughtException", (err, origin) => {
            console.log(clc.redBright('=== [antiCrash] :: [uncaughtException] :: [start] ==='));
            console.log(err);
            console.log(clc.redBright('=== [antiCrash] :: [uncaughtException] :: [end] ==='));
    });
    process.on('uncaughtExceptionMonitor', (err, origin) => {
            console.log(clc.redBright('=== [antiCrash] :: [uncaughtExceptionMonitor] :: [start] ==='));
            console.log(err);
            console.log(clc.redBright('=== [antiCrash] :: [uncaughtExceptionMonitor] :: [end] ==='));
    });
    console.log(clc.greenBright(`AntiCrash Started`));
    console.log("\n")
//Logging in to discord
client.login(process.env.TOKEN)
