// SPDX-License-Identifier: MIT

pragma solidity ^0.8.17;

//Use this calculator interface to test the codes on Remix IDE

interface ICalculator {
    function Add(uint8 _numA, uint8 _numB) external view returns(uint8 z);

    function Subtract(uint8 numA, uint8 numB) external view returns(uint8 z);

    function Multiply(uint8 numA, uint8 numB) external view returns(uint8 z);

    function Divide(uint8 numA, uint8 numB) external view returns(uint8 z);


}