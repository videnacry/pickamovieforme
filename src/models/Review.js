'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Review.hasMany(models.Comment)
    }
  };
  Review.init({
    review_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false
    },
    movie_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    reviews_count: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    creation_date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    update_date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    delete_date: {
      type: DataTypes.DATE,
    }
  }, {
    sequelize,
    modelName: 'Review',
    tableName: 'review',
    updatedAt: 'update_date',
    createdAt: 'creation_date',
    dialect: 'mysql'
  });
  return Review;
};