const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const {expect} = require("chai");
const {hre} = require("hardhat");

describe("Testing Calculator", function(){

    async function Reuseable(){
        const Calculator = await ethers.getContractFactory("Calculator");
        const calculator = await Calculator.deploy();
        return{calculator};
    }

    describe("Addition function", function(){
        it("Should sum two numbers", async function(){
            const {calculator} = await loadFixture(Reuseable);
            expect (await calculator.Add(2, 2)).to.equal(4);
        });
    });

    describe("Subtraction function", function(){
        it("should subtract two numbers", async function(){
            const {calculator} = await loadFixture(Reuseable);
            expect (await calculator.Subtract(5, 3)).to.equal(2);
        });
    });

    describe("Multiplication function", function(){
        it("should multiply two numbers", async function(){
            const {calculator} = await loadFixture(Reuseable);
            expect(await calculator.Multiply(5, 3)).to.equal(15);
        });
    });

    describe("Division function", function(){
        it("should divide two numbers", async function(){
            const {calculator} = await loadFixture(Reuseable);
            expect(await calculator.Divide(6, 3)).to.equal(2);
        });
    });

});