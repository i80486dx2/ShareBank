<template>
  <div class="about">
    <h1>This is an borrowinglist page</h1>
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
      pushRecipt(propertyId, dueDate) {
        this.db.collection("receipts").add({
            propertyId: firebase.auth().currentUser.uid,
            dueDate: dueDate
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
      }
  }
}
</script>