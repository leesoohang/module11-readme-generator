# Module Challenge – Professional README Generator
## Description
This project is to quickly and easily create a README file by using a command-line application. 

To produce this high-quality README file, the Inquirer package is used for user’s input. 

The most difficult part this time is to understand how to display the answer of the list type prompts. After reading carefully through the Inquirer package documentation, I realized that instead of exporting a module made up of nested objects, I could just do it in Choices and use the Value property, which saves a lot more time actually.

The next time I might learn how to create License text file based on user selection.

Link to the walkthrough video:

https://drive.google.com/file/d/1guA0A1OEwvW0DaomJOq0IXSv4xwVkFcd/view

Link to the repository:

https://github.com/leesoohang/module11-readme-generator

## Installation
1.	Node.js is required to initialize the program
2.	Inquirer package (npm install inquirer) 

## Usage
The sample generate README file is named ‘README_generated’ in the folder. Prompt questions can be found in the script ‘index.js’.

To test the program, please type 'node index.js' in your terminal.

## Credits
Inquirer package documentation:

https://www.npmjs.com/package/inquirer