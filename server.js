// Importing
const mysql2 = require("mysql2");
const inquirer = require("inquirer");
const util = require("util");
const console = require("console");

const dbConfig = {
    host: "localhost",
    user: "root",
    password: "password",
    database: "employees_db"
};

const connection = mysql.createConnection(dbConfig);
