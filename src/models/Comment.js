'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Comment.belongsTo(models.Review, {
        foreignKey: 'review_id',
      })
    }
  };
  Comment.init({
    comment_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: false
    },
    review_id: {
      type: DataTypes.INTEGER,
      references: {
        model: {
          tableName: 'review',
        },
        key: 'review_id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    },
    // user_id: {
    //     type: DataTypes.INTEGER,
    //     references: {
    //         model: {
    //             tableName: 'user',
    //         },
    //         key : 'user_id'
    //     }
    // },
    creation_date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    update_date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    sequelize,
    modelName: 'Comment',
    tableName: 'comment',
    updatedAt: 'update_date',
    createdAt: 'creation_date',
    dialect: 'mysql'
  });
  
  return Comment;
};