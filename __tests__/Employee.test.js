// const { it } = require('@jest/globals');
// const { describe } = require('yargs');
const { it, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe('constructor', () => {
        it('should return a constructor with name, id, and email properties', () => {
            // setup
            const name = 'Jerry';
            const id = 117;
            const email = 'sony@playstation.com';
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
        it('when getName is called, method returns name of associated oject', () => {
            const employee = new Employee('Rick', 25, 'sony@playstation.com')

            const empName = employee.getName();

            expect(empName).toEqual('Rick');  
        })
    })
})