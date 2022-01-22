import {DataTypes, Model} from 'sequelize'
import sequelize from '../config/db.js'

class User extends Model {}

User.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true }, 
    password: { type: DataTypes.STRING, allowNull: false }
}, {
    sequelize,
    autoIncrement: false,
    modelName: "user"
})

export default User;