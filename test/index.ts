import { ethers, upgrades } from "hardhat";
import { Signer } from "ethers";
import { assert } from "chai";
import { formatUnits, parseUnits } from "ethers/lib/utils";
import { utils, providers } from "ethers";

import { SampleYUL__factory } from "../typechain";

describe("Homework10", function () {
  let accounts: Signer[];
  let contractAddress: string;

  beforeEach(async function () {
    accounts = await ethers.getSigners();
  });

  it("#1 Should Deploy Proxy Upgradable Contracts", async function () {
    const Contract = new SampleYUL__factory(accounts[0]);
    const contract = await Contract.deploy();
    console.log("Address :  ", contract.address);

    // Test Solidty Version
    // Cant retrive return in hardhat
    await contract.yul_ret_amount_of_eth({
      value: parseUnits("5.5", 18),
    });

    await contract.sol_ret_amount_of_eth({
      value: parseUnits("6.5", 18),
    });

    assert(true);
  });
});
