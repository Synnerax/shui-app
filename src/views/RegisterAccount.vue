<template>
  <section id="register">
    <ShuiBanner/>
    <WavesFooter />
    <NoSettings/>
    <section id="register-user">
      <span v-show="inputError" class="register-error">Try something else</span>
      <input class="username-input" type="text" v-model="username" placeholder="Användarnamn">
      <input class="password-input" type="password" v-model="password" placeholder="Lösenord">
      <button @click="register">Registrera</button>
    </section>
  </section>
</template>

<script>
import ShuiBanner from '../components/ShuiBanner.vue'
import WavesFooter from '../components/Waves.vue'
import NoSettings from '@/components/NoSettings.vue'


export default {
  components: { ShuiBanner, WavesFooter, NoSettings},
  name: "Register-page",
  data(){
    return {
      username: '',
      password: ''
  }
  },
  methods: {
    register(){
      this.$store.dispatch('register', { username: this.username, password: this.password })
    }
  },
  computed: {
    inputError() {
      return this.$store.state.errorMessage
    }
  }
  
}
</script>

<style>

</style>