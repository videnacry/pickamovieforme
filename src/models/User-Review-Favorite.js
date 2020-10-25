'use strict';
const {
  DataTypes,
  Model
} = require('sequelize');
const sequelize = require('../database/db')


class UserReviewFavorite extends Model {};

module.exports = UserReviewFavorite.init({
  user_id: {
    type:       DataTypes.INTEGER,
    primaryKey: true
  },
  review_id:{
    type:       DataTypes.INTEGER,
    primaryKey: true
  }
}, {
  sequelize,
  modelName: 'userreviewfavorite',
  tableName: 'user_review_favorites',
});
