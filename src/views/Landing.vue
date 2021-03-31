<template>
  <div id="Landing" class="center-flexbox">
    <div>
      <img alt="Vue logo" src="../assets/logo.svg">
      <h1>SHUI</h1>
      <h3>FLOW FREELY</h3>
    </div>
    <nav>
      <router-link to="/">Create Account</router-link>
      <router-link to="/about">Sign-in</router-link>
    </nav>
    <WavesFooter/>
  </div>
</template>

<script>
// @ is an alias to /src
import WavesFooter from "@/components/Waves.vue"

export default {
  name: 'Home',
  components: {
    WavesFooter
  }
}
</script>
