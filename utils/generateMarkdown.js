// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == '') {
    return '';
  } else if (license == 'GNU AGPLv3') {
    return '![AGPL-3.0-or-later](https://img.shields.io/badge/license-AGPL--3.0--or--later-blue)';
  } else if (license == 'GNU GPLv3') {
    return '![GPL-3.0-or-later](https://img.shields.io/badge/license-GPL--3.0--or--later-blue)';
  } else if (license == 'Mozilla Public License 2.0') {
    return '![MPL-2.0](https://img.shields.io/badge/license-MPL--2.0-brightgreen)'
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == '') {
    return '';
  } else if (license == 'GNU AGPLv3') {
    return 'https://www.gnu.org/licenses/agpl-3.0.md';
  } else if (license == 'GNU GPLv3') {
    return 'https://www.gnu.org/licenses/gpl-3.0.md';
  } else if (license == 'Mozilla Public License 2.0') {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, projectTitle, year, authorName) {
  if (license == '') {
    return 'Use default license here since none selected.';
  } else if (license == 'GNU AGPLv3') {
    return `${projectTitle}
Copyright (C) ${year}  ${authorName}

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.`;
  } else if (license == 'GNU GPLv3') {
    return `${projectTitle}
Copyright (C) ${year}  ${authorName}

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.`;
  } else if (license == 'Mozilla Public License 2.0') {
    return `This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0. If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}
${renderLicenseBadge(data.license)}

## Author
${data.author}

## Description
${data.description}
  
## Table of Contents
${data.tableOfContents}
  
## Installation
${data.installation}

## Usage
${data.usage}

## License
${renderLicenseSection(data.license, data.title, data.year, data.author)}

${renderLicenseLink(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
${data.questions}

`;
}

module.exports = generateMarkdown;
