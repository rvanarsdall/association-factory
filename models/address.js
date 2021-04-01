const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("address", {
    street: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    zipcode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
