<template>
    <br>
    <div class="card mb-3">
    <div class="row mt-3">
        <div class="col-md-4 mx-4 mb-4">
            <img :src="Product_Photography.image" alt="" class="img-fluid">
        </div>
            <div class="col-md-6">
                <h1>{{ Product_Photography.title }}</h1>
                <p>
                   {{ Product_Photography.descriptionfull }}
                </p>
                <p>
                    Owned_by  {{ Product_Photography.Owned_by }}
                </p>
                <h4>ราคา {{Product_Photography.price}} บาท</h4>
            
            <div class="d-flex mt-3">
                
                <button class="btn btn-primary" @click="AddToCart(Product_Photography)" >Buy Now!!</button>
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
import { usePhotography_listStore } from '@/stores/counter.js';

const all_Photography = usePhotography_listStore();
const list = ref(all_Photography.Photography_list);

const route = useRoute()

console.log(route.params.id)

const Product_Photography = computed(() => {
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