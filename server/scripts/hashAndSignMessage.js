const { keccak256 } = require("ethereum-cryptography/keccak");
const { utf8ToBytes, toHex } = require("ethereum-cryptography/utils");
const secp = require("ethereum-cryptography/secp256k1");
(async () => {
    const PRIVATE_KEY = "74f4cd449c047999456528ba339a2c32eb12e2c9d3ba6b4708a2b12d242c40a6";
    let message = {
        from: "0x4717d36ac94067dd722c7c9129f89ddf2f58076e3cf7da18161771d3325ee87f",
        to: "0x9c27ac0f223616fa705dbdedf7b5524a126273b674441b038e21672823028bf1",
        amount: 10,
    };
    console.log("Message : ", message);

    const messageHash = toHex(keccak256(utf8ToBytes(JSON.stringify(message))));
    console.log("Hashed Message : ", messageHash);

    const [sig, recoveryBit]  = await secp.sign(messageHash, PRIVATE_KEY, {recovered: true});
    console.log("Signature : ", toHex(sig));
    console.log("Recovery Bit : ", recoveryBit);


})();
