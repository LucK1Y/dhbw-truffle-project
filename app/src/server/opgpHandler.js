// IMPORTS PGP
const keyStore = require("../resourcen/pgp_testVals");

function verifySignature(cleartext,pubk) {
    return (async () => {

        const verified = await openpgp.verify({
            message: await openpgp.cleartext.readArmored(cleartext),           // parse armored message
            publicKeys: (await openpgp.key.readArmored(pubk)).keys // for verification
        });
        const { valid } = verified.signatures[0];
        if (valid) {
            console.log('signed by key id ' + verified.signatures[0].keyid.toHex());
            //TO-DO Check if verified.signatures[0].keyid.toHex()) == token_owner
        } else {
            // throw new Error('signature could not be verified');
            return false;
        }
        return true;
    })
}
module.exports = {
    verifySignature: verifySignature
}