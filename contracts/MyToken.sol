// SPDX-License-Identifier: MIT
pragma solidity ^0.7.5;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {
	constructor(uint256 initialSupply) ERC20("GreenFrog Frog-Token", "GFT") public {
		_mint(msg.sender, initialSupply);
		// default decimal point is 18, we can change it to zero with the following function
		_setupDecimals(0);
	}
}