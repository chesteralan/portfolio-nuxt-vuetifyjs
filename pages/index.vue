<template>
  <v-container>
    <v-layout row>
      <v-flex v-for="item in allItems" :key="item.slug" md4 sm6>
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
    allItems () {
      return this.$store.state.allItems
    }
  }
}
</script>
