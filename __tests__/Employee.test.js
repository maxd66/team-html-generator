// const { it } = require('@jest/globals');
// const { describe } = require('yargs');
const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe('constructor', () => {
        it('should return a constructor with name, id, and email properties', () => {
            // setup
            name = 'Jerry';
            id = 117;
            email = 'sony@playstation.com';
            const expected = {
                name: 'Jerry',
                id: 117,
                email: 'sony@playstation.com'
            };
            // assertion
            const employee = new Employee(name, id, email);
            // expectation
            expect(employee).toMatchObject(expected);
        })
    })
})