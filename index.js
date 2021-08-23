// TODO: Include packages needed for this application
fs = require('fs');
inq = require('inquirer');
gm = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = ['Project Title : ', 'Author : ', 'Copyright Year : ', 'Description : ', 'Add a table of contents? ', 'Installation : ', 'Usage : ', 'License : ', 'Contributing : ', 'Tests : ', 'Enter your GitHub username : ', 'Enter your developer email address : '];

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
            type: 'input',
            name: 'author',
            message: questions[1],
        },
        {
            type: 'input',
            name: 'year',
            message: questions[2],
        },
        {
            type: 'editor',
            name: 'description',
            message: questions[3]
        },
        {
            type: 'confirm',
            name: 'tableOfContents',
            message: questions[4],
        },
        {
            type: 'input',
            name: 'installation',
            message: questions[5],
        },
        {
            type: 'input',
            name: 'usage',
            message: questions[6],
        },
        {
            type: 'checkbox',
            name: 'license',
            message: questions[7],
            choices: ['GNU AGPLv3', 'GNU GPLv3',
                'Mozilla Public License 2.0', 'Apache License 2.0',
                'MIT License', 'Boost Software License 1.0',
                'The Unlicense'],
        },
        {
            type: 'input',
            name: 'contributing',
            message: questions[8],
        },
        {
            type: 'input',
            name: 'tests',
            message: questions[9],
        },
        {
            type: 'input',
            name: 'github',
            message: questions[10],
        },
        {
            type: 'input',
            name: 'email',
            message: questions[11],
        }])
        .then((data) => writeToFile('README_.md', gm(data)))
        .catch((err) => console.error(err));
}

// Function call to initialize app
init();
