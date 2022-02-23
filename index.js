// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

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
            choices: [
                'MIT License (MIT)', 
                'Apache License 2.0 (Apache-2.0)',
                'GNU General Public License (GPL)',
                'Berkeley Software Distribution License (BSD)',
                'Internet Systems Consortium License (ISC)',
                'None',
                'Other']
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
        return(readmeData);
    })
};

const promptLicense = readmeData => {
    if (readmeData.license === 'Other') {
        return inquirer.prompt(
            {
                type: 'input',
                name: 'license',
                message: 'Please enter your license:',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter your license!');
                        return false;
                    }
                } 
            }
        ).then(licenseData => {
            readmeData.license = licenseData.license;
            return readmeData;
        })
    } else {
        return readmeData;
    }
};

// Create a function to write README file
function writeToFile(markdown) {
    fs.writeFile('./README.md', markdown, err => {
        if (err) throw new Error(err);

        console.log('Page created! Check out README.md in this directory to see it!');
    });
}

// TODO: Create a function to initialize app
function init() {
    promptUser()
    .then(promptLicense)
    .then(readmeData => {
        const markdown = generateMarkdown(readmeData);
        writeToFile(markdown);
    });
};

// Function call to initialize app
init();