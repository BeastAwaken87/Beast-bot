const Discord = require("discord.js")
const db = require("quick.db")
 
module.exports = {
    name: "redeem",
    category: "premium",
    description: "Show bot stats",
    run: async (client, message, args) => {
   let code = args[0]
  if(!code) {
    let argsrequired = new Discord.MessageEmbed()
    .setTitle(`**Invaild Usage**`)
    .setDescription(`qredeem <code>`)
    message.channel.send(argsrequired)
    return;
  }

let alreadypremium = new Discord.MessageEmbed()
.setTitle(`You're Already an premium user`)
 let checking = db.get(`premium`)

if(checking && checking.find(find => find.userid == message.author.id)) { 
  console.log(message.author.username)
  message.channel.send(alreadypremium);

  return;

}
let premiumcheck = db.get(`botpremiumcodes`)

  let alreadyexist = new Discord.MessageEmbed()
      if(premiumcheck && premiumcheck.find(checks => checks.premiumcodes == code)) {
   db.delete(`botpremiumcodes`, code)
       
   let userpremiumdata = {
    userid: message.author.id,
    code: code
   }
   db.push(`premium`, userpremiumdata)
  let actived = new Discord.MessageEmbed()
  .setTitle(`** PREMIUM ACTIVATED ! **`)
  .setDescription(`You're Now An Premium User You Can Use Now Features!`)
  .setImage(`https://media.discordapp.net/attachments/820239014942343169/845324940404457492/standard1.gif`)
  message.channel.send(actived)
    return; 
  }
  return message.channel.send(`This Code Doesn't exist`)
}}