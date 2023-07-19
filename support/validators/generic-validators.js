module.exports.checkStatusCode = (response, code) => {
    response.status.should.equal(code)
}

