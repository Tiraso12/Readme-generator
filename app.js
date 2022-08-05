const fs = require('fs');
const generateFile = require('./src/readme-template');

var readmeDataArg = process.argv.slice(2, process.argv.length);
const [title, description] = readmeDataArg;

// const printReadmeData = readmeDataArg =>{
//    readmeDataArg.forEach(readmeItem =>console.log(readmeItem));
// }

// printReadmeData(readmeDataArg);



fs.writeFile('README.md', generateFile(title, description), err =>{
   if (err) throw err;
   console.log('Readme file complete! checkt the README to see the output');
})