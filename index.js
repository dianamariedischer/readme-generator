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
        choices: ['Apache 2.0 License', 'GNU GPL v3', 'MIT License', 'BSD 2-Clause License', 'BSD 3-Clause License', 'Boost Software License 1.0', 
        'CC0', 'Eclipse Public License 2.0', 'GNU AGPL v3', 'GNU GPL v2', 'GNU LGPL v3', 'Mozilla Public License 2.0', 'The Unlicense']
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
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}.md`, data, (err) =>
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