'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class offers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      offers.belongsTo(models.sponsors, { key: 'sponsorId', as: 'sponsorsToOffers' });
      offers.belongsTo(models.orders, { key: 'orderId', as: 'ordersToOffers' });
    }
  }
  offers.init(
    {
      id: DataTypes.INTEGER,
      tax: DataTypes.STRING,
      tariff: DataTypes.STRING,
      adValorem: DataTypes.STRING,
      float: DataTypes.STRING,
      iof: DataTypes.STRING,
      expiresIn: DataTypes.DATE,
      paymentStatusSponsor: DataTypes.BOOLEAN,
      paymentStatusProvider: DataTypes.BOOLEAN,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
      orderId: DataTypes.INTEGER,
      sponsorId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'offers',
    }
  );
  return offers;
};
