<script>

import { defineComponent } from 'vue';

import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

</script>
<template>
    <h1>Peronagens Favoritos</h1>
    <Carousel :breakpoint="breakpoint" :autoplay="4000">
      <Slide v-for="slide in slides" :key="slide.id">
        <div class="carousel__item">
          <h3>{{ slide.title }}</h3>
          <p>{{ slide.content }}</p>
          <img :src="`../images/$(slide.src)`">
        </div>
      </Slide>
  
      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </template>
  <style>
  .carousel__item {
    min-height: 200px;
    width: 100%;
    background-color: var(--vc-clr-primary);
    color: var(--vc-clr-white);
    font-size: 20px;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
  }
  
  .carousel__slide {
    padding: 10px;
  }
  
  .carousel__prev,
  .carousel__next {
    box-sizing: content-box;
    border: 5px solid white;
  }
.carousel__prev--in-active,
.carousel__next--in-active {
  display: none;
}
  </style>