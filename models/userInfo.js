module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define("Users", {
    // Data will be pulled in from DOM
    userName: {
      type: DataTypes.STRING,
      allowNull: false
    }, 
    userPassword: {
      type: DataTypes.STRING,
      allowNull: false,

      validate: {
        min: 5
      }
    },
    userPhone: { 
      type: DataTypes.BIGINT,
      allowNull: false,

      validate: {
        max: 10
      }
    },
    userEmail: {
      type: DataTypes.STRING,
      allowNull: false 
    },
    userCC: { 
      type: DataTypes.INTEGER
      // checks for credit card (demo purposes uses dummy CC/none)
      // validate: {
      //   isCreditCard :true
      // }
    }
  });

  Users.associate = function(models) {
    // Associating user with Propertys
    // When an user is deleted, also delete any associated Propertys
    Users.hasMany(models.Properties, {
      onDelete: "cascade"
    });
  };

  return Users;
};
