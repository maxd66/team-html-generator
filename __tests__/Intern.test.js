const { describe, expect, it } = require('@jest/globals');
const Intern = require('../lib/Intern');

describe('Intern', () => {
    describe('constructor', () => {
        it('should return an object with an additional school property', () => {
            const intern = new Intern('Sarah', 13, 'neverForgotten@bestDaughter.com', 'kiddo university');

            expect(intern).toHaveProperty('school', 'kiddo university');
        })
    })
    describe('methods', () => {
        it('should return name of school associated with object when getSchool is called', () => {
            const intern = new Intern('TARS', 365, 'funniestRobot@NASA.com', 'USMC Academy');

            expect(intern.getSchool()).toEqual('USMC Academy');
        })
        it('should return string intern when get role is called on intern object', () => {
            const intern = new Intern('CASE', 366, 'TARS_talksEnoughForBothOfUs@NASA.com', 'USMC Academy');

            expect(intern.getRole()).toEqual('Intern');
        })
    })
})

