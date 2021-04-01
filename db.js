const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("babyfactory", "postgres", "password", {
  host: "localhost",
  dialect: "postgres",
});

async function authenticate() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
authenticate();
User = sequelize.import("./models/user.js");
Address = sequelize.import("./models/address.js");
User.hasOne(Address);
Address.belongsTo(User);
module.exports = sequelize;
