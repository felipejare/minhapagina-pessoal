<template>
  <div class="titulo"><h1>Personagens Favoritos</h1></div>
  <Carousel :autoplay="5000">
    <Slide v-for="slide in slides" :key="slide.id">
      <div class="carousel__item">
        <img :src="slide.imageUrl" alt="Slide Image" />
        <h3>{{ slide.title }}</h3>
        <p>{{ slide.content }}</p>
      </div>
    </Slide>
    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';

const slides = [
  {
    id: '1',
    title: 'Monkey D. Luffy Aquele que vai se tornar o rei dos Pirtas',
    content: 'VueJS is a library',
    imageUrl: '/src/images/luffy.png', // Replace with actual image URL
  },
  {
    id: '2',
    title: 'Satoro Gojo O Feiticeiro Mais Forte',
    content: 'VueJS is a Library',
    imageUrl: '/src/images/gojo.jpg',
  },
  {
    id: '3',
    title: 'Jojo Bizarre Adventures',
    content: 'VueJS is a Library',
    imageUrl: '/src/images/jojos.png',
  },
  // Add more slides with image URLs
];
</script>

<style>
/* Styling for carousel items */
.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: purple;
  color: white;
  font-size: 20px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
}

/* Style the images */
.carousel__item img {
  max-width: 100%;
  height: auto;
}
</style>