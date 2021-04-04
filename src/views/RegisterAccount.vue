<template>
  <section id="register">
    <ShuiBanner/>
    <WavesFooter />
    <section id="register-user">
      <input class="username-input" type="text" v-model="username" placeholder="Användarnamn">
      <input class="password-input" type="text" v-model="password" placeholder="Lösenord">
      <button @click="register">Registrera</button>
    </section>
  </section>
</template>

<script>
import ShuiBanner from '../components/ShuiBanner.vue'
import WavesFooter from '../components/Waves.vue'


export default {
  components: { ShuiBanner, WavesFooter },
  name: "Register-page",
  data(){
    return {
      username: 'elliot',
      password: 'qwerty'
  }
  },
  methods: {
    register(){
      this.$store.dispatch('register', { username: this.username, password: this.password })
    }
  }
}
</script>

<style>

</style>