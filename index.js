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
const moment = require("moment");

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

//Bot Status
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


//Logging in to discord
client.login(process.env.TOKEN)
