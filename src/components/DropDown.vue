<script>

  import 'vue3-carousel/dist/carousel.css'
  import { Carousel, Slide, Navigation } from 'vue3-carousel';

  const slides = [

    { id: '1', title: 'Vue 3 Introduction', content: 'VueJS is a Library' },
    { id: '2', title: 'Vue 3 Component', content: 'Know the components' },
    { id: '3', title: 'Vue 3 Conditional', content: 'Rendering confitionally' },
    { id: '4', title: 'Vue 3 Reactivity', content: 'VueJS is Reactivity' },
    { id: '5', title: 'Vue 3 Compute', content: 'VueJS uses computed properties' },

  ]

</script>

<template>
  <Carousel>

    <Slide v-for="slide in slides" :key="slide.id">
      <div class="carousel__item">
        <h3>{{ slide.title }}</h3>
        <p>{{ slide.content }}</p>
      </div>
    </Slide>

    <template #addons>

      <Navigation />

    </template>

  </Carousel>
</template>



<style scoped>

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

</style>


/* link do tutorial:
https://progressivewebninja.com/how-to-create-vue-3-carousel/

*/