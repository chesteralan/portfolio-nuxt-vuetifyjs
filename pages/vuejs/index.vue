<template>
  <v-container>
    <Cards :items="vueItems" />
  </v-container>
</template>

<script>
export default {
  computed: {
    vueItems () {
      return this.$store.state.vueItems
    }
  }
}
</script>
