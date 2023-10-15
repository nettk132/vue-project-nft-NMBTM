<template>
    <div class="card-group">
      <div class="col mb-4 mx-2" v-for="(result, index) in filteredResults" :key="index">
        <div class="card" style="width: 19rem;">
          <img :src="result.image" class="card-img-top mx-auto" alt="" style="width: 18.5rem; height: 18.5rem;">
          <div class="card-body">
            <h5 class="card-title">{{ result.title }}</h5>
            <p class="card-text">Id: {{ result.id }}</p>
            <p class="card-text">Owner: {{ result.Owned_by }}</p>
            <p class="card-text">Category: {{ result.category }}</p>
            <router-link v-if="result.category === 'Pho'" :to="`/Product_Photography/${result.id}`"
              class="btn btn-primary">รายละเอียด</router-link>
            <router-link v-else-if="result.category === 'Art'" :to="`/Product_Vue/${result.id}`"
              class="btn btn-primary">รายละเอียด</router-link>
            <router-link v-else-if="result.category === 'Game'" :to="`/Product_Game/${result.id}`"
              class="btn btn-primary">รายละเอียด</router-link>
            <button class="btn btn-success mx-2" @click="AddToCart(result)">เพิ่มสินค้า</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, watch } from 'vue';
  import { useArt_listStore, useGame_listStore, usePhotography_listStore } from '@/stores/counter.js';
  import { useRoute } from 'vue-router';
  import { addToCart } from '../stores/cart.js';
  const AddToCart = (item) => {
    addToCart(item);
    console.log(item)
  }
  const route = useRoute();
  const searchQuery = ref(route.query.q || '');
  const artProducts = useArt_listStore().Art_list;
  const gameProducts = useGame_listStore().Game_list;
  const photographyProducts = usePhotography_listStore().Photography_list;
  const allProducts = [...artProducts, ...gameProducts, ...photographyProducts];
  const filteredResults = ref([]);
  
  const updateSearchResults = () => {
    const query = new RegExp(`\\b${searchQuery.value}`, 'i'); // Match word boundaries
  
    filteredResults.value = allProducts.filter(item => {
      return (
        query.test(item.title) ||
        query.test(item.category) ||
        query.test(item.id.toString())
      );
    });
  };
  watch(() => route.query.q, (newQuery) => {
    searchQuery.value = newQuery || '';
    updateSearchResults();
  });
  
  onMounted(() => {
    updateSearchResults();
  });
  
  </script>
    
  <style scoped>
  .card-group {
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  
  .card {
    width: 19rem;
    margin-bottom: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border: 1px solid #e8bcb9;
    border-radius: 5px;
  }
  
  .card:hover {
    transform: translateY(-5px);
    transition: transform 0.3s ease;
    box-shadow: 0px 15px 25px #1d1a39;
    ;
  }
  
  .card img {
    max-height: 200px;
    object-fit: cover;
  }
  
  .card-body {
    padding: 15px;
    background-color: #e8bcb9;
  }
  
  .card-title {
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .card-text {
    font-size: 1rem;
    color: #555;
  }
  
  .btn-primary {
    background-color: #ae445a;
    color: #fff;
    border: none;
  }
  
  .btn-primary:hover {
    background-color: #662549;
  }
  
  .btn-success {
    background-color: #0f969c;
    color: #fff;
    border: none;
  }
  
  .btn-success:hover {
    background-color: #0c7075;
  }
  </style>