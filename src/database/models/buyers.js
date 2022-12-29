'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class buyers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // buyers.belongsTo(models.cnpjs, { key: 'cnpjId', as: 'cnpjBuyers' });
      // buyers.hasMany(models.orders, { key: 'buyerId', as: 'orderBuyers' });
    }
  }
  buyers.init(
    {
      id: DataTypes.INTEGER,
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
      cnpjId: DataTypes.INTEGER,
      confirm: DataTypes.BOOLEAN,
      email: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'buyers',
      // underscored: true,
      // timestamps: false,
    }
  );
  return buyers;
};
