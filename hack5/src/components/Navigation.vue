<template>
  <v-tabs v-model="tab" background-color="transparent" class="elevation-2">
    <v-tab
      v-for="tab in tabs"
      :key="tab.to"
      active-class="pink--text"
      :to="{ name: tab.to }"
      class="link"
    >{{ tab.title }}</v-tab>
    <v-tabs-slider color="pink"></v-tabs-slider>
  </v-tabs>
</template>

<script>
export default {
  name: "navigation",
  data() {
    return {
      tab: null,
      tabs: [
        { to: "events", title: "Мероприятия" },
        { to: "organizers", title: "Организаторы" },
        { to: "partners", title: "Партнеры" }
      ]
    };
  }
};
</script>

<style scoped>
.link {
  font-weight: normal;
}
</style>
