<template>
  <div id="prop">
    <v-form ref="form" v-model="valid" lazy-validation align-center>
     <v-text-field
      v-model="item"
      :rules="propertyRules"
      label="登録品名"
      required
     ></v-text-field>
     <v-btn
      :disabled="!valid"
      @click="登録"
      color="red"
     >
     登録
     </v-btn>
    
    </v-form>
  </div>
</template>