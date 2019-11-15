<template>
  <v-list subheader two-line>
    <v-subheader>Мероприятия:</v-subheader>
    <span v-if="!events">Не найдены</span>

    <v-list-item
      v-for="event in events"
      :key="event.title"
      @click="openLink(event.link)"
    >
      <!-- <v-avatar>
              <img v-if="avatar" alt="Avatar" :src="avatar" />
              <v-icon v-else color="white">mdi-account</v-icon>
            </v-avatar> -->
      <v-list-item-avatar size="36px" color="primary">
        <v-img v-if="event.image" :src="event.avatar"></v-img>
        <v-icon v-else color="white">mdi-event</v-icon>
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title v-text="event.title"></v-list-item-title>
        <v-list-item-subtitle class="text--primary">{{
          event.date
        }}</v-list-item-subtitle>
        <v-list-item-subtitle>{{ event.description }}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-action>
        <v-list-item-action-text v-text="event.date"></v-list-item-action-text>
      </v-list-item-action>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  name: "events-list",
  props: {
    events: { type: Array, required: true }
  },
  methods: {
    openLink(link) {
      window.open(link, "_blank");
    }
  }
};
</script>

<style></style>
