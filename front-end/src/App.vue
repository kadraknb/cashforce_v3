<script setup>
import PageDefaut from './components/PageDefault.vue'
import AsiderFinanciador from './components/AsideFinanciador.vue'
</script>

<template>
  <div id="pageMain">
    <AsiderFinanciador />
    <div>
      <PageDefaut />
    </div>
  </div>
</template>

<style scoped>
:root {
  --PDarkBlue5: #021B51;
}

#pageMain {
  display: flex;
}

#pageMain div {
  width: 100%;
  height: 100vh;
}

@media (max-width: 922px) {
  #pageMain div {
    width: auto;
  }
}
</style>
