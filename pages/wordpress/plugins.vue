<template>
  <v-container>
    <Cards :items="wordpressItems" />
  </v-container>
</template>

<script>
export default {
  computed: {
    wordpressItems () {
      return this.$store.state.wordpressItems.filter(item => item.attributes.type === 'plugin')
    }
  }
}
</script>
