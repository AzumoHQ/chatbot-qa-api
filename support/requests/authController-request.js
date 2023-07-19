const context = require('../context');

module.exports.postLogin = (credentials) => {
    return context.api
        .post(`/auth/login`)
        .send(credentials)
};

module.exports.postValidateToken = (token) => {
    return context.api
        .post(`/auth/validateToken`)
        .send({token: token})
};

