const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("babyfactory", "postgres", "password", {
  host: "localhost",
  dialect: "postgres",
});

async function authenticate() {
  try {
    await sequelize.authenticate();
    associate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
function associate() {
  User = sequelize.import("./models/user.js");
  Address = sequelize.import("./models/address.js");
  User.hasMany(Address);
  Address.belongsTo(User);
}

authenticate();
module.exports = sequelize;
