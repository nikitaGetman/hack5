<template>
  <v-row align="center">
    <v-col cols="12" sm="3">
      <!-- location code -->
      <v-autocomplete
        v-model="selectedCity"
        :items="cities"
        :loading="cityLoading"
        :search-input.sync="searchCity"
        name="nameForCity"
        label="Город"
        outlined
      >
      </v-autocomplete>
    </v-col>
    <v-col cols="12" sm="3">
      <!-- <v-autocomplete
        v-model="selectedType"
        :items="types"
        :loading="typeLoading"
        :search-input.sync="searchType"
        name="nameForCity"
        label="Город"
        outlined
      >
      </v-autocomplete> -->
      <v-select :items="typesOfEvent" label="Направление" outlined></v-select>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "HeaderForm",

  data: () => {
    return {
      typesOfEvent: ["Art", "Programming", "Meetup", "Sport"],
      cities: ["Красноярск", "Москва", "Санкт-Петербург"],
      selectedCity: null,
      cityLoading: false,
      searchCity: null
    };
  },
  created() {
    console.log("created");
    this.$getLocation({})
      .then(coordinates => {
        console.log(coordinates);
      })
      .catch(e => {
        console.log(e);
      });
  }
};
</script>

<style></style>
