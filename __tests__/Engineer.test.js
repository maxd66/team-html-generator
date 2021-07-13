const { describe, it, expect } = require('@jest/globals')
const Engineer = require('../lib/Engineer')

describe('Engineer', () => {
    describe('constructor', () => {
        it('should return an object with additional property github', () => {
            const engineer = new Engineer('Damien Wayne', 4, 'worstSon@batmanIsMyDad.com', 'bad_coder')

            expect(engineer).toHaveProperty('github', 'bad_coder')
        })
    })
})