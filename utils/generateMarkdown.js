// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (questions.license === 'Apache') {
    (https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
  } else if (questions.license === 'Boost') {
    
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## ${data.description}
  ## ${data.installation}
  ## ${data.usage}
  ## ${data.license}
  ## ${data.contributing}
  ## ${data.tests}
  ## ${data.questions}
  
${renderLicenseBadge(data.license)}
`;
}

module.exports = generateMarkdown;
