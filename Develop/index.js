// array of questions for user
const fs = require('fs');
const questions = require('inquirer');

questions
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project'
        },
    ])



    // function to write README file
    // function writeToFile(fileName, data) {
    // }
    .then(function (data) {
        const filename =
            data.name
                .toLowerCase()
                .split(' ')
                .join('') + '.json';

        fs.writeFile(filename, JSON.stringify(data, null, '\t'), function (err) {
            if (err) {
                return console.log(err);
            }

            console.log('Success!');
        });
    });

// // function to initialize program
// function init() {

// }


// // function call to initialize program
// init();
