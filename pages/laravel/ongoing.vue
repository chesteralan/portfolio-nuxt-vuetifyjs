<template>
  <v-container>
    <Cards :items="laravelItems" />
  </v-container>
</template>

<script>
export default {
  computed: {
    laravelItems () {
      return this.$store.state.laravelItems.filter(item => item.attributes.status === 'ongoing')
    }
  }
}
</script>
