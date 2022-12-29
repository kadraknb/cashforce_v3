'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('offers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      tax: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      tariff: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      adValorem: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      float: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      iof: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      expiresIn: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      paymentStatusSponsor: {
        defaultValue: 0,
        type: Sequelize.BOOLEAN,
      },
      paymentStatusProvider: {
        defaultValue: 0,
        type: Sequelize.BOOLEAN,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      orderId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'orders',
          key: 'id',
        },
      },
      sponsorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'sponsors',
          key: 'id',
        },
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('offers');
  },
};
