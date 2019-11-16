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
      ></v-autocomplete>
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
      ></v-autocomplete>
    </v-col>
    <template v-if="$route.name === 'events'">
      <v-col cols="12" sm="3">
        <v-checkbox
          class="mt-0"
          v-model="feature"
          label="Только предстоящие"
          color="pink lighten-1"
          value="feature"
          hide-details
        ></v-checkbox>
      </v-col>
    </template>
    <template v-if="$route.name === 'partners'">
      <v-col cols="12" sm="2">
        <v-autocomplete
          v-model="selectedDonation"
          :items="donationAmount"
          :loading="false"
          :search-input.sync="donationSearch"
          name="donat"
          label="Сумма"
          color="pink lighten-2"
          outlined
          dense
          hide-details
          @change="updateList"
        ></v-autocomplete>
      </v-col>
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
      searchType: null,
      // feature
      feature: true,
      //
      selectedDonation: null,
      donationSearch: null
    };
  },
  computed: {
    cities() {
      return this.$store.state.cities;
    },
    eventTypes() {
      return this.$store.state.eventTypes;
    },
    donationAmount() {
      return this.$store.state.donationAmount;
    }
  },
  methods: {
    updateList() {
      if (this.$route.name === "events") {
        this.$store.dispatch("LOAD_EVENTS", {
          city: this.selectedCity,
          type: this.selectedType,
          feature: this.feature
        });
      }
      if (this.$route.name === "organizers") {
        this.$store.dispatch("LOAD_EVENTS", {
          city: this.selectedCity,
          type: this.selectedType,
          feature: this.feature
        });
      }
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
