<script setup>
import { orders } from '../stores/order_cart.js';
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
    <p>Name: {{ $route.query.Name_Last }}</p>
    <p>Phone: {{ $route.query.Phone }}</p>
    <p>provincial: {{ $route.query.จังหวัด }}</p>
    <p>district: {{ $route.query.อำเภอ }}</p>
    <p>Postal_code: {{ $route.query.postal_code }}</p>
    <p>Email: {{ $route.query.email }}</p>
    <p>detail: {{ $route.query.more_detail }}</p>
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