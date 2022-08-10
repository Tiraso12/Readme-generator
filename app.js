const inquirer = require('inquirer');
const fs = require('fs');
const generateFile = require('./src/readme-template');

const promptUser = answers => {
      console.log(`
      ==================
       NEW README FILE
      ==================`);

   return inquirer.prompt([
      {
         type: 'input',
         name: 'title',
         message: 'What is the Name of the Project?',
         validate: nameTitle => {
            if (nameTitle) {
               return true;
            } else {
               console.log('Please Enter a Title for the project');
               return false;
            }
         }
      },
      {
         type: 'input',
         name: 'description',
         message: 'what is the description of the project?',
         validate: nameDescription => {
            if (nameDescription) {
               return true;
            } else {
               console.log('Please enter a desription for the project');
               return false;
            }
         }
      },
      {
         type: 'input',
         name: 'installation',
         message: 'provide some information for installation',
        
      },
      {
         type: 'input',
         name: 'usage',
         message: 'Provide instructions and examples for use',
       
      },
      {
         type: 'input',
         name: 'license',
         message: 'License Information',
      
      },
      {
         type: 'input',
         name: 'contributing',
         message: 'developers to contribute in the project',
       
      },
      {
         type: 'input',
         name: 'test',
         message: 'provide some test for your application',
        
      },
      {
         type: 'input',
         name: 'usage',
         message: 'provide instructions and examples for use',
      
      }
   ])

   .then((answers) =>{
      console.log(answers);
      let data = {
         title: answers.title,
         description: answers.description,
         installation: answers.installation,
         usage: answers.usage,
         test: answers.test,
         license: answers.license,
         contributing: answers.contributing,
   
      };

      //  generateFile(data)
          fs.writeFile('README.md', generateFile(data), function (err) {
      if (err) throw err;
   })
   })
};


promptUser()
// .then(newData=>{
//    console.log(newData);
//    const genReadme = generateFile(newData);
   

// })





































// const printReadmeData = readmeDataArg =>{
//    readmeDataArg.forEach(readmeItem =>console.log(readmeItem));
// }

// printReadmeData(readmeDataArg);