var readmeDataArg = process.argv.slice(2, process.argv.length);

const printReadmeData = readmeDataArg =>{
   readmeDataArg.forEach(readmeItem =>console.log(readmeItem));
}

printReadmeData(readmeDataArg);