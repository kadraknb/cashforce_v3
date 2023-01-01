'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class orders extends Model {

    static associate(models) {
      orders.belongsTo(models.users, { foreignKey: 'userId', as: 'userToOrders' });
      orders.belongsTo(models.buyers, { foreignKey: 'buyerId', as: 'buyerToOrders' });
      orders.belongsTo(models.cnpjs, { foreignKey: 'cnpjId', as: 'cnpjToOrders' });
      orders.belongsTo(models.providers, { foreignKey: 'providerId', as: 'providerToOrders' });
      orders.hasOne(models.orderportions, { foreignKey: 'id', as: 'orderToOrders' });

    }
  }
  orders.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      orderNfId: DataTypes.STRING,
      orderNumber: DataTypes.STRING,
      orderPath: DataTypes.STRING,
      orderFileName: DataTypes.STRING,
      orderOriginalName: DataTypes.STRING,
      emissionDate: DataTypes.STRING,
      pdfFile: DataTypes.STRING,
      emitedTo: DataTypes.STRING,
      nNf: DataTypes.STRING,
      CTE: DataTypes.STRING,
      value: DataTypes.STRING,
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
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
        primaryKey: true,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      buyerId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'buyers',
          key: 'id',
        },
        primaryKey: true,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      providerId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'providers',
          key: 'id',
        },
        primaryKey: true,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      orderStatusBuyer: DataTypes.STRING,
      orderStatusProvider: DataTypes.STRING,
      deliveryReceipt: DataTypes.STRING,
      cargoPackingList: DataTypes.STRING,
      deliveryCtrc: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'orders',
    }
  );
  return orders;
};
