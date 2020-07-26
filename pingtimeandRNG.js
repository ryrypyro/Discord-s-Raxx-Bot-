const Discord = require('discord.js'); 
const bot = new Discord.Client()
const prefix = "'"

bot.on('ready', () => {
    console.log(`I am logged in as ${bot.user.tag}`); 
}); 

bot.on('message', msg => {
    let content = msg.content.toLowerCase()
    if (msg.author.bot) return; 
    if (msg.content.toLowerCase().startsWith(prefix + 'ping')) {
        msg.channel.send('Pong! xd'); 
    }
    if (content.startsWith(prefix + "day")) {
        let daysofweek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        msg.channel.send(daysofweek[(new Date(removeCommand(msg.content))).getDay()]) 
    }
    if (content.startsWith(prefix + "rng" || "RNG" || "random")) {
        msg.channel.send(":1234:" + "`http\nRandom Number Generator 1-100: " + Math.floor(Math.random() * 100) + "`") // generates a random number from 1-100 
    }
}); // doing !day (date entered [day], [month], then [year] will give the day of that specific date)

function removeCommand(string) {
    let args = string.split(" ")
    args.shift()
    return args.join(" ")
}
bot.login('Mzc1OTg0NDYyMDkxMjU1ODEw.Wfxg0Q.WtdOAuZj-ZsLUMSROsPxjyf6goo'); 