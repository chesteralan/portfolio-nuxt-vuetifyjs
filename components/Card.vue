<template>
  <v-card
    class="white"
  >
    <v-img
      height="200px"
      :src="item.attributes.thumbnail"
    />
    <v-card-title class="black--text">
      {{ item.attributes.title }}
    </v-card-title>
    <v-card-text class="black--text">
      {{ item.attributes.summary }}
    </v-card-text>

    <v-card-actions>
      <v-btn
        v-if="item.attributes.live_link !== ``"
        color="orange"
        text
        router
        nuxt
        :href="item.attributes.live_link"
        target="_blank"
      >
        Demo
      </v-btn>

      <v-btn
        v-if="item.attributes.source_link !== ``"
        color="orange"
        text
        router
        nuxt
        :href="item.attributes.source_link"
        target="_blank"
      >
        Source
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default () {
        return {
          title: '',
          source_link: '',
          live_link: '',
          summary: '',
          thumbnail: ''
        }
      }
    }
  }
}
</script>
