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

  });
