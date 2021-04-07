<template>
      <img @click="displaySettings" class="streams-banner" src="@/assets/streamsbanner.svg" alt="">
</template>

<script>
export default {
    name: "Banner",
    methods: {
        displaySettings() {
            console.log('Im Alive!')
            this.$store.commit('toggleDisplaySettings')
        }
    }
}
</script>

<style>

</style>