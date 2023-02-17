//  Packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')
const fs = require('fs')

// question variables
const questions = [
    {
    type: 'input',
    name:'title',
    message: "What is the Project title?"
    }, 

    
    {
        type:"list", 
        name:"license", 
        message:"What is the license of your project?", 
        choices:["MIT", "GPL", "Mozilla Public License 2.0","The Unlicense", "None"]
    }, 

    {
        type: 'input', 
        name:'description', 
        message: "What is the project about?"
    },
    
    {
    type: 'input',
    name:'installation',
    message: "What application needs to be installed in the project?"
    },

    
    {
    type: 'input',
    name:'usage',
    message: "What is the usage of the project?"
    },

    
    {
    type: 'input',
    name:'contribution',
    message: "What are the contribution guidelines?"
    },

    
    {
    type: 'input',
    name:'tests',
    message: "What are the testing instructions of this project?"
    },

    
    {
    type: 'input',
    name:'github',
    message: "What is your Github Username?"
    },

    {
        type: "input",
        name: "email",
        message: "Please enter your email address: "
    },

];


    inquirer.prompt(questions)
        .then(
            answers => {
                console.log(answers);
                let data = generateMarkdown(answers)
                fs.writeFileSync(`${answers.title}.md`, data)}
        );




