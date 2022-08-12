const generateFile = (data) => {
    return `
# ${data.title}

    
${data.badge}
 

## Description
    
${data.description}
 
## Table of Content
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Test](#test)
- [Questions](#questions)
 
## Installation
${data.installation}
 
## Usage
    
${data.usage}

## License

${data.license} Copyright (c) 2022
   
## Contributing

${data.contributing}
  
## Test

${data.test}
    
## Questions

For any questions feel free to contact me at : [${data.email}](mailto:${data.email}).

To see all of my projects click the link! [${data.github}](http://github.com/${data.github}).
    `;
};

module.exports = generateFile;
