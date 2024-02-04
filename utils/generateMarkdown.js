// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Description
${data.description}
## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
## Installation
${data.installation}
## Usage
${data.usage}
## Credits
${data.credit}
## License
${data.license}
## Contributing
${data.contribute}
## Tests
${data.test}
## Questions
If there are further questions, please feel free to contact me. My email address is <a href="mailto:${data.email}">${data.email}</a>.
My GitHub profile is <a href="https://github.com/${data.contact}">${data.contact}</a>.
`;
}

module.exports = generateMarkdown;
