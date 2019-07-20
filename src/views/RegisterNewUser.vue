<template>
  <div class="about">
    <h1>This is an reg new user page</h1>
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
    }
  },
  mounted: function() {
      this.signUpToFirebase("gpioblink@gmail.com", "testingocean");
  },
  methods: {
      signUpToFirebase(email, password) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function(userCredential) {
            console.log(userCredential);
            console.log(`Your uid is ${firebase.auth().currentUser.uid}`);
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