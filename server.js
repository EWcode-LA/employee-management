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
  database: "employee_DB",
});

// connection.connect(function(err) {
//   if (err) throw err;
//   runSearch();
// });

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to database!");
});

function start() {
  inquirer
    .prompt({
      type: "list",
      name: "selection",
      message: "Select an action",
      choices: [
        "View Departments", 
        "View Roles", 
        "View Employees", 
        "Add Department",
        "Quit"
      ],
    })
    .then(function (answers) {
      switch (answers.selection) {
        case "View Departments":
          viewDepartments();
          break;

        case "View Roles":
          viewRoles();
          break;

        case "View Employees":
          viewEmployees();
          break;

        case "Add Department":
          addDepartment();
          break;  

        case "Add Roles":
          addRole();
          break; 

        case "Quit":
          connection.end();
          break;

        default:
          
      }
    });
}

function viewEmployees() {
  const sequelQuery = "SELECT * FROM employee";
  connection.query(sequelQuery, function (err, res) {
    if (err) throw err;

    console.table(res);
    start();
  });
}

function viewDepartments() {
  // (1) Declare a variable that will hold the SQL
  // statement for selecting all available departments in the
  // 'department' table
  const sequelQuery = "SELECT name FROM department";
  // (2) Use your 'connection' object to perform the query using the
  // variable above.
  connection.query(sequelQuery, function (err, res) {
    if (err) throw err;

    // (3) When you get the results back, display it using console.table()
    console.table(res);
    start();
  });
}

function addDepartment() {
  // (1) Declare a variable that will hold the SQL statement for inserting
  // new data into the 'department' table
  // let sequelQuery = "INSERT INTO department (name) VALUES";
  // (2) Use inquirer.prompt() to ask questions for the user
  // that will be needed to populate the 'department' table
  console.log('addDepartment');
  inquirer.prompt ([{
      name: "department",
      message: "What is the name of the department that you want to add?"
  }
])
  .then(function (answers) {
    // Check if there's no answer, in which case we exit out
    if (!answers.department) {
      return;
    }

    // (3) When you receive the answer from the user, use the data
    // as part of the insert statement

    let sequelQuery = `INSERT INTO department (name) VALUES ('${answers.department}')`;

    // (4) Use your connection.query() method to execute the insert statement
    connection.query(sequelQuery, function (err, res) {
      if (err) throw err;
      // (5) Display all the departments again to confirm that the new
      // department has been added
      viewDepartments();
    });
  });
}

function viewRoles() {
  const sequelQuery = "SELECT * FROM role";
  connection.query(sequelQuery, function (err, res) {
    if (err) throw err;

    console.table(res);
    start();
  });
}

function addRole() {
  // (1) Declare a variable that will hold the SQL statement for inserting
  // new data into the 'role' table
  // let sequelQuery = "INSERT INTO role (title) VALUES";
  // (2) Use inquirer.prompt() to ask questions for the user
  // that will be needed to populate the 'role' table
  console.log('addRole');
  inquirer.prompt ([{
      name: "role",
      message: "What is the title of the role that you want to add?"
  }
])
  .then(function (answers) {
    // Check if there's no answer, in which case we exit out
    if (!answers.role) {
      return;
    }

    // (3) When you receive the answer from the user, use the data
    // as part of the insert statement

    let sequelQuery = `INSERT INTO role (title) VALUES ('${answers.role}')`;

    // (4) Use your connection.query() method to execute the insert statement
    connection.query(sequelQuery, function (err, res) {
      if (err) throw err;
      // (5) Display all the roles again to confirm that the new
      // role has been added
      viewRoles();
    });
  });
} 


function addEmployee() {
  inquirer.prompt([
    {
      name: "firstName",
      type: "input",
      message: "What is the employee first name?",
    },
    {
      name: "lastName",
      type: "input",
      message: "What is the employee last name?",
    },

    {
      name: "role",
      type: "list",
      choices: [
        "Sales Lead",
        "Salesperson",
        "Lead Engineer",
        "Software Engineer",
        "Account Manager",
        "Accountant",
        "Legal Team Lead",
      ],
      message: "What is the employee role?",
    },
    {
      name: "manager",
      type: "list",
      choices: ["none"],
      message: "What is the employee's manager?",
    },
  ]);
}

start();
