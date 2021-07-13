const { it, expect, describe } = require('@jest/globals');
const Manager = require('../lib/Manager');

describe('Manager', () => {
    describe('office number', () => {
        it('when the Manager object is created, it has an office number key with the given value in it', () => {
            const manager = new Manager('Jason Todd', 2, 'notdead@thxjokerandrahs.com', 6598);

            expect(manager).toHaveProperty('officeNumber', 6598)
        })
    })
})