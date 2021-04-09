<template>
  <section id="removed-page" >
      <h1>You no longer exists in Shui system</h1>
      <NoSettings/>
      <WavesFooter/>
  </section>
</template>

<script>

import WavesFooter from '../components/Waves.vue'
import NoSettings from '@/components/NoSettings.vue'


export default {
    name: "Removed-page",
    components: {
        WavesFooter,
        NoSettings
    }
}
</script>

<style>

</style>