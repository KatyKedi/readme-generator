// Include packages needed for this application
const inquirer = require('inquirer');
const { stubFalse } = require('lodash');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Create an array of questions for user input
const questions = [];
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please give a description of your project.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your description!');
                    return false;
                }
            } 
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please provide installation instructions for your project.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your installation instructions!');
                    return false;
                }
            }    
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide usage information for your project.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your usage information!');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please select your license.',
            choices: ['a', 'b', 'c', 'd', 'e']
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Please provide contribution guidelines for your project.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your contribution guidelines!');
                    return false;
                }
            } 
        },
        {
            type: 'input',
            name: 'test',
            message: 'Please provide test instructions for your project.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your test instructions!');
                    return false;
                }
            } 
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub username?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username!');
                    return false;
                }
            } 
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your email address!');
                    return false;
                }
            } 
        }
    ])
    .then(readmeData => {
        questions.push(readmeData);
        return(questions);
    })
};

promptUser()
    .then(questions => {
        const markdown = generateMarkdown(questions);
        writeToFile(markdown);
    });


// Create a function to write README file
function writeToFile(markdown) {
    fs.writeFile('./README.md', markdown, err => {
        if (err) throw new Error(err);

        console.log('Page created! Check out README.md in this directory to see it!');
    });
}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();
