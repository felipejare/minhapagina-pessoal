<script lang="ts" setup>
import CardMedium from '../components/CardMedium.vue'
import CardSmall from '../components/CardSmall.vue'
import CardLarge from '../components/CardLarge.vue'
import DropDown from '../components/DropDown.vue'
</script>
<template>
  <div class="body">
    <div class="container">
     
      <div class="cards-row">
        <CardMedium />
        <CardSmall />
      </div>
      <CardLarge />
      <DropDown />
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
}
.cards-row {
  display: flex;
  justify-content: center;
}

.body{
  background-color: black;
}
</style>
