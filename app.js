const Discord = require("discord.js");
const config = require("./config.json")
const client = new Discord.Client(); 
const prefix = config.prefix
require('dotenv').config()

client.on("ready", () => {
    console.log("Ready!");
}); 

client.on("message", (message) => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
}); 

client.login(process.env.TOKEN); 