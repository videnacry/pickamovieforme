const {
  DataTypes,
  Model
} = require('sequelize')
const sequelize = require('../database/db')

class User extends Model {}


module.exports = User.init({
  user_id: {
    type:           DataTypes.INTEGER,
    allowNull:      false,
    primaryKey:     true,
    autoIncrement:  true
  },
  photo:        DataTypes.STRING,
  description:  DataTypes.STRING,
  name:         DataTypes.STRING,
  username:     DataTypes.STRING,
  email:        DataTypes.STRING,
  password:     DataTypes.STRING
},
{
  sequelize,
  modelName:  'user',
  tableName:  'users',
  user_id:    'user_id',
  createdAt:  'creation_date',
  updatedAt:  'updated_date',
  deletedAt:  'deleted_date',
  dialect:    'mysql'
})

const Review    = require('./Review')
User.hasMany(Review, {foreignKey: 'user_id'})
