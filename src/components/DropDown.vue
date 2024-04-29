<template>
  <div class="dropdown">
    <button @click="toggleDropdown" class="button">
      Abrir Menu
    </button>
    <ul v-if="isOpen" class="menu">
      <li>Opção 1</li>
      <li>Opção 2</li>
      <li>Opção 3</li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
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

.dropdown:hover .menu {
  display: block;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>