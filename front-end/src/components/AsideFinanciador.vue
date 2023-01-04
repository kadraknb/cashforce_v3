<script setup>
import Logo from '../icons/Logo.vue'
import IconLogo from '../icons/IconLogo.vue'
import IconHandshake from '../icons/IconHandshake.vue'
</script>

<template>
  <aside id="asideNF">
    <div class="asideLogo">
      <IconLogo />
      <Logo />
    </div>
    <div id="asideMenuNav">
      <div id="rectangle"></div>
      <IconHandshake />
      <p>Notas fiscais</p>
    </div>
  </aside>

</template>

<style>
#asideNF {
  display: flex;
  flex-direction: column;
  min-width: 288px;
  height: 900px;

  background-color: #fbfdfe;
}

.asideLogo {
  display: flex;
  width: 160px;
  height: 30px;
  margin-top: 1.6rem;
  margin-left: 1.5rem;
}

#asideMenuNav {
  display: flex;
  align-items: center;
  width: 160px;
  height: 4rem;
  margin-top: 1.6rem;
  margin-left: 0;
}

#asideMenuNav p {
  display: flex;
  margin: 0;
  margin-left: 1rem;

  font-size: 0.9rem;
}

#rectangle {
  width: 0.25rem;
  height: 4rem;
  margin-right: 24px;
  
  background-color: #00AD8C;
}
</style>
