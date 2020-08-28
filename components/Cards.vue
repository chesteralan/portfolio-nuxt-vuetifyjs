<template>
  <v-layout row>
    <v-flex
      v-for="(item, index) in items"
      :key="item.slug"
      md4
      sm6
      data-aos="fade-up"
      :data-aos-delay="index * 200"
    >
      <div class="px-3 pb-5">
        <Card :item="item" />
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>
