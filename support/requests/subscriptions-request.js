const context = require('../context');

module.exports.getUserSubscription = (token) => {
    return context.api
        .get(`/subscription`)
        .set('Authorization', `Bearer ${token}`)
};

module.exports.deleteSubscription = (token, subscriptId) => {
    return context.api
        .delete(`/subscription/${subscriptId}/cancel`)
        .set('Authorization', `Bearer ${token}`)
};

module.exports.postReactiveSubscription = (token, subscriptId) => {
    return context.api
        .post(`/subscription/${subscriptId}/reactivate`)
        .set('Authorization', `Bearer ${token}`)
};
