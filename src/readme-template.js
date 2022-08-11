const generateFile = (data) =>{
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
    ${data.license} Copyright (c) 2022
    ${data.notice}
   
    ## Contributing
    ${data.contributing}
    
    ## Tests
    ${data.test}
    
    ## Questions

    *GitHub : ${data.github}
    *[Link to Github](${data.link})
    *Email: ${data.email}
 
    `;
 };

 module.exports = generateFile;