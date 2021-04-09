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

<style lang="scss">

.add-stream-section {
  display: flex;

  padding-left: 15px;
  .add-stream-input {
    width: 75%;
    background: rgba(239, 67, 67, 0.342);
    border: none;
    font-family: PT Sans;
    color: #ffffff;
    font-size: 24px;
    line-height: 150%;
  }

  .checkmark-container {
    width: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ffffff;
  }
}

.remove-user {
  width: 85%;
  height: 72px;
  margin: 20px auto 38px auto;
  background: #082756;
  border-radius: 4px;
  font-family: PT Sans;
  font-weight: bold;
  font-size: 24px;
  line-height: 150%;
  color: #ffffff;
}


</style>