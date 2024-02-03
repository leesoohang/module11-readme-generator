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
            message: "Write a short description explaining your project",
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
            name: "contact",
            type: "input",
            message: "Include your GitHub profile here for further questions:",
        }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err? console.error(err) : console.log("README generated!");
    })
    
}

// function to initialize program
function init() {
    const markdown = path.basename("README_generated.md");
    inquirer.prompt(questions)
    .then((data) => writeToFile(markdown,generateMarkdown(data))
    )
}

// function call to initialize program
init();
