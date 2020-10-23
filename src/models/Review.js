const {DataTypes, Model} = require('sequelize')
const sequelize = require('../database/db')

class Review extends Model{
    
}

Review.init({
    review_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
      content: {
        type: DataTypes.STRING,
        allowNull: false
      },
      movie_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      reviews_count: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      creation_date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      },
      update_date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      },
      delete_date: {
        type: DataTypes.DATE,
      }
},{
    sequelize,
    modelName: 'review',
    createdAt: 'creation_date',
    updatedAt: 'update_date',
    tableName: 'review',
    dialect: 'mysql'
})

// Review.create({
//     content: 'rev',
//     movie_id: 1,
//     title: 'tit',
//     reviews_count: 1
// }).catch(err => console.log(err))