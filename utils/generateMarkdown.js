// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return `https://img.shields.io/badge/License-${license.split(' ').join('_')}-blue.svg`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    return `opensource.org/license/${license.split(' ').join('-')}`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `The license for this project is: ${license}.`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} [![License: ${data.license}](${renderLicenseBadge(data.license)})](${renderLicenseLink(data.license)})
## Description
${data.description}

## Table of Contents
*[Installation](#installation)  
*[Usage](#usage)  
*[Contributors](#contributors)  
*[Tests](#tests)  
*[Questions](#questions) 

## Installation
${data.installation}    

## Usage
${data.usage}
    
## License
${renderLicenseSection(data.license)}

## Contributors
${data.contributors}
    
## Tests 
${data.tests}
    
## Questions
[Link to GitHub profile](github.com/${data.username})

If you have more questions you can get in touch at ${data.email}
`;
}

module.exports = generateMarkdown;
