<template>
  <div id="app">
  <v-container>
    <v-layout align-center justify-center>
      <v-flex md7 class="white">
        <v-container style="position: relative;top: 20%;" class="text-md-center">
          <v-card flat>
            <v-card-title primary-title display-1>
              <h4>新規登録</h4>
            </v-card-title>
            <v-form>
            <v-text-field prepend-icon="person" name="Username" label="学籍番号を入力して下さい" required ></v-text-field>
            <v-text-field prepend-icon="lock" name="Password" label="パスワードを入力して下さい" type="password" required ></v-text-field>
            <v-card-actions>
              <v-btn primary large block>新規登録</v-btn>
            </v-card-actions>
            
            </v-form>
          </v-card>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</div>
</template>
