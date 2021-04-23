const covidApi = require('covidapi')    // max, do npm i covidapi to download the packages for raxxbot for covid. thx.

client.on('message', async message => {
if (message.content === "'covid all") {
    const data = await api.all()
    const coronaembed = new Discord.MessageEmbed() 
    .setColor("RANDOM")
    .addField(":thermometer_face: Cases", data.casess)
    .addField(":skull: Deaths", data.deaths)
    .addField(":medical_symbol: Recovered", data.recovered)
    message.channel.send(coronaembed)
}
}); 