<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Share Bank</span>
        <span class="font-weight-light"> BORROW</span>
      </v-toolbar-title>
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
  mounted: function(){
    this.prototype.$firebaseUser = firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        console.log(`logged in ${user.uid}`);
      } else {
        // User is signed out.
        console.log("logout!");
      }
    });
  },
  data () {
    return {
      //
    }
  }
}
</script>
