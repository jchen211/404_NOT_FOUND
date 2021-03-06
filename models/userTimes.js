module.exports = function(sequelize, DataTypes) {
  var Times = sequelize.define("Times", {
    timeStarting: {
      type: DataTypes.STRING,
      allowNull: false
    },
    timeEnding: {
      type: DataTypes.STRING,
      allowNull: false
    }
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

