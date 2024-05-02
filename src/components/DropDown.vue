<template>
  <div class="dropdown">
    <button @click="toggleDropdown" class="button">
      <h1>Personagens Favoritos</h1>
      <div class="mais">+</div>
    </button>
    <ul v-if="isOpen" class="menu">
      <li>
        <div class="carousel">
          <button @click="prevSlide">ANTERIOR</button>
          <div class="slide">
            <h2>{{ slideName[currentSlide] }}</h2>
            <img :src="slides[currentSlide]" alt="Slide">
          </div>
          <button @click="nextSlide">PROXIMO</button>
          <p>{{ slideDescription[currentSlide] }}</p>
        </div>
      </li>
    </ul>

  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      slides: [
        '../src/images/gojo.jpg',
        '../src/images/luffy.png',
        '../src/images/jojos.png'
      ],
      slideName: [
        'Satoru Gojo - O Feiticeiro mais forte',
        'Monkey D. Luffy - O Capitão dos Piratas do Chapéu de Palha',
        'Jojos\' Bizarre Adventure - Steel Ball Run'
      ],
      slideDescription: [
        'Satoru gojo é o mais lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum',
        'MACACO DE LUVA É O MAIS BIADO lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum',
        'jojos aventuras bizarras é um anime sobre porradaria e sexo'

      ],
      currentSlide: 0,
      isOpen: false
    };
  },
  methods: {
    prevSlide() {
      this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    },
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    },
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    }
  }
};
</script>

<style scoped>
.button {
  background: linear-gradient(to bottom, #8a2be2, #4b0082);
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  height: 75px;
  width: 700px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
}
.mais{
  background-color: rgb(255, 255, 255);
  height: 50px;
  width: 50px;
  border-radius: 50%;
  margin-left: 50px;
  color: black;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 350%;
}

.menu {
  display: none;
  list-style: none;
  padding: 0;
  margin: 0;
  height: 65px;
  width: 500px;
  background-color: #8a2be2;
}


.dropdown{
  font-family: 'Roboto', 'Montserrat', 'Quicksand', 'OpenSans', sans-serif;

}

.dropdown:hover .menu {
  display: block;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 450px;
  width: 900px;
  padding-right: 300px;
}

.carousel {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.slide img {
  width: 700px;
  height: auto;
  border: 3px solid; /* Define a cor da borda no hover */
    border-image: linear-gradient(to right, rgb(96, 0, 151), rgb(115, 255, 0));
    border-image-slice: 1;
}
</style>