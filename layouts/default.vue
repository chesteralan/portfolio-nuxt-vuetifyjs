<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app light>
      <v-list>
        <v-subheader>Categories</v-subheader>

        <v-list-group
          v-for="(category, i) in categories"
          :key="i"
          color="primary"
          :prepend-icon="category.icon"
        >
          <template v-slot:activator>
            <v-list-item-title>{{ category.title }}</v-list-item-title>
          </template>

          <v-list-item
            v-for="(subItem, si) in category.items"
            :key="si"
            link
            router
            nuxt
            :to="subItem.route"
          >
            <v-list-item-icon>
              <v-icon v-text="subItem.icon" />
            </v-list-item-icon>
            <v-list-item-title v-text="subItem.title" />
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar absolute light app>
      <v-app-bar-nav-icon @click="drawer = !drawer" />

      <v-toolbar-title>Portfolio</v-toolbar-title>

      <v-spacer />
    </v-app-bar>

    <v-main class="white">
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import categories from '@/content/categories.json'

export default {
  data () {
    return {
      categories,
      drawer: true
    }
  }
}
</script>
