module.exports = (sequelize, DataTypes) => {
  const BabyInfo = sequelize.define("babyinfo", {
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
  return BabyInfo;
};
