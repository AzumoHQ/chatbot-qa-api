const userControllerRequests = require('../../../support/requests/userController-request');
const userControllerValidators = require('../../../support/validators/userController-validators');
const context = require('../../../support/context')

describe('User API\'s tests', () => {

    it('Get me', async () => {
        const response = await userControllerRequests.getMe(context.usrToken);
        userControllerValidators.verifyGetMe(response);
    });

});

