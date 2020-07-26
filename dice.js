const Discord = require('discord.js'); 
const bot = new Discord.Client()
const prefix = "'"

if (content.startsWith(prefix + "roll" || "dice")) {
    msg.channel.send("🎲" + "`http\nYou rolled: " + Math.floor(Math.random() * 6) + "`") 