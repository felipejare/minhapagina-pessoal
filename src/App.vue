<script setup lang="ts">
import NavBar from '../src/components/NavBar.vue'
</script>

<template>
  <div class="bloco">
    <NavBar />

    <RouterView />
  </div>
</template>

<style scoped>

.bloco {
  background-image: url('sua-imagem-de-fundo.jpg'); /* Substitua pelo caminho correto da sua imagem */
  background-repeat: no-repeat;
  background-size: cover; /* A imagem preencherá todo o elemento */
  background-position: center center; /* Centraliza a imagem */
  height: 100vh; /* Define a altura para ocupar toda a tela */
  /* Outros estilos conforme necessário */
}
</style>
