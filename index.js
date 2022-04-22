// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
      {
        type: 'input',
        message: 'Please enter the project title',
        name: 'title',
      },
      {
        type: 'input',
        message: 'Please enter project description',
        name: 'description',
      },
      {
        type: 'input',
        message: 'What are the required installations?',
        name: 'installation',
        default: 'None'
      },
      {
        type: 'input',
        message: 'what are the usage for your project?',
        name: 'usage',
        default: 'Not applicable'
      },
      {
        type: 'list',
        message: 'Please select a license',
        name: 'license',
        choices: ['Apache','Eclipse', 'IBM', 'MIT', 'Mozilla', "Zlib"],
        default: 'MIT',
      },
      {
        type: 'checkbox',
        message: 'What are the technologies used?',
        name: 'technology',
        choices: ['HTML','CSS', 'Javascript', 'Node.Js', "Others"],
      },
      {
        type: 'input',
        message: 'Please enter contributors',
        name: 'contributor',
        default: 'None',
      },
      {
        type: 'input',
        message: 'What are the tests required?',
        name: 'tests',
        default: 'None'
      },
      {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github',
      },
      {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
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
    let fileName = response.title.toLowerCase().split(" ").join("");
    writeToFile(`${fileName}.md`, generatedMarkdown);
  })
}

// Function call to initialize app
init();
