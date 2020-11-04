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
    poster_path: {
      type: DataTypes.STRING
    },
    overview: {
      type: DataTypes.STRING
    },
    release_date: {
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'movie',
  });
  return movie;
};