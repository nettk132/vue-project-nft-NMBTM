<script setup>
import { orders } from '../stores/order_cart.js';
import { computed } from 'vue';
import { accounts} from '../stores/register.js';
const totalPrice = (item) => computed(() => item.quantity * item.price);

const totalItemsInOrder = (order) => {
    return order.items.reduce((accum, item) => accum + item.quantity, 0);
};

const totalOrderPrice = (order) => {
  return order.items.reduce((accum, item) => accum + item.quantity * item.price, 0);
};

const name = accounts[0].name_
const phone = accounts[0].phon
const province = accounts[0].jung
const district = accounts[0].Aum
const postalCode = accounts[0].postal_code
const email = accounts[0].email
const moreDetail = accounts[0].more_detail
</script>
<template>
    <br>
    <div class="container_all">
        <h1>ประวัติการสั่งซื้อ</h1>

        <div v-if="orders.list.length">
            <div class="card rounded-3 mb-4" v-for="(order) in orders.list" :key="order.id">
                <h3 class="m-3">คำสั่งซื้อที่ : {{ order.id }} </h3>
                <div class="card-body p-4" v-for="(item, index) in order.items" :key="item.name">
                    <div class="row d-flex justify-content-between align-items-center">
                        <div class="col-md-2 col-lg-2 col-xl-2">
                            <img :src="item.image" class="img-fluid rounded-3" alt="Cotton T-shirt">
                        </div>
                        <div class="col-md-3 col-lg-3 col-xl-3">
                            <span>รายการ {{ index + 1 }} </span>
                            <p class="lead fw-normal mb-2">{{ item.title }}</p>
                            <p><span class="text-muted">ราคา : {{ item.price }} บาท</span></p>
                        </div>
                        <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                            <h5 class="mb-0">{{ totalPrice(item) }} บาท</h5>
                        </div>
                    </div>
                </div>
                <div class="mx-4">
    <h3>Customer Information</h3>
    <p>Name: {{ name }}</p>
    <p>Phone: {{ phone }}</p>
    <p>provincial: {{ province }}</p>
    <p>district: {{ district }}</p>
    <p>Postal_code: {{ postalCode }}</p>
    <p>Email: {{ email }}</p>
    <p>detail: {{ moreDetail }}</p>
  </div>
                <div class="card-body p-4">
                    <div class="float-end">
                        <h1 class="mb-0 me-5 d-flex align-items-center">
                            <h4><span class="small text-muted me-2"> รายการทั้งหมด {{ totalItemsInOrder(order) }} จำนวน </span></h4>
                        </h1>
                        <p class="mb-0 me-5 d-flex align-items-center">
                            <strong><h3><span class="small text-muted me-2"> ยอดรวมทั้งหมด {{ totalOrderPrice(order) }} บาท</span></h3></strong>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <p style="color: red;">**ไม่มีรายการคำสั่งซื้อ**</p>
        </div>
        <div>
        </div>
    </div>
    <br>
</template>

<style scoped>
.container_all {
  margin: 0 auto;
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 10px;
  
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
}
p{
  font-size: 18px;
}


.card {
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.card-body {
  padding: 20px;
}

.card img {
  max-width: 100%;
  border-radius: 5px;
}

.card-body p {
  margin: 0;
}

.row {
  margin-bottom: 15px;
}

.col-md-2 img {
  border: 1px solid #ddd;
}

.col-md-3 {
  display: flex;
  flex-direction: column;
}

.col-md-3 p {
  margin: 5px 0;
}

.col-md-3 p.lead {
  font-weight: bold;
}

.col-md-3 span.text-muted {
  font-size: 12px;
  color: #777;
}

.col-md-2 h5 {
  margin: 0;
  font-size: 18px;
  color: #333;
}

.float-end p {
  display: flex;
  align-items: center;
}

.small.text-muted {
  font-size: 14px;
  color: #777;
  margin-right: 5px;
}

h3 small.text-muted {
  font-size: 18px;
}

p.color-red {
  color: red;
  font-weight: bold;
  text-align: center;
}
</style>