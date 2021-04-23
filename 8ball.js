if (msg.includes(prefix + '8ball', '8b')){
    if (!args[1]){
        return message.channel.send(':8ball: What is your question? I shall answer it! :8ball:')

    }
    let number = Math.floor(Math.random() * 20); 
    if (number == 0){
        return message.channel.send(':8ball:``As I see it, yes.``:8ball:')
    }    
    if (number == 1){
        return message.channel.send(':8ball:``Ask again later.``:8ball:')
    }    
    if (number == 2){
        return message.channel.send(':8ball:``Better not tell you now.``:8ball:')
    }    
    if (number == 3){
        return message.channel.send(':8ball:``Cannot predict now.``:8ball:')
    }    
    if (number == 4){
        return message.channel.send(':8ball:``Concentrate and ask again.``:8ball:')
    }    
    if (number == 5){
        return message.channel.send(':8ball:``Don’t count on it.``:8ball:')
    }    
    if (number == 6){
        return message.channel.send(':8ball:``It is certain.``:8ball:')
    }    
    if (number == 7){
        return message.channel.send(':8ball:``It is decidedly so.``:8ball:')
    }    
    if (number == 8){
        return message.channel.send(':8ball:``Most likely.``:8ball:')
    }    
    if (number == 9){
        return message.channel.send(':8ball:``My reply is no.``:8ball:')
    }    
    if (number == 10){
        return message.channel.send(':8ball:``My sources say no.``:8ball:')
    }    
    if (number == 11){
        return message.channel.send(':8ball:``Outlook not so good.``:8ball:')
    }    
    if (number == 12){
        return message.channel.send(':8ball:``Outlook good.``:8ball:')
    }    
    if (number == 13){
        return message.channel.send('``Taking a nap :sleeping: ask later. kthx.``')
    }    
    if (number == 14){
        return message.channel.send(':8ball:``Signs point to yes.``:8ball:')
    }    
    if (number == 15){
        return message.channel.send(':8ball:``Very doubtful.``:8ball:')
    }    
    if (number == 16){
        return message.channel.send(':8ball:``Without a doubt.``:8ball:')
    }    
    if (number == 17){
        return message.channel.send(':8ball:``Yes.``:8ball:')
    }    
    if (number == 18){
        return message.channel.send(':8ball:``It is a definite yes for me.``:8ball:')
    }    
    if (number == 19){
        return message.channel.send(':8ball:``You shall rely on it.``:8ball:')
    }    


}