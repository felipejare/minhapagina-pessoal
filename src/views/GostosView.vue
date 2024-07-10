<script lang="ts" setup>
import CardMedium from '../components/CardMedium.vue';
import CardSmall from '../components/CardSmall.vue';
import CardLarge from '../components/CardLarge.vue';
import CardMusic from '../components/CardMusic.vue';
import CarouSel from '../components/CarouSel.vue';



</script>
<template>
  <div class="body">
    <div class="container">
     
      <div class="cards-row">
        <CardMedium />
        <CardSmall />
      </div>
      <CardLarge />
      <CardMusic />
      <CarouSel />

    </div>
  
  </div>
</template>
<style scoped>
.container {
  margin: 10px 10px 10px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  font-family: 'Roboto', sans-serif;
}
.cards-row {
  display: flex;
  justify-content: center;
}

.body{
  background-color: black;
}
</style>
