module.exports = function(sequelize, DataTypes) {
  var Property = sequelize.define("Property", {
    propertyType: DataTypes.STRING,
    propertyAddNum: DataTypes.INT,
    propertyAddStreet: DataTypes.STRING,
    propertyAddCity: DataTypes.STRING,
    propertyAddSate: DataTypes.STRING,
    propertyAddZIP: DataTypes.INT,
  });

  Property.associate = function(models) {
    // We're saying that a Property should belong to an User
    // A Property can't be created without an User due to the foreign key constraint
    Property.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    }),
    Property.hasMany(models.Time, {
      onDelete: "cascade"
    });
  };

  return Property;
};
