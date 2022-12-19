// TODO: Packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')
const fs = require('fs')

const questions = [
    {
    type: 'input',
    name:'Title',
    message: "What is the Project title?"
    }, 

    
    {
        type:"list", 
        name:"License", 
        message:"What is the license of your project?", 
        choices:["MIT", "GPL", "Mozilla Public License 2.0","The Unlicense", "None"]
    }, 

    {
        type: 'input', 
        name:'Description', 
        message: "What is the project about?"
    },
    
    {
    type: 'input',
    name:'Installation',
    message: "What application needs to be installed in the project?"
    },

    
    {
    type: 'input',
    name:'Usage',
    message: "What is the usage of the project?"
    },

    
    {
    type: 'input',
    name:'Contribution',
    message: "What are the contribution guidelines?"
    },

    
    {
    type: 'input',
    name:'Tests',
    message: "What are the testing instructions of this project?"
    },

    
    {
    type: 'input',
    name:'Username',
    message: "What is your Github Username?"
    },

    
    {
    type: 'input',
    name:'Email',
    message: "What is your email?"
    },
];


    inquirer.prompt(questions)
        .then(
            answers => {
                console.log(answers);
                let data = generateMarkdown(answers)
                fs.writeFileSync(`${answers.title}.md`, data)}
        );




