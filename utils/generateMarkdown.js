// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "GNU AGPLv3": 
    return`[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
    break;
    case "Apache 2.0": 
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    case "Boost": 
    return `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
    case "Eclipse": 
    return `[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;
    default:
      return "";
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { 
  if (license === 'none') {
    return "";
  } else {
    return "* [License](#license)";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'none') {
    return "";
  } else {
    return "# License";
  }
 }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  # Table of Contents
  * [Description](#description)
  * [Installation Instructions](#Installation-Instructions)
  * [Usage](#usage)
  ${renderLicenseLink(data.license)}
  * [Contributors](#contributors)
  * [Tests](#tests)
  * [Questions](#questions)

  # Description
  ${data.description}
  # Installation Instructions
  ${data.installation}
  # Usage
  ${data.usage}
  ${renderLicenseSection(data.license)}
  ${renderLicenseBadge(data.license)}
  # Contributors
  ${data.contributing}
  # Tests
  ${data.tests}
  # Questions
  If you have any questions, please contact me.
  Github: [${data.username}](http://github.com/${data.username})
  Email: [${data.email}](mailto:${data.email})
  
`;
}

module.exports = generateMarkdown;
