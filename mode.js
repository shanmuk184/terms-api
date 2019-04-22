const Sequelize = require('sequelize');

const sequelize = new Sequelize('postgres://postgres:cloud123@localhost:5432/initdb');
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.DB_PORT;
console.log(`Your port is ${port}`);