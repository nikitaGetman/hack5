<template>
  <v-container>
    <h5 class="subtitle-1">Мероприятия:</h5>
    <!-- events list -->
    <v-expansion-panels multiple>
      <event-card
        v-for="(event, i) in events"
        :key="i"
        :image="event.image"
        :title="event.title"
        :date="event.date"
        :link="event.link"
        :description="event.description"
        :category="event.category"
        :organizers="event.organizers"
        :partners="event.partners"
        :simplified="simplified"
      ></event-card>
    </v-expansion-panels>
  </v-container>
</template>

<script>
import EventCard from "../components/EventCard";

export default {
  name: "home",
  components: { EventCard },
  props: {
    simplified: { type: Boolean, default: false }
  },
  data() {
    return {};
  },
  computed: {
    events() {
      return this.$store.state.events;
    }
  },
  methods: {}
};
</script>
