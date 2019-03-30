module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define("Users", {
    // Data will be pulled in from DOM
    userName: DataTypes.STRING,
    userPassword: DataTypes.STRING,
    userPhone: DataTypes.BIGINT,
    userEmail: DataTypes.STRING,
    userCC: DataTypes.INTEGER
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
