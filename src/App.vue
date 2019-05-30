<template>
  <div id="app">
    <Home
      title="Hi, I'm Sergio!"
      intro="I'm a web developer located in BA, currently working for Auth0. Dynamic and detail-oriented programmer with a focus for delivering elegant solutions for UI interfaces, effectively and efficiently. I possess an extensive understanding of responsive web design, mobile first practices, modern layout building, and cross browser compatibility. I have a track record of working in several fields. I've done sites for brands like Nike and Samsung, mobile videogames, medical products, and currently in a SaaS company. Currently working with React applications, NextJS, Styled Components, Redux and NodeJS."
      />
  </div>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'app',
  components: {
    Home
  }
}
</script>

<style>
#app {
  margin: 0;
  padding: 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
