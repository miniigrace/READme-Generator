// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

let {title, license, description, installation, usage, tests, contribution, github, email} = data


return `
# ${title}

![License](https://img.shields.io/badge/license-${license}-blue.svg)

## Table of Content

* [Description](#description)
* [License](#license)
* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [Github](#github)
* [Email](#email)


## Description
${description}

## License
${license}

## Installation
${installation}

## Usage
${usage}

## Contribution
${contribution}

## Github
${github}

## Email
${email}

`;

}

module.exports = generateMarkdown;
