module.exports = function(sequelize, DataTypes) {
  var Times = sequelize.define("Times", {
    // timeMonth: DataTypes.INTEGER,
    // timeDay: DataTypes.INTEGER,
    timeStarting: DataTypes.INTEGER,
    timeEnding: DataTypes.INTEGER
  });

  Times.associate = function(models) {
    // We're saying that a Time should belong to a Property
    // A Time can't be created without a Property due to the foreign key constraint
    Times.belongsTo(models.Properties, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Times;
};
