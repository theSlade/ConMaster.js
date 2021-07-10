require("dotenv").config();
const { Client, MessageEmbed } = require("discord.js");
const { color, emoji } = require("conmaster.js");
const bot = new Client();

function ready() {
  console.log("Ready!")
}

bot.on("ready", () => {
  ready();
  bot.user.setActivity("https://npmjs.com/conmaster.js")
})

bot.on("message", (message) => {
  if (message.content === "!hello") {
    return message.reply(
      new MessageEmbed()
        .setDescription(`${emoji.love2} Hello there!`)
        .setColor(color.DarkBlue)
    );
  } if (message.content.includes("sej")) {
     message.delete()
     message.channel.send(`${emoji.laughing2} Slettede din bedsked!`)
  }
});



bot.login(process.env.TOKEN);
