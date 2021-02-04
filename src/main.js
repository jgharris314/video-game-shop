const faker = require('faker');
const _ = require('lodash');
const dataGen = require('./dataGeneration');


const customers = dataGen.generateCustomers();


const inventory = dataGen.genereateGames();


// I think we should restructure this to be more realistic.
function canTheyBuy (people, games) {
    for (let i in people) {
        const tempPerson = people[i]
        let {consolesOwned } = tempPerson;
        let affordableGames = games.filter( game => {return (game.priceInDollars <= tempPerson.budget) && (game.numberOfCopies > 0) });

        for (let j in affordableGames) {
            let tempGame = affordableGames[j];
            const {title, priceInDollars, consoles: publishedPlatform } = tempGame;
            if (publishedPlatform.some(console => consolesOwned.includes(console)) && priceInDollars <= tempPerson.budget) {
                tempGame.numberOfCopies --;
                tempPerson.buyGame(title, priceInDollars, tempGame.numberOfCopies);
            }
        };
    };
}

canTheyBuy(customers, inventory);

// Calculate sales 
console.log("");
// Simulate sales for a week to ensure we can store data correctly? Do we need a database at this point?