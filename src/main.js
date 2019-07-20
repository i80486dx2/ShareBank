import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

import firebase from 'firebase'

Vue.config.productionTip = false

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB8dy2ZlUVEKemTLgFN3eCezv3gEqDz74U",
  authDomain: "eijiro-7d0c9.firebaseapp.com",
  databaseURL: "https://eijiro-7d0c9.firebaseio.com",
  projectId: "eijiro-7d0c9",
  storageBucket: "eijiro-7d0c9.appspot.com",
  messagingSenderId: "354341411126",
  appId: "1:354341411126:web:8695abe41b4a1c11"
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
