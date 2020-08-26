<template>
  <v-container>
    <Cards :items="chromeItems" />
  </v-container>
</template>

<script>
export default {
  computed: {
    chromeItems () {
      return this.$store.state.chromeItems.filter(item => item.attributes.type === 'extension')
    }
  }
}
</script>
