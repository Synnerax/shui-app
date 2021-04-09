<template>
  <article class="msg-container">
  <article class="stream-msg">
    <p class="date-container"><span class="date">{{computedMessage.date}}</span></p>
    <p class="msg">
      {{computedMessage.text}}
    </p>
    <div class="name-tag-container"><img src="@/assets/Rectangle.svg" alt=""><span>{{computedMessage.user}}</span></div>
  </article>
  <div class="stream-tag-container">
    <span class="stream-tag" v-for="(stream, index) in computedMessage.streams" :key="index" >#{{stream}}</span>
    <img class="msg-triangle" src="@/assets/msg-triangle.svg" alt="">
  </div>
  </article>
</template>

<script>
export default {
  name: "Message",
  props: {
    message: Object
  },
  computed: {
    computedMessage() {
      let msg = {
        date: this.message.date ? this.message.date : "unable to get date",
        user: this.message.username ? this.message.username : "unable to get username",
        text: this.message.text ? this.message.text : "unable to get text",
        streams: this.message.streams ? this.message.streams : "unable to get streams"
        }
      return msg
      
    }
  }
}
</script>

<style>
.msg {
  text-align: left;
  padding-left: 15px;
}

</style>