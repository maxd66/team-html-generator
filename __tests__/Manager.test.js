const { it, expect, describe } = require('@jest/globals');
const Manager = require('../lib/Manager');

describe('Manager', () => {
    describe('office number', () => {
        it('when the Manager object is created, it has an office number key with the given value in it', () => {
            const manager = new Manager('Jason Todd', 2, 'notdead@thxjokerandrahs.com', 6598);

            expect(manager).toHaveProperty('officeNumber', 6598)
        })
    })
    describe('role manager', () => {
        it('when getRole is called in Manager object, it returns manager', () => {
            const manager = new Manager('Tim Drake', 3, 'iFiguredItOut@whoIsBatman.com', 12);

            expect(manager.getRole()).toEqual('Manager');
        }) 
    })
})