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
function generateMarkdown(questions) {
  return `
  # ${questions[0].title}

  ## Description
  ${questions[0].description}

  ## Table of Contents
  1. [Installation](./##Installation)
  2. [Usage](./##Usage)
  3. [License](./##License)
  4. [Contributing](./##Contributing)
  5. [Tests](./##Tests)
  6. [Questions](./##Questions)

  ## Installation
  ${questions[0].installation}

  ## Usage
  ${questions[0].usage}

  ## License
  ${questions[0].license}

  ## Contributing
  ${questions[0].contributing}

  ## Tests
  ${questions[0].test}

  ## Questions
  My GitHub account: [${questions[0].username}](https://github.com/${questions[0].username})
  If you have questions about this application, you can reach me at ${questions[0].email}
`;
}

module.exports = generateMarkdown;
 