// These packages are required to run this program.
fs = require('fs');
inq = require('inquirer');
gm = require('./utils/generateMarkdown');

// This is an array of questions to be used in the prompt.
const questions = ['Project Title : ', 'Author : ', 'Copyright Year : ', 'Description : ', 'Add a table of contents? ', 'Installation : ', 'Usage : ', 'License : ', 'Contributing : ', 'Tests : ', 'Enter your GitHub username : ', 'Enter your developer email address : '];

// This function takes in a file name and a data set
// and writes this to a file.
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function () { });
}

// This init function runs the prompt, then writes the input
// to the README.md file.
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
