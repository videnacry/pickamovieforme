'use strict';
const {
  DataTypes,
  Model
} = require('sequelize');
const sequelize = require('../database/db')


class ReviewTag extends Model {};

module.exports = ReviewTag.init({
  review_id: {
    type:       DataTypes.INTEGER,
    primaryKey: true
  },
  tag_id: {
    type:       DataTypes.INTEGER,
    primaryKey: true
  }
}, {
  sequelize,
  modelName: 'reviewtag',
  tableName: 'review_tag',
});

const Tag = require('./Tag')
ReviewTag.hasMany(Tag, {foreignKey: 'tag_id', sourceKey: 'tag_id'})
const Review = require('./Review')
ReviewTag.hasMany(Review, {foreignKey: 'review_id', sourceKey:'review_id'})