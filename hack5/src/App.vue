<template>
  <v-app>
    <v-app-bar app color="teal lighten-2" dark></v-app-bar>

    <v-content>
      <navigation></navigation>
      <!-- <router-view name="subheader"></router-view> -->
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Navigation from "./components/Navigation";
export default {
  name: "App",

  components: { Navigation },

  data: () => ({
    //
  })
};
</script>
