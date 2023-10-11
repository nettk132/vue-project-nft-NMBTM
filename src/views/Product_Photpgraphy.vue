<template>
    <div class="row mt-3">
        <div class="col-md-6">
            <img :src="product_Photography.image" alt="" class="img-fluid">
        </div>
            <div class="col-md-6">
                <h1>{{ product_Photography.title }}</h1>
                <p>
                   {{ product_Photography.description }}
                </p>
                <h6>Owned_by {{ product_Photography.Owned_by }}</h6>
                <h4>ราคา {{product_Photography.price}} บาท</h4>
            
            <div class="d-flex mt-3">
                
                <button class="btn btn-primary" >เพิ่มสินค้า</button>
            </div>
                
            </div>
    </div>
    

</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref,computed } from 'vue';

import { usePhotography_listStore } from '@/stores/counter.js';

const all_Photography = usePhotography_listStore();
const list = ref(all_Photography.Photography_list);

const route = useRoute()

console.log(route.params.id)

const product_Photography = computed(() => {
  return list.value.find(item => item.id === route.params.id)
})
</script>

<style lang="scss" scoped>

</style>