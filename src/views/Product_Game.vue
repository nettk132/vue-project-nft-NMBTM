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
                <h6>Owned_by {{ Product_Game.Owned_by }}</h6>
                <h4>ราคา {{Product_Game.price}} บาท</h4>
            
            <div class="d-flex mt-3">
                
                <button class="btn btn-primary" >เพิ่มสินค้า</button>
            </div>
                
            </div>
    </div>
    

</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref,computed } from 'vue';

import { useGame_listStore } from '@/stores/counter.js';

const all_Game = useGame_listStore();
const list = ref(all_Game.Game_list);

const route = useRoute()

console.log(route.params.id)

const Product_Game = computed(() => {
  return list.value.find(item => item.id === route.params.id)
})
</script>

<style lang="scss" scoped>

</style>