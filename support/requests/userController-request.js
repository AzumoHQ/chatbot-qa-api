const context = require('../context');

module.exports.getMe = (token) => {
    return context.api
        .get(`/user/me`)
        .set('Authorization', `Bearer ${token}`)
};

