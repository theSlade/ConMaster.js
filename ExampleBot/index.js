const { Client, MessageEmbed } = require("discord.js");
const bot = new Client();

bot.on("message", (message) => {
  if (message.content === "!hello") {
    return message.channel.send(new MessageEmbed().setColor());
  }
});
