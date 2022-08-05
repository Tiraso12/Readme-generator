const generateFile = (title, description) =>{
    return `
    # ${title}
 
    ## Description
    
     ${description}
 
    ## Table of Content
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#License)
    - [Contributing](#contributing)
    - [Test](#test)
    - [Questions](#questions)
 
    ## Instalation
 
    ## Usage
 
    ## License
 
    ## Contributing
 
    ## Tests
 
    ## Questions
 
    `;
 };

 module.exports = generateFile;