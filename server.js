//required dependencies
const mysql = require('mysql2');
const inquirer = require("inquirer");
const consoleTable = require("console.table")

// Connect to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'sqlRVA123',
    database: 'employee_db'
  });
  

  connection.connect(err => {
    if (err) throw err;
    console.log('****************');
    console.log('Employee Manager');
    console.log('****************');

    startPrompt()

  });


  function startPrompt() {
    inquirer
      .prompt({
        type: "list",
        choices: [
          "View all departments",
          "View all roles",
          "View all employees",
          "Add department",
          "Add role",
          "Add employee",
          "Update employee role",
          "Quit"
        ],
        message: "What would you like to do?",
        name: "option"
      })
      .then(function(result) {
        console.log("You entered: " + result.option);
  
        switch (result.option) {
          case "View all departments":
            viewDepartment();
            break;
          case "View all roles":
            viewRoles();
            break;
          case "View all employees":
            viewEmployees();
            break;
          case "Add department":
            addDepartment();
            break;
          case "Add role":
            addRole();
            break;
          case "Add employee":
            addEmployee();
            break;
          case "Update employee role":
            updateEmployee();
            break;
          default:
            quit();
        }
      });
  }
