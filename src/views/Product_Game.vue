<template>
    <div class="row mt-3">
        <div class="col-md-6">
            <img :src="Product_Game.image" alt="" class="img-fluid">
        </div>
            <div class="col-md-6">
                <h1>{{ Product_Game.title }}</h1>
                <p>
                   {{ Product_Game.description }}
                </p>
                <h4>ราคา {{Product_Game.price}} บาท</h4>
            
            <div class="d-flex mt-3">
                
                <button class="btn btn-primary" @click="AddToCart(Product_Game)" >เพิ่มสินค้า</button>
            </div>
                
            </div>
    </div>
    

</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref,computed } from 'vue';

import { useGame_listStore } from '@/stores/counter.js';

const all_game = useGame_listStore();
const list = ref(all_game.Game_list);

const route = useRoute()

console.log(route.params.id)

const Product_Game = computed(() => {
    return list.value.find(item => item.id === route.params.id)
})
import { addToCart } from '../stores/cart.js';
  const AddToCart = (item) => {
    addToCart(item);
    console.log(item)
  }
</script>

<style lang="scss" scoped>

</style>