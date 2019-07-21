<template>
<div>
  <v-spacer></v-spacer>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3 style="position: relative;top: 20%;">
      <v-container style="position: relative;top: 20%;" class="text-md-center">
      <v-card>
        <v-list two-line subheader>
          <v-subheader inset>貸出可能な物品リスト</v-subheader>

          <v-list-tile
            v-for="item in items2"
            :key="item.title"
            avatar
            @click=""
          >
            <v-list-tile-avatar>
              <v-icon :class="[item.iconClass]">{{ item.icon }}</v-icon>
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-btn icon ripple>
                <v-icon color="grey lighten-1">add_shopping_cart</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
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
      recipts: [],
      items2: [
          { icon: 'block', iconClass: 'error white--text', title: 'Vacation itinerary', subtitle: 'Jan 20, 2014' },
          { icon: 'add', iconClass: 'success white--text', title: 'Kitchen remodel', subtitle: 'Jan 10, 2014'},
          { icon: 'done', iconClass: 'warning white--text', title: 'Kitchen remodel', subtitle: 'Jan 10, 2014'}
      ]
    }
  },
  methods: {
    watchBorrowingList() {
      this.db.collection("receipts")
      .onSnapshot((snapshot) => {
        this.recipts = {};
        snapshot.forEach((doc) => {
          this.recipts[doc.data().propertyId] = doc.data();
        });
      });
    }
  }
}
</script>