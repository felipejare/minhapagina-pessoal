<script></script>

<template>

        <nav>
            <a href="">Felipe <br>
            Jaré</a>  

            <RouterLink class="apertadores" to="/">/home</RouterLink>
            <RouterLink class="apertadores" to="/about">/experiencia</RouterLink>
            <a class="apertadores" href="">/projetos</a>
            <RouterLink class="apertadores" to="/melike" >/me like</RouterLink>
            <a class="apertadores" href="">/contato</a>


      </nav>


</template>

<style>


nav{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 30px;
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
