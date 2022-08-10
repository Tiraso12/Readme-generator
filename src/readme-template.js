const generateFile = (data) =>{
    console.log(data);
    return `
    # ${data.title}
 
    ## Description
    
     ${data.description}
 
    ## Table of Content
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#License)
    - [Contributing](#contributing)
    - [Languages](#languages)
 
    ## Instalation

        ```
        
        ```
    ${data.installation}
 
    ## Usage
    ${data.usage}
    ## License
    ${data.license}
    ## Contributing
    ${data.contributing}
    ## Tests
    ${data.test}
    ## Questions
    ${data.questions}
 
    `;
 };

 module.exports = generateFile;