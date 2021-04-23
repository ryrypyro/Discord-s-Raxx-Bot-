const {MessageEmbed} = require ('discord.js')
const api = require("imageapi.js")
module.exports={
    name: "meme",
    aliases: "meme, memes, funny, dank", 
    description: "Look at memes!", 
    category: "fun", 
    run: async(bot,message,args)=>{
        let subreddits = [
            "comedyheaven",
            "dank",
            "meme",
            "memes", 
            "Memes_Of_The_Dank"
        ]
    let subreddit = subreddits[Math.floor(Math.random()*(subreddits.length)-1)]
    let img = await api(subreddit)
    const Embed = new MessageEmbed()
    .setTitle(`Take a look at this meme from r/${subreddit}`)
    .setColor('RANDOM')
    .setImage(img)
    .setURL(`https://reddit.com/r/${Subreddit}`)
    message.channel.send(Embed)
    }
}
