const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
console.log(generateMarkdown);

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is your github username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile("README.md", data, err => {
        if (err) throw err;
        console.log("Successfully made!");
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
        console.log(answers);
        var template = generateMarkdown(answers);
        console.log(template);
        writeToFile(template);
    })
}

// Function call to initialize app
init();
