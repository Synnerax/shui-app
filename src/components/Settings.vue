<template>
  <section v-show="display" id="settings">
    <h2 class="settings-header">Streams</h2>
      <section class="followed-streams">
        <section v-for="(stream, index) in streams" :key="index" class="stream-tag">
          <span class="stream-name">
            {{stream}}
          </span>
          <span class="cross-button-container">
            <img class="stream-img" src="../assets/cross_button.svg" @click="removeStream(stream)" alt="">
          </span>
        </section>
      </section>
      <section class="add-stream-section">
        <input class="add-stream-input" type="text" v-model="streamInput">
        <div class="checkmark-container" @click="addStream">
          <img src="../assets/checkmark.svg" alt="">
        </div>

      </section>
        <button @click="removeUser" class="remove-user">
          Shit, theyre on to me!
        </button>
  </section>
</template>

<script>
export default {
  name: "Settings",
  data() {
    return {
      streamInput: ""
    }
  },
  computed: {
    display() {
      return this.$store.state.displaySettings
    },
    streams() {
        return this.$store.state.streams
    },
    isLoggedin() {
      return this.$store.state.loggedIn
    }
  },
  methods: {
    addStream(){
      let input = this.streamInput

      this.$store.dispatch('addStream', input)
      this.streamInput = ''
    },
    removeStream(stream) {
      this.$store.dispatch('removeStream', stream)
    },
    removeUser() {
      console.log("DELETE")
      this.$store.dispatch("removeUser")
    }
  }
}
</script>

<style>

</style>