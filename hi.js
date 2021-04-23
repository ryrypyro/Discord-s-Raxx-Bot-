const Discord = require('discord.js'); 
const bot = new Discord.Client()
const prefix = "-"

bot.on('ready', () => {
    console.log(`I am logged in as ${bot.user.tag}`); 
}); 

bot.on('message', msg => {
    let content = msg.content.toLowerCase()
    if (msg.author.bot) return; 
    if (msg.content.toLowerCase().startsWith(prefix + 'hi')) {
        msg.channel.send('hey there sexy, what can I do for you? :heart_eyes: :revolving_hearts: '); 
    } 
}) 