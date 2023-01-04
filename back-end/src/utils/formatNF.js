const status = [
  'Pendente de confirmação',
  'Pedido confirmado',
  'Não reconhece o pedido',
  'Mercadoria não recebida',
  'Recebida com avaria',
  'Devolvida',
  'Recebida com devolução parcial',
  'Recebida e confirmada',
  'Pagamento Autorizado',
];

const formatNF = (NF) => {
  const data = NF.map((itemNF) => ({
    nNotaFiscal: itemNF.nNf,
    sacado: itemNF.buyerToOrders.name,
    idCedente: itemNF.providerToOrders.id,
    cedente: itemNF.providerToOrders.name,
    emissão: new Date(itemNF.emissionDate).toLocaleDateString(),
    valor: Number(itemNF.value).toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
    }),
    status: status[itemNF.orderStatusBuyer],
  }));

  return data;
};

module.exports = { formatNF };
