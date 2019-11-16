<template>
  <v-expansion-panel>
    <v-expansion-panel-header>
      <v-row align="center" class="spacer" no-gutters>
        <v-col cols="4" sm="2" md="1">
          <v-avatar size="36px" color="primary">
            <img v-if="avatar" alt="Avatar" :src="avatar" />
            <v-icon v-else color="white">mdi-account</v-icon>
          </v-avatar>
        </v-col>

        <v-col class="hidden-xs-only" sm="5" md="3">
          {{ name }}
        </v-col>

        <v-col class="categories__list">
          <strong>Категории:</strong>
          <i class="category__item">
            {{ categoriesList }}
          </i>
        </v-col>

        <v-col class="rating text-center">
          <i class="grey--text text--lighten-1"
            >({{ events ? events.length : 0 }})</i
          >
          <v-icon small color="pink lighten-2">mdi-done</v-icon>
        </v-col>
      </v-row>
    </v-expansion-panel-header>

    <v-expansion-panel-content>
      <v-divider></v-divider>

      <v-card-text>
        <v-row v-if="phone" dense>
          <v-col cols="3"><span class="grey--text">Телефон: </span></v-col>
          <v-col cols="9"> {{ phone }}</v-col>
        </v-row>
        <v-row v-if="link" dense>
          <v-col cols="3"><span class="grey--text">Контакты: </span></v-col>
          <v-col cols="9">
            <a :href="link" target="_blank">{{ link }}</a>
          </v-col>
        </v-row>
        <v-row v-if="email" dense>
          <v-col cols="3"><span class="grey--text">Email: </span></v-col>
          <v-col cols="9">
            <a :href="'mailto:' + email">{{ email }}</a>
          </v-col>
        </v-row>
      </v-card-text>

      <v-divider></v-divider>

      <events-list v-if="events" :events="events"></events-list>
      <p v-else class="text-center mt-8">
        Список мероприятий пуст
      </p>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
import EventsList from "../components/EventsList";

export default {
  name: "OrganizatorCard",
  components: { EventsList },
  props: {
    avatar: { type: String },
    name: { type: String, required: true },
    phone: { type: String },
    link: { type: String },
    email: { type: String },
    categories: { type: Array, required: true },
    events: { type: Array }
  },
  computed: {
    categoriesList() {
      let list = this.categories[0];
      this.categories.slice(1).map(cat => {
        list += ", " + cat;
      });
      return list;
    }
  }
};
</script>

<style scoped>
.categories__list {
  font-size: 14px;
}
.category__item {
  font-size: 12px;
}
.rating strong {
  margin-right: 6px;
}
</style>
