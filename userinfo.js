//! const Command = require('../../Structures/Command'); 
// Max, i copied this "const command" part from the video because i do not know what files you are going to specifically import/export. pls fix this and make sure the cmds for this are 'user, 'userinfo, and 'ui. thx. 
const { MessageEmbed } = require('discord.js'); 
const moment = require('mo'); 
const prefix = "'"
const flags = {
    DISCORD_EMPLOYEE: 'Discord Employee',
	DISCORD_PARTNER: 'Discord Partner',
	BUGHUNTER_LEVEL_1: 'Bug Hunter (Level 1)',
	BUGHUNTER_LEVEL_2: 'Bug Hunter (Level 2)',
	HYPESQUAD_EVENTS: 'HypeSquad Events',
	HOUSE_BRAVERY: 'House of Bravery',
	HOUSE_BRILLIANCE: 'House of Brilliance',
	HOUSE_BALANCE: 'House of Balance',
	EARLY_SUPPORTER: 'Early Supporter',
	TEAM_USER: 'Team User',
	SYSTEM: 'System',
	VERIFIED_BOT: 'Verified Bot',
	VERIFIED_DEVELOPER: 'Verified Bot Developer'
}; 

module.exports = class extends Command {
    
    constructor(...args) {
        super(...args, {
            aliases: ['user', 'userinfo', 'ui']
    });
}

    async run(message, [target]) {
        const member = message.mentions.members.last() || message.guild.members.cache.get(target)
        const role = member.roles.cache
            .sort((a, b) => b.posotion - a.posotion)
            .map(role => role.toString())
            .slice(0, -1); 
        const userFlags = member.user.flags.toArray();
        const embed = new MessageEmbed()
            .setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 500 }))
            .setColor(member.displayHexColor || 'WHITE')
            .addField('User', [
                `**➤ Discord Name:** ${member.user.username}`, 
                `**➤ 4 Digit Tag:** ${member.user.discriminator}`,
                `**➤ ID:** ${member.id}`,
                `**➤ Discord Badges:** ${userFlags.length ? userFlags.map(flag => flags[flag]).join(',') : ':no_entry: ``User has no badges.``'}`,
                `**➤ Avatar:** [Avatar URL](${member.user.displayAvatarURL({ dynamic: true })})`,
                `**➤ Date Created:** ${moment(member.user.createdTimestamp).formate('LT')} ${moment(member.user.createdTimestamp).format('LL')} ${moment(moment.user.createdTimestamp).fromNow()}`,
                `**➤ Current Status:** ${member.user.presence.status}`,
                `**➤ Game Activity:** ${member.user.presence.game || ':no_entry: ``User is not playing a game.``'}`,
                `\u200b`
            ])
            .addField('Member', [
                `**➤ Top Role:** ${member.roles.highest.id === message.guild.id ? ':no_entry: ``User has no roles.``' : member.roles.highest.name}`,
                `**➤ Server Join Date:** ${moment(member.joinedAt).format('LL LTS')}`,
                `**➤ Hoist Role:** ${member.roles.hoist ? member.roles.hoist.name : ':no_entry: ``User is not staff in this server.``'}`,
                `**➤ Total Roles: [${roles.length}]:** ${role.length < 10 ? roles.join(', ') : roles.length > 10 ? this.client.utils.trimArray(roles) : ':no_entry: ``User has no roles.``'}`,
                `\u200b`
            ]);
            return message.channel.send(embed); 
    }
}; 