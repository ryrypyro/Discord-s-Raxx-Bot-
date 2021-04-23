require('dotenv').config() 
// READ: INSTALL THESE PACKAGES: npm i discord.js, npm i ytdl-core, and npm i opusscript 

const {Client} = require('discord.js')
const ytdl = require('ytdl-core')
const PREFIX = '-'

const client = new Client({disableEveryone: true})

const queue = new Map()

client.on('ready', () => console.log('Active'))

client.on('message', async message => {
    if(message.author.bot) return 
    if(!message.content.startsWith(PREFIX)) return 

    const args = message.content.substring(PREFIX.length).split(" ")
    const serverQueue = queue.get(message.guild.id)

    if(message.content.startsWith(`${PREFIX}play`)) {
        const voiceChannel = message.member.voice.channel 
        if(!voiceChannel) return message.channel.send("baby, you need to actually BE in a voice chat to play music :speaker::musical_note: crazy, right??")
        const permissions = voiceChannel.permissionsFor(message.client.user)
        if(!permissions.has('CONNECT')) return message.channel.send("bruh tf? I don't have the permission to connect to this VC. Wack")
        if(!permissions.has('SPEAK')) return message.channel.send("baby, I don't have the permission to speak in this channel.. try a different one")
        
        const songInfo = await ytdl.getInfo(args[1])
        const song = {
            title: songInfo.title,  
            url: songInfo.video_url
        }

        if(!severQueue) {
            const queueConsruct = {
                textChannel: message.channel, 
                voiceChannel: voiceChannel, 
                connection: null, 
                songs: [], 
                volume: 5, 
                playing: true 
            }
            queue.set(message.guild.id, queueConsruct)
            queueConsruct.songs.push(song)

            try {
                var connection = await voiceChannel.join()
                queueConsruct.connection = connection
                play(message.guild, queueConsruct.songs[0])
                        } catch (error) {
                            console.log(`damn, I'm having difficulties connecting to the voice channel: ${error}`)
                            queue.delete(message.guild.id) 
                            return message.channel.send(`damn, I'm having difficulties connecting to the voice channel: ${error}`)
                        } 
        } else {
            serverQueue.songs.push(song)
            return message.channel.send(`**${song.title}** has successfully been added to the queue. Enjoy!`)
        }
        return undefined 

    } else if (message.content.startsWith(`${PREFIX}stop`)) {
        if(!message.member.voice.channel) return message.channel.send("hun, you need to be IN that voice channel to stop the music :speaker::musical_note:")
        if(!serverQueue) return message.channel.send("There's currently nothing playing in the vc..")
        serverQueue.songs = []
        serverQueue.connection.dispatcher.end()
        message.channel.send("Your music has been stopped <3")
        return undefined 
    } else if (message.content.startsWith(`${PREFIX}skip`)) {
        if(!message.member.voice.channel) return message.channel.send("Lol you know you need to be in a voice channel to skip a song?")
        if(!serverQueue) return message.channel.send("There is no music playing in the vc..")
        serverQueue.connection.dispatcher.end()
        message.channel.send("I have skipped your music for you hun")
        return undefined
    }
})
function play(guild, song) {
    const serverQueue = queue.get(guild.id)

    if(!song) {
        serverQueue.voiceChannel.leave()
        queue.delete(guild.id)
        return 
    }
    
    const dispatcher = serverQueue.connection.play(ytdl(song.url)) 
    .on('finish', () => {
        serverQueue.songs.shift()
        play(guild, serverQueue.songs[0])
    })
    .on('error', error => {
        console.log(error)
    })
    dispatcher.setVolumeLogarithmic(serverQueue.volume / 5)
}

client.login(process.env.TOKEN) // Your token here 