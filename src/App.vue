<template>
  <div>
    <h1>Hello from Vue</h1>
    <Continents />
  </div>
</template>

<script>
import Continents from './components/Continents'

export default {
  name: 'App',
  components: {
    Continents
  }
}
</script>

<style>
body {
  font-family: 'Roboto', sans-serif;
}
h1 {
  text-align: center;
}
</style>
