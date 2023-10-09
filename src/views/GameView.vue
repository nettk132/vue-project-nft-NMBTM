<template>

  <br>
      <h1 style="color: #f39f5a">Game</h1>
      <br>
    <div class="card-group">
      <div class="col mb-4 mx-2" v-for="(i, index) in list_game" :key="index">
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
  
  import { useGame_listStore } from '@/stores/counter.js';
  
  const all_game = useGame_listStore();
  const list_game = ref(all_game.Game_list);
  
  </script>
  
  
  <style lang="scss" scoped>
  .card-group {
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
  background-color:#e8bcb9;
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
  
  .container {
  padding: 20px;
  }
  
  </style>