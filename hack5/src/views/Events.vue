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
        :date-start="event.startDate"
        :date-end="event.finishDate"
        :link="event.link"
        :description="event.description"
        :category="event.category"
        :organizers="event.organizers"
        :partners="event.partners"
      ></event-card>
    </v-expansion-panels>
  </v-container>
</template>

<script>
import EventCard from "../components/EventCard";

export default {
  name: "EventsList",
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
  methods: {},
  created() {
    if (this.$route.query.code) {
      this.$store.dispatch("AUTH_VK", this.$route.query.code);
    }
  }
};
</script>
