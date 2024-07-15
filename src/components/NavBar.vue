<script></script>

<template>

        <nav>
            <a href="">Felipe <br>
            Jaré</a>  

            <RouterLink class="apertadores" to="/">/home</RouterLink>
            <RouterLink class="apertadores" to="/about">/experiencia</RouterLink>
            <RouterLink class="apertadores" to="/projetos">/projetos</RouterLink>
            <RouterLink class="apertadores" to="/melike" >/me like</RouterLink>
            <RouterLink class="apertadores" to="/contato" >/contato</RouterLink>



      </nav>


</template>

<style>


nav{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: rgb(0, 0, 0, 0.83) ;
  width: 100%;
  font-family: 'Source Code Pro', monospace;  
}

.apertadores{

  margin: auto;
  color: white;

}

.apertadores:hover {
  color: rgb(170, 255, 0);
}

</style>
