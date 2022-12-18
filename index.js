// TODO: Include packages needed for this application
const inquirer = require('inquirer');

const generateMarkdown = require('./utils/generateMarkdown')

const fs = require('fs')



// TODO: Create an array of questions for user input
const questions = [{type: 'input', name:'title', message: "what isthe title?"}, {type:"list", name:"license", message:"what is the license?", choices:["MIT", "GPL"]}, {type: 'input', name:'description', message: "what isthe description?"},
//add questions
]


inquirer.prompt(questions)
.then(
    answers => {
        console.log(answers);
        let data = generateMarkdown(answers)
        fs.writeFileSync("readme.md", data)}
)
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
