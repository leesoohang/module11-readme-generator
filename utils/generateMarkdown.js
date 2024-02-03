// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} \n
## Description
${data.description}
## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
## Installation
${data.installation}
## Usage
${data.usage}
## Credits
${data.credit}
## Questions
${data.contact}
`;
}

module.exports = generateMarkdown;
