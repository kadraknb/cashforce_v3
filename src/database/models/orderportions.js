'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class orderportions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      orderportions.belongsToMany(models.orders, { key: 'orderId', as: 'ordersToOrderportions' });

    }
  }
  orderportions.init(
    {
      id: DataTypes.INTEGER,
      nDup: DataTypes.STRING,
      dVenc: DataTypes.STRING,
      vDup: DataTypes.STRING,
      availableToMarket: DataTypes.BOOLEAN,
      orderId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'orderportions',
    }
  );
  return orderportions;
};
