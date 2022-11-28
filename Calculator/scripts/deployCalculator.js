const hre = require("hardhat");

async function main(){

  const Calculator = await hre.ethers.getContractFactory("Calculator");
  const calculator = await Calculator.deploy();

  await calculator.deployed();

  console.log(`Calculator contract deployed to: ${calculator.address}`);


}

main().catch((error) =>{
  console.error(error);
  process.exitCode = 1;
});

