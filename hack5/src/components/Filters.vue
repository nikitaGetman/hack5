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
          v-model="selectedPartnerType"
          :items="partnerTypes"
          :loading="false"
          :search-input.sync="partnerTypeSearch"
          name="partnerType"
          label="Тип"
          color="pink lighten-2"
          outlined
          dense
          hide-details
          @change="updateList"
        ></v-autocomplete>
      </v-col>
      <v-col cols="12" sm="2" v-if="showSumm">
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
    <template v-if="showDownloadBtn">
      <v-tooltip top>
        <template v-slot:activator="{ on }">
          <v-btn outlined color="pink" v-on="on" @click="downloadData">
            <v-icon color="pink">mdi-content-save-outline</v-icon>
          </v-btn>
        </template>
        <span>Скачать данные в .xls</span>
      </v-tooltip>
    </template>

    <v-snackbar v-model="downloadedSnackbar">
      Скачивание началось.
      <v-btn color="pink" text @click="downloadedSnackbar = false">Close</v-btn>
    </v-snackbar>
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
      // partnerData
      selectedPartnerType: null,
      partnerTypeSearch: null,
      partnerTypes: ["Площадки", "Спонсоры", "Другое"],
      selectedDonation: null,
      donationSearch: null,
      //
      downloadedSnackbar: false
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
    },
    showDownloadBtn() {
      return (
        this.$route.name === "organizers" || this.$route.name === "partners"
      );
    },
    showSumm() {
      return this.selectedPartnerType === "Спонсоры";
    }
  },
  methods: {
    updateList() {
      // console.log("update");
      // console.log(this.selectedPartnerType);

      if (this.$route.name === "events") {
        this.$store.dispatch("LOAD_EVENTS", {
          city: this.selectedCity,
          type: this.selectedType,
          feature: this.feature
        });
      }
      if (this.$route.name === "organizers") {
        this.$store.dispatch("LOAD_ORGANIZERS", {
          city: this.selectedCity,
          type: this.selectedType
        });
      }
      if (this.$route.name === "partners") {
        this.$store.dispatch("LOAD_PARTNERS", {
          city: this.selectedCity,
          type: this.selectedType,
          donat: this.donationAmount
        });
      }
    },
    downloadData() {
      this.downloadedSnackbar = true;
    }
  }
};
</script>

<style></style>
