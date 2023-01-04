const { serviceOrders } = require('../services');
const { formatNF } = require('../utils');

const getAll = async (_req, res) => {
  const result = await serviceOrders.getAllOrders();
  try {
    res.status(200).json(formatNF(result));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAll };
