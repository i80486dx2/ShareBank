<template>
  <v-app>
    <v-toolbar app>
      <router-link tag = "h1" to="/">
        <h1>Share Bank</h1>
      </router-link>

      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Tesing</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'App',
  data () {
    return {
      //
    }
  }
}
</script>
