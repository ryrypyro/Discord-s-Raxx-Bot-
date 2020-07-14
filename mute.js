const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colors = require("../colors.json");
const superagent = require("superagent")

module.exports.run = async (bot, message, args) => {
    // we will check if the person who uses the command has permission to use it. 
    if (!message.member.hasPermission("MANAGE_ROLES") || !message.guild.owner) return message.channel.send(":no_entry: ```Sorry! You do not have the permission to use this command.```")

    if (!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send(":no_entry: ```Sorry! I don't have the authorization to add roles!")

    // DEFINE THE REASON AND MUTEE
    let mutee = message.mentions.members.first() || message.guild.members.get(args[0])
    if (!mutee) return message.channel.send("```Please mention a user that you would like to mute.```");

    let reason = args.slice(1).join(" ");
    if (!reason) reason = "```No given reason```"

    // DEFINE MUTE ROLE, CREATE ONE IF THE MUTE ROLE DOESN'T EXIST 
    let muterole = message.guild.roles.find(r => r.name === "Muted")
    if (!muterole) {
        try{
            muterole = await message.guild.createRole({
                name: "Muted", 
                color: "#514f48", 
                permissions: []
            })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false, 
                    ADD_REACTIONS: false, 
                    SEND_TTS_MESSAGES: false, 
                    ATTACH_FILES: false, 
                    SPEAK: false, 
                })   
            })
        } catch(e) {
            console.log(e.stack); 
        }
    }
    // ADD ROLE TO THE MENTIONED USER AND ALSO SEND THE USER TELLING THEM WHY/WHERE THEY WERE MUTED
    mutee.addRole(muterole.id).then(() => {
        message.delete()
        mutee.send(`Hi there, you have been in ${message.guild.name} due to: ${reason}`)
        message.channel.send(`${mutee.user.username} has been muted :mute: Think about what you've done.`)
    })

    // SEND AN EMBED TO THE MODLOGS CHANNEL 
    let embed = new Discord.RichEmbed()
    .setColor(colors.redlight)
    .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
    .addField("Moderation:", "mute")
    .addField("Mutee:", mutee.user.username)
    .addField("Moderator:", message.author.username)
    .addField("Reason:", reason)
    .addField("Date:", message.createdAt.toLocaleString())
    
    let sCHannel = message.guild.channels.find(c => c.name === "tut-modlogs")
    sCHannel.send(embed)
}

module.exports.config = {
    name: "mute",
    description: "Mutes a member in a discord server", 
    usage: "!mute <@user> <reason>", 
    accessableby: "Members",
    aliases: ["m", "nospeak"]
}