module.exports = function (sequelize, DataTypes) {
  return sequelize.define('forecast', {
    spotId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    spotName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    timestamp: {
      type: DataTypes.TIME,
      allowNull: false
    },
    swellUnits: {
      type: DataTypes.STRING,
      allowNull: false
    },
    minSwellHeight: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    maxSwellHeight: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
};
