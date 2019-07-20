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

      <v-flex>
            <v-btn
              v-for="(next, i) in whatsNext"
              :key="i"
              :href="next.href"
              class="subheading mx-12"
              target="_blank"
            >
            {{ next.text }}
            </v-btn>
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
        {
          text: 'ホーム',
          href: 'home'
        },
        {
          text: '物品登録',
          href: 'add-property'
        },
        {
          text: '貸出可能リスト',
          href: 'borrowable-list'
        },
        {
          text: '貸出',
          href: 'chose-borrowing'
        },
        {
          text: '返却',
          href: 'borrowing-list'
        }
      ]
    })
  }
</script>

