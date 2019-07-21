<template>
  <div id="prop">
   <v-breadcrumbs :items="items" divider=">" light>
   </v-breadcrumbs>
    <v-layout align-center justify-center>
      <v-flex md5 class="white">
        <v-container style="position: relative;top: 20%;" class="text-md-center">
          <v-card flat>
            <v-card-title>
              <h2>This is an chose-borrowing page</h2>
            </v-card-title>
           
          </v-card>
        </v-container>
      </v-flex>
    </v-layout>
    
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