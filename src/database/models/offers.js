'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class offers extends Model {

    static associate(models) {
      offers.belongsTo(models.sponsors, { foreignKey: 'sponsorId', as: 'sponsorToOffers' });
      offers.belongsTo(models.orders, { foreignKey: 'orderId', as: 'orderToOffers' });
    }
  }
  offers.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
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
