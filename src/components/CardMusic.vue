<script>
import AudioPlayer from 'vue3-audio-player';
import 'vue3-audio-player/dist/style.css';
export default {
  components: {
    AudioPlayer,
  },
};
</script>
<template>
    <div class="musicas">
        <h1>Musicas</h1>
            <div class="block">
                <AudioPlayer :option="{ src: '../src/musics/We_Gold.mp3', title: 'We Gold', }"  />
                <AudioPlayer :option="{ src: '../src/musics/We_Gold.mp3', title: 'We Gold', }"  />
                <AudioPlayer :option="{ src: '../src/musics/We_Gold.mp3', title: 'We Gold', }"  />
                <AudioPlayer :option="{ src: '../src/musics/We_Gold.mp3', title: 'We Gold', }"  />
            </div>
    </div>
</template>
<style scoped>

.musicas { 

    background-color: rgb(52, 0, 82);
    padding: 30px;

}

.block {

    color: rgb(255, 255, 255);
    display: flex;
    padding: 30px;
    margin: 20px

}
.musicas h1 {
    color: rgb(255, 255, 255);
    align-items: center;
    justify-content: center;
}
</style>