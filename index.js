// TODO: Packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')
const fs = require('fs')

const questions = [
    {
    type: 'input',
    name:'title',
    message: "What is the Project title?"
    }, 

    {
    type: 'input',
    name:'Repository',
    message: "What is the name of your Repository?"
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
        message: "What is the description of your title?"
    },
    
    {
    type: 'input',
    name:'Installation',
    message: "What is the Installation of the project?"
    },

    
    {
    type: 'input',
    name:'usage',
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
]


inquirer.prompt(questions)
.then(
    answers => {
        console.log(answers);
        let data = generateMarkdown(answers)
        fs.writeFileSync("readme.md", data)}
)

init();
