<template>
<v-container grid-list-md text-xs-center>
    <v-layout row wrap text-xs-left>
    <v-flex style="width: 1000px;">
    <v-alert
      :value="true"
      color="info"
      icon="info"
      outline
    >
      {{email}}さん、こんにちは！現在のあなたのポイントは30です。
    </v-alert>
    </v-flex>
    <v-flex style="width: 350px;">
        <div class="item">
          <v-card>      
            <v-img
                  :src="`https://i.imgur.com/txui9W0.jpg`"
                  aspect-ratio="1"
                  class="grey lighten-2"
            />
            <router-link tag = "h1" :to="{name: 'add-property'}">
                         <h1>貸す</h1>
            </router-link>    
          </v-card>
        </div>
      </v-flex>
   
       <v-flex style="width: 350px;">
        <div class="item">
          <v-card> 
            <v-img
                  :src="`https://i.imgur.com/Y5k8S0d.jpg`"
                  aspect-ratio="1"
                  class="grey lighten-2"
            />
            <router-link tag = "h1" :to="{name: 'borrowable-list'}">
                         <h1 >借りる</h1>
            </router-link>
          </v-card>
        </div>
      </v-flex>
    
      <v-flex style="width: 350px;">
        <div class="item">
          <v-card>
            <v-img
                  :src="`https://i.imgur.com/B7Y5OPK.jpg`"
                  aspect-ratio="1"
                  class="grey lighten-2"
            />
            <router-link tag = "h1" :to="{name: 'borrowing-list'}">
                         <h1>返す</h1>
            </router-link>
          </v-card>
        </div>
      </v-flex>

    </v-layout>
</v-container>
</template>

<style>
.item {
  min-height: 50px;
  min-width: 80px;
  margin: 10px;
}
h1{
  text-align: center;
}
</style>

<script>
import firebase from 'firebase';
  export default {
    data: () => ({
      email: firebase.auth().currentUser.email,
      whatsNext: [
        {
          text: '返却',
          href: 'borrowing-list'
        }
      ]
    })
  }
</script>