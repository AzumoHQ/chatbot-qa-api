const genericValidators = require('./generic-validators');

module.exports.verifyGetMe = (response) => {
    genericValidators.checkStatusCode(response, 200);
    response.body.should.matchPattern(`{
        "_id": String,
        "email": String,
        "fullName": String,
        "companyName": String,
        "stripeCustomerId": String
    }`)
}

