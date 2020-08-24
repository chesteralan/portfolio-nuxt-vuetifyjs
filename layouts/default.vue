<template>
  <v-app>
    <v-navigation-drawer app light>
    <!-- -->
    </v-navigation-drawer>
    <v-app-bar absolute light app>
      <v-app-bar-nav-icon />

      <v-toolbar-title>Portfolio</v-toolbar-title>

      <v-spacer />
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {

}
</script>
