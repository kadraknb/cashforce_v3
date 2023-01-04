const formatProviders = (provider) => {
  const data = {
    id: provider.id,
    nome: provider.name,
    nomeComercial: provider.tradingName,
    email: provider.email,
    cnpj: provider.cnpjToProviders.cnpj,
  };

  return data;
};

module.exports = { formatProviders };
