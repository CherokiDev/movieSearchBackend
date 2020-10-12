'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      this.belongsTo(models.User);
      this.belongsToMany(models.movie, { through: models.OrderMovie });
    }
  };
  Order.init({
    status: DataTypes.STRING,
    returnDate: DataTypes.DATE,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};