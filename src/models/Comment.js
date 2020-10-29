'use strict';
const {
  DataTypes,
  Model
} = require('sequelize');
const { Sequelize } = require('../database/db');
const sequelize = require('../database/db');
const Models = require('./Models');

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
<<<<<<< HEAD
  updated_date:    DataTypes.DATE
=======
  updated_date:   DataTypes.DATE
>>>>>>> e32211a1fb5222f7d66842fc5b75a2cd09123a39
}, {
  sequelize,
  modelName:  'comment',
  tableName:  'comments',
  updatedAt:  'updated_date',
  createdAt:  'creation_date',
  dialect:    'mysql'
})
// Comment.findAll({include:{model:'', where:{id:[sequelize.col]}}})
// Comment.sequelize.op
const user = require('./User')
Comment.belongsTo(user, {foreignKey: 'user_id'})