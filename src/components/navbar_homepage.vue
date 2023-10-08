<template>
  <nav class="navbar navbar-expand-lg " >
 <div class="container-fluid">
  <routerLink to="/" class="nav-link" aria-current="page"> <img src="Big Bite Donuts.png" alt="NMBTM" width="60" height="60">
   <a class="navbar-brand" href="#">NMBTM</a></routerLink>
  
   <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
     <span class="navbar-toggler-icon"></span>
   </button>
   <div class="collapse navbar-collapse" id="navbarSupportedContent">
     <ul class="navbar-nav me-auto mb-2 mb-lg-0">
     </ul>
     <form class="d-flex w-0 mx-2" role="search">
       <input class="form-control mx-3 w-50 " type="search" placeholder="Search" aria-label="Search" >
       <button class="btn btn-outline-success" type="submit">Search  <i class="fas fa-search"></i></button>
       <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-3">
       <li class="nav-item">
         <routerLink to="/cart" class="nav-link" aria-current="page"><i class="fa-solid fa-cart-shopping"></i></routerLink>
       </li>
     </ul>
     </form>
   
   </div>
 </div>
 
</nav>
<br>
<ul class="nav mx-5 w-50">
 <li class="nav-item">
   <routerLink to="/" class="nav-link active" aria-current="page" href="#">ALL</routerLink>
 </li>
 <li class="nav-item">
   <routerLink to="/ArtView" class="nav-link" href="#">ART</routerLink>
 </li>
 <li class="nav-item">
   <routerLink to="/GameView" class="nav-link" href="#">game</routerLink>
 </li>
 <li class="nav-item">
   <routerLink to="/PhotographyView" class="nav-link ">photography</routerLink>
 </li>
</ul>

</template>


<script setup>

</script>

<style lang="scss" scoped>

</style>