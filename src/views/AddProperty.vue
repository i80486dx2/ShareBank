<template>
  <div class="about">
    <h1>This is an add property page</h1>
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
        db.collection("properties").add({
            name: name,
            ownerId: aaaa,
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