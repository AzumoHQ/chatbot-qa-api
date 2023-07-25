const context = require('../context');

module.exports.postFormPdfFile = (token) => {
    return context.api
        .post(`/datasources/pdf`)
        .set('Authorization', `Bearer ${token}`)
};

module.exports.postFormUrlCrawler = (token) => {
    return context.api
        .post(`/datasources/crawler`)
        .set('Authorization', `Bearer ${token}`)
};

module.exports.postRemoveData = (token) => {
    return context.api
        .post(`/datasources/remove`)
        .set('Authorization', `Bearer ${token}`)
};

module.exports.postAccountDataSources = (token) => {
    return context.api
        .get(`/datasources`)
        .set('Authorization', `Bearer ${token}`)
};
