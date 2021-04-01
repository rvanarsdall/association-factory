const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("user", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    passwordhash: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
