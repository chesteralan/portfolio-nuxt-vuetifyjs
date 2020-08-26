<template>
  <v-container>
    <Cards :items="codeigniterItems" />
  </v-container>
</template>

<script>
export default {
  computed: {
    codeigniterItems () {
      return this.$store.state.codeigniterItems.filter(item => item.attributes.status === 'ongoing')
    }
  }
}
</script>
