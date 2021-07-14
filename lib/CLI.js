const fs = require("fs").promises;
const inquirer = require('inquirer');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern')
const HTML = require('./HTML')
const html = new HTML()
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
                    type: 'input'
                },
                {
                    name: 'id',
                    message: "Please input this user's ID number:",
                    type: 'input'
                },
                {
                    name: 'email',
                    message: "Please input the employee's email address:",
                    type: 'input'
                },
                {
                    name: 'officeNumber',
                    message: "Please input employee's office number:",
                    type: 'input'
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
                    return this.done();
                }
            })
    }

    promptEngineer() {
        return inquirer
            .prompt([
                {
                    name: 'engineerName',
                    message: "Please enter your engineer's name:",
                    type: 'input'
                },
                {
                    name: 'id',
                    message: "Please input this employee's ID number:",
                    type: 'input'
                },
                {
                    name: 'email',
                    message: "Please input the employee's email address:",
                    type: 'input',
                },
                {
                    name: 'github',
                    message: "Please input employee's GitHub username:",
                    type: 'input',
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
                type: 'input'
            },
            {
                name: 'id',
                message: "Please input this employee's ID number:",
                type: 'input'
            },
            {
                name: 'email',
                message: "Please input the employee's email address:",
                type: 'input'
            },
            {
                name: 'school',
                message: "Please input the school the employee is attending:",
                type: 'input'
            }
        ]).then(({ internName, id, email, school }) => {
            this.interns.push(new Intern(internName, id, email, school));
            return this.promptWhichEmployee();
        })
    }

    done() {
        this.saveFile().then(() => console.log ('Your webpage has been generated!'))
    }

    saveFile() {
        return fs.writeFile("dist/index.html", html.render(this.manager, this.engineers, this.interns))
    }
}

module.exports = CLI;