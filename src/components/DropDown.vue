<script></script>

<template>
  <nav class="menu">
    <ul>
      <li class="dropdown">
        <a href="#">Produtos</a>
        <div class="dropdown-content">
          <a href="#">Produto 1</a>
          <a href="#">Produto 2</a>
          <a href="#">Produto 3</a>
        </div>
      </li>
    </ul>
  </nav>
</template>

<style scoped>

.menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu ul li {
  float: left;
  position: relative;
}

.menu ul li a {
  display: block;
  padding: 10px 20px;
  text-decoration: none;
  color: #333;
}

/* Estilo para o submenu dropdown */
.dropdown-content {
  display: none;
  background-color: #f9f9f9;
  min-width: 120px;
  z-index: 1;
}

.dropdown-content a {
  display: block;
  padding: 10px 20px;
  text-decoration: none;
  color: #333;
}

/* Mostrar o submenu quando o item de menu é hover */
.menu ul li:hover .dropdown-content {
  display: block;
}


</style>
