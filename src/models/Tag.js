'use strict';
const {
  DataTypes,
  Model
} = require('sequelize');

class Tag extends Model {};

module.exports = Tag.init({
  tag_id: {
    type:           DataTypes.INTEGER,
    primaryKey:     true,
    autoIncrement:  true
  },
  name: {
    type: DataTypes.STRING
  }
}, {
  sequelize,
  modelName:  'tag',
  tableName:  'tags',
  timestamps: false,
  dialect:    'mysql'
});