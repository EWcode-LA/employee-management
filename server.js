const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Penguinswin2020",
  database: "employee_DB"
});

// connection.connect(function(err) {
//   if (err) throw err;
//   runSearch();
// });

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});

function start() {
  inquirer.prompt ({
  type: 'lists',
  name: 'selection',
  message: 'Select an action'
  choices: [
    'View Departments',
    'View Roles',
    'View Employees',
    'Quit'
  ]
  })

  .then(function (answers) {
    switch (answers.selection) {
      case 'View Departments':
        viewDepartment();
        break;
      case 'View Roles':
        viewRoles();
        break;
      case 'View Employees':
        viewEmployees();
        break;
      case 'Quit':
        connection.end():
        break;  
    }

  })
};

  