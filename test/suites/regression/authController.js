const authControllerRequests = require('../../../support/requests/authController-request');
const authControllerValidators = require('../../../support/validators/authController-validators')
const context = require('../../../support/context')

describe('Authentication API\'s tests', () => {

    it('Post user login', async () => {
        const response = await authControllerRequests.postLogin(context.data);
        authControllerValidators.verifyPostLogin(response);
        context.usrToken = response.body.token;
    });
    
    it('Post validate user token', async () => {
        const response = await authControllerRequests.postValidateToken(context.usrToken);
        authControllerValidators.verifyPostValidateToken(response);
    });

    //TODO: Verify Email => We could query DB and get the hash to verify email and test the api.



});

