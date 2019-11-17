<template>
  <v-container>
    <h5 class="subtitle-1">Партнеры:</h5>
    <!-- partners list -->
    <v-expansion-panels multiple>
      <partner-card
        v-for="(partner, i) in partners"
        :key="i"
        :image="partner.image"
        :name="partner.name"
        :link="partner.link"
        :description="partner.description"
        :category="partner.category"
      ></partner-card>
    </v-expansion-panels>
  </v-container>
</template>

<script>
import PartnerCard from "../components/PartnerCard";

export default {
  name: "PartnersList",
  components: { PartnerCard },
  props: {
    simplified: { type: Boolean, default: false }
  },
  data() {
    return {};
  },
  computed: {
    partners() {
      return this.$store.state.partners;
    }
  },
  methods: {}
};
</script>
