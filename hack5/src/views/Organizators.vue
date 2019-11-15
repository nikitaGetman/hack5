<template>
  <v-container>
    <h5 class="subtitle-1">Организаторы:</h5>
    <!-- organizators list -->
    <v-expansion-panels multiple>
      <organizator-card
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
      ></organizator-card>
    </v-expansion-panels>
  </v-container>
</template>

<script>
import OrganizatorCard from "../components/OrganizatorCard";

export default {
  name: "home",
  components: { OrganizatorCard },
  data() {
    return {};
  },
  computed: {
    organizators() {
      return this.$store.state.organizators;
    }
  }
};
</script>
