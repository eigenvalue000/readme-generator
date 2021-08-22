// TODO: Include packages needed for this application
fs = include('fs');
inq = include('inquirer');
gm = include('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = ['Project Title : ', 'Description : ', 'Table of Contents : ', 'Installation : ', 'Usage : ', 'License : ', 'Contributing : ', 'Tests : ', 'Questions : '];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function() {});
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
