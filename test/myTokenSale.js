const Token = artifacts.require("MyToken");
const TokenSale = artifacts.require("MyTokenSale");

const chai = require("./chaisetup.js");
const BN = web3.utils.BN;
const expect = chai.expect;

contract("TokenSale", async function(accounts) {
	const [ initialHolder, recipient, anotherAccount ] = accounts;

	it("there shouldn't be any coins in my account", async () => {
		let instance = await Token.deployed();
		return expect(instance.balanceOf.call(initialHolder)).to.eventually.be.a.bignumber.equal(new BN(0));
	}) 

	it("all coins should be in the tokensale smart contract", async () => {
		let instance = await Token.deployed();
		let balance = await instance.balanceOf.call(TokenSale.address);
		let totalSupply = await instance.totalSupply.call();
		//This checks if the TokenSale contracts' balance is equal to the totalsupply set by the Token contract
		//If everything by the Token Contract was sent then the TokenSale contracts balance should equal total supply, in this case 1,000,000,000
		return expect(balance).to.be.a.bignumber.equal(totalSupply);
	});

	it("should be possible to buy one token by simply sending ether to the smart contract", async () => {

	})
})