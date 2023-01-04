const { providers, cnpjs } = require('../database/models');

const getProviderById = async (id) => {
  const provider = await providers.findOne({
    where: { id },
    attributes: ['id', 'name', 'tradingName', 'email'],
    include: [{ model: cnpjs, as: 'cnpjToProviders', attributes: ['cnpj'] }],
  });
  return provider;
};

module.exports = { getProviderById };
