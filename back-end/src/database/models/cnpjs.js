'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cnpjs extends Model {

    static associate(models) {
      cnpjs.hasMany(models.buyers, { foreignKey: 'id', as: 'cnpjToBuyers' });
      cnpjs.hasMany(models.providers, { foreignKey: 'id', as: 'cnpjToProviders' });
      cnpjs.hasMany(models.sponsors, { foreignKey: 'id', as: 'cnpjToSponsors' });
      cnpjs.hasMany(models.orders, { foreignKey: 'id', as: 'cnpjToOrders' });

    }
  }
  cnpjs.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      cnpj: DataTypes.STRING,
      companyType: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'cnpjs',
    }
  );
  return cnpjs;
};
