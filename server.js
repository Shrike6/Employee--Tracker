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

const connection = mysql2.createConnection(dbConfig);

connection.query = util.promisify(connection.query);

const menu = [
	{
		type: "list",
		message: "What would you like to do?",
		name: "userResponse",
		choices: [
		    "View All Departments",
            "View All Roles",
            "View All Employees",
            "Add Department",
            "Add Role",
            "Add Employee",
            "Update Employee Info",
		],
	},
];

runApp = () => {
    inquirer.prompt(menu)
	.then((data) => {
        switch (menu) {
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
    })    
};

runApp()