<template>
    <br>
    <div class="card mb-3 ">
    <div class="row mt-3">
        <div class="col-md-4 mx-4">
            <img :src="Product_Game.image" alt="" class="img-fluid">
        </div>
            <div class="col-md-6">
                <h1>{{ Product_Game.title }}</h1>
                <p>
                   {{ Product_Game.descriptionfull }}
                </p>
                <p>
                    Owned_by  {{ Product_Game.Owned_by }}
                </p>
                <h4>ราคา {{Product_Game.price}} บาท</h4>
            
            <div class="d-flex mt-3">
                
                <button class="btn btn-primary" @click="AddToCart(Product_Game)" >Buy Now!!</button>
            </div>
                <br>
            </div>
    </div>
</div>
<br>
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
.card{
    border-radius: 19px;
    box-shadow: 2px 2px 8px 4px rgba(0, 0, 0, 0.1);
}
</style>