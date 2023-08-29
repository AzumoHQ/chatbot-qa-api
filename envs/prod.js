require('colors');
const supertest = require('supertest');
const context = require('../support/context');
const chai = require('chai');
const should = chai.should();
const chaiJsonPattern = require('chai-json-pattern').default;
chai.use(chaiJsonPattern);
const data = require('../support/data/data-local');
const Chance = require('chance');

before(function() {
    console.log('     Using LOCAL environment     '.black.bgWhite);
    // COMMENTED BECAUSE WE DON'T WANT THIS EXECUTED IN PROD UNTIL WE TAKE EVERYTHING IN COUNT SINCE IT HAS BILLING FUNCTIONALITIES
    // context.hostname = 'https://charli-server.azumo.com';
    context.api = supertest(context.hostname);
    context.data = data;
    context.chance = new Chance();
})

