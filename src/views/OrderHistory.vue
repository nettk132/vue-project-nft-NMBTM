<script setup>
import { orders } from '../stores/order_cart';
import { computed } from 'vue';
const totalPrice = (item) => computed(() => item.quantity * item.price);

const totalItemsInOrder = (order) => {
    return order.items.reduce((accum, item) => accum + item.quantity, 0);
};

const totalOrderPrice = (order) => {
  return order.items.reduce((accum, item) => accum + item.quantity * item.price, 0);
};
</script>

<script>
export default {
    data() {
        return {
            name: this.$route.params.name || "",
            phone: this.$route.params.phone || "",
            province: this.$route.params.province || "",
            district: this.$route.params.district || "",
            postalCode: this.$route.params.postalCode || "",
            email: this.$route.params.email || "",
            moreDetail: this.$route.params.moreDetail || ""
        };
    },
    mounted() {
  // เข้าถึงค่าที่ถูกส่งมาจากหน้าอื่นผ่าน $route.params
  const name = this.$route.params.name;
  const phone = this.$route.params.phone;
  const province = this.$route.params.province;
  const district = this.$route.params.district;
  const postalCode = this.$route.params.postalCode;
  const email = this.$route.params.email;
  const moreDetail = this.$route.params.moreDetail;

  // แสดงค่าใน console เพื่อตรวจสอบ
  console.log(name, phone, province, district, postalCode, email, moreDetail);
},
}
</script>

<template>
    <br>
    <div class="container_all">
        <h2>ประวัติการสั่งซื้อ</h2>

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
                
                <div class="card-body p-4">
                    <div class="float-end">
                        <p class="mb-0 me-5 d-flex align-items-center">
                            <h4><span class="small text-muted me-2"> รายการทั้งหมด {{ totalItemsInOrder(order) }} จำนวน </span></h4>
                        </p>
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
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: rgb(255, 255, 255);
}
h2 {
    font-size: 24px;
    margin-bottom: 20px;
}
.card {
    border: 1px solid #ccc;
    border-radius: 10px;
    margin-bottom: 20px;
}
.card-body {
    padding: 20px;
}
.card img {
    max-width: 100%;
    border-radius: 5px;
}
.input-group {
    width: 80px;
    margin: 0 auto;
}
h4 {
    font-size: 18px;
}
h3 {
    font-size: 24px;
}
</style>