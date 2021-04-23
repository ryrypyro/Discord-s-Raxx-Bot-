const {MessageEmbed} = require ('discord.js')
const api = require("imageapi.js")
module.exports={
    name: "reddit",
    aliases: "meme, memes, funny, dank", 
    description: "Look at memes from a subreddit of your choice!", 
    category: "fun", 
    usage: "<subreddit>",
    run: async(bot,message,args)=>{
        let Subreddit = message.content.slice(8)
        if(!Subreddit)return message.channel.send(` ``Please specify to me which subreddit you'd like.`` **Choices so far are: comedyheaven, dank, meme, memes, and Memes_Of_The_Dank.**`)
        try{
            let img = await api(Subreddit)
            const Embed = new MessageEmbed()
            .setTitle(`Here's a meme from subreddit r/${Subreddit}`)
            .setColor('RANDOM')
            .setImage(img)
            .setURL(`https://reddit.com/r/${Subreddit}`)
            message.channel.send(Embed)
        }catch(err){
return message.channel.send(err)
        }
    }
}