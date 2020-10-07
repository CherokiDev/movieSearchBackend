'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class movie extends Model {
    static associate(models) {
      this.belongsToMany(models.Order, { through: models.OrderMovie });
    }
  };
  movie.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: DataTypes.STRING,
    year: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'movie',
  });
  return movie;
};