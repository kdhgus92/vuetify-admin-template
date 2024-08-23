<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-tool-bar-title>PageLayout</v-tool-bar-title>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'PageLayout'
}
</script>

<style>

</style>