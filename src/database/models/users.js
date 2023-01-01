'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {

    static associate(models) {
        users.hasMany(models.orders, { foreignKey: 'id', as: 'userToOrders' });
      
    }
  }
  users.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      mobile: DataTypes.STRING,
      departament: DataTypes.STRING,
      verificationCode: DataTypes.STRING,
      emailChecked: DataTypes.BOOLEAN,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
      cashforceAdm: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'users',
    }
  );
  return users;
};
