const generateFile = (title, description) =>{
    return `
    # ${title}
 
    ## Description
    
     ${description}
 
    ## Table of Content
 
    ### Instalation
 
    ### Usage
 
    #### License
 
    ##### Contributing
 
    ###### Tests
 
    ###### Questions
 
    `;
 };

 module.exports = generateFile;