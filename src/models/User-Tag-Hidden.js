'use strict';
const {
  DataTypes,
  Model
} = require('sequelize');
const sequelize = require('../database/db')


class UserTagHidden extends Model {};

module.exports = UserTagHidden.init({
  user_id:{
    type:       DataTypes.INTEGER,
    primaryKey: true
  },
  tag_id: {
    type:       DataTypes.INTEGER,
    primaryKey: true
  }
}, {
  sequelize,
  modelName: 'usertaghidden',
  tableName: 'user_tag_hiddens',
});
