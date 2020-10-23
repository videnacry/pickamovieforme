const {DataTypes, Model} = require('sequelize')
const sequelize = require('../database/db')

class Comment extends Model{
    
}

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
            key : 'review_id',
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
},{
    sequelize,
    modelName: 'comment',
    createdAt: 'creation_date',
    updatedAt: 'update_date',
    tableName: 'comment',
    dialect: 'mysql',
})

const review = require('./Review')

Comment.belongsTo(review, {
    as:'review',
    foreignKey:'review_id'
})
review.hasMany(Comment, {
    as:'comments',
    foreignKey:'review_id',
})
review.findAll({include:{model:Comment, as: 'comments'}}).then(reviews => console.log(reviews))
// Comment.create({
//     comment: 'comment',
//     review_id: 1,
//     // user_id: 1
// }).catch(err => console.log(err))

// console.log(require('./Review'))

module.exports = Comment