'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class orderportions extends Model {

    static associate(models) {
      orderportions.belongsTo(models.orders, { key: 'orderId', as: 'orderToOrderportions' });

    }
  }
  orderportions.init(
    {
      id: DataTypes.INTEGER,
      nDup: DataTypes.STRING,
      dVenc: DataTypes.STRING,
      vDup: DataTypes.STRING,
      availableToMarket: DataTypes.BOOLEAN,
      orderId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'orders',
          key: 'id',
        },
        primaryKey: true,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    },
    {
      sequelize,
      modelName: 'orderportions',
    }
  );
  return orderportions;
};
