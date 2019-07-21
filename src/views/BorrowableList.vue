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
            v-for="(prop, index) in properies"
            :key="index"
            avatar
            @click=""
          >
            <v-list-tile-avatar>
              <v-icon :class="prop.iconClass">{{ prop.icon }}</v-icon>
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>{{ prop.name }}</v-list-tile-title>
              <v-list-tile-sub-title v-if="prop.status">{{ prop.status.dueDate.toDate().toLocaleString('ja-JP') }} まで貸出予定</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-btn icon ripple>
                <v-icon color="grey lighten-1" v-if="!prop.status" @click="pushRecipt(prop.id, prop.name)">add_shopping_cart</v-icon>
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
      properies: [],
    }
  },
  mounted(){
    this.watchBorrowingList();
    this.watchPropertyList();
  },
  methods: {
    watchBorrowingList() {
      this.db.collection("receipts")
      .onSnapshot((snapshot) => {
        this.recipts = {};
        snapshot.forEach((doc) => {
          this.recipts[doc.data().propertyId] = doc.data();
        });
        this.updateList();
        this.watchPropertyList();
      });
    },
    watchPropertyList() {
      this.db.collection("properties")
      .onSnapshot((snapshot) => {
        snapshot.forEach((doc) => {
          const data = doc.data();
          data.id = doc.id;
          this.properies.push(data);
        });
        this.updateList();
        console.log("Current data: ", this.properies);
      });
    },
    updateList() {
      console.log("Current data: ", this.recipts);
      this.properies = this.properies.map((prop) => {
        if(this.recipts[prop.id] && this.recipts[prop.id].personId == firebase.auth().currentUser.uid) {
          prop.status = this.recipts[prop.id];
          prop.iconClass = "warning white--text";
          prop.icon = "check";
        }else if(this.recipts[prop.id]) {
          prop.status = this.recipts[prop.id];
          prop.iconClass = "error white--text";
          prop.icon = "block";
        }else {
          prop.iconClass = "success white--text";
          prop.icon = "add";
          prop.dialog = false;
        }
        return prop;
      });
      console.log("Current pf data: ", this.properies);
    },
    pushRecipt(propertyId, propertyName) {
      const dueDate = new Date(new Date().getTime() + 3* (1000 * 60 * 60));
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