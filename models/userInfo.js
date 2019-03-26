module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    // Data will be pulled in from DOM
    userName: DataTypes.STRING,
    userPassword: DataTypes.STRING,
    userPhone: DataTypes.INTEGER,
    userEmail: DataTypes.STRING,
    userCC: DataTypes.INTEGER,
  });

  User.associate = function (models) {
    // Associating user with Propertys
    // When an user is deleted, also delete any associated Propertys
    User.hasMany(models.Property, {
      onDelete: "cascade"
    });
  };

  return User;
};