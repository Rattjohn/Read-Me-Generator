// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const inquirer=require("inquirer")
const fs=require("fs")




inquirer.prompt([
    {
        type:"input",
        name:"projectTitle",
        message:"What is the name of your Project"
    },
    {
        type:"input",
        name:"projectDescription",
        message:"Please describe what your application does"
    },
    {
        type:"input",
        name:"projectDescription2",
        message:"Please describe why you used the technologies you used"
    },
    {
        type:"input",
        name:"projectDescription3",
        message:"What were some of the challenges you faces and features you hope to impelement"
    },
    {
        type:"input",
        name:"table",
        message:"Write down your table of contents(optional)"
    },
    {
        type:"input",
        name:"install",
        message:"how do you and install and run your project?"
    },
    {
        type:"input",
        name:"projectLicense",
        message:"add the current license you are using "
    },
    {
        type:"input",
        name:"badges",
        message:"add your badge(if used) "
    },
    {
        type:"input",
        name:"git",
        message:"What is your github username "
    },
    {
        type:"input",
        name:"email",
        message:"What is your email and how can i contact you "
    }
]).then(response=>{
    const {projectTitle}=response;
    const {projectDescription}=response;
    const {projectDescription2}=response;
    const {projectDescription3}=response;
    const {table}=response;
    const {install}=response;
    const {projectLicense}=response;
    const {badges}=response;
    const {git}=response;
    const {email}=response;
    const README_TEMP =`# <${projectTitle}>

## Description
${projectDescription}
${projectDescription2}
${projectDescription3}

## Table of Contents 
${table}


## Installation 
- ${install}

## License
${projectLicense}

## Badges
${badges}

## Questions
https://github.com/${git}
${email}`;


    fs.writeFile("README.md",README_TEMP,error=>{
        if(error) {
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
