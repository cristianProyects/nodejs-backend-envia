const { Model, DataTypes, Sequelize } = require('sequelize');

const USER_TABLE = 'users';

const UserSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING
  },
  role: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: 'customer'
  }
}

class Users extends Model {
  static associate(models) {
    // associate
    // this.hasOne(models.Customer, {
    //   as:'customer',
    //   foreignKey: 'userId'
    // })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'Users',
      timestamps: false
    }
  }
}


module.exports = { USER_TABLE, UserSchema, Users }