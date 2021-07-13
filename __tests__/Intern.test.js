const { describe, expect } = require('@jest/globals');
const Intern = require('../lib/Intern');

describe('Intern', () => {
    describe('constructor', () => {
        it('should return an object with an additional school property', () => {
            const intern = new Intern('Sarah', 13, 'neverForgotten@bestDaughter.com', 'kiddo university')

            expect(intern).toHaveProperty('school', 'kiddo university')
        })
    })
})

