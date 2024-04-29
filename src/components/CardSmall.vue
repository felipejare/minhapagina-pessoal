<script></script>

<template>
  <div class="container">
    <div class="block"></div>
  </div>
</template>

<style scoped>
.container {
  background-color: rgb(255, 255, 255);
  width: 250px;
  height: 300px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  display: flex;
}
.block {
    background-color: rgb(8, 0, 44);
    box-shadow: 80px purple;
    width: 98%;
    height: 98.8%;
    border-radius: 10px;
    /* Efeito degradê brilhoso em verde nas bordas */
    border: 3px solid transparent; /* Defina a borda inicial como transparente */
    border-image: linear-gradient(to right, green, rgb(0, 195, 255));
    border-image-slice: 1;
    transition: border-image 0.3s ease; /* Adiciona uma transição suave */
  }
  
  .block:hover {
    border: 3px solid; /* Define a cor da borda no hover */
    border-image: linear-gradient(to right, rgb(96, 0, 151), rgb(115, 255, 0));
    border-image-slice: 1;
    transition: border-image 0.3s ease;
  }
</style>