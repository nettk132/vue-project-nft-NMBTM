<template>
  <div >
  <navbar_homepage />
  <div class="container">
    <router-view />
  </div>
</div>
</template>

<script setup>
import navbar_homepage from './components/navbar_homepage.vue';




</script>

<style lang="scss" scoped>
.body {
  background: rgb(255,255,255);
background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(242,108,108,1) 100%);
}
</style>