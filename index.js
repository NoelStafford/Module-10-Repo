const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'team.html');

const render = require('./src/page-template.js');

const teamMembers = [];


// function for creating manager - inquirer questions
  // take those questions and create a new Manager with the user provided answers
  // push that new Manager to the team members array
  const managerQuestions = [
    {
    type: 'Input',
    message: 'What is the name of the manager?',
    name: 'name'
    },
    {
      type: 'Input',
      message: 'What is the email of the manager?',
      name: 'email'
    },
    {
      type: 'Input',
      message: 'What is the id of the manager?',
      name: 'id'
    },
    {
      type: 'Input',
      message: 'What is the managers office number?',
      name: 'officeNumber'
    }
  ];
  // follow the same pattern for each type of employee
  // build a function for them that uses inquirer
  const internQuestions = [
    {
      type: 'Input',
      message: 'What is the name of the intern?',
      name: 'name'
      },
      {
        type: 'Input',
        message: 'What is the email of the intern?',
        name: 'email'
      },
      {
        type: 'Input',
        message: 'What is the id of the intern?',
        name: 'id'
      },
      {
        type: 'Input',
        message: 'What school does the intern attend or attended?',
        name: 'school'
      }
  ];
  const engineerQuestions = [
    {
      type: 'Input',
      message: 'What is the name of the engineer?',
      name: 'name'
      },
      {
        type: 'Input',
        message: 'What is the email of the engineer?',
        name: 'email'
      },
      {
        type: 'Input',
        message: 'What is the id of the engineer?',
        name: 'id'
      },
      {
        type: 'Input',
        message: 'What is the engineers github name?',
        name: 'github'
      }
  ];
  const employeeQuestions = [
    {
      type: 'List',
      message: 'What type of employee would you like to make?',
      choices: ['Manager', 'Engineer', 'Intern', 'No more employees']
    }
  ];
// STRUCTURING IT

// start with manager function, since every team needs a manager
// at the end of manager function, call a createTeam function

// this function would simply ask the user which type of employee they would like to add, based on their choice, run the correesponding function

// at the end, use fs to write file while sending the team array over to the function you brought in from page-template.js

function managerQuestions() {
  inquirer
  .prompt(managerQuestions)
  .then((data) => {
    const manager = new Manager(data.name, data.id, data.email, data.officeNumber); 
    teamMembers.push(manager);
    menu();
  })
};
function internQuestions () {
  inquirer
  .prompt(internQuestions)
  .then((data) => {
    const intern = new Intern(data.name, data.id, data.email, data.school);
    teamMembers.push(intern);
    menu();
  })
};
function engineerQuestions () {
  inquirer
  .prompt(engineerQuestions)
  .then((data) => {
    const engineer = new Engineer(data.name, data.id, data.email, data.github);
    teamMembers.push(engineer);
    menu();
  })
}
function menu() {
  inquirer
  .prompt(employeeQuestions)
  .then((data) => {
    const nextChoice = data.employeeQuestions;
    switch (nextChoice) {
      case 'Manager':
        managerQuestions();
        break;
      case 'Intern':
        internQuestions();
        break;
      case 'Engineer':
        engineerQuestions();
        break;
    }
  })
}

function init() {
  inquirer
  .prompt(employeeQuestions)
  .then((data) => {
    const nextChoice = data.employeeQuestions;
    switch (nextChoice) {
      case 'Manager':
        managerQuestions();
        break;
      case 'Intern':
        internQuestions();
        break;
      case 'Engineer':
        engineerQuestions();
        break;
    }
  })
};

init();