const giveMeAJoke = require('discord-jokes') // max, you gotta do npm i discord-jokes in the terminal to be able to fetch the jokes.
const giveMeAJoke2 = require('random-joke-getter') // max, you gotta do npm i random-joke-getter in the terminal to be able to fetch the jokes.
const giveMeAJoke3 = require('random-jokes-gen') // max, you gotta do npm i random-jokes-gen in the terminal to be able to fetch the jokes.
const giveMeAJoke4 = require('yo-mamma') // max, you gotta do npm i yo-mamma in the terminal to be able to fetch the jokes.

const settings = {
    prefix: "'"
}
client.on('message', async message => {
    if (message.content === "'joke") {
        giveMeAJoke.getRandomDadJoke(function (joke) {
            message.channel.send(joke)
        })
    }

    if (message.content === "'joke") {
        giveMeAJoke2.RandomJokesGetter(function (joke) {
            message.channel.send(joke)
        })
    }
    if (message.content === "'joke") {
        giveMeAJoke3.RandomJokesGetter2(function (joke) {
            message.channel.send(joke)
        })
    }
    if (message.content === "'momjoke") {
        giveMeAJoke4.MomJokeGetter(function (joke) {
            message.channel.send(joke)
        })
    }
}); 