<template>
  <nav class="navbar navbar-expand-lg " >
 <div class="container-fluid">
  <routerLink to="/" class="nav-link" aria-current="page"> <img src="Big Bite Donuts.png" alt="NMBTM" width="60" height="60">
   <a class="navbar-brand" href="#">NMBTM</a></routerLink>
  
   <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
     <span class="navbar-toggler-icon"></span>
   </button>

   <br>
      <ul class="nav mx-5 w-50" >
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


   <div class="collapse navbar-collapse" id="navbarSupportedContent">
     <ul class="navbar-nav me-auto mb-2 mb-lg-0">
     </ul>
     <form class="d-flex w-0 mx-2" role="search">
       <input class="form-control mx-3 w-50 " type="search" placeholder="Search" aria-label="Search" style="color: #f39f5a;" >
       <button class="btn btn-outline-success"  type="submit" >Search  <i class="fas fa-search"></i></button>
       <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-3">
       <li class="nav-item">
         <routerLink to="/cart_vue" class="nav-link" aria-current="page"><i class="fa-solid fa-cart-shopping"></i></routerLink>
       </li>
     </ul>
     </form>
   
   </div>
 </div>
 
</nav>
</template>


<script setup>



</script>

<style lang="scss" scoped>
.navbar {
  background-color: #1d1a39;
  color: #fff;
  box-shadow: 0px 15px 25px #060303;; 
}

.navbar-brand {
  font-size: 24px; 
}

.nav-link {
  color: #fff; 
}

.nav-link:hover {
  color: #FFA500;
}

.navbar-toggler-icon {
  background-color: #fff;
}

.form-control {
  background-color: #f0f0f0; 
  color: #333; 
}

.btn-outline-success {
  border-color: #f39f5a; 
  color: #f39f5a; 
}

.btn-outline-success:hover {
  background-color: #f39f5a; 
  color: #fff; 
}

.fa-cart-shopping {
  font-size: 24px; 
}

.nav-item {
  margin-right: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar-toggler {
  border-color: #fff;
}

.navbar-brand {
  color: white; 
}

.form-control {
  background-color: #1d1a39; 
  color: #333;
}


</style>