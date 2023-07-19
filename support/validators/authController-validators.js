const genericValidators = require('./generic-validators');

module.exports.verifyPostLogin = (response) => {
    genericValidators.checkStatusCode(response, 200);
    response.body.should.matchPattern(`{
        "token": String
    }`)
}

module.exports.verifyPostValidateToken = (response) => {
    genericValidators.checkStatusCode(response, 200);
    response.body.should.matchPattern(`{
        "valid": Boolean
    }`)
}
