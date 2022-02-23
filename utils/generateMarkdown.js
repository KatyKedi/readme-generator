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
function generateMarkdown(readmeData) {
  return `
  # ${readmeData.title}

  ## Description
  ${readmeData.description}

  ## Table of Contents
  1. [Installation](./##Installation)
  2. [Usage](./##Usage)
  3. [License](./##License)
  4. [Contributing](./##Contributing)
  5. [Tests](./##Tests)
  6. [Questions](./##Questions)

  ## Installation
  ${readmeData.installation}

  ## Usage
  ${readmeData.usage}

  ## License
  ${readmeData.license}

  ## Contributing
  ${readmeData.contribution}

  ## Tests
  ${readmeData.test}

  ## Questions
  My GitHub account: [${readmeData.username}](https://github.com/${readmeData.username})
  If you have questions about this application, you can reach me at ${readmeData.email}
`;
}

module.exports = generateMarkdown;
 