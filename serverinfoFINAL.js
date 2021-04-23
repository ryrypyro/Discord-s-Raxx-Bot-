/* const Command = require('../..Structures/Command'); 
const { MessageEmbed } = require('discord.js')
const moment = require('moment') (package that helps format time) */ 
//! Max, the consts on the top of this text were in the video so that's why i commented them out, they're the only things you should change, the code below this line should be fine! :) 
const filterLevels = {
	DISABLED: 'Off',
	MEMBERS_WITHOUT_ROLES: 'No Role',
	ALL_MEMBERS: 'Everyone'
};
const verificationLevels = {
	NONE: '(✿◠‿◠) None',
	LOW: 'ヽ(•‿•)ノ Low',
	MEDIUM: '(ಠ_ಠ) Medium',
	HIGH: '(╯°□°）╯︵ ┻━┻ High',
	VERY_HIGH: 'ヽ(ಠ益ಠ)ノ Very High'
};
const regions = {
	brazil: 'Brazil',
	europe: 'Europe',
	hongkong: 'Hong Kong',
	india: 'India',
	japan: 'Japan',
	russia: 'Russia',
	singapore: 'Singapore',
	southafrica: 'South Africa',
	sydney: 'Sydney',
	'us-central': 'US Central',
	'us-east': 'US East',
	'us-west': 'US West',
	'us-south': 'US South'
};

module.exports = class extends Command {
    constructor(...args) {
        super(...args, {
            aliases: ['server', 'serverinfo', 'guild']
        });
    }
    async run(message) {
        const roles = message.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString());
        const members = message.guild.members.cache;
        const channels = message.guild.channels.cache;
        const emojis = message.guild.emojis.cache;

        const embed = new MessageEmbed()
            .setDescription(`**Server Info for __${message.guild.name}__**`)
            .setColor('RED')
            .setThumbnail(message.guild.iconURL({ dynamic: true }))
            .addField('General', [
                `**➤ :name_badge: Server Name:** ${message.guild.name}`, 
                `**➤ :id: ID:** ${message.guild.id}`, 
                `**➤ :crown: Owner:** ${message.guild.owner.user.tag} (${message.guild.ownerID})`, 
                `**➤ :earth_americas: Region of Server:** ${regions[message.guild.region]}`, 
                `**➤ Boost Tier:** ${message.guild.premiumTier ? `Tier ${message.guild.premiumTier}` : 'Server has no boosts'}`, 
                `**➤ :face_with_symbols_over_mouth :Explicit Filter:** ${filterLevels[message.guild.explicitContentFilter]}`, 
                `**➤ :white_check_mark: Verification Level:** ${verificationLevels[message.guild.verificationLevel]}`, 
                `**➤ :clock12: Date Created:** ${moment(message.guild.createdTimestamp).format('LT')} ${moment(message.guild.createdTimestamp).fomrat('LL')} ${moment(message.guild.createdTimestamp).fromNow()}`, 
                '\u200b'
            ])
            .addField('Statistics', [
                `**➤ Role Count:** ${roles.length}`,
                `**➤ Emoji Count:** ${emojis.size}`,
                `**➤ Regular Emoji Count:** ${emojis.filter(emoji => !emoji.animaed).size}`,
                `**➤ Animted Emoji Count:** ${emojis.filter(emoji => emoji.animaed).size}`,
                `**➤ :busts_in_silhouette: Member Count:** ${message.guild.memberCount}`,
                `**➤ :family_mwgb: Humans:** ${members.filter(member => !member.user.bot).size}`,
                `**➤ :robot: Bots:** ${members.filter(member => member.user.bot).size}`,
                `**➤ :hash: Text Channels:** ${channels.filter(channel => channel.type === 'text').size}`,
                `**➤ :loud_sound: Voice Channels:** ${channels.filter(channel => channel.type === 'voice').size}`,
                `**➤ Boost Count:** ${message.guild.premiumSubscriptionCount || 'Server has no boosts'}`,
                '\u200b'
            ])
            .addField('Presence', [
                `**➤ :green_circle: Online:** ${members.filter(member => member.presence.status === 'online').size}`,
                `**➤ :orange_circle: Idle:** ${members.filter(member => member.presence.status === 'idle').size}`,
                `**➤ :red_circle: DND:** ${members.filter(member => member.presence.status === 'dnd').size}`,
                `**➤ :zzz: Offline/Invisible:** ${members.filter(member => member.presence.status === 'offline').size}`,
                '\u200b'
            ])
            .addField(`Roles [${roles.length - 1}]`, roles.length < 10 ? roles.join(', ') : roles.length > 10 ? this.client.utils.trimArray(roles) : 'There are no roles in this server.')
            .setTimestamp(); 
            message.channel.send(embed)
        }
    
};