const expect = require("chai").expect;
const mainFunctions = require("../src/main");

describe("Sales Report, by day", () => {

    describe("Revenue", () => {
        it("should display the total revenue")
        // function to add all total sales

        it("should display the total revenue by platform")
        // function to add all sales, grouped by platform
    })
    
    describe("Games Sold", () => {
        it("should display total number of games sold")
        // self explanatory
 
        it("should display total game sales for each platform")
        // self explanatory grouped by platform
    })
    

    describe("Customers", () => {
        it("should display who spent the most money")
        // function to get customer with highest purchase amount

        it("should display percentage of total customers who waste our marketing")
        // function to calculate percentage of freeloaders
    })

    describe("Per Genre", () => {
        it("should display the total sale for each genre")
        // function to add all sales, grouped by genre sorted by sale <---helper function from total by platform?
        
        it("should sort it by sale value")
        // could be the same function 
    })
    
    describe("Averages", () => {
        it("should display the average number of game sales per customer")
        // calculate number of games sold divided by total customers

        it("should display the average revenue spent per customer")
        // function to calculate average money spent by customer
    })
    
})