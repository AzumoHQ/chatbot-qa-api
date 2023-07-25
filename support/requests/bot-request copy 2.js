const context = require('../context');

module.exports.postConversation = (token, body) => {
    return context.api
        .post(`/api/conversation`)
        .set('Authorization', `Bearer ${token}`)
        .send(body)
};