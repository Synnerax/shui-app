<template>
  <section id="no-settings" v-show="display">
    <button class="back-to-start center-flexbox" @click="back">Tillbaka till Startsidan</button>
  </section>
</template>

<script>
export default {
    name: "no-settings",
    computed: {
      display() {
        return this.$store.state.displaySettings
      },
    },
    methods:{
      back(){
        this.$store.dispatch("backToStart")
      }
    }
}
</script>

<style lang="scss">




</style>