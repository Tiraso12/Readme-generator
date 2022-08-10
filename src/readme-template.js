const generateFile = (data) =>{
    // console.log(data);
    return `
    # ${data.title}

    
 ${data.badge}
 


    ## Description
    
     ${data.description}
 
    ## Table of Content
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#License)
    - [Contributing](#contributing)
    - [Test](#test)
    - [Questions](#questions)
 
    ## Instalation
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