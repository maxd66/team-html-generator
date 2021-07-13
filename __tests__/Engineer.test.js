const { describe, it, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    describe('constructor', () => {
        it('should return an object with additional property github', () => {
            const engineer = new Engineer('Damien Wayne', 4, 'worstSon@batmanIsMyDad.com', 'bad_coder');

            expect(engineer).toHaveProperty('github', 'bad_coder');
        })
    })
    describe('getGithub', () => {
        it('should return the objects github user name when getGithub is called', () => {
            const engineer = new Engineer('Joel', 46, 'joel@ya;hoo.com', 'dad_coder')

            expect(engineer.getGithub()).toEqual('dad_coder');
        })
    })
    describe('getRole', () => {
        it('should return the string Engineer when getRole is called on engineer object', () => {
            const engineer = new Engineer('Ellie', 13, 'brattyGirl@gmail.com', 'second_kiddo_coder')

            expect(engineer.getRole()).toEqual('Engineer');
        })
    })
})