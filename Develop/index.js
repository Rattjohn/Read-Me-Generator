// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const inquirer = require("inquirer")
const fs = require("fs");
const { default: Choice } = require("inquirer/lib/objects/choice");
const { default: Choices } = require("inquirer/lib/objects/choices");




inquirer.prompt([
    {
        type: "input",
        name: "projectTitle",
        message: "What is the name of your Project"
    },
    {
        type: "input",
        name: "projectDescription",
        message: "Please describe what your application does"
    },
    {
        type: "input",
        name: "projectDescription2",
        message: "Please describe why you used the technologies you used"
    },
    {
        type: "input",
        name: "projectDescription3",
        message: "What were some of the challenges you faces and features you hope to impelement"
    },
    {
        type: "input",
        name: "table",
        message: "Write down your table of contents(optional)"
    },
    {
        type: "input",
        name: "install",
        message: "how do you install and run your project?"
    },
    {
        type: "list",
        name: "projectLicense",
        message: "add the current license you are using ",
        choices: ["Apache License 2.0", "GNU General Public License", "MIT License", "Boost Software License 1.0", "Creative Commons Zero v1.0 Universal"]
    },
    {
        type: "input",
        name: "badges",
        message: "add your badge(if used) "
    },
    {
        type: "input",
        name: "git",
        message: "What is your github username "
    },
    {
        type: "input",
        name: "email",
        message: "What is your email and how can i contact you "
    }
]).then(response => {
    const { projectTitle } = response;
    const { projectDescription } = response;
    const { projectDescription2 } = response;
    const { projectDescription3 } = response;
    const { table } = response;
    const { install } = response;
    const { projectLicense } = response;
    const { badges } = response;
    const { git } = response;
    const { email } = response;

    let licenseLink;

    if (projectLicense === "Apache License 2.0") {
        licenseLink = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    } else if (projectLicense === "GNU General Public License") {
        licenseLink = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    } else if (projectLicense === "MIT License") {
        licenseLink = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    } else if (projectLicense === "Boost Software License 1.0") {
        licenseLink = "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
    } else if (projectLicense === "Creative Commons Zero v1.0 Universal") {
        licenseLink = "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)";
    } else {
        // handle default case
    }

    const README_TEMP = `# <${projectTitle}>

## Description
${projectDescription}
${projectDescription2}
${projectDescription3}

## Table of Contents 
${table}


## Installation 
- ${install}

## License
${licenseLink}

## Badges
${badges}

## Questions
https://github.com/${git}
${email}`;


    fs.writeFile("README.md", README_TEMP, error => {
        if (error) {
            console.log(error);
        } else {
            console.log("Read me file has been created");
        }
    })
})








const questions = [];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
