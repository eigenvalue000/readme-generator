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
            type: 'input',
            name: 'description',
            message: questions[1]
        },
    {
        type: 'input',
        name: 'tableOfContents',
        message: questions[2],
    },
{
    type: 'input',
    name: 'installation',
    message: questions[3],
}])
        .then((data) => writeToFile('README.md', gm(data)))
        .catch((err) => console.error(err));
}

// Function call to initialize app
init();
