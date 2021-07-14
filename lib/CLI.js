const inquirer = require('inquirer');
const Manager = require('./Manager');

class CLI {
    constructor() {
        this.manager = null,
        this.engineers = [],
        this.interns = []
    }

    run() {
        console.log("=============Welcome to Team HTML Generator===============");
        this.promptManager().then(() => this.promptWhichEmployee());
    }

    promptManager() {
        return inquirer
            .prompt([]).then()
    }
}
// Will:
// Use inquirer to prompt user for inputs 
//      Need: 
//          run method
//          promptManager, promptEngineer, promptIntern, promptWhichEmployee
//          constructor to hold manager object, and array of engineers and array of interns
//          saveFile method that calls function defined in HTML 
//          done method to call saveFile when user is done inputting workers
module.exports = CLI;