<template>
  <v-container>
    <v-layout row>
      <v-flex v-for="item in wordpressItems" :key="item.slug" md4 sm6>
        <div class="px-3 pb-3">
          <CardMedia :item="item" />
        </div>
      </v-flex>
    </v-layout>
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
