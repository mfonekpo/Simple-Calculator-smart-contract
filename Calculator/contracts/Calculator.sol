// SPDX-License-Identifier: ULICENSED

pragma solidity ^0.8.17;

// import "hardhat/console.sol";

contract Calculator{

    error DivisionByZero(string message, uint8 divisor);

    function Add(uint8 _numA, uint8 _numB) external pure returns(uint8 z){

        z = _numA + _numB;
    }

    function Subtract(uint8 numA, uint8 numB) external pure returns(uint8 z){

        z = numA - numB;
    }

    function Multiply(uint8 numA, uint8 numB) external pure returns(uint8 z){

        z = numA * numB;
    }

    function Divide(uint8 numA, uint8 numB) external pure returns(uint8 z) {

        if(numB == 0) revert DivisionByZero("Division by zer0", numB);
        z = numA / numB;
    }

}