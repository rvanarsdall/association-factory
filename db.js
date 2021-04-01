const { Sequelize } = require("sequelize");

const db = new Sequelize("babyfactory", "postgres", "password", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = db;
