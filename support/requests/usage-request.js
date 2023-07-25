const context = require('../context');

module.exports.getUserUsage = (token) => {
    return context.api
        .get(`/usage`)
        .set('Authorization', `Bearer ${token}`)
};

module.exports.getUserUsageBillingCycle = (token) => {
    return context.api
        .get(`/usage`)
        .set('Authorization', `Bearer ${token}`)
};