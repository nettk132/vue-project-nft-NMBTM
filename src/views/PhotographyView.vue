<template>

<ul class="nav mx-5 w-50">
 <li class="nav-item">
   <routerLink to="/" class="nav-link active" aria-current="page" >ALL</routerLink>
 </li>
 <li class="nav-item">
   <routerLink to="/ArtView" class="nav-link" >ART</routerLink>
 </li>
 <li class="nav-item">
   <routerLink to="/GameView" class="nav-link" >game</routerLink>
 </li>
 <li class="nav-item">
   <routerLink to="/PhotographyView" class="nav-link ">photography</routerLink>
 </li>
</ul>
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
        <td>net</td>
      
      </tr>
    </tbody>
   </table>
    </div>
   </template>
   
   <script setup>
   
   
   </script>
   
   <style lang="scss" scoped>
   
   </style>