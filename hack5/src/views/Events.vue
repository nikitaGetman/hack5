<template>
  <v-container>
    <h5 class="subtitle-1">События:</h5>
    <!-- organizators list -->
    <v-expansion-panels multiple>
      <event-card
        v-for="(organizator, i) in organizators"
        :key="i"
        :avatar="organizator.avatar"
        :name="organizator.name"
        :rating="organizator.rating"
        :phone="organizator.phone"
        :link="organizator.link"
        :email="organizator.email"
        :bio="organizator.bio"
        :categories="organizator.categories"
        :events="organizator.events"
      ></event-card>
    </v-expansion-panels>
  </v-container>
</template>

<script>
import EventCard from "../components/EventCard";

export default {
  name: "home",
  components: { EventCard },
  data() {
    return {
      // form city
      selectedCity: null,
      searchCity: null,
      // form type
      selectedType: null,
      searchType: null
      // form date from
      // form date to
    };
  },
  computed: {
    cities() {
      return this.$store.state.cities;
    },
    eventTypes() {
      return this.$store.state.eventTypes;
    },
    organizators() {
      return this.$store.state.organizators;
    }
  },
  methods: {
    updateList() {
      this.$store.dispatch("LOAD_EVENTS", {
        city: this.selectedCity,
        type: this.selectedType
      });
    }
  }
};
</script>
