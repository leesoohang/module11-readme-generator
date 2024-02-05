const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


// array of questions for user
const questions = [
            {
            name: "title",
            type: "input",
            message: "What is project title?"
        },
        {
            name: "description",
            type: "input",
            message: "Write a short description explaining your project:",
        },
        {
            name: "installation",
            type: "input",
            message: "What are the steps required to install your project?",
        },
        {
            name: "usage",
            type: "input",
            message: "Provide instructions and examples for use:",
        },
        {
            name: "credit",
            type: "input",
            message: "If you followed tutorials, include links to those here:",
        },
        {
            name: "license",
            type: "list",
            message: "Choose your license here: ",
            choices: [
            {
                // short: "N/A",
                name: "N/A",
                value: "N/A"
            },
            {
                name: "MIT",
                // name: "The MIT License",
                value: "The MIT License [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
            },
            {
                name: "Apache",
                // name: "Apache 2.0 License",
                value: "Apache 2.0 License [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
            },
            {
                name: "SIL",
                // name: "SIL Open Font License 1.1",
                value: "SIL Open Font License 1.1 [![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)"
            }
        ]
        },
        {
            name: "contribute",
            type: "input",
            message: "Add guidelines for how others can contribute to your application: ",
        },
        {
            name: "test",
            type: "input",
            message: "Write tests for your application: ",
        },
         {
            name: "contact",
            type: "input",
            message: "Include your GitHub profile here for further questions:",
        },
        {
            name: "email",
            type: "email",
            message: "Include your email address so people can contact you:",
        }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err? console.error(err) : console.log("README generated!")    
        })
    
}

// function to initialize program
function init() {
    const markdown = path.basename("README_generated.md");
    inquirer.prompt(questions)
    .then((data) => writeToFile(markdown,generateMarkdown(data)));   
}


// function call to initialize program
init();