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
            .prompt([
                {
                    name: 'managerName',
                    message: "Please enter your manager's name:",
                    type: 'input',
                    // validate: function (managerName) {(typeof managerName == 'string' ? true : false)}
                },
                {
                    name: 'id',
                    message: "Please input this user's ID number:",
                    type: 'input',
                    // validate: function (id) {(typeof id == 'number' ? true : false)}
                },
                {
                    name: 'email',
                    message: "Please input the employee's email address:",
                    type: 'input',
                    // validate: function (email) {
                    //     if(email.includes('@') && email.includes('.')) {
                    //         return true
                    //     }else {
                    //         return false
                    //     }
                    // }
                },
                {
                    name: 'officeNumber',
                    message: "Please input employee's office number:",
                    type: 'input',
                    // validate: function (officeNumber) {(typeof officeNumber == 'number' ? true : false)}
                }
            ]).then(({ managerName, id, email, officeNumber }) => {
                this.manager = new Manager(managerName, id, email, officeNumber);
                console.log (this.manager);
            })
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