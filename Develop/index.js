// array of questions for user
const fs = require('fs');
const inquirer = require('inquirer');

const questions = [

    {
        type: 'input',
        name: 'github',
        message: 'What is your Github User Name'
    },

    {
        type: 'input',
        name: 'email',
        message: 'What is your e-mail address'
    },

    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project'
    },

    {
        type: 'input',
        name: 'discription',
        message: 'Please wright a short discription of your project'
    },

    {
        type: 'list',
        name: 'license',
        message: 'Which license would you like',
        choices: [
            'MIT',
            'Apache 2.0',
            'GPL 3.0',
            'BSD 3',
            'None'
        ]
    },

    {
        type: 'input',
        name: 'contributers',
        message: 'Who else has contributed to this project'
    },
]



// function to write README file
function writeToFile(fileName, data) {
    return
}

function init() {
    inquirer.prompt(questions)
        .then(function (data) {
            const filename =
                data.name
                    .toLowerCase()
                    .split(' ')
                    .join('') + '.json';
            console.log(data)
            fs.writeFile(filename, JSON.stringify(data, null, '\t'), function (err) {
                if (err) {
                    return console.log(err);
                }

                console.log('Success!');
            });
        });
}

// // function to initialize program
// function init() {

// }


// // function call to initialize program
 init();
