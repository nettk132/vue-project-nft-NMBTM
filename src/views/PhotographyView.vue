<template>

<ul class="nav mx-5 w-50">
 <li class="nav-item">
   <routerLink to="/" class="nav-link active" aria-current="page" >ALL</routerLink>
 </li>
 <li class="nav-item">
   <routerLink to="/ArtView" class="nav-link" >ART</routerLink>
 </li>
 <li class="nav-item">
   <routerLink to="/GameView" class="nav-link" >game</routerLink>
 </li>
 <li class="nav-item">
   <routerLink to="/PhotographyView" class="nav-link ">photography</routerLink>
 </li>
</ul>
<br>
    <h1>Photography</h1>
    <br>
    <div class="card-group">
<div class="col mb-4 mx-2" v-for="(i, index) in list_Photography" :key="index">
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
   import { usePhotography_listStore } from '@/stores/counter.js';

const all_Photography = usePhotography_listStore();
const list_Photography = ref(all_Photography.Photography_list);
   </script>
   
   <style lang="scss" scoped>
   
   </style>