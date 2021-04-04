<template>
  <section id="flow">
      <StreamMsg/>
      <img class="create-msg" src="../assets/create-msg.svg" alt="create message button">
  </section>
</template>

<script>

import StreamMsg from '@/components/StreamMsg.vue'

export default {
    name: "Flow page",
    components: {
        StreamMsg
    }
}
</script>

<style>

</style>