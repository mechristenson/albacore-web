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
    },
    // Convert Swell into separate model
    primarySwellHeight: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    primarySwellPeriod: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    primarySwellDirection: {
      type: DataTypes.STRING,
      allowNull: false
    },
    secondarySwellHeight: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    secondarySwellPeriod: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    secondarySwellDirection: {
      type: DataTypes.STRING,
      allowNull: false
    },
    windUnits: {
      type: DataTypes.STRING,
      allowNull: false
    },
    windSpeed: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    windDirection: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
};
