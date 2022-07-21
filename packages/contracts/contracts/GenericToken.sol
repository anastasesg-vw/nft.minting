//SPDX-License-Identifier: Unlicense

pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

interface IGenericToken is IERC20 {
    function mint(address to, uint256 amount) external;
}

contract GenericToken is IGenericToken, ERC20Burnable, Ownable {
    constructor() ERC20("GenericToken", "GTKN") {}

    function mint(address to, uint256 amount) public override onlyOwner {
        _mint(to, amount);
    }
}
