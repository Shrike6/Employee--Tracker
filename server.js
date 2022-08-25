// Importing
const mysql2 = require("mysql2");
const inquirer = require("inquirer");
const util = require("util");
const console = require("console");

// Connects mysql to db
const dbConfig = {
    host: "localhost",
    user: "root",
    password: "password",
    database: "employees_db"
};

const connection = mysql.createConnection(dbConfig);

db.query = util.promisify(db.query);

const mainMenu = async () => {
    try {
      let response = await inquirer.prompt({
        type: "list",
        message: "What would you like to do?",
        name: "choice",
        choices: [
          "View All Departments",
          "View All Roles",
          "View All Employees",
          "Add Department",
          "Add Role",
          "Add Employee",
          "Update Employee Info",
        ],
      });
  
      switch (response.choice) {
        case "View All Departments":
          viewAllDept();
          break;
  
        case "View All Roles":
          viewAllRole();
          break;
  
        case "View All Employees":
          viewAllEmpl();
          break;
  
        case "Add Department":
          addDept();
          break;
  
        case "Add New Role":
          addRole();
          break;
  
        case "Add New Employee":
          addEmpl();
          break;
  
        case "Update Employee Info":
          updEmpl();
          break;
      }
    } catch (err) {
      console.log(err);
      mainMenu();
    }
  };
