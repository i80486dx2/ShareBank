<template>
  <v-container >
    <v-layout
      text-xs-center
      wrap
    >
        <v-img
          :src="require('../assets/hand-3035665_1920.jpg')"
          class="my-3"
          contain
          width="1000"
        ></v-img>

        <v-layout align-center justify-center>
         <v-flex xs12 sm4 text-xs-center>
            <div>
             <v-btn large color="green lighten-1">ログイン</v-btn>
            </div>
            <div>
             <v-btn large color="light-green lighten-2">新規登録</v-btn>
            </div>
          </v-flex>
         </v-layout>
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

