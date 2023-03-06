// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract SimpleStorage {
  uint256 value;
  string greeter;

  event valueChanged(uint _val);

  function read() public view returns (uint256) {
    return value;
  }

  function write(uint256 newValue) public {
    value = newValue;

    emit valueChanged(newValue);
  }

  function getGreeter() public view returns (string memory) {
    return greeter;
  }

  function setGreeter(string memory _greeter) public {
    greeter = _greeter;
  }
}
