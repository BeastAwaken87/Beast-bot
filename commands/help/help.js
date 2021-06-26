const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "help",
  description:
    "Get list of all command and even get to know every command detials",
  usage: "help <cmd>",
  category: "info",
  run: async (client, message, args) => {
    
    if (args[0]) {
      const command = await client.commands.get(args[0]);

      if (!command) {
        return message.channel.send("Unknown Command: " + args[0]);
      }

      let embed = new MessageEmbed()
        .setAuthor(command.name, client.user.displayAvatarURL())
        .addField("❯ Description", command.description || "Not Provided :(")
        .addField("❯ Usage", "`" + command.usage + "`" || "Not Provied")
        .setThumbnail(client.user.displayAvatarURL())
        .setColor("#868686")
        .setFooter(client.user.username, client.user.displayAvatarURL());

      return message.channel.send(embed);
    } else {
      
      const commands = await client.commands;

      let emx = new MessageEmbed()
        .setDescription('**A fun and moderation bot with 200+ commnds and 10+ category ** \n**If u got any error do ** `b!bug` **your bug must be 10 ltters **')
  
        .setColor("#868686")
        .setFooter(client.user.username, client.user.displayAvatarURL())
        
        .setThumbnail(client.user.displayAvatarURL());
          
      let com = {};
      for (let comm of commands.array()) {
        let category = comm.category || "Unknown";
        let name = comm.name;

        if (!com[category]) {
          com[category] = [];
        }
        com[category].push(name);
      }

      for(const [key, value] of Object.entries(com)) {
        let category = key;

        let desc = "`" + value.join("`, `") + "`";

        emx.addField(`${category.toUpperCase()}[${value.length}]`, desc);
      }
     emx.addField('important links ','**:link:  [Support](https://discord.gg/jFN6z76ASQ)**  | **[website](https://discord.com/api/oauth2/authorize?client_id=856901623992418304&redirect_uri=https%3A%2F%2Fdashboard.beastawaken13.repl.co&response_type=code&scope=identify)**')
      return message.inlineReply({
  embed: emx,
})

    }
  }
};
