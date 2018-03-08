alert("1");

var $ = require('jquery');

alert("2");

var Web3 = require('web3');

alert("3");

//var Web3 = require('../index.js');
var web3 = new Web3();

alert("4");

web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));

var coinbase = web3.eth.coinbase;
console.log(coinbase);

var balance = web3.eth.getBalance(coinbase);
console.log(balance.toString(10));

alert("5");
/*
var account = 0xf9649D501739274754E6a263A2e98F8774cf54A2;

var balanceWei = web3.eth.getBalance(account).toNumber();
var balance = web3.fromWei(balanceWei, 'ether');

alert(balance);
*/