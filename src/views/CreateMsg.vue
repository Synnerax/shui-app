<template>
  <section id="create-msg">
      <Settings/>
      <article class="create-msg-container center-flexbox">
        <textarea v-model="message.text" name="" id="text-area" cols="30" rows="10" ></textarea>
      </article>
      <div class="triangle-box">
          <img class="msg-triangle" src="@/assets/msg-triangle.svg" alt="">
      </div>
      <article class="push-to-streams">
          <input type="text" v-model="message.streams">
      </article>
      <button @click="push" class="push-msg">
          Publicera
      </button>

  </section>
</template>

<script>

import Settings from '@/components/Settings.vue'


export default {
    name: "Message-page",
    data() {
        return {
            message: {
                text: "",
                streams: ''
            }
        }
    },
    methods: {
      push() {
        let streamsArray = this.message.streams.split(', ')
        this.$store.dispatch('publishMessage', {text: this.message.text, streams: streamsArray})
        
      }
    },
    components: {
        Settings
    }
}

</script>

<style lang="scss">


</style>