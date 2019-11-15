<template>
  <nav>
    <router-link :to="{ name: 'home' }">
      Home
    </router-link>

    <router-link :to="{ name: 'continents' }">
      Continents
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'Nav'
}
</script>

<style scoped>
nav {
  position: relative;
  display: flex;
  width: 640px;
  margin: 4rem auto;
}

nav a {
  display: block;
  width: 20%;
  padding: 0.65rem 0;
  color: #fff;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
}

nav a:hover {
  font-size: 20px;
  font-weight: 900;
  transition: font-size 0.1s linear, font-weight 0.1s linear;
  color: #374883;
}
</style>
