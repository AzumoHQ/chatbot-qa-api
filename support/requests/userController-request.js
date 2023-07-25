const context = require('../context');

module.exports.getMe = (token) => {
    return context.api
        .get(`/user/me`)
        .set('Authorization', `Bearer ${token}`)
};

module.exports.postCheckoutSession = (token, body) => {
    return context.api
        .post(`/user/checkoutSession`)
        .set('Authorization', `Bearer ${token}`)
        .send(body)
};

module.exports.postStartFreeTier = (token, body) => {
    return context.api
        .post(`/user/startFreeTier`)
        .set('Authorization', `Bearer ${token}`)
        .send(body)
};

module.exports.postfreeTierStatus = (token, body) => {
    return context.api
        .post(`/user/freeTierStatus`)
        .set('Authorization', `Bearer ${token}`)
        .send(body)
};