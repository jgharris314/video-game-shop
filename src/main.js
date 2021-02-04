let faker = require('faker');
let _ = require('lodash');

let saleID = 150;

let records = {};

function findCustomers() {
    let customerList = [];
    for (let x = 0; x < 100; x++) {
        customerList.push({ 
            firstName : faker.name.firstName(),
            lastName : faker.name.lastName(),
            consolesOwned : _.shuffle(["PC", "Xbox", "Playstation"]).slice(0, Math.floor(Math.random()*3)+1 ),
            budget : Math.floor(Math.random()*250),
            gamesOwned : [],
            buyGame : function(title, price, leftoverQuantity) {
                this.gamesOwned.push(title);
                this.budget -= price;
                records[saleID] = {
                    customer: `${this.firstName} ${this.lastName}`,
                    game: title,
                    total: price,
                    leftover_inventory: leftoverQuantity
                }
                saleID++;
            }
        });
    }
    return customerList;
}
const customers = findCustomers();

function genereateGames() {
    let inventory = [];

    for (let i = 0; i < 100; i++){
        inventory.push({
            title : `${faker.random.words(Math.floor(Math.random()*3) + 1)} ${Math.floor(Math.random()*9) + 1}`,
            consoles : _.shuffle(["PC", "Xbox", "Playstation"]).slice(0, Math.floor(Math.random()*3) + 1),
            priceInDollars : Math.floor(Math.random()*75) + 25,
            numberOfCopies : Math.floor(Math.random()*20) + 1
        });
    }
    return inventory;
}
const inventory = genereateGames();


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