<template>
  <div />
</template>

<script>
export default {
  async asyncData ({ params, payload }) {
    if (payload) { return { item: payload } } else {
      return {
        item: await require(`~/content/python/${params.slug}.md`)
      }
    }
  }
}
</script>
