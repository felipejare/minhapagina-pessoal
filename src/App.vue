<script setup lang="ts">

</script>

<template>
  <header>
    


      <nav>
        <div class="apertadores">
          
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <a href="">projetos</a>
        <a href="">me like</a>
        <a href="">contato</a>


        </div> 
      </nav>
  </header>

  <RouterView />
</template>

<style scoped>

nav{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 30px;
}

.apertadores{

  padding: 10px;

}


</style>
