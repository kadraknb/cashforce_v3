<script setup>
import TableNF from './TableNF.vue'
import HeaderP from './Header.vue'
import PageNFHeader from './PageNFHeader.vue'
</script>

<template>
  <div id="pageDefault">
    <HeaderP />
    <div class="margin-left-top">
      <PageNFHeader />
      <TableNF />
    </div>
  </div>
</template>

<style >
#pageDefault {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-bottom: 0;

  box-shadow: -5px 10px 30px rgba(236, 225, 225, 0.5);
  border-radius: 15px 0px 0px 15px;
}

.margin-left-top {
  margin-left: 3rem;
  margin-top: 2rem;
}
</style>
