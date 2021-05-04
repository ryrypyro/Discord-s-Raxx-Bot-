// https://thecatapi.com/
// https://www.npmjs.com/package/axios


  
const axios = require('axios');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "cats/kitties",
    category: "animal",
    run: async (client, message, args) => {
        const url = "https://thecatapi.com/";
        const facts = "https://some-random-api.ml/facts/cat"

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
            .setTitle(`randomly generated cat facts and photos!`)
            .setColor(`#FF69B4`)

            .setDescription(pic.fact)
            .setImage(facts.link)

        await message.channel.send(embed)
    }
}


client.login('token here i think?')