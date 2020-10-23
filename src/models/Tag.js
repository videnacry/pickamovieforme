const {Model, DataTypes} = require('sequelize')
const sequelize = require('../database/db')

class Tag extends Model{

}

Tag.init({
    tag_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    sequelize,
    dialect:'mysql',
    modelName:'tag',
    tableName:'tag',
    createdAt: false,
    updatedAt: false
})

Tag.create({name:'drama'}).then(()=>console.log('hol')).catch(err => console.log(err))