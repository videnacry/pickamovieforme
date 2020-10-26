'use strict';
const {
  DataTypes,
  Model
} = require('sequelize');
const sequelize = require('../database/db')

  class Comment extends Model {}

module.exports = Comment.init({
  comment_id: {
    type:           DataTypes.INTEGER,
    primaryKey:     true,
    autoIncrement:  true
  },
  comment: {
    type: DataTypes.STRING,
    validate: {
      notEmpty: {
        msg: 'Write your comment.'
      }
    }
  },
  review_id:      DataTypes.INTEGER,
  user_id:        DataTypes.INTEGER,
  creation_date:  DataTypes.DATE,
  update_date:    DataTypes.DATE
}, {
  sequelize,
  modelName:  'comment',
  tableName:  'comments',
  updatedAt:  'updated_date',
  createdAt:  'creation_date',
  dialect:    'mysql'
})