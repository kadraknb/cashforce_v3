<script>
import DetailProvider from './DetailProvider.vue'
import getAPI from '../services/getAPI';

export default {
  components: {
    DetailProvider,
  },
  data() {
    return {
      tableNF: [],
      provider: {},
      showProvider: false,
    }
  },
  beforeCreate() {
    const getOrders = async () => getAPI('GET', '/orders')
      .then(({ data: orders }) => this.tableNF = orders)
    getOrders()
  },
  methods: {
    viewProvider(id) {
      const getProvider = async () => getAPI('GET', `/Providers/${id}`)
        .then(({ data: Provider }) => this.provider = Provider)
        getProvider()
        this.showProvider = true
    },
    showProviderFalse() {
      this.showProvider = false;
    }
  },
}
</script>

<template>
  <div>
    <table id="tableNF" class="NDark3">
      <thead>
        <tr>
          <th class="null"></th>
          <th>nota fiscal</th>
          <th>sacado</th>
          <th>cedente</th>
          <th>emissão</th>
          <th>valor</th>
          <th>status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(proposta) in tableNF">
          <div></div>
          <td>{{ proposta.nNotaFiscal }}</td>
          <td>{{ proposta.sacado }}</td>
          <td>{{ proposta.cedente }}</td>
          <td>{{ proposta.emissão }}</td>
          <td class="green">R$ {{ proposta.valor }}</td>
          <td id="statusNF" class="green">{{ proposta.status }}</td>
          <td><button v-on:click="viewProvider(proposta.idCedente)">Dados do cedente</button></td>
        </tr>
      </tbody>
    </table>
    <DetailProvider v-if="this.showProvider" v-bind="{ provider, showProviderFalse }" />
  </div>
</template>



<style>
#tableNF {
  position: absolute;
  z-index: 3;
}

#tableNF th {
  height: 22px;
  padding: 0.5rem 1.8rem 1.5rem;

  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  text-transform: uppercase;
  color: #A1A8B8;
}

#tableNF tbody button {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.5rem 1.8rem;

  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;

  color: #727D94;
  border: 1px solid #CAD3FF;
  border-radius: 24px;
  box-sizing: border-box;
  background-color: #ffffff;
  transition: 0.5s;
}

#tableNF tbody button:hover {
  color: #ffffff;
  background-color: #727D94;
  box-shadow: 0px 0px 30px #727D94;
}

#tableNF td {
  padding: 1rem 1.0rem 1.5rem 1.9rem;

  font-size: 14px;
  line-height: 18px;
}

.null {
  display: block;
  position: fixed;
  z-index: -23;
}

#tableNF tbody tr div {
  width: 1103px;
  height: 3.1rem;
  margin-top: 0.55rem;
  position: absolute;
  z-index: -1;

  border: 1px solid #DFE2EB;
  border-radius: 6px;
}

.green {
  color: #00AD8C;
}

.NDark3 {
  color: #4D5566;
}

#statusNF {
  width: 240px;
  text-transform: uppercase;
}

@media (max-width: 1446px) {
  #tableNF tbody tr div {
    width: 100%;
    height: 4.1rem;
  }
}

@media (max-width: 1302px) {
  #tableNF tbody tr div {
    width: 100%;
    height: 5.1rem;
  }
}
</style>
