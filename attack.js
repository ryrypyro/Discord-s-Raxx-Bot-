if (msg.includes(prefix + 'attack')){
    let user = message.mentions.users.first(); 
    if (!user){
        return message.channel.send('Who would you like to attack?')
    }
    let random = Math.floor(Math.random() * 206) 
    let number = Math.floor(Math.random() * 5)
    if (number == 0){
        return message.channel.send(message.author.username + ' pummeled' + user.username + ' and shattered all their teeth. Have fun eating!')
    }    
    if (number == 1){
        return message.channel.send(message.author.username + ' uppercut' + user.username + ' and broke their jaw.')
    }    
    if (number == 2){
        return message.channel.send(message.author.username + ' knocked out' + user.username + ' then stole their wallet lol')
    }    
    if (number == 3){
        return message.channel.send(message.author.username + ' whacked' + user.username + ' with a baguette.')
    }    
    if (number == 4){
        return message.channel.send(message.author.username + ' body-slammed' + user.username + ' and broke' + random + ' of their bones')
    }    
    if (number == 5){
        return message.channel.send(message.author.username + ' thwacked' + user.username + ' in the forehead and gave them amnesia lol')
    } 
}