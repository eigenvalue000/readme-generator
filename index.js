// TODO: Include packages needed for this application
fs = require('fs');
inq = require('inquirer');
gm = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = ['Project Title : ', 'Description : ', 'Table of Contents : ', 'Installation : ', 'Usage : ', 'License : ', 'Contributing : ', 'Tests : ', 'Questions : '];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function () { });
}

// TODO: Create a function to initialize app
function init() {
    inq.prompt([
        {
            type: 'input',
            name: 'title',
            message: questions[0],
        },
        {
            type: 'editor',
            name: 'description',
            message: questions[1]
        },
        {
            type: 'editor',
            name: 'tableOfContents',
            message: questions[2],
        },
        {
            type: 'input',
            name: 'installation',
            message: questions[3],
        },
        {
            type: 'input',
            name: 'usage',
            message: questions[4],
        },
        {
            type: 'checkbox',
            name: 'license',
            message: questions[5],
            choices: ['license1', 'license2', 'license3'],
        },
        {
            type: 'input',
            name: 'contributing',
            message: questions[6],
        },
        {
            type: 'input',
            name: 'tests',
            message: questions[7],
        },
    {
        type: 'input',
        name: 'questions',
        message: questions[8],
    }])
        .then((data) => writeToFile('README.md', gm(data)))
        .catch((err) => console.error(err));
}

// Function call to initialize app
init();
