<template>
  <div id="app">
    <my-elements-list />
  </div>
</template>

<script>
import MyElementsList from "./components/MyElementsList.vue";

export default {
  components: {
    MyElementsList,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>