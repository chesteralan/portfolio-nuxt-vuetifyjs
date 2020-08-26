<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app light>
      <v-list>
        <v-subheader>Categories</v-subheader>
        <v-list-item
          link
          router
          nuxt
          to="/"
        >
          <v-list-item-icon>
            <v-icon>
              mdi-folder-star-multiple
            </v-icon>
          </v-list-item-icon>
          <v-list-item-title>All Projects</v-list-item-title>
        </v-list-item>

        <v-list-group
          v-for="(category, i) in categories"
          :key="i"
          color="primary"
          :prepend-icon="category.icon"
        >
          <template v-slot:activator>
            <v-list-item-title link router nuxt :to="category.route">
              {{ category.title }}
            </v-list-item-title>
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

      <v-toolbar-title>Chester Alan's Portfolio Page</v-toolbar-title>

      <v-spacer />
    </v-app-bar>

    <v-main class="white">
      <v-container fluid>
        <transition name="slide-fade" mode="out-in">
          <Nuxt />
        </transition>
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

<style>
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all 0.5s ease;
}
.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1.0, 0.5, 0.5, 1.0);
}
.slide-fade-enter {
  transform: translateY(10px);
  opacity: 0;
}
.slide-fade-leave-to {
  transform: translateY(10px);
  opacity: 0;
}
</style>
