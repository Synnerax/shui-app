<template>
  <section id="register">
    <ShuiBanner/>
    <WavesFooter />
    <NoSettings/>
    <section id="register-user">
      <input class="username-input" type="text" v-model="username" placeholder="Användarnamn">
      <input class="password-input" type="password" v-model="password" placeholder="Lösenord">
      <button @click="register">Logga in</button>
    </section>
  </section>
</template>

<script>
import ShuiBanner from '../components/ShuiBanner.vue'
import WavesFooter from '../components/Waves.vue'
import NoSettings from '@/components/NoSettings.vue'


export default {
  components: { ShuiBanner, WavesFooter, NoSettings },
  name: "Register-page",
  data(){
    return {
      username: '',
      password: ''
  }
  },
  methods: {
    register(){
      this.$store.dispatch('login', { username: this.username, password: this.password })
    }
  }
}
</script>

<style>

</style>