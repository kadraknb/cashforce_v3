const { serviceProviders } = require('../services');
const { formatProviders } = require('../utils');

const getProvider = async (req, res) => {
  const { id } = req.params;
  const result = await serviceProviders.getProviderById(id);

  try {
    res.status(200).json(formatProviders(result));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getProvider };
