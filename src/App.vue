<template>
  <div >
  <navbar_homepage />
  <div class="container">
    <router-view />
  </div>
</div>
<div>
  <Footer_homepage />
</div>
</template>

<script setup>
import navbar_homepage from './components/navbar_homepage.vue';

import Footer_homepage from './components/Footer_homepage.vue';


</script>

<style lang="scss" scoped>
.body {
  background: rgb(255,255,255);
background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgb(253, 253, 253) 100%);
}
</style>