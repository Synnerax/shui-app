<template>
  <div id="app">
    <Banner/>
    <!--<Settings v-show="settings"/>
    <NoSettings v-show="!settings"/>-->
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
//import Settings from '@/components/Settings.vue'
//import NoSettings from '@/components/NoSettings.vue'

export default {
  name: "App",
  components: {
    Banner,
    //Settings,
    //NoSettings
  },
  computed: {
    settings(){
      return this.$store.state.loggedIn
    }
  }
}
</script>
<style lang="scss">
body {
  
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background: #d3d3d3;

  
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  max-width: 750px;
  color: #2c3e50;
  background: rgba(25, 39, 74, 1);
  margin: auto;
  position: relative;

  .streams-banner {
    position: absolute;
    left: 32px;
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

.register-error {
  color: #EF4343;
  font-size: 20px;
}
#settings {
    background: #EF4343;
    width: 100%;
    height: 70vh;
    position: absolute;
    font-family: 'PT Sans', sans-serif;
    display: flex;
    flex-direction: column;
    z-index: 5;

    .settings-header {
      color: #FFFFFF;
      line-height: 150%;
      font-weight: bold;
      text-align: left;
      padding-top: 74px;
      padding-left: 52px;
    }

    .followed-streams {
      display: flex;
      flex-wrap: wrap;
      width: 90%;
      margin: 0 auto;
      .stream-tag {
        margin-top: 9px;
        margin-left: 15px;
        display: flex;
        align-items: center;
        height: 32px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 4px;

        .stream-name {
          padding-right: 13px;
          padding-left: 9px;
          color: #FFFFFF;
          font-style: italic;
          margin-left: 15px;
          
        }

        .cross-button-container {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          width: 32px;
          background: rgba(255, 255, 255, 0.2);
}
}
    }

    .add-stream-section {
      display: flex;
      border: 2px solid #FFFFFF;
      box-sizing: border-box;
      border-radius: 4px;
      width: 85%;
      margin: auto auto 0;
      height: 72px;

        .add-stream-input {
          width: 75%;
          background: rgba(239, 67, 67, 0.342);
          border: none;
          font-family: PT Sans;
          color: #ffffff;
          font-size: 24px;
          line-height: 150%;
        }

        .checkmark-container {
          width: 25%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #ffffff;
        }
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
  /*padding-top: 20px;*/
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  .msg-container {
    width: 90%;
    position: relative;


  }

  .stream-tag-container {
    text-align: right;

      .stream-tag {
      position: static;
      margin-right: 3rem;
      width: 100px;
      height: 23px;
      left: 16px;
      top: 4.5px;

      font-family: PT Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 23px;

      color: rgba(0, 178, 255, 0.8);
    }
  }

  .stream-msg {
    width: 100%;
    min-height: 152px;
    background: #FFFFFF;
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
    position: relative;

    .msg {
      font-size: 24px;
    }
    .date-container {
      font-family: 'PT Sans', sans-serif;
      font-size: 12px;
      line-height: 150%;
      letter-spacing: 0.04em;
      text-align: left;
      padding: 15px;
      color: rgba(0, 0, 0, 0.6);
    }

    .name-tag-container {
      padding-left: 15px;
      padding-bottom: 10px;
      text-align: left;
      span {
        font-family: PT Sans;
        font-style: italic;
        font-weight: bold;
        font-size: 17px;
        line-height: 150%;
        color: #000000;
        padding-left: 5px;
      }
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
    .msg-triangle {
      position: absolute;
      right: 0;
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


#text-area {
  resize: none;
  width: 95%;
  height: 95%;
  font-size: 24px;
  border: none;
}

.push-to-streams > input {
  border-style: none;
  background: none;
  width: 98%;
  height: 95%;
}


#no-settings {
  top: 0;
  background: #EF4343;
  width: 100%;
  height: 50vh;
  position: absolute;
  font-family: 'PT Sans', sans-serif;
  display: flex;
  justify-content: center;
  flex-direction: column;
  z-index: 5;
  .back-to-start {
    text-decoration: none;
    width: 85%;
    height: 72px;
    margin: 20px auto 38px auto;
    background: #082756;
    border-radius: 4px;
    font-family: PT Sans;
    font-weight: bold;
    font-size: 24px;
    line-height: 150%;
    color: #ffffff;
  }
}


#removed-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    h1 {
        max-width: 23ch;
        font-family: PT Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 32px;
        line-height: 150%;
        color: #ffffff;
        margin: 0;
    }
}

#create-msg {
    display: flex;
    flex-direction: column;
    align-items: center;

    .triangle-box {
    width: 379px;
    height: 20px;
    position: relative;
    }

    .create-msg-container {
        margin-top: 5rem;
        position: static;
        width: 379px;
        height: 432px;

        background: #FFFFFF;
        box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
    }

    .push-to-streams {
        margin-top: 15rem;
        width: 379px;
        height: 72px;
        

        border: 1px solid #FFFFFF;
        box-sizing: border-box;
        border-radius: 3px;
        input {
          font-family: PT Sans;
          font-size: 24px;

          color: #ffffff;
        }
    }

    .push-msg {
      font-family: PT Sans;
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 31px;
      margin-top: 2rem;
      width: 379px;
      height: 72px;
      border-style: none;
      background: #EF4343;
      border-radius: 4px;
    }

}

.remove-user {
  width: 85%;
  height: 72px;
  margin: 20px auto 38px auto;
  background: #082756;
  border-radius: 4px;
  font-family: PT Sans;
  font-weight: bold;
  font-size: 24px;
  line-height: 150%;
  color: #ffffff;
}
</style>
