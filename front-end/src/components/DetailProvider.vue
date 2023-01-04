<script>
export default {
  props: ['provider', 'showProviderFalse'],

  methods: {
    onclickCloche() {
      this.showProviderFalse()
    }
  }
}
</script>

<template >
  <div id="detailMain">
    <div class="dark"></div>
    <div id="infProvider">
      <header id="headerProvider" class="flex-row">{{ provider.nome }}<button v-on:click="onclickCloche">X</button>
      </header>
      <p class="flex-row gree" v-if="provider.nomeComercial">
      <p class="anunciado">Nome comercial: </p> {{ provider.nomeComercial }}</p>
      <p class="flex-row gree" v-if="provider.email">
      <p class="anunciado">Email: </p> {{ provider.email }}</p>
      <p class="flex-row gree" v-if="provider.cnpj">
      <p class="anunciado">CNPJ: </p> {{ provider.cnpj }}</p>
    </div>
  </div>
</template>

<style>
#detailMain {
  position: absolute;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;
  animation: show 0.5s linear ;
}

@keyframes show {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.dark {
  position: absolute;
  z-index: 101;

  width: 100vw;
  height: 100vh;

  background: rgba(0, 0, 0, 0.63);
  backdrop-filter: blur(10.3px);
  -webkit-backdrop-filter: blur(10.3px);
}

#infProvider {
  position: absolute;
  z-index: 102;

  display: flex;
  flex-direction: column;
  padding: 10px;
  width: fit-content;
  height: fit-content;

  font-size: 2rem;
  color: #4D5566;

  background: #fbfdfe;
  box-shadow: 0px 0px 30px rgba(236, 225, 225, 0.5), 0px 0px 30px rgba(236, 225, 225, 0.5);
  border-radius: 15px;
}

.flex-row {
  display: flex;
  flex-direction: row;
}

#headerProvider {
  justify-content: space-between;
  margin-bottom: 10px;

  font-weight: 700;
  background: #fff;

  border-bottom: 1px #DFE2EB solid;
  border-radius: 0px 0px 25px 0px;
}

#headerProvider button {
  padding: 0.5rem 1.0rem;
  line-height: 16px;

  color: #727D94;
  border: 1px solid #CAD3FF;
  border-radius: 24px;
  box-sizing: border-box;
  background-color: #ffffff;
  transition: 0.5s;
}

#headerProvider button:hover {
  color: #ffffff;
  background-color: #727D94;
  box-shadow: 0px 0px 30px #727D94;
}

.anunciado {
  font-weight: 700;
  text-transform: uppercase;
  color: #A1A8B8;
  border-radius: 4px;
}

.gree {
  color: #00AD8C;
}
</style>
