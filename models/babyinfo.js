const { DataTypes } = require("sequelize");
const db = require("../db");
const BabyInfo = db.define("babyinfo", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sex: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  weight: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
module.exports = BabyInfo;
