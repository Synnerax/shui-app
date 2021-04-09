<template>
  <section id="flow">
      
      <StreamMsg v-for="(message, index) in messages" :key="index" :message="message"/>
       <router-link to="/create-msg"><img class="create-msg" src="../assets/create-msg.svg" alt="create message button"></router-link>
  </section>
</template>

<script>

import StreamMsg from '@/components/StreamMsg.vue'
//import Settings from '@/components/Settings.vue'


export default {
    name: "Flow-page",
    computed: {
      streams() {
        return this.$store.state.streams
      },
      messages() {
          return this.$store.state.messages
      }
    },
    components: {
        StreamMsg,
        
        
    },
    mounted() {
        this.$store.dispatch('fetchFlow')
    }
}
</script>

<style>

</style>