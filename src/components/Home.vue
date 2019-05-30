<template>
  <div class="container">
    <img alt="Laptop" src="../assets/laptop-white.svg">
    <h1>{{ title }}</h1>
    <p>{{ intro }}</p>
    <ul>
      <li>
        <a href="https://codepen.io/sergiofruto">
          <svg viewBox="0 0 512 512" preserveAspectRatio="xMidYMid meet">
            <path d="M427 201.9c-0.6-4.2-2.9-8-6.4-10.3L264.2 87.3c-4.9-3.3-11.4-3.3-16.3 0L91.4 191.6c-4 2.7-6.5 7.4-6.5 12.2v104.3c0 4.8 2.5 9.6 6.5 12.2l156.4 104.3c4.9 3.3 11.4 3.3 16.3 0L420.6 320.4c4-2.6 6.6-7.4 6.6-12.2V203.9C427.1 203.2 427.1 202.6 427 201.9 427 201.7 427.1 202.6 427 201.9zM270.7 127.1l115.2 76.8 -51.5 34.4 -63.8-42.7V127.1zM241.3 127.1v68.6l-63.8 42.7 -51.5-34.4L241.3 127.1zM114.3 231.4l36.8 24.6 -36.8 24.6V231.4zM241.3 384.9L126.1 308.1l51.5-34.4 63.8 42.6V384.9zM256 290.8l-52-34.8 52-34.8 52 34.8L256 290.8zM270.7 384.9V316.3l63.8-42.6 51.5 34.4L270.7 384.9zM397.7 280.6l-36.8-24.6 36.8-24.6V280.6z"></path>
          </svg>
        </a>
      </li>
      <li>
        <a href="https://github.com/sergiofruto">
          <svg viewBox="0 0 512 512" preserveAspectRatio="xMidYMid meet">
            <path d="M256 70.7c-102.6 0-185.9 83.2-185.9 185.9 0 82.1 53.3 151.8 127.1 176.4 9.3 1.7 12.3-4 12.3-8.9V389.4c-51.7 11.3-62.5-21.9-62.5-21.9 -8.4-21.5-20.6-27.2-20.6-27.2 -16.9-11.5 1.3-11.3 1.3-11.3 18.7 1.3 28.5 19.2 28.5 19.2 16.6 28.4 43.5 20.2 54.1 15.4 1.7-12 6.5-20.2 11.8-24.9 -41.3-4.7-84.7-20.6-84.7-91.9 0-20.3 7.3-36.9 19.2-49.9 -1.9-4.7-8.3-23.6 1.8-49.2 0 0 15.6-5 51.1 19.1 14.8-4.1 30.7-6.2 46.5-6.3 15.8 0.1 31.7 2.1 46.6 6.3 35.5-24 51.1-19.1 51.1-19.1 10.1 25.6 3.8 44.5 1.8 49.2 11.9 13 19.1 29.6 19.1 49.9 0 71.4-43.5 87.1-84.9 91.7 6.7 5.8 12.8 17.1 12.8 34.4 0 24.9 0 44.9 0 51 0 4.9 3 10.7 12.4 8.9 73.8-24.6 127-94.3 127-176.4C441.9 153.9 358.6 70.7 256 70.7z"></path>
          </svg>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    title: String,
    intro: String,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
body {
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(270deg, #00ffbd, #ff00df, #008cff, #fffa00);  background-size: 800% 800%;
  animation: GradientMove 45s ease infinite;
}

img {
  max-width: 50px;
  margin: 0 auto 18px;
}

@keyframes GradientMove {
  0% { background-position:0% 50 }
  50% { background-position:100% 50% }
  100% { background-position:0% 50% }
}

.container {
  background: white;
  max-width: 63%;
  margin: 0 auto;
  padding: 55px 40px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.2);
  color: white;
  line-height: 1.7;
}

h1 {
  margin: 0 0 32px;
  line-height: 0.8;
  letter-spacing: 1px;
  font-weight: 600;
  font-size: 25px;
}

.links-wrapper {
  display: flex;
}

svg {
  width: 50px;
  height: 50px;
  fill: rgba(255, 255, 255, .9);
}

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center;
}

li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
