<template>
    <h1>
       Trending 
    </h1>
   <table class="table">
  <thead>
    <tr>
      <th scope="col">Rank</th>
      <th scope="col">collection</th>
      <th scope="col">volume</th>
      
    </tr>
  </thead>
  <tbody class="table-group-divider">
    <tr v-for="i in 10" :key="i">
      <th scope="row">{{ i++ }}</th>
      <td><img src=""></td>
      <td>Otto</td>
    
    </tr>
  </tbody>
</table>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>