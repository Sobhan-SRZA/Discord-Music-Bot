module.exports = async (client) => {
  console.log(`[API] Logged in as ${client.user.username}`);
  function YousamPower() {
    let sezar = [`${process.env.PREFIX}play` , `${process.env.PREFIX}help` ]
    let Power = Math.floor(Math.random() * sezar.length);
    client.user.setActivity(sezar[Power], {type: "PLAYING"});//can be LISTENING, WATCHING, PLAYING, STREAMING
  }; setInterval(YousamPower, 5000)
    client.user.setStatus("dnd")//can be invesible, online, idle, dnd
}
