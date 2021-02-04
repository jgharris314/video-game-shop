// initial imports
const faker = require('faker');
const _ = require('lodash');

// generate customers creates a list of customer objects with random data
let saleID = 150;
let records = {};

function generateCustomers() {
  let customerList = [];
  for (let x = 0; x < 100; x++) {
    customerList.push({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      consolesOwned: _.shuffle(["PC", "Xbox", "Playstation"]).slice(
        0,
        Math.floor(Math.random() * 3) + 1
      ),
      budget: Math.floor(Math.random() * 250),
      gamesOwned: [],
      buyGame: function (title, price, leftoverQuantity) {
        this.gamesOwned.push(title);
        this.budget -= price;
        records[saleID] = {
          customer: `${this.firstName} ${this.lastName}`,
          game: title,
          total: price,
          leftover_inventory: leftoverQuantity,
        };
        saleID++;
      },
    });
  }
  return customerList;
}

// generateGames creates a list of game objects with random data

function generateGames() {
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

function getSaleId() {
  return saleID;
}

function getSales() {
  return records;
}

module.exports = {generateCustomers, generateGames, getSaleId, getSales};