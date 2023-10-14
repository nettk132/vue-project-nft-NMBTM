<template>
  <br>
    <ul class="nav mx-5 w-50">
 <h2 class="nav-item">
   <routerLink to="/" class="nav-link active" aria-current="page" >ALL</routerLink>
 </h2>
 <h2 class="nav-item">
   <routerLink to="/ArtView" class="nav-link" >ART</routerLink>
 </h2>
 <h2 class="nav-item">
   <routerLink to="/GameView" class="nav-link" >GAME</routerLink>
 </h2>
 <h2 class="nav-item">
   <routerLink to="/PhotographyView" class="nav-link " style="text-decoration: underline">PHOTOGRAPHY</routerLink>
 </h2>
</ul>
<br>
        <h1 style="color: #8544ee">Photography</h1>
        <br>
      <div class="card-group">
        <div class="col mb-4 mx-2" v-for="(i, index) in list_Photography" :key="index">
          <div class="card" style="width: 19rem;" >
            <img :src="i.image" class="card-img-top " alt="" >
             <div class="card-body">
                <h5 class="card-title">{{ i.title }}</h5>
                <p class="card-text">{{ i.description }}</p>
                <routerLink :to="`/Product_Photpgraphy/${i.id}`" class="btn btn-primary">รายละเอียด</routerLink>
                <button class="btn btn-success mx-2" @click="handleAddToCart(i)">เพิ่มลงตะกร้า</button>
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
    box-shadow: 0px 15px 25px #1d1a39;
    ; 
    }
    
    .card img {
    max-height: 200px;
    object-fit: cover;
    }
    
    .card-body {
    padding: 15px;
    background-color:#e8bcb9;
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
    
    </style>