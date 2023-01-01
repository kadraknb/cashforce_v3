'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class buyers extends Model {

    static associate(models) {
      buyers.belongsTo(models.cnpjs, { foreignKey: 'cnpjId', as: 'cnpjToBuyers' });
      buyers.hasMany(models.orders, { foreignKey: 'id', as: 'buyerToOrders' });
    }
  }
  buyers.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      tradingName: DataTypes.STRING,
      cashforceTax: DataTypes.STRING,
      responsibleName: DataTypes.STRING,
      responsibleEmail: DataTypes.STRING,
      responsiblePosition: DataTypes.STRING,
      responsiblePhone: DataTypes.STRING,
      responsibleMobile: DataTypes.STRING,
      website: DataTypes.STRING,
      postalCode: DataTypes.STRING,
      address: DataTypes.STRING,
      number: DataTypes.STRING,
      complement: DataTypes.STRING,
      neighborhood: DataTypes.STRING,
      city: DataTypes.STRING,
      state: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      situation: DataTypes.STRING,
      situationDate: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
      cnpjId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'cnpjs',
          key: 'id',
        },
        primaryKey: true,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      confirm: DataTypes.BOOLEAN,
      email: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'buyers',
    }
  );
  return buyers;
};
