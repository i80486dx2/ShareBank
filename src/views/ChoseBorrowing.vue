<template>
  <div class="about">
    <h1>This is an chose-borrowing page</h1>
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
  mounted: function() {
    this.pushRecipt("4PLxxhKIRYE9iKpET2T8", "テスト", new Date());
  },
  methods: {
      pushRecipt(propertyId, propertyName, dueDate) {
        this.db.collection("receipts").doc(propertyId).set({
            propertyId: propertyId,
            personId: firebase.auth().currentUser.uid,
            dueDate: dueDate,
            propertyName: propertyName
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
      }
  }
}
</script>