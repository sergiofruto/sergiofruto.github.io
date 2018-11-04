<template>
  <div>
    <span v-bind:style="{ backgroundColor: currentColor }" class="bar top-bar"></span>
    <div class="container">
      <div class="hero-container">
        <h1 v-bind:style="{ borderBottom: `1px solid ${currentColor}` }">Hi! I'm Sergio!</h1>
        <p>I'm a web developer located in BA, currently working for Auth0.</p>
        <p>I make websites look good and behave nice in every browser and device.</p>
        <p>I have 6 years of experience in web development, focusing in HTML, CSS and some help of JS, following the modern standards for Responsive Web Design and Mobile First.</p>
        <button
          v-bind:style="{ color: white, border: `1px solid ${currentColor}`}"
          v-on:click="updateColor"
        >
          update color!
        </button>
      </div>
      <SideBar/>
    </div>
    <span v-bind:style="{ backgroundColor: currentColor }" class="bar bottom-bar"></span>
  </div>
</template>

<script>
import SideBar from './SideBar'

export default {
  name: 'Homepage',
  components: {
    SideBar,
  },
  data() {
    return {
      currentColor: '#11cbdc',
    };
  },
  methods: {
    updateColor: function () {
      const blueColor = '#11cbdc';
      const yellowColor = '#FDB52B';
      const redColor = '#E0292D';
      const whiteColor = '#FFFFFF';

      const getColor = Math.floor(Math.random() * 3) + 1;
      switch (getColor) {
        case 1:
          this.currentColor = blueColor;
          break;
        case 2:
          this.currentColor = yellowColor;
          break;
        case 3:
          this.currentColor = redColor;
          break;
        default:
          this.currentColor = redColor;
      }
    }
  },
  mounted: function () {
    this.updateColor();
  },
};


</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  max-width: 600px;
  padding: 0 3rem;
  text-align: left;
}

h1 {
  padding: 0 0 2.4rem;
  margin: 0 0 2.4rem;
  font-size: 3.2rem;
  line-height: 1;
  color: white;
  transition: all 1s ease;
}

p {
  font-size: 2rem;
  margin: 0;
  color: rgba(255, 255, 255, .9);
}

span.bar {
  position: absolute;
  left: 0;
  display: block;
  width: 100%;
  height: 4.5rem;
  background-color: black;
  transition: all 1s ease;
}

button {
  padding: 10px 20px;
  margin-top: 2.5rem;
  background: transparent;
  border-radius: 3px;
  font-size: 12px;
  text-transform: uppercase;
  color: white;
}

span.top-bar {
  top: 0;
}

span.bottom-bar {
  bottom: 0;
}

</style>
