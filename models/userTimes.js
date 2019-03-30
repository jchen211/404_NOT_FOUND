module.exports = function(sequelize, DataTypes) {
  var Time = sequelize.define("Time", {
    // timeMonth: DataTypes.INTEGER,
    // timeDay: DataTypes.INTEGER,
    timeStarting: DataTypes.INTEGER,
    timeEnding: DataTypes.INTEGER
  });

  Time.associate = function(models) {
    // We're saying that a Time should belong to a Property
    // A Time can't be created without a Property due to the foreign key constraint
    Time.belongsTo(models.Property, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Time;
};
