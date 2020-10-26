'use strict';
const {
  DataTypes,
  Model
} = require('sequelize');
const sequelize = require('../database/db')


class Tag extends Model { };

module.exports = Tag.init({
  tag_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    validate: {
      notEmpty: {
        msg: 'Tag name is required !'
      },
      fn: async function (val) {

        const tag = await Tag.findOne({
          where: {
            name: val
          }
        })
        if (tag) {
          throw new Error('Name already exists !')
        }
      }
    }
  }
}, {
  sequelize,
  modelName: 'tag',
  tableName: 'tags',
  timestamps: false,
  dialect: 'mysql'
});