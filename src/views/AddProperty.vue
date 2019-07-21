
<template>
  <div id="prop">
    <v-layout align-center justify-center>
      <v-flex md5 class="white">
        <v-container style="position: relative;top: 20%;" class="text-md-center">
          <v-card flat>
            <v-card-title>
              <h2>物品登録フォーム</h2>
            </v-card-title>
           <v-form ref="form" v-model="valid" lazy-validation align-center>
              <v-text-field
                v-model="item"
                color="blue"
                label="登録品名"
              ></v-text-field>
              <v-alert
              v-if="message"
              :value="true"
              color="info"
              icon="info"
              outline block
            >
              {{message}}
            </v-alert>
                <v-btn
                 color="success"
                 @click="pushProperty(item)"
                >
                登録
                </v-btn>
                <v-btn
                  :to="{name: 'home'}"
                >
                終了
                </v-btn>
            </v-form>
          </v-card>
        </v-container>
      </v-flex>
    </v-layout>
    
  </div>
</template>


<script>
import firebase from 'firebase';
export default {
    data: () => ({
      db: firebase.firestore(),
      item: "",
      message: "",
      valid: true
    }),
      methods: {
      pushProperty(name) {
        this.db.collection("properties").add({
            name: name,
            ownerId: firebase.auth().currentUser.uid,
            ownerName: firebase.auth().currentUser.displayName
        })
        .then((docRef) => {
            this.message = `「${name}」を貸出品に登録しました！`;
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
      }
    }
  }
</script>