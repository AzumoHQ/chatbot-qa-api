const context = require('../context');

module.exports.postSignUp = (body) => {
    return context.api
        .post(`/auth/signup`)
        .send(body)
};

module.exports.postLogin = (body) => {
    return context.api
        .post(`/auth/login`)
        .send(body)
};

module.exports.postValidateToken = (token) => {
    return context.api
        .post(`/auth/validateToken`)
        .send({token: token})
};

module.exports.postCreatePasswordReset = (body) => {
    return context.api
        .post(`/auth/createPasswordReset`)
        .send(body)
};

module.exports.postResetPassword = (body) => {
    return context.api
        .post(`/auth/resetPassword`)
        .send(body)
};

module.exports.postVerifyEmail = (body) => {
    return context.api
        .post(`/auth/verifyEmail`)
        .send(body)
};

module.exports.postChangePassword = (body) => {
    return context.api
        .post(`/auth/verifyEmail`)
        .send(body)
};