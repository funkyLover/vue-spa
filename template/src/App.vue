<template>
  <div id="entry">
    <h1>welcome to vue-spa</h1>
    <div class="nav">
      <router-link :to="{ name: 'index' }">index</router-link>
      <router-link :to="{ name: 'about' }">about</router-link>
    </div>
  </div>
</template>

<script>
import store from 'src/vuex/store'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default {
  name: 'app',
  store{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
