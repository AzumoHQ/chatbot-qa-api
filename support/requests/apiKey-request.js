const context = require('../context');

module.exports.getUserApiKey = (token) => {
    return context.api
        .get(`/apikeys`)
        .set('Authorization', `Bearer ${token}`)
};

module.exports.postUserApiKey = (body) => {
    return context.api
        .post(`/apikeys`)
        .set('Authorization', `Bearer ${token}`)
        .send(body)
};

module.exports.deleteUserApiKey = (apiKeyId) => {
    return context.api
        .delete(`/apikeys/${apiKeyId}`)
        .set('Authorization', `Bearer ${token}`)
};