// TODO: Include packages needed for this application
fs = include('fs');
inq = include('inquirer');
gm = include('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = ['Project Title : ', 'Description : ', 'Table of Contents : ', 'Installation : ', 'Usage : ', 'License : ', 'Contributing : ', 'Tests : ', 'Questions : '];
const questionNames = ['title', 'description', 'toc', 'installation', 'usage', 'license', 'contributing', 'tests', 'questions'];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function() {});
}

// TODO: Create a function to initialize app
function init() {
    inq.prompt([
        {
            type: 'input',
            name: questionNames[0],
            message: questions[0],
        },{},{},{},{},{},{},{},{}])
    .then((data) => writeToFile('README.md', data))
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();
