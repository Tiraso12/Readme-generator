const inquirer = require('inquirer');
const fs = require('fs');
const generateFile = require('./src/readme-template');

const promptUser = answers => {
   console.log(`
      =====================
       NEW README FILE INFO
      =====================`);

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
         type: 'list',
         name: 'license',
         message: 'License Information',
         choices: ['MOZILLA', 'ISC', 'IBM','ECLIPSE']
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

      },
      {
         type: 'input',
         name: 'questions',
         message: 'provide contact information'
      }
   ])

      .then((answers) => {
        
         let data = {
            title: answers.title,
            description: answers.description,
            installation: answers.installation,
            usage: answers.usage,
            test: answers.test,
            license: answers.license,
            contributing: answers.contributing,
            badge:'',
         };
         console.log(answers);
         
         if (data.license === 'MOZILLA') {
            data.badge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
         }else if (data.license === 'ISC') {
            data.badge = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
         }else if(data.license === 'IBM'){
            data.badge = '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)';
         }else if(data.license === 'ECLIPSE'){
            data.badge = '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';
         }

         console.log(data);
         



         //  generateFile(data)
         fs.writeFile('README.md', generateFile(data), function (err) {
            if (err) throw err;
         })
      })
};


promptUser()






































// const printReadmeData = readmeDataArg =>{
//    readmeDataArg.forEach(readmeItem =>console.log(readmeItem));
// }

// printReadmeData(readmeDataArg);