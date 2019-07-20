<template>
  <v-container>
    <v-layout
      text-xs-center
      wrap
    >
      <v-flex xs12>
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        ></v-img>
      </v-flex>

      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">
          テスト用画面遷移
        </h1>
      </v-flex>

      <v-flex
        mb-5
        xs12
      >
        <h2 class="headline font-weight-bold mb-3">Try?</h2>

        <v-layout justify-center>
          <a
            v-for="(next, i) in whatsNext"
            :key="i"
            :href="next.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ next.text }}
          </a>
        </v-layout>
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

<style>

</style>
