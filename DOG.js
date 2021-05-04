
// https://www.npmjs.com/package/axios

const axios = require('axios');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "dogs/pups",
    category: "animal",
    run: async (client, message, args) => {
        const url = "https://some-random-api.ml/img/dog";
        const facts = "https://some-random-api.ml/facts/dog"

        let pic, response;
        let facts, responses;
        try {
            response = await axios.get(url);
            pic = response.data;

            responses = await axios.get(facts)
            facts = responses.data

        } catch (e) {
            return message.channel.send(`error 😳😳 I think you're doing something wrong.. 😏`)
        }

        const embed = new MessageEmbed()
            .setTitle(`randomly generated dog facts and photos!`)
            .setColor(`#00008B`)
            .setDescription(facts.fact)
            .setImage(pic.link)

        await message.channel.send(embed)
    }
}


client.login('token here i think?')