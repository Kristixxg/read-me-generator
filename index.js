// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
      {
        type: 'input',
        message: 'Please enter project title',
        name: 'title',
      },
      {
        type: 'input',
        message: 'Please enter description of the project',
        name: 'description',
      },
      {
        type: 'input',
        message: 'What are the required installations?',
        name: 'installation',
      },
      {
        type: 'input',
        message: 'what are the usage?',
        name: 'usage',
      },
      {
        type: 'list',
        message: 'Please select a license',
        name: 'license',
        choices: ['MIT','xxx', 'xxxx']
      },
      {
        type: 'input',
        message: 'Please enter contributors',
        name: 'contributor',
      },
      {
        type: 'input',
        message: 'What are the tests required?',
        name: 'tests',
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
        err ? console.error("There is an error") : console.log("Saved successfully")
    );
}

// TODO: Create a function to initialize app

function init() {
  inquirer
  .prompt(questions)
  .then((response) => {
    console.log(response);
    let generatedMarkdown = generateMarkdown(response);
    writeToFile(`${response.title}.md`, generatedMarkdown);
  })
}


// Function call to initialize app
init();

// inquirer
//   .prompt(questions)
//   .then((response) => {
//     console.log(response)
//   })
//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   });