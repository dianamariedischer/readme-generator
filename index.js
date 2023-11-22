// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    //Title
    {
        type: 'input',
        message: 'What is the title of your README?',
        name: 'title'
    },

    //Description
    {
        type: 'input',
        message: 'In a few sentences, describe your project.',
        name: 'description'
    },

    //Installation
    {
        type: 'input',
        message: 'How would a user install your project?',
        name: 'installation'
    },

    //Usage
    {
        type: 'input',
        message: 'Walk through the process of using your project.',
        name: 'usage'
    },

    //License
    {
        type: 'list',
        message: 'Which license are you using?',
        name: 'license',
        choices: ['Apache 2.0', 'GNU GPL v3', 'MIT', 'BSD 2-Clause', 'BSD 3-Clause', 'EPL 2.0', 'MPL 2.0', 'Unlicense']
    },
    
    //Contributing
    {
        type: 'input',
        message: 'List any contributors to the project.',
        name: 'contributors'
    },
    
    //Tests 
    {
        type: 'input',
        message: 'What are some tests for your project?',
        name: 'tests'
    },    

    //Questions
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username'
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email'
    },      
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}-README.md`, data, (err) =>
    err ? console.error(err) : console.log('README generated!')
);
}

// TODO: Create a function to initialize app
function init() {
    inquirer 
        .prompt(questions)
        .then((data) =>
            writeToFile(data.title, generateMarkdown(data))
        );
    
}

// Function call to initialize app
init();