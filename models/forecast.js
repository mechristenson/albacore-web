module.exports = function (sequelize, DataTypes) {
  return sequelize.define('forecast', {
    spotId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    spotName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
};
