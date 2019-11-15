<template>
  <!-- filters -->
  <v-row align="center">
    <v-col cols="12" sm="3">
      <v-autocomplete
        v-model="selectedCity"
        :items="cities"
        :loading="false"
        :search-input.sync="searchCity"
        name="cityname"
        label="Город"
        color="pink lighten-2"
        outlined
        dense
        hide-details
        @change="updateList"
      >
      </v-autocomplete>
    </v-col>
    <v-col cols="12" sm="3">
      <v-autocomplete
        v-model="selectedType"
        :items="eventTypes"
        :loading="false"
        :search-input.sync="searchType"
        name="type"
        label="Категория"
        color="pink lighten-2"
        outlined
        dense
        hide-details
        @change="updateList"
      >
      </v-autocomplete>
    </v-col>
    <template v-if="$route.name === 'events'">
      event
    </template>
  </v-row>
  <!--  filters end -->
</template>

<script>
export default {
  name: "filters",
  data() {
    return {
      // form city
      selectedCity: null,
      searchCity: null,
      // form type
      selectedType: null,
      searchType: null
    };
  },
  computed: {
    cities() {
      return this.$store.state.cities;
    },
    eventTypes() {
      return this.$store.state.eventTypes;
    }
  },
  methods: {
    updateList() {
      //   this.$store.dispatch("LOAD_FILTERED_DATA", {
      //     city: this.selectedCity,
      //     type: this.selectedType
      //   });
      console.log("update list");
    }
  }
};
</script>

<style></style>
