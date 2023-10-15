<template>
  <nav class="navbar navbar-expand-lg ">
   <div class="container-fluid">
     <routerLink to="/" class="nav-link" aria-current="page"> <img src="Big Bite Donuts.png" alt="NMBTM" width="60"
         height="60">
       <a class="navbar-brand" href="#">NMBTM</a>
     </routerLink>

     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
       aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <span class="navbar-toggler-icon"></span>
     </button>
     <div class="collapse navbar-collapse" id="navbarSupportedContent">
       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
       </ul>
       <form class="d-flex w-100 mx-3">
         <input class="form-control mx-0 w-0 h-0 mt-1" type="search" placeholder="Search" aria-label="Search">
         <button class="btn btn-outline-success mx-2 mt-1" type="submit"> Search <i class="fas fa-search"></i></button>
         
       
       </form>
      
        <div>
       <ul class="navbar-nav me-auto mb-2 mb-lg-0  ">
          
          <li class="nav-item mb-0">
            <routerLink to="/cart_vue" class="nav-link mt-3 " aria-current="page">
              <i class="fa-solid fa-cart-shopping fa-xl"></i>
              <span> {{ totalItems }} </span>
            </routerLink>
            
          </li>
          <li class="nav-item mt-3 ">
            <routerLink to="/orderhistory" class="nav-link"><i class="fa-solid fa-clipboard-list fa-xl"></i></routerLink>
          </li>
          <li class="nav-item mt-3">
            <routerLink to="/login" class="nav-link"><i class="fa-solid fa-user fa-xl"></i></routerLink>
          </li>
        </ul>
      </div>
     </div>
     
   </div>
 </nav>
</template>


<script setup>
import {  computed } from 'vue';
import { cart } from '../stores/cart.js';
const totalItems = computed(() => cart.value.reduce((acc, item) => acc + item.quantity, 0));

</script>

<style lang="scss" scoped>

@media screen and (min-width: 280px) {
   
  .nav-item span {
    background-color: #3b750c	;
    color: #fff; 
    border-radius: 50%; 
    padding: 2px 6px; 
    position: relative;
    font-size: 9px;
    top: -15px; 
    right: 8px; 
    
}
.navbar-nav {
    flex-direction: row;  /* เปลี่ยนเนวนอน */
  }

  .navbar-nav .nav-item {
    margin: 0 10px;  /* ระยะห่างระหว่างรายการเมนูในแนวนอน */
  }

  .navbar-nav .nav-link {
    padding: 10px 15px;  /* ปรับขนาดพื้นที่รอบรายการเมนู */
  }


}
@media screen and (min-width: 1024px) {
   
   .nav-item span {
     background-color: #3b750c	;
     color: #fff; 
     border-radius: 50%; 
     padding: 4px 7px; 
     position: relative;
     font-size: 9px;
     top: -40px; 
     right: -19px; 
 }

 
 
 }
 .navbar-nav li.nav-item {
    display: inline-block;
    margin-right: 10px; /* ระยะห่างระหว่างรายการเมนู */
}

.navbar {
  background-color: #C60C30;
  color: #fff;
  box-shadow: 0px 15px 25px #97233F;
  z-index: 999;
  position: sticky;
  top: 0;
}

.navbar-brand {
  font-size: 22px; 
}

.nav-link {
  color: #fff; 
}

.nav-link:hover {
  color: #f6d602;
}

.navbar-toggler-icon {
  background-color: #fff;
}

.form-control {
  background-color: #f0f0f0; 
  color: #333; 
}

.btn-outline-success {
  border-color: #ffffff; 
  color: #0c7075; 
  margin-left:8px;
  width: 150px;
  height: 50%;
}

.btn-outline-success:hover {
  border-color: #dc1b1b; 
  background-color: #0c7075;
  color: #fff;
  margin-top:  10px;


}

.fa-cart-shopping {
  font-size: 24px; 
}

.nav-item {
  margin-left: 1px;
  
}

.navbar-toggler {
  border-color: #fff;
}

.navbar-brand {
  color: white; 
}

.form-control {
  background-color: #C60C30; 
  color: #ffffff;
}



.form-control{
  max-width: 150%;
  height: 50%;
  
}
</style>