<template>
    <div class="row mt-3">
        <div class="col-md-6">
            <img :src="product.image" alt="" class="img-fluid">
        </div>
            <div class="col-md-6">
                <h1>{{ product.title }}</h1>
                <p>
                    {{ product.description }}
                </p>
                <h4>ราคา {{product.price}} บาท</h4>
            
            <div class="d-flex mt-3">
                
                <button  class="btn btn-primary" @click="AddToCart(product)">เพิ่มสินค้า</button>
            </div>
                
            </div>
    </div>
    

</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref,computed } from 'vue';

import { useArt_listStore } from '@/stores/counter.js';

const all_Art = useArt_listStore();
const list = ref(all_Art.Art_list);

const route = useRoute()
console.log(route.params.id)

const product = computed(() => {
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