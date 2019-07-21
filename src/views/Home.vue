<template>
  <div id="app">
  <v-app id="inspire">
    <v-layout align-center justify-center> 

      <div class="item">
        <v-card>
        <v-flex>
          <img src="../assets/IMG_3110.jpg" width="350"/>
          <v-btn  large block :to="{name: 'add-property'}"><h1>貸す</h1></v-btn>      
        </v-flex>
        </v-card>
      </div>

      <div class="item">
        <v-card>
        <v-flex>
          <img src="../assets/IMG_3111.jpg" width="350"/>
          <div>
            <v-btn large block :to="{name: 'borrowable-list'}"><h1>借りる</h1></v-btn>
          </div>
        </v-flex>
        </v-card>
      </div>

      <div class="item">
        <v-card>
        <v-flex>
          <img src="../assets/IMG_3112.jpg" width="350"/>
          <div>
            <v-btn large block :to="{name: 'borrowing-list'}"><h1>返す</h1></v-btn>
          </div>
        </v-flex>
        </v-card>
      </div>

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
.inner{
 
}
</style>
