const context = require('../context');

module.exports.postBotConversation = (token, body) => {
    return context.api
        .post(`/bot/conversation`)
        .set('Authorization', `Bearer ${token}`)
        .send(body)
};