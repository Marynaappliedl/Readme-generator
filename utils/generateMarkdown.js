// Creating a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

//Creating a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 
${renderLicenseBadge(data.license)}
## Table of Contents
* [Description of the project](#description)
* [Details of the Project](#details)
* [Usage](#usage)
* [License](#license)
* [Contributors](#contributors)
* [Testing details](#test)
* [Features](#features)
* [Languages and technologies used](#languages)
* [Username](#creator)
* [Email](#email)
## Name of The Project
${data.title}
## Purpose and Functionality Description
${data.description}
## Installation Details
${data.details}
## Usage of the project:
${data.usage}
## License
${data.license}
## Contributors
${data.contributors}
## Testing
${data.test};
## Features
${data.features}
## Languages & Dependencies
${data.languages}
## Username
${data.creator}
##Email
${data.email};
## Questions
[here](mailto:${data.email}?subject=[GitHub]%20Dev%20Connect)
`;
}
module.exports = generateMarkdown;