<template>
  <div class="about">
    <h1>This is an add property page</h1>
    <v-btn primary large block v-on:click="pushProperty('テスト')">test</v-btn>
  </div>
</template>

<script>
import firebase from 'firebase';
export default {
  name: 'AddProperty',
  components: {
  },
  data () {
    return {
      db: firebase.firestore(),
    }
  },
  methods: {
      pushProperty(name) {
        this.db.collection("properties").add({
            name: name,
            ownerId: firebase.auth().currentUser.uid,
            ownerName: firebase.auth().currentUser.displayName
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
      }
  }
}
</script>