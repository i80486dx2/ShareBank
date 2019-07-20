<template>
  <div id="app">
  <v-container>
    <v-layout align-center justify-center>
      <v-flex md5 class="white">
        <v-container style="position: relative;top: 20%;" class="text-md-center">
          <v-card flat>
            <v-card-title primary-title display-1>
              <h4>新規登録</h4>
            </v-card-title>
            <v-form>
            <v-text-field 
            v-model="mail" 
            prepend-icon="mail"
            :rules="[rules.required_2]"
            :type="show1 ? 'text' : 'name'"
            color="blue darken-2"
            name="Username"
            label="E-mailアドレスを入力して下さい"
            counter
            @click:append="show1 = !show1"
            ></v-text-field>
            <v-text-field 
             v-model="password"
             :append-icon="show1 ? 'visibility' : 'visibility_off'"
             :rules="[rules.required, rules.min]"
             :type="show1 ? 'text' : 'password'"
             color="blue darken-2"
             prepend-icon="lock" 
             name="Password" 
             label="パスワードを入力して下さい" 
             hint="8文字以上使用してください"
             counter
             @click:append="show1 = !show1"
             ></v-text-field>
            <v-alert
              v-if="errorMessage"
              :value="true"
              color="error"
              icon="warning"
              outline
            >
              {{errorMessage}}
            </v-alert>
            <v-card-actions>
              <v-btn primary large block color="info" v-on:click="signUpToFirebase(mail,password)">新規登録</v-btn>
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
import firebase from 'firebase'
export default {
  name: 'LoginUser',
  components: {
  },
  data () {
    return {
      mail: '',
      password: '',
      show1: false,
      rules: {
        required: v => !!v || '8文字以上使用してください',
        min: v => v.length >= 8 || '8文字以上使用してください',
        required_2: v => !!v || 'E-mailアドレスを入力してください'
      },
      errorMessage: null
    }
  },
  mounted: function() {
  },
  methods: {
      signUpToFirebase: function(email, password) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            console.log(userCredential);
            console.log(`Your uid is ${firebase.auth().currentUser.uid}`);
            this.$router.push('/home');
            this.errorMessage = null;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            this.errorMessage = errorMessage;
        });
      }
  }
}
</script>