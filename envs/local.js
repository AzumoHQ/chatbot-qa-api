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
    context.hostname = 'http://localhost:1338';
    context.api = supertest(context.hostname);
    context.data = data;
    context.chance = new Chance();
})

