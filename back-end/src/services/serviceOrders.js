const { orders, buyers, providers } = require('../database/models');

const getAllOrders = async () => {
  const result = orders.findAll({
    attributes: ['nNf', 'emissionDate', 'value', 'orderStatusBuyer'],
    include: [
      { model: buyers, as: 'buyerToOrders', attributes: ['name'] },
      {
        model: providers,
        as: 'providerToOrders',
        attributes: ['name'],
      },
    ],
  });
  return result;
};

module.exports = { getAllOrders };