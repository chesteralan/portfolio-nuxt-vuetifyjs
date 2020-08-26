<template>
  <v-container>
    <Cards :items="allItems" />
  </v-container>
</template>

<script>
export default {
  computed: {
    allItems () {
      return this.$store.state.allItems
    }
  }
}
</script>
