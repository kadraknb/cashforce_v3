'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      orderNfId: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      orderNumber: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      orderPath: {
        type: Sequelize.STRING,
      },
      orderFileName: {
        type: Sequelize.STRING,
      },
      orderOriginalName: {
        type: Sequelize.STRING,
      },
      emissionDate: {
        type: Sequelize.STRING,
      },
      pdfFile: {
        type: Sequelize.STRING,
      },
      emitedTo: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      nNf: {
        type: Sequelize.STRING,
      },
      CTE: {
        type: Sequelize.STRING,
      },
      value: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      cnpjId: {
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
      },
      buyerId: {
        type: Sequelize.INTEGER,
      },
      providerId: {
        type: Sequelize.INTEGER,
      },
      orderStatusBuyer: {
        defaultValue: 0,
        type: Sequelize.STRING,
      },
      orderStatusProvider: {
        defaultValue: 0,
        type: Sequelize.STRING,
      },
      deliveryReceipt: {
        type: Sequelize.STRING,
      },
      cargoPackingList: {
        type: Sequelize.STRING,
      },
      deliveryCtrc: {
        type: Sequelize.STRING,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('orders');
  },
};
