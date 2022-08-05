const inquirer = require('inquirer');
// const fs = require('fs');
// const generateFile = require('./src/readme-template');
// fs.writeFile('README.md', generateFile(title, description), err =>{
//    if (err) throw err;
//    console.log('Readme file complete! checkt the README to see the output');
// })


const promptUser = () =>{

 return  inquirer.prompt([
      {
         type: 'input',
         name: 'title',
         message: 'What is the Name of the Project?',
         validate: nameTitle =>{
            if (nameTitle) {
               return true;
            } else{
               console.log('Please Enter a Title for the project');
               return false;
            }
         }
      },
      {
         type: 'input',
         name: 'description',
         message: 'what is the description of the project?',
         validate: nameDescription =>{
            if (nameDescription) {
               return true;
            } else{
               console.log('Please enter a desription for the project');
               return false;
            }
         } 
      },
      {
         type: 'confirm',
         name: 'tableConfirm',
         message: 'do you want a table of content?(Optional)'
      },
      {
         type: 'input',
         name: 'installation',
         message: 'procedures for installation' 
      },
   ]);
};

promptUser().then(answers=>console.log(answers));





































// const printReadmeData = readmeDataArg =>{
//    readmeDataArg.forEach(readmeItem =>console.log(readmeItem));
// }

// printReadmeData(readmeDataArg);