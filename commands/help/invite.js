const discord = require("discord.js");

module.exports = {
  name: "invite",
  category: "info",
  description: "INVITE Automodv12 beta BOT",
  run: async (client, message, args) => {
    
    let embed = new discord.MessageEmbed()
    .setTitle(`HERE INVITE LINK OF BOT`)
    .setDescription(`<:link:845315257430048788>  [CLICK HERE](https://discord.com/api/oauth2/authorize?client_id=856901623992418304&permissions=8&scope=bot) OR [support server ]https://discord.gg/jFN6z76ASQ)`)
    .setColor("RANDOM")
    .setFooter(`made by BEASTU `)
    .setTimestamp(message.timestamp = Date.now())
    
    message.channel .send(embed)
    
  
  }
}