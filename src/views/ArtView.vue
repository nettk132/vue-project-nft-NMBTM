<template>
    <br>
    <h1>Art</h1>
    <br>
    <div class="card-group">
<div class="col mb-4 mx-2" v-for="(i, index) in list" :key="index">
  <div class="card" style="width: 19rem;" >
    <img :src="i.image" class="card-img-top " alt="" >
  <div class="card-body">
    <h5 class="card-title">{{ i.title }}</h5>
    <p class="card-text">{{ i.description }}</p>
    <routerLink :to="`/Product_Vue/${i.id}`" class="btn btn-primary">รายละเอียด</routerLink>
    <button class="btn btn-success mx-2" @click="cart_store.add_cart(product.id, product.price)">เพิ่มลงตะกร้า</button>
</div>
</div>
</div>  
</div>
</template>

<script setup>

import { ref } from 'vue';

import { useArt_listStore } from '@/stores/counter.js';

const all_Art = useArt_listStore();
const list = ref(all_Art.Art_list);
</script>

<style lang="scss" scoped>

</style>