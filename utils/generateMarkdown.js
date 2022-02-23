const licenseDataSet = [
  {
    name: "MIT License (MIT)",
    description: "The MIT License is the most popular OSI approved open source license created at the Massachusetts Institute of Technology (MIT) in the late 1980s. It is one of the most permissive or BSD-style free software licenses and it allows people do almost anything they want with your projects under the MIT license with minimal restrictions. You can add, modify, merge, publish, distribute the original MIT license and sell copies of the software freely. This License is very easy, simple and to the point license that’s why it has such a huge adoption rate among software developers. Commercial organizations often prefer MIT open source license because of its ‘no strings attached’ type nature.",
    badge: "img",
    link: "https://www.mit.edu/~amini/LICENSE.md"
  },
  {
    name: "Apache License 2.0 (Apache-2.0)",
    description: "The Apache Software License (ASL) is a permissive free open source software license scheme and open source computer software (FOSS). It is written by the Apache Software Foundation (ASF) and is a permissive free software license released by the Apache Group(later named the Apache Software Foundation). Apache license v2 is most popular and widely deployed license. It allows development users to use the software for any purpose, to distribute, modify and to distribute modified versions of the software under the terms of the Apache licensed product. Apache 2.0 open source license group released the first version of its apache license in 1995. The advertising materials of any Apache licensed product are no longer required to include the Apache License attribution after removing the advertising clause. The 2.0 version of the Apache License approved by the ASF in 2004 to depart from the BSD model. ASF Group produced the Apache License version 2.0 by granting patents rights and by defining solid definitions of the concepts. The Apache License permissive free software license is currently in its third iteration. It helps in more reliable and long lived software products with the help of collaborative and open source software development process. Now, all license packages produced by Apache Software Foundation are implicitly licensed under the Apache Software License version 2.0.",
    badge: "img",
    link: "https://www.apache.org/licenses/LICENSE-2.0.txt"
  },
  {
    name: "GNU General Public License (GPL)",
    description: "The GNU General Public License is a series of commonly used most popular open source licenses. The GNU General Public License, or GNU GPL for short or simply GPL is a copyleft license. It is intended to guarantee your freedom to distribute, run, copy and modify all versions of a program to make it a free software. It is best proprietary software license example. This license has two versions that are actively and widely used in many open source communities and organizations. GNU (GPL) was written by Richard Stallman in 1989 in order to protect the GNU software from being made proprietary. It is a specific implementation of Richard of the Free Software Foundation or FSF, first copyleft license to be widely accepted. A copyleft open source copyright license means that any software application that is written based on any GPL component must be released as open source product. It is mandatory for any GPL open source component to distribute full source code of software based on previous copyleft work upon release to the public.",
    badge: "img",
    link: "https://www.gnu.org/licenses/gpl-3.0.en.html"
  },
  {
    name: "Berkeley Software Distribution License (BSD)",
    description: "BSD Licenses refer to anyone in a family of BSD Free and Open Source Software (FOSS) licenses. It is a family of permissive free software licenses with minimal restrictions on the use and distribution of software. BSD licenses are a family of permissive means that BSD-like or BSD-style license is a free software license that don’t require much from users and don’t put much requirements on redistribution of the licensed open source software. The original BSD license name was taken from Unix-like operating system, the Berkeley Software Distribution (BSD). BSD Licenses two variants, the Modified BSD License (3-clause) and the Simplified BSD License or FreeBSD License (2-clause) are also permissive free software licenses. The BSD open source license unlike GPL does not require source code be distributed at all. The BSD License lets you freely copy, modify and distribution of many freeware, shareware and open source software as you retain a copy of the copyright notice, list of conditions and the disclaimer.",
    badge: "img",
    link: "https://www.freebsd.org/copyright/license/"
  },
  {
    name: "Internet Systems Consortium License (ISC)",
    description: "The ISC License is the most permissive open source license family free software license like the MIT License and the BSD License. It was created by the Internet Software Consortium (Internet Systems Consortium). The ISC License is basically a ‘stripped down’ version of the MIT licenses and simplified BSD 2-Clause licenses, removing some language that is no longer necessary. The ISC open source license is functional equivalent to the MIT License. The only difference lies in the license language. The ISC License has only two requirements and they are the same as those of the MIT License. Users must include the original copyright notice and a copy of the license itself while copying or modifying the licensed code. ISC permissive license users are free to use the code commercially, modify the code and distribute the code. OpenBSD operating system and OpenStreetMap free to use map of the world OSS projects use the ISC license.",
    badge: "img",
    link: "https://www.isc.org/licenses/"
  }
];

function checkLicense(readmeData) {
  for (i=0; i < licenseDataSet.length; i++) {
    licenseData = licenseDataSet[i];
    if (readmeData.license === licenseData.name) {
      renderLicenseBadge(licenseData);
      renderLicenseLink(licenseData);
      renderLicenseSection(licenseData);
    }
  }
};

// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(licenseData) {
  return badge = licenseData.badge;
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(licenseData) {
  return link = licenseData.link;
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licenseData) {
  const name = licenseData.name;
  const description = licenseData.description;
  return license = `
  ## License
  ### [${name}](${link})
  ${description}
  `
};

// Create a function to generate markdown for README
function generateMarkdown(readmeData) {
  checkLicense(readmeData);

  return `
  # ${readmeData.title} ${badge}

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

  ${license}

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
 