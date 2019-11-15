<template>
  <div>
    <Nav />
    <router-view />
  </div>
</template>

<script>
import Continents from './components/Continents'
import Nav from './components/Nav'

export default {
  name: 'App',
  components: {
    Nav
  }
}
</script>

<style>
body {
  font-family: 'Roboto', sans-serif;
  background-color: blueviolet;
  color: bisque;
}
h1 {
  text-align: center;
}
</style>
