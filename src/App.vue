<template>
  <div id="app">
    <puzzle></puzzle>
  </div>
</template>

<script>
import Puzzle from './components/Puzzle'

export default {
  components: {
    Puzzle
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  text-align: center;
}

</style>
