// SPDX-License-Identifier: MIT
pragma solidity ^0.7.5;

import "./Crowdsale.sol";

contract MyTokenSale is Crowdsale {
	// KycContract kyc;

	constructor(uint256 rate, address payable wallet, IERC20 token) Crowdsale(rate, wallet, token) public {

	}
}