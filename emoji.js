const {MessageEmbed} = require('discord.js')
module.exports={
    name:"Emojis", 
    description: "Take a look at all the emotes this server has to offer!", 
    category:"utility", 
    run: async(bot,message,args)=>{
        console.log("Emojis"); 
        let Emojis="";
        let EmojisAnimated = 0; 
        let EmojiCount = 0;
        let Animated = 0; 
        let OverallEmojis = 0; 
        function Emojis(id){
            return bot.emojis.cache.get(id).toString()
        }
        message.guild.emojis.cache.forEach(emoji=>{
            OverallEmojis++; 
            if(emoji.animated){
                Animated++; 
                EmojisAnimated+=Emojis(emoji.id)
            }else{
                EmojiCount++; 
                Emojis+=Emojis(emoji.id)
            }
        })  
        let Embed = new MessageEmbed()
        .setTitle(`Listed emoji's in ${message.guild.name}`)
        .setDescription(`**Animated Emoji's (Nitro Required) [${Animated}]**:\n${EmojisAnimated}\n\n}**Standard Emoji's [${EmojiCount}]**:\n${Emojis}\n\n**Total Emoji's [${OverallEmojis}]**`)
    }
}