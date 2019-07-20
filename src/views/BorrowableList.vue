<template>
  <div class="about">
    <h1>This is an borrowablelist page</h1>
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
          console.log("hit!");
        }
        return prop;
      });
      console.log("Current pf data: ", this.properies);
    }
  }
}
</script>