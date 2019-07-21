<template>
<div>
  <v-spacer></v-spacer>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3 style="position: relative;top: 20%;">
      <v-container class="text-md-center">
      <v-card>
        <v-list two-line subheader>
          <v-subheader inset>返却する商品を選択</v-subheader>

          <v-list-tile
            v-for="recipt in recipts"
            :key="recipt.id"
            avatar
            @click=""
          >
            <v-list-tile-avatar>
              <v-icon class="warning white--text">done</v-icon>
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>{{ recipt.propertyName }}</v-list-tile-title>
              <v-list-tile-sub-title>{{ recipt.dueDate.toDate().toLocaleString('ja-JP') }} までの期限</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-btn icon ripple>
                <v-icon color="grey lighten-1" @click="deleteProp(recipt.propertyId)">undo</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
        <v-btn block color="secondary" dark :to="{name: 'home'}">完了</v-btn>
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
      recipts: {},
      properies: []
    }
  },
  mounted(){
    this.watchBorrowingList();
    this.watchPropertyList();
  },
  methods: {
    deleteProp(id) {
      this.db.collection("receipts").doc(id).delete().then(function() {
          console.log("Document successfully deleted!");
      }).catch(function(error) {
          console.error("Error removing document: ", error);
      });
    },
    watchBorrowingList() {
      this.db.collection("receipts")
      .onSnapshot((snapshot) => {
        this.recipts = {};
        snapshot.forEach((doc) => {
          if(doc.data().personId == firebase.auth().currentUser.uid) this.recipts[doc.data().propertyId] = doc.data();
        });
        this.updateList();
        this.watchPropertyList();
      });
    },
    watchPropertyList() {
      this.db.collection("properties")
      .onSnapshot((snapshot) => {
        this.properies = {};
        snapshot.forEach((doc) => {
          const data = doc.data();
          data.id = doc.id;
      });
        this.updateList();
        console.log("Current data: ", this.properies);
      });
    },
    updateList() {
      console.log("Current data: ", this.recipts);
      this.properies = this.properies.map((prop) => {
        if(this.recipts[prop.id]) {
          prop.status = this.recipts[prop.id];
          prop.iconClass = "error white--text";
          prop.icon = "block";
        }else {
          prop.iconClass = "suceess white--text";
          prop.icon = "add";
        }
        return prop;
      });
      console.log("Current pf data: ", this.properies);
    }
  }
}
</script>
