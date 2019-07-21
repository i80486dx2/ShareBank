<template>

  <div id="app">
    <v-layout>
      <v-flex md12 class="mr-2">
        <v-card flat height15 >
          <div prepend-icon="account_circle">
            <h3>  Name:</h3>
          </div>
          <div color="red">
            <h4>  Points:</h4>
          </div>
        </v-card>
      </v-flex>
    </v-layout>

  <v-app id="inspire">
    <v-layout > 
      <v-flex xs4>
        <div class="item">
          <v-card>      
            <img src="../assets/IMG_3110.jpg" width="408"/>
            <router-link tag = "h1" to="add-property">
                         <h1>貸す</h1>
            </router-link>    
          </v-card>
        </div>
      </v-flex>
   
       <v-flex xs4>
        <div class="item">
          <v-card> 
            <img src="../assets/IMG_3111.jpg" width="408"/>
            <router-link tag = "h1" to="chose-borrowing">
                         <h1 >借りる</h1>
            </router-link>
          </v-card>
        </div>
      </v-flex>
    
      <v-flex xs4>
        <div class="item">
          <v-card>
            <img src="../assets/IMG_3112.jpg" width="408"/>
            <router-link tag = "h1" to="borrowing-list">
                         <h1>返す</h1>
            </router-link>
          </v-card>
        </div>
      </v-flex>

    </v-layout>

  </v-app>
</div>
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
  export default {
    data: () => ({
      whatsNext: [
        {
          text: '返却',
          href: 'borrowing-list'
        }
      ]
    })
  }
</script>