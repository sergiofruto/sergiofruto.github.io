<template>
  <div>
    <span v-bind:style="{ backgroundColor: currentColor }" class="bar top-bar"></span>
    <div class="container">
      <div class="hero-container">
        <h1 v-bind:style="{ borderBottom: `1px solid ${currentColor}` }">Hi! I'm Sergio!</h1>
        <p>I'm a web developer located in BA, currently working for Auth0.</p>
        <p>I make websites look good and behave nice in every browser and device.</p>
        <p>I have 6 years of experience in web development, focusing in HTML, CSS and some help of JS, following the modern standards for Responsive Web Design and Mobile First.</p>
        <div
          :style="style" class="color-palette"
          v-on:click="updateColor"
        >
          <span class="color-circle color-1"></span>
          <span class="color-circle color-2"></span>
          <span class="color-circle color-3"></span>
        </div>
      </div>
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
      startingColor: 0,
      currentColor: '#11cbdc',
      currentRotation: 60,
    };
  },
  computed: {
    style () {
      return { transform: 'rotate(' + this.currentRotation + 'deg)'}
    }
  },
  methods: {
    updateColor: function () {
      const colors = ['#11cbdc', '#FDB52B', '#E0292D'];
      if (this.startingColor < 2) {
        this.startingColor = this.startingColor + 1;
        this.currentRotation = this.currentRotation - 120;
      }
      else {
        this.startingColor = 0;
        this.currentRotation = 60;
      }

      this.currentColor = colors[this.startingColor];
    }
  }
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

.color-palette {
  position: relative;
  display: flex;
  width: 80px;
  height: 75px;
  margin-top: 40px;
  transform-origin: center center;
  transition: all .35s ease-in;
}

.color-palette:hover,
.color-palette:focus {
  cursor: pointer;
}

span.color-circle {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
}

.color-1 {
  position: absolute;
  top:0;
  left: 0;
  background-color: #11cbdc;
}

.color-2 {
  position: absolute;
  top:0;
  left: 30px;
  background-color: #FDB52B;
}

.color-3 {
  position: absolute;
  top: 25px;
  left: 15px;
  background-color: #E0292D;
}

button {
  padding: 10px 20px;
  margin-top: 2.5rem;
  background: transparent;
  border-radius: 3px;
  font-size: 12px;
  text-transform: uppercase;
  color: white;
  cursor: pointer;
}

button:focus,
button:hover,
button:active {
  outline: none;
}


span.top-bar {
  top: 0;
}

span.bottom-bar {
  bottom: 0;
}

</style>
