<template>
  <div id="app">
    <Banner/>
  <!--  <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
  -->
    <router-view/>
  </div>
</template>

<script>
import Banner from "@/components/StreamBanner.vue"

export default {
  name: "App",
  components: {
    Banner
  }
}
</script>
<style lang="scss">
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;

  .streams-banner {
    position: absolute;
    left: 80px;
    z-index: 10;
  }
}

nav {
  width: 90%;
  display: flex;
  justify-content: space-around;

  a {
    font-weight: bold;
    color: #f3f4f5;

    //&.router-link-exact-active {
    //  color: #f5f7f6;
    //}
  }
}

#Landing {
  position: relative;
  min-height: 100vh;
  background: rgba(25, 39, 74, 1);

    h1 {
    font-family: 'Cantarell', sans-serif;
    color: #f4f4f4f4;
    }
    h3 {
    font-family: 'PT Sans', sans-serif;
    color: rgba(0, 178, 255, 0.8);
    }

}


.waves {
  width: 100%;
  position: absolute;
  bottom: 0;
}

.center-flexbox {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
