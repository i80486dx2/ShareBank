
<template>
  <div id="prop">
   <v-breadcrumbs :items="items" divider=">" light>
   </v-breadcrumbs>
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
                <v-btn
                  color="red"
                  @click="alert=!alert"
                >
                登録
                </v-btn>
                <v-btn
                  click="キャンセル"
                  color="grey"
                >
                キャンセル
                </v-btn>
            </v-form>
          </v-card>
        </v-container>
      </v-flex>
    </v-layout>
    
  </div>
</template>

<script>
  export default {
    data: () => ({
      items: [
        {
          text: 'ホーム',
          disabled: false,
          href: 'home'
        },
        {
          text: '物品登録',
          disabled: true,
          href: 'add-property'
        },
      ],
    })
  }
    
</script>