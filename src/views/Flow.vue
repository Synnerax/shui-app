<template>
  <section id="flow">
      
      <StreamMsg/>
      <Settings/>
      <img class="create-msg" src="../assets/create-msg.svg" alt="create message button">
  </section>
</template>

<script>

import StreamMsg from '@/components/StreamMsg.vue'
import Settings from '@/components/Settings.vue'


export default {
    name: "Flow-page",
    components: {
        StreamMsg,
        Settings,
        
    }
}
</script>

<style>

</style>