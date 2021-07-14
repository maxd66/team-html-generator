const fs = require("fs").promises;
const inquirer = require('inquirer');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const HTML = require('./HTML')

class CLI {
    constructor() {
        this.manager = null,
        this.engineers = [],
        this.interns = []
    }

    run() {
        console.log("=============Welcome to Team HTML Generator===============");
        this.promptManager();
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
                return this.promptWhichEmployee();
            })
    }

    promptWhichEmployee() {
        inquirer
            .prompt([
                {
                    name: 'whichEmployee',
                    message: 'Please select which type of employee you would like to add:',
                    type: 'list',
                    choices: ['Engineer', 'Intern', 'I would not like to include another employee']
                }
            ])
            .then(({ whichEmployee }) => {
                if (whichEmployee === 'Engineer') {
                    return this.promptEngineer();
                } else if(whichEmployee === 'Intern') {
                    return this.promptIntern();
                } else {
                    return done();
                }
            })
    }

    promptEngineer() {
        return inquirer
            .prompt([
                {
                    name: 'engineerName',
                    message: "Please enter your engineer's name:",
                    type: 'input',
                    // validate: function (engineerName) {(typeof engineerName == 'string' ? true : false)}
                },
                {
                    name: 'id',
                    message: "Please input this employee's ID number:",
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
                    name: 'github',
                    message: "Please input employee's GitHub username:",
                    type: 'input',
                    // validate: function (github) {(typeof github == 'number' ? true : false)}
                }
            ]).then(({ engineerName, id, email, github }) => {
                this.engineers.push(new Engineer(engineerName, id, email, github));
                return this.promptWhichEmployee();
            })
    }

    promptIntern() {
        return inquirer
        .prompt([
            {
                name: 'internName',
                message: "Please enter your interns's name:",
                type: 'input',
                // validate: function (internName) {(typeof internName == 'string' ? true : false)}
            },
            {
                name: 'id',
                message: "Please input this employee's ID number:",
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
                name: 'school',
                message: "Please input the school the employee is attending:",
                type: 'input',
                // validate: function (school) {(typeof school == 'number' ? true : false)}
            }
        ]).then(({ internName, id, email, school }) => {
            this.interns.push(new Engineer(internName, id, email, school));
            return this.promptWhichEmployee();
        })
    }

    done() {
        this.saveFile().then(() => console.log ('Your webpage has been generated!'))
    }

    saveFile() {
        fs.writeFile("dist/index.html", html.render())
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