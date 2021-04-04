<template>
  <section id="register">
    <ShuiBanner/>
    <WavesFooter />
    <section id="register-user">
      <input class="username-input" type="text" placeholder="Användarnamn">
      <input class="password-input" type="text" placeholder="Lösenord">
      <button>Registrera</button>
    </section>
  </section>
</template>

<script>
import ShuiBanner from '../components/ShuiBanner.vue'
import WavesFooter from '../components/Waves.vue'


export default {
  components: { ShuiBanner, WavesFooter },
  name: "Register-page"
}
</script>

<style>

</style>