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

client.on("ready", () => {
  function YousamPower() {
    let sezar = [`${PREFIX}play` , `${PREFIX}help` ]
    let Power = Math.floor(Math.random() * sezar.length);
    client.user.setActivity(sezar[Power], {type: "PLAYING"});//can be LISTENING, WATCHING, PLAYING, STREAMING
  }; setInterval(YousamPower, 5000)
    client.user.setStatus("dnd")//can be invesible, online, idle, dnd
});

//Logging in to discord
client.login(process.env.TOKEN)
