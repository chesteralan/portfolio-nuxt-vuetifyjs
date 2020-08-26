<template>
  <v-container>
    <Cards :items="otherItems" />
  </v-container>
</template>

<script>
export default {
  computed: {
    otherItems () {
      return this.$store.state.otherItems
    }
  }
}
</script>
