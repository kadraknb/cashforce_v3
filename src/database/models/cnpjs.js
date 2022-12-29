'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cnpjs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      cnpjs.hasMany(models.buyers, { key: 'cnpjId', as: 'cnpjToBuyers' });
      cnpjs.hasMany(models.providers, { key: 'cnpjId', as: 'cnpjToProviders' });
      cnpjs.hasMany(models.sponsors, { key: 'cnpjId', as: 'cnpjToSponsors' });
      cnpjs.hasMany(models.orders, { key: 'cnpjId', as: 'cnpjToOrders' });

    }
  }
  cnpjs.init(
    {
      id: DataTypes.INTEGER,
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
