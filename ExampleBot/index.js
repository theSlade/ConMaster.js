require("dotenv").config();
const { Client, MessageEmbed } = require("discord.js");
const { color, emoji } = require("conmaster.js");
const bot = new Client();

bot.on("message", (message) => {
  if (message.content === "!hello") {
    return message.reply(
      new MessageEmbed()
        .setDescription("Hello there!" + emoji.happy1)
        .setColor(color.white)
    );
  }
});

bot.login(process.env.TOKEN);
