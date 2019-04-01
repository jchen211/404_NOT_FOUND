
module.exports = function(sequelize, DataTypes) {
  var Properties = sequelize.define("Properties", {
    propertyType: {
      type: DataTypes.STRING,
      allowNull: false
    },
    propertyAddStreet: { 
      type: DataTypes.STRING,
      allowNull: false
    },
    propertyAddCity: {
      type: DataTypes.STRING,
      allowNull: false
      },
    propertyAddSate: {
      type: DataTypes.STRING,
      allowNull: false
    },
    propertyAddZIP: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    propertyTaken: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    propertyAmenities: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });

  Properties.associate = function (models) {
    // We're saying that a Property should belong to an User
    // A Property can't be created without an User due to the foreign key constraint
    Properties.belongsTo(models.Users, {
        foreignKey: {
          // allowNull: true
          allowNull: false
        }
      }),
      Properties.hasMany(models.Times, {
        onDelete: "cascade"
      });

  };

  return Properties;
};
