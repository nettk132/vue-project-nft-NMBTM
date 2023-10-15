<template>
  <br>
  <div class="box" style="background-color: #e8bcb9; padding: 20px; border: 1px solid #e8bcb9; border-radius: 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
  <ul class="nav mx-5 w-50">
  <li class="nav-item"><router-link to="/" class="nav-link" aria-current="page">ALL</router-link></li>
  <li class="nav-item"><router-link to="/ArtView" class="nav-link">ART</router-link></li>
  <li class="nav-item"><router-link to="/GameView" class="nav-link">GAME</router-link></li>
  <li class="nav-item"><router-link to="/PhotographyView" class="nav-link active">PHOTOGRAPHY</router-link></li>
</ul>
</div>
<br>
        <h1 style="color: #6b705c">Photography</h1>
        <br>
      <div class="card-group">
        <div class="col mb-4 mx-2" v-for="(i, index) in list_Photography" :key="index">
          <div class="card" style="width: 19rem;" >
            <img :src="i.image" class="card-img-top " alt="" >
             <div class="card-body">
                <h5 class="card-title">{{ i.title }}</h5>
                <p class="card-text">{{ i.description }}</p>
                <routerLink :to="`/Product_Photpgraphy/${i.id}`" class="btn btn-primary">รายละเอียด</routerLink>
                <button class="btn btn-success mx-2" @click="handleAddToCart(i)">Buy Now!!</button>
              </div>
            </div>
          </div>  
        </div>
       </template>
       
    <script setup>
    import { ref } from 'vue';
    import { usePhotography_listStore } from '@/stores/counter.js';
    
    const all_Photography = usePhotography_listStore();
    const list_Photography = ref(all_Photography.Photography_list);

    import { addToCart } from '../stores/cart.js';
    const handleAddToCart = (item) => {
    addToCart(item);
};
    </script>
<style lang="scss" scoped>
/* เปลี่ยนสีข้อความ ALL */
.nav-item:nth-child(1) .nav-link {
 color: rgb(0, 0, 0); /* สีข้อความที่คุณต้องการ */
}

/* เปลี่ยนสีข้อความ ART */
.nav-item:nth-child(2) .nav-link {
 color: rgb(0, 0, 0); /* สีข้อความที่คุณต้องการ */
}

/* เปลี่ยนสีข้อความ GAME */
.nav-item:nth-child(3) .nav-link {
 color: rgb(0, 0, 0); /* สีข้อความที่คุณต้องการ */
}

/* เปลี่ยนสีข้อความ PHOTOGRAPHY */
.nav-item:nth-child(4) .nav-link {
 color: rgb(0, 0, 0); /* สีข้อความที่คุณต้องการ */
}
.card-group {
display: flex;
flex-wrap: wrap;
justify-content: space-between;
}

.card {
width: 19rem;
margin-bottom: 20px;
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
border: 1px solid #e8bcb9;
border-radius: 5px;
}

.card:hover {
transform: translateY(-5px);
transition: transform 0.3s ease;
box-shadow: 0px 15px 25px #6b705c;
; 
}

.card img {
max-height: 200px;
object-fit: cover;
}

.card-body {
padding: 15px;
background-color:#f3dbce;
}

.card-title {
font-size: 1.25rem;
font-weight: bold;
margin-bottom: 10px;
}

.card-text {
font-size: 1rem;
color: #555;
}

.btn-primary {
background-color: #ae445a;
color: #fff;
border: none;
}

.btn-primary:hover {
background-color: #662549;
}

.btn-success {
background-color: #0f969c;
color: #fff;
border: none;
}

.btn-success:hover {
background-color: #0c7075;
}

.container {
padding: 20px;
}

.nav {
display: flex;
justify-content: space-between;
align-items: center;
}

.nav-item {
margin: 0;
padding: 0;
list-style: none;
}

.nav-link {
text-decoration: none;
}

/* รายการในแถบการนำทาง */
.nav-item h2 {
margin: 0;
padding: 0;
}

/* ปุ่ม "ALL" ที่เป็นหน้าปัจจุบัน */
.nav-link.active {
text-decoration: underline;
}

/* ลิงก์ในแถบการนำทาง */
.nav-link {
color: #333;
font-size: 16px;
font-weight: bold;
list-style: none;
 margin: 0 20px;
 transition: 0.8s;
}

/* ปรับขนาดตัวอักษรเวลาเมาส์ไฟ */
.nav-link:hover {
font-size: 20px;
transition: all 0.3s;
transform: scale(1.5);
filter: blur(0.2px);

}

</style>