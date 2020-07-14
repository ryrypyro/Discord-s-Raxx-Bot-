const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colors = require("../colors.json");
const superagent = require("superagent")

module.exports.run = async (bot, message, args) => {
    // we will check if the person who uses the command has permission to use it. 
    if (!message.member.hasPermission("MANAGE_ROLES") || !message.guild.owner) return message.channel.send(":no_entry: ```Sorry! You do not have the permission to use this command.```")

    if (!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send(":no_entry: ```Sorry! I don't have the authorization to add roles!```")


    // DEFINE THE REASON AND UNMUTEE
    let mutee = message.mentions.members.first() || message.guild.members.get(args[0])
    if (!mutee) return message.channel.send("```Please mention a user that you would like to mute.```");

    let reason = args.slice(1).join(" ");
    if (!reason) reason = "```No given reason```"

    // DEFINE MUTE ROLE, IF MUTE ROLE DOESN'T EXIST, SEND A MESSAGE
    let muterole = message.guild.roles.find(r => r.name === "Muted")
    if(!muterole) return message.channel.send("```This user is not muted. Use this command on a muted user.```")
    
    // remove role to thye mentioned user and also send the user a DM explaining where/why they were unmuted
    mutee.removeRole(muterole.id).then(() => {
        message.delete()
        mutee.send(`Your mute has expired in ${message.guild.name} due to: ${reason}. Behave yourself, or there will be more consequences!`).catch(err => console.log(err))
        message.channel.send(`${mutee.user.username} was successfully unmuted :speaker:`)
    })
    // send an embed to the modlogs channel '
    let embed = new Discord.RichEmbed()
    .setColor("RED")
    .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
    .addField("Moderation:", "unmute")
    .addField("Mutee:", mutee.user.username)
    .addField("Moderator:", message.author.username)
    .addField("Reason:", reason)
    .addField("Date:", message.createdAt.toLocaleString())

    let sChannel = message.guild.channels.find(c => c.name === "tut-modlogs")
    sChannel.send(embed)
    // NOTE TO MAX THAKUR: Max if you're reading this, I THINK tut-modlogs is basically the channel name, so I don't know how you're gonna make it so that the embed of the mute/unmute goes into every servers different mod-logs, but please see if you can make it so that the embed makes it to every server's modlogs channel when they add raxxbot to their server.
}

module.exports.config = {
    name: "unmute", 
    description: "Unmutes a member in a discord server!", 
    usage: "!unmute <user> <reason>", 
    accessableby: "Members",  
    aliases: ["unm", "speak"]
}













