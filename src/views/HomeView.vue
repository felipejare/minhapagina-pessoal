<script></script>

<template>
  <body class="background-image">
    <div class="container">
      <div class="title">
        <h1>Felipe Augusto Kuhl</h1>
        <h2>Front-End Developer</h2>
      </div>
      <div class="bloco">
        <div class="centered-text">
          <p class="effectfrase">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, sint maxime. Beatae in
            ex odio nobis soluta! Quis commodi deserunt, minima beatae reprehenderit nulla aliquid
            adipisci dolorem, consequatur, dignissimos mollitia!
          </p>
        </div>
      </div>
    </div>
  </body>
</template>

<style scoped>
.background-image {
  background-image: url('../images/bloco-estrutural-1.jpg');
  background-size: cover;
  width: 100%;
  height: 100%;
  
}

.container {
  /* Adicione esta regra para centralizar verticalmente todo o conteúdo */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

/* Remova a classe .bloco, pois não é mais necessária */

.effectfrase {
  /* Adicione estilos adicionais conforme necessário */
}
</style>
