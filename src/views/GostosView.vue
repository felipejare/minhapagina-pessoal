<script lang="ts" setup>
import CardMedium from '../components/CardMedium.vue';
import CardSmall from '../components/CardSmall.vue';
import CardLarge from '../components/CardLarge.vue';
import DropDown from '../components/DropDown.vue';
import AudioPlayer from 'vue3-audio-player';
import 'vue3-audio-player/dist/style.css';
/*export default {
  components: {
    AudioPlayer,
  },
};*/



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
      <div class="musicas">
        <h1>Musicas</h1>
        <AudioPlayer :option="{ src: '../src/musics/We_Gold.mp3', title: 'We Gold', }"  />

      </div>
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
