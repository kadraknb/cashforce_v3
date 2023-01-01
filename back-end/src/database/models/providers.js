'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class providers extends Model {

    static associate(models) {
      providers.belongsTo(models.cnpjs, { foreignKey: 'cnpjId', as: 'cnpjToProviders' });
      providers.hasMany(models.orders, { foreignKey: 'id', as: 'providerToOrders' });
    }
  }
  providers.init(
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
      bank: DataTypes.STRING,
      bankAgency: DataTypes.STRING,
      account: DataTypes.STRING,
      documents: DataTypes.STRING,
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
      email: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'providers',
    }
  );
  return providers;
};
