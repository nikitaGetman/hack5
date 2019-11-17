<template>
  <v-app>
    <v-app-bar app color="teal lighten-1" dark>
      <v-row>
        <div class="logo">
          <v-icon>mdi-account</v-icon>
          <i class="headline ml-4">
            EMP
          </i>
        </div>
        <v-spacer></v-spacer>
        <template v-if="$store.getters.isAuthenticated">
          <v-avatar color="teal lighten-5" size="36">
            <img v-if="avatar" :src="avatar" alt="Avatar" />
            <v-icon dar v-else color="teal lighten-2">mdi-account</v-icon>
          </v-avatar>
          <strong class="user__name ml-2">{{ name }}</strong>
        </template>
        <template v-else>
          <v-btn text color="white" @click="loginWithVk">Войти</v-btn>
        </template>
      </v-row>
    </v-app-bar>

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
  }),
  computed: {
    avatar() {
      // console.log(this.$store.state.user.avatar)
      return this.$store.state.user.avatar;
    },
    name() {
      return this.$store.state.user.name;
    }
  },
  methods: {
    loginWithVk() {
      this.$store.dispatch("START_AUTH_VK");
    }
  }
};
</script>
