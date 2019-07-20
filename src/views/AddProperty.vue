
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
                label="登録品名"
              ></v-text-field>
                <v-btn
                  click="登録"
                  color="red"
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

