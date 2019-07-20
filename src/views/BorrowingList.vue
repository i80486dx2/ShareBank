<template>
  <div id="prop">
   <v-breadcrumbs :items="items" divider=">" light>
   </v-breadcrumbs>
    <v-layout align-center justify-center>
      <v-flex md5 class="white">
        <v-container style="position: relative;top: 20%;" class="text-md-center">
          <v-card flat>
            <v-card-title>
              <h2>This is an borrowinglist page</h2>
            </v-card-title>
           
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
          text: '返す',
          disabled: true,
          href: 'borrowing-list'
        },
      ],
    })
  }
    
</script>
