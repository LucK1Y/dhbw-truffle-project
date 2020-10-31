const PadlockToken = artifacts.require("PadlockToken");

contract("PadlockToken", (accounts) => {
  const alice = accounts[0];
  const bob = accounts[1];
  const carol = accounts[2];
  const daniel = accounts[3];


  let newPadlock;
  let instance;

  beforeEach(async () => {
    instance = await PadlockToken.deployed();
  });

  it("should keychain be empty", async () => {
    assert.equal(typeof(await instance.keychain), "function", "Keychain should be array");
    assert.equal(await instance.keychain.length, 0, "Keychain should be empty");

  });

  it("should create new PadlockToken", async () => {
    const  tx= await instance.createToken();

    assert.equal(tx.receipt.status, true, "transcation should run through");
 
  });

  it("should have correct values", async () => {

  });
});
