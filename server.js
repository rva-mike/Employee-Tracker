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
        .then(function (result) {
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


//functions from above

function viewDepartment() {
    // select from the db
    const sql = `SELECT * FROM department`;
    connection.query(sql, function (err, res) {
        if (err) throw err;
        console.table(res);
        startPrompt();
    });
    // show the result to the user (console.table)
}



function viewRoles() {
    // select from the db
    const sql = "SELECT * FROM employee_role";
    connection.query(sql, function (err, res) {
        if (err) throw err;
        console.table(res);
        startPrompt();
    });
    // show the result to the user (console.table)
}


function viewEmployees() {
    // select from the db
    const sql = "SELECT * FROM employee";
    connection.query(sql, function (err, res) {
        if (err) throw err;
        console.table(res);
        startPrompt();
    });
    // show the result to the user (console.table)
}


function addDepartment() {
    inquirer.prompt({

        type: "input",
        message: "What is the name of the department?",
        name: "deptName"

    }).then(function (answer) {


        connection.query("INSERT INTO department (department_name) VALUES (?)", [answer.deptName], function (err, res) {
            if (err) throw err;
            console.table(res)
            startPrompt()
        })
    })
}



function addRole() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What's the name of the role?",
                name: "roleName"
            },
            {
                type: "input",
                message: "What is the salary for this role?",
                name: "salaryTotal"
            },
            {
                type: "input",
                message: "What is the department id number?",
                name: "deptID"
            }
        ])
        .then(function (answer) {


            connection.query("INSERT INTO employee_role (title, salary, department_id) VALUES (?, ?, ?)", [answer.roleName, answer.salaryTotal, answer.deptID], function (err, res) {
                if (err) throw err;
                console.table(res);
                startPrompt();
            });
        });
}



function addEmployee() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What's the first name of the employee?",
                name: "eeFirstName"
            },
            {
                type: "input",
                message: "What's the last name of the employee?",
                name: "eeLastName"
            },
            {
                type: "input",
                message: "What is the employee's role id number?",
                name: "roleID"
            },
            {
                type: "input",
                message: "What is the manager id number?",
                name: "managerID"
            }
        ])
        .then(function (answer) {


            connection.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)", [answer.eeFirstName, answer.eeLastName, answer.roleID, answer.managerID], function (err, res) {
                if (err) throw err;
                console.table(res);
                startPrompt();
            });
        });
}



function updateEmployee() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Which employee would you like to update?",
                name: "eeUpdate"
            },

            {
                type: "input",
                message: "What do you want to update to?",
                name: "updateRole"
            }
        ])
        .then(function (answer) {
            // let sql = `INSERT INTO department (name) VALUES ("${answer.deptName}")`
            //let sql = `'UPDATE employee SET role_id=${answer.updateRole} WHERE first_name= ${answer.eeUpdate}`;
            //console.log(sql);

            connection.query('UPDATE employee SET role_id=? WHERE first_name= ?', [answer.updateRole, answer.eeUpdate], function (err, res) {
                if (err) throw err;
                console.table(res);
                startPrompt();
            });
        });
}


//Quit the application
function quit() {
    connection.end();
    process.exit();
}
