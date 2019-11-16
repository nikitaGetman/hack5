<template>
  <v-app>
    <v-app-bar app color="teal lighten-2" dark></v-app-bar>

    <v-content>
      <!-- <router-view name="subheader"></router-view> -->
      <v-container>
        <navigation></navigation>
        <filters class="mt-2"></filters>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Navigation from "./components/Navigation";
import Filters from "./components/Filters";
export default {
  name: "App",

  components: { Navigation, Filters },

  data: () => ({
    //
  })
};
</script>
