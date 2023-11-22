// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `The license for this project is: ${license}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
## Desciption
${data.description}

##Table of Contents
*[Installation](#Installation)  
*[Usage](#Usage)  
*[Contribution Guidelines](#Contribution&nbsp;Guidelines)  
*[Testing](#Testing)  
*[Questions](#Questions) 

##Installation
${data.installation}    

##Usage
${data.usage}
    
##License
${renderLicenseSection(data.license)}

##Contributing
${data.contributors}
    
##Tests 
${data.tests}
    
##Questions

`;
}

module.exports = generateMarkdown;
