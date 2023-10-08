<template>
     <div id="hero-carousel" class="carousel slide">
        <div class="carousel-indicators">
    <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="4" aria-label="Slide 5"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://travel.mthai.com/app/uploads/2017/05/6-5.jpg" class="d-block w-100 " alt="Slide 1">
    </div>
    <div class="carousel-item ">
      <img src="https://www.shutterstock.com/shutterstock/photos/2043994739/display_1500/stock-photo-portrait-of-a-futuristic-sci-fi-female-wearing-a-tactical-jump-suit-and-a-science-fiction-visor-2043994739.jpg" class="d-block w-100" alt="Slide 2">
    </div>
    <div class="carousel-item">
      <img src="https://www.shutterstock.com/shutterstock/photos/2279016883/display_1500/stock-vector-lofi-girl-illustration-young-woman-looking-in-the-distance-cartoon-drawing-of-chill-relaxed-lady-2279016883.jpg" class="d-block w-100" alt="Slide 3">
    </div>
    <div class="carousel-item">
      <img src="https://www.shutterstock.com/shutterstock/photos/2180472695/display_1500/stock-photo-view-of-table-mountain-with-star-trail-form-lion-s-head-mountain-cape-town-cape-town-south-2180472695.jpg" class="d-block w-100" alt="Slide 4">
    </div>
    <div class="carousel-item">
      <img src="https://www.shutterstock.com/shutterstock/photos/2254415147/display_1500/stock-vector-pixel-art-portrait-of-mona-lisa-leonardo-da-vinchi-in-frame-creative-artwork-crypto-art-modern-2254415147.jpg" class="d-block w-100" alt="Slide 5">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#hero-carousel" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#hero-carousel" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
  
</div>
  <div>
    <h1>
       Trending 
    </h1>
   <table class="table">
  <thead>
    <tr>
      <th scope="col">Rank</th>
      <th scope="col">collection</th>
      <th scope="col">volume</th>
      
    </tr>
  </thead>
  <tbody class="table-group-divider">
    <tr v-for="i in 10" :key="i">
      <th scope="row">{{ i++ }}</th>
      <td><img src=""></td>
      <td>Otto</td>
    
    </tr>
  </tbody>
</table>
  </div>
</template>

<script setup>


</script>

<style lang="scss" scoped>

</style>