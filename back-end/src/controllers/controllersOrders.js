const { serviceOrders } = require('../services');

const getAll = async (_req, res) => {
  const result = await serviceOrders.getAllOrders();
  res.status(200).json(result);
};

module.exports = { getAll };