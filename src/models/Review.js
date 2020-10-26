'use strict';
const {
  DataTypes,
  Model
} = require('sequelize');
const sequelize = require('../database/db')

class Review extends Model {}

module.exports = Review.init({
  review_id: {
    type:           DataTypes.INTEGER,
    primaryKey:     true,
    autoIncrement:  true
  },
  content:{
    type: DataTypes.STRING,
    validate: {
      notEmpty : {
        msg: 'Write your review !'
      }
    }
  },
  movie_id:       DataTypes.INTEGER,
  title:          DataTypes.STRING,
  reviews_count:  DataTypes.INTEGER,
  user_id:        DataTypes.INTEGER,
  creation_date:  DataTypes.DATE,
  updated_date:    DataTypes.DATE
}, 
{
  sequelize,
  modelName:      'review',
  tableName:      'reviews',
  reviews_count:  'reviews_count',
  user_id:        'user_id',
  updatedAt:      'updated_date',
  createdAt:      'creation_date',
  dialect:        'mysql'
})

const Comment   = require('./Comment')
const User      = require('./User')
Review.hasMany(Comment, {foreignKey: 'comment_id'})
Review.belongsTo(User, {foreignKey: 'user_id'})