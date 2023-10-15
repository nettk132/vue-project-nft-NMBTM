<script setup>
import { cart } from '../stores/cart.js';
import { computed } from 'vue';
import { addOrder } from '../stores/order_cart.js';


const totalPrice = (item) => computed(() => item.price * item.quantity);


const totalCartPrice = computed(() => {
  return cart.value.reduce((acc, item) => acc + item.price * item.quantity, 0);
});

const totalItemsInCart = computed(() => {
    return cart.value.reduce((acc, item) => acc + item.quantity, 0);
});

const removeFromCart = (itemToRemove) => {
    const index = cart.value.findIndex(item => item.name === itemToRemove.name);
    if (index !== -1) {
        cart.value.splice(index, 1);
    }
};



const confirmOrder = () => {
    addOrder(cart.value);
    cart.value = [];
};

</script>
<template>
    <hr>
    <section class="h-100" style="background-color: #eee;">
        <div class="container h-100 py-5" >
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-10">
                    <div class="d-flex justify-content-between align-items-center mb-4">
                        <h1 class="fw-normal mb-0 text-black">ตะกร้า</h1>
                    </div>
                    <div class="card rounded-3 mb-4" v-for="(item, index) in cart" :key="index">
                        <div class="card-body p-4">
                            <div class="row d-flex justify-content-between align-items-center">
                                <div class="col-md-2 col-lg-2 col-xl-2">
                                    <img :src="item.image" class="img-fluid rounded-3" alt="Cotton T-shirt">
                                </div>
                                <div class="col-md-3 col-lg-3 col-xl-3">
                                    <span>รายการ {{ index + 1 }} </span>
                                    <p class="lead fw-normal mb-2">{{ item.title }}</p>
                                    <p style="color: #ef0b0b;">*รายการนี้สามารถซื้อได้ 1 ชิ้นเท่านั้น*</p>
                                    <p><span class="text-muted">category : {{item.category}}</span></p>
                                </div>
                                <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                    <h5 class="mb-0">{{ totalPrice(item).value }} บาท</h5>
                                </div>
                                <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                                    <button @click="() => removeFromCart(item)" class="btn btn-link p-0 border-0 bg-transparent">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="20" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" style="fill: #ee0000;"/>
                                        </svg>
                                    </button>
                                </div>              
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    
        <div class="card mb-5">
            <div class="card-body p-4">
                <div class="float-end">
                    <h1 class="mb-0 me-5 d-flex align-items-center">
                        <h4><span class="small text-muted me-2"> รายการทั้งหมด {{ totalItemsInCart }} จำนวน </span></h4>
                    </h1>
    
                    <p class="mb-0 me-5 d-flex align-items-center">
                        <strong><h3> <span class="small text-muted me-2"> ยอดรวมทั้งหมด {{ totalCartPrice }}  บาท</span></h3></strong>
                    </p>
    
                </div>
            </div>
            <div class="d-flex justify-content-end">
        <RouterLink to="/Login">
        <button @click="confirmOrder" type="button" class="btn btn-success btn-lg me-5">สั่งซื้อ</button>
    </RouterLink>
    
    </div>
    <br>
        </div>

        
    </section>

    

    </template>