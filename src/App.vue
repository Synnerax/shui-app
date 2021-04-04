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
  background: rgba(25, 39, 74, 1);

  
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

}

#register {
  min-height: 100vh;
    
    
    .shui-banner {
    padding-top: 5rem;
  }
}

#register-user {
  margin: auto;
  width: 75%;
  display: flex;
  flex-direction: column;


  input {
    background: rgba(0, 0, 255, 0);
    border: 2px solid #f4f4f4f4;
    height: 72px;
    margin-bottom: 25px;
    font-family: 'PT Sans', sans-serif;
    letter-spacing: 5px;
    text-align: center;
    color: #f4f4f4f4;
    font-size: 18px;


    &::placeholder {
      color: #f4f4f4f4;
    }
  }

  button {
    font-family: 'PT Sans', sans-serif;
    font-weight: bold;
    font-size: 24px;
    margin-top: 10px;
    height: 72px;
  }
}


#flow {
  padding-top: 20px;
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  .stream-msg {
    width: 90%;
    min-height: 152px;
    background: #FFFFFF;
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
    position: relative;

    &::after {
      position: absolute;
      right: 0;
      bottom: -20px;
      
      
      box-shadow: inset 0px 4px 3px rgba(0, 0, 0, 0.1);
    }
}

  .create-msg {
    position: fixed;
    bottom: 20px;
    right: 15px;
  }
}
.shui-banner {
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
  left: 0;
}

.center-flexbox {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
