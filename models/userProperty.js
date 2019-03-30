module.exports = function(sequelize, DataTypes) {
  var Properties = sequelize.define("Properties", {
    propertyType: DataTypes.STRING,
    // propertyAddNum: DataTypes.INTEGER,
    propertyAddStreet: DataTypes.STRING,
    propertyAddCity: DataTypes.STRING,
    propertyAddSate: DataTypes.STRING,
    propertyAddZIP: DataTypes.INTEGER,
    propertyAmenities: DataTypes.TEXT
  });

  Properties.associate = function(models) {
    // We're saying that a Property should belong to an User
    // A Property can't be created without an User due to the foreign key constraint
    Properties.belongsTo(models.Users, {
      foreignKey: {
        allowNull: true
        // allowNull: false
      }
      // }),
      // Property.hasMany(models.Time, {
      //   onDelete: "cascade"
    });
  };

  return Properties;
};
