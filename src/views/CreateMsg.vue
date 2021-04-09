<template>
  <section id="create-msg">
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
    }
}

</script>

<style lang="scss">

#create-msg {
    display: flex;
    flex-direction: column;
    align-items: center;

    .triangle-box {
    width: 379px;
    height: 20px;
    position: relative;
    }

    .create-msg-container {
        margin-top: 5rem;
        position: static;
        width: 379px;
        height: 432px;

        background: #FFFFFF;
        box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
    }

    .push-to-streams {
        margin-top: 15rem;
        width: 379px;
        height: 72px;
        

        border: 1px solid #FFFFFF;
        box-sizing: border-box;
        border-radius: 3px;
    }

    .push-msg {
        margin-top: 2rem;
        width: 379px;
        height: 72px;
        left: 16px;
        top: 722px;
        border-style: none;
        background: #EF4343;
        border-radius: 4px;
    }

}
</style>