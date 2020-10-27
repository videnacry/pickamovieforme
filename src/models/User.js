const {
  DataTypes,
  Model
} = require('sequelize')
const sequelize = require('../database/db')

class User extends Model { }


module.exports = User.init({
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  photo: DataTypes.STRING,
  description: DataTypes.STRING,
  name:
  {
    type: DataTypes.STRING,
    validate: {
      len: {
        args: [[3, 50]],
        msg: "Name is required, min: 3, max: 50 characters"
      },
      is: {
        args: /^[a-zA-Z\s]*$/i,
        msg: "Invalid name. Only letters and spaces."
      }
    }
  },
  username:
  {
    type: DataTypes.STRING,
    validate: {
      len: {
        args: [[3, 20]],
        msg: "the username is required and must be between 3 and 20 characters"
      },
      is: {
        args: /^(?=[a-zA-Z0-9._]{3,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/i,
        msg: 'Username invalid. (Use letters, numbers, "_" and "." - Do not use . o _ at the beginning or end or "..", "__")'
      }
    }
  },
  email:
  {
    type: DataTypes.STRING,
    validate: {
      notEmpty: {
        msg: "Email is required."
      },
      isEmail: {
        msg: "Enter a valid email."
      }
    },
    unique: {
      args: true,
      msg: 'Email already in user'
    }
  },
  password:
  {
    type: DataTypes.STRING,
    // validate: {
    //   args: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i,
    //   msg: "Invalid password: min. 8 characters, at least one uppercar, one lowercase, one number and one special character (@$!%*?&)."
    // }
  }
},
  {
    sequelize,
    modelName: 'user',
    tableName: 'users',
    user_id: 'user_id',
    createdAt: 'creation_date',
    updatedAt: 'updated_date',
    deletedAt: 'deleted_date',
    dialect: 'mysql'
  })

const Review = require('./Review')
const UserTagHidden = require('./User-Tag-Hidden')
const UserReviewFavorite = require('./User-Review-Favorite')

User.hasMany(Review, { foreignKey: 'user_id' })
User.hasMany(UserTagHidden, { foreignKey: 'user_id' })
User.hasMany(UserReviewFavorite, { foreignKey: 'user_id' })
