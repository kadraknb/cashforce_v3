<script setup>
import IconHandshake from '../icons/IconHandshake.vue'
</script>

<template>
  <header>
    <div id="boxHeaderNF">
      <IconHandshake />
      <h3 id="textNF">Notas fiscais</h3>
    </div>
    <p id="pgNF_description">Visualize as notas fiscais que você tem.</p>
  </header>
</template>

<style>
#boxHeaderNF {
  display: flex;
  align-items: center;
  gap: 9px;
  width: 182px;
  height: 28px;
}

#boxHeaderNF:first-child {
  filter: brightness(0);
}

#textNF {
  color: var(--PDarkBlue5);
  font-family: 'DM Sans', sans-serif;
  font-size: 24px;
  margin-bottom: 0;
  width: 149px;
  height: 28px;
  font-weight: 700;
}

#pgNF_description {
  width: 255px;
  height: 20px;
  font-family: 'DM Sans', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #727D94;
}
</style>
