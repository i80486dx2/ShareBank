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
              <v-list-tile-sub-title v-if="prop.status">{{ prop.status.dueDate.toDate().toLocaleDateString() }} まで貸出予定</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-btn icon ripple>
                <v-icon color="grey lighten-1" v-if="!prop.status" @click.stop="prop.dialog = true">add_shopping_cart</v-icon>
              </v-btn>
            </v-list-tile-action>

            <v-dialog v-model="prop.dialog" persistent max-width="600px" @close="prop.dialog = false">

                <template v-slot:activator="{ on }">
                  <v-btn
                    color="red lighten-2"
                    dark
                    v-on="on"
                  >
                    Click Me
                  </v-btn>
                </template>

                <v-card>
                  <v-card-title>
                    <span class="headline">「{{prop.name}}」の貸出</span>
                  </v-card-title>
                  <v-card-text>
                    <v-container grid-list-md>
                      <v-layout wrap>
                        <v-flex xs12>
                          <v-text-field label="貸出期限"></v-text-field>
                        </v-flex>
                      </v-layout>
                    </v-container>
                    <small>*indicates required field</small>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" flat @click.stop="prop.dialog = false">キャンセル</v-btn>
                    <v-btn color="blue darken-1" flat @click.stop="prop.dialog = false">貸出</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>

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
      recipts: {},
      properies: [],
    }
  },
  mounted(){
    this.watchBorrowingList();
    this.watchPropertyList();
  },
  methods: {
    close() {
      console.log(this.properies)
    },
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
        if(this.recipts[prop.id]) {
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
    }
  }
}
</script>