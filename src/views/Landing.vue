<template>
  <div id="Landing" class="center-flexbox">
    <ShuiBanner/>
    <nav>
      <router-link to="/register">Create Account</router-link>
      <router-link to="/sign-in">Sign-in</router-link>
    </nav>
    <WavesFooter/>
  </div>
</template>

<script>
// @ is an alias to /src
import WavesFooter from "@/components/Waves.vue"
import ShuiBanner from "@/components/ShuiBanner.vue"

export default {
  name: 'Home',
  components: {
    WavesFooter,
    ShuiBanner
  }
}
</script>
