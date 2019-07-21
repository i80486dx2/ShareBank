<template>
  <v-container >
        <v-img
          :src="`https://i.imgur.com/LrrSAc8.png`"
          class="my-3"
          contain fluid
        ></v-img>

        <v-layout align-center justify-center>
         <v-flex xs12 sm4 text-xs-center>
            <div>
             <v-btn large color="green lighten-1" :to="{name: 'login-user'}">ログイン</v-btn>
            </div>
            <div>
             <v-btn large color="light-green lighten-2" :to="{name: 'register-new-user'}">新規登録</v-btn>
            </div>
          </v-flex>
         </v-layout>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      whatsNext: [
        {
          text: 'ログイン',
          href: 'login'
        },
                {
          text: '新規登録',
          href: 'register'
        },
      ]
    })
  }
</script>

