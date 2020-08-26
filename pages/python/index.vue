<template>
  <v-container>
    <Cards :items="pythonItems" />
  </v-container>
</template>

<script>
export default {
  computed: {
    pythonItems () {
      return this.$store.state.pythonItems
    }
  }
}
</script>
