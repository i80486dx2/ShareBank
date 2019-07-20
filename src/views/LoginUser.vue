<template>

<div id="app">
  <v-container>
    <v-layout align-center justify-center>
      <v-flex md4 class="white">
        <v-container style="position: relative;top: 20%;" class="text-md-center">
          <v-card flat>
            <v-card-title primary-title>
              <h4>ログイン</h4>
            </v-card-title>
            <v-form>
            <v-text-field v-model="mail" prepend-icon="person" name="Username" label="メールアドレス" required ></v-text-field>
            <v-text-field v-model="password" prepend-icon="lock" name="Password" label="パスワード" type="password" required ></v-text-field>
            <v-card-actions>
              <v-btn primary large block v-on:click="signUpToFirebase(mail,password)">ログイン</v-btn>
            </v-card-actions>
            
            </v-form>
          </v-card>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</div>

</template>

<script>
import firebase from 'firebase';
export default {
  name: 'LoginUser',
  components: {
  },
  data () {
    return {
        mail: '',
        password: ''
    }
  },
  mounted: function() {
  },
  methods: {
      signUpToFirebase(email, password) {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function(userCredential) {
            console.log(userCredential);
            console.log(`Welcome back! Your uid is ${firebase.auth().currentUser.uid}`);
        })
        .catch(function(error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            if (errorCode === 'auth/wrong-password') {
                alert('Wrong password.');
            } else {
                console.log("Login Error:" + errorCode + " " + errorMessage);
            }
        });
      }
  }
}
</script>
