'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      this.hasMany(models.Order);
    }
  };
  User.init({
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    token: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  User.prototype.toJSON = function () { //override/sobreescritura del método
    const user = this.get();
    delete user.password;
    return user;
  }
  return User;
};