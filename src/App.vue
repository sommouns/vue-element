<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>
// import MyForm from './components/form'

export default {
  name: 'app',
  components: {
    // MyForm
  }
}
</script>

<style>
* {
    padding: 0;
    margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
