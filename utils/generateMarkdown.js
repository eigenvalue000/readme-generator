// This function generates a license badge.
function renderLicenseBadge(license) {
  if (license == '') {
    return '';
  } else if (license == 'GNU AGPLv3') {
    return '![AGPL-3.0-or-later](https://img.shields.io/badge/license-AGPL--3.0--or--later-blue)';
  } else if (license == 'GNU GPLv3') {
    return '![GPL-3.0-or-later](https://img.shields.io/badge/license-GPL--3.0--or--later-blue)';
  } else if (license == 'Mozilla Public License 2.0') {
    return '![MPL-2.0](https://img.shields.io/badge/license-MPL--2.0-brightgreen)'
  } else if (license == 'Apache License 2.0') {
    return '![Apache-2.0](https://img.shields.io/badge/license-Apache--2.0-yellowgreen)'
  } else if (license == 'Apache License 2.0') {
    
  } else if (license == 'Apache License 2.0') {
    
  } else if (license == 'Apache License 2.0') {
    
  }
}

// This function generates a link to the full license
// agreement.
function renderLicenseLink(license) {
  if (license == '') {
    return '';
  } else if (license == 'GNU AGPLv3') {
    return 'https://www.gnu.org/licenses/agpl-3.0.md';
  } else if (license == 'GNU GPLv3') {
    return 'https://www.gnu.org/licenses/gpl-3.0.md';
  } else if (license == 'Mozilla Public License 2.0') {
    return 'http://www.apache.org/licenses/LICENSE-2.0.txt';
  } else if (license == 'Apache License 2.0') {
    
  } else if (license == 'Apache License 2.0') {
    
  } else if (license == 'Apache License 2.0') {
    
  } else if (license == 'Apache License 2.0') {
    
  }
}

// This function generates the required text obtained from
// the license agreement that is necessary to display in 
// a readme file.
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
  } else if (license == 'Apache License 2.0') {
    return `Copyright ${year} ${authorName}

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
 
http://www.apache.org/licenses/LICENSE-2.0
 
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.`
  } else if (license == 'Apache License 2.0') {
    
  } else if (license == 'Apache License 2.0') {
    
  } else if (license == 'Apache License 2.0') {
    
  }
}

// This function generates a table of contents when the 
// tocValue is set to boolean true.
function renderTableOfContents(tocValue) {
  if (tocValue == true) {
    return `## Table of Contents

[Author](#author)

[Description](#description)

[Table of Contents](#table-of-contents)

[Installation](#installation)

[Usage](#usage)

[License](#license)

[Contributing](#contributing)

[Tests](#tests)

[Questions](#questions)`;
  } else {
    return '';
  }
}

// This function generates the readme text that is
// to be used as the input to the file writer in
// the index.js file.
function generateMarkdown(data) {
  return `
# ${data.title}
${renderLicenseBadge(data.license)}

## Author
${data.author}

## Description
${data.description}
  
${renderTableOfContents(data.tableOfContents)}
  
## Installation
${data.installation}

## Usage
${data.usage}

![alt text](assets/images/screenshot.png)


## License
${renderLicenseSection(data.license, data.title, data.year, data.author)}

${renderLicenseLink(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions

Contact the developer and owner of this repository by using the information below : 

GitHub
https://github.com/${data.github}

Email
${data.email}

`;
}

module.exports = generateMarkdown;
