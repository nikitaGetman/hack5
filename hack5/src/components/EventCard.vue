<template>
  <div class>This is event card</div>
</template>

<script>
export default {
  name: "event-card",
  props: {
    image: { type: String },
    title: { type: String, required: true },
    date: { type: String, required: true },
    link: { type: String },
    description: { type: String },
    category: { type: String },
    organizers: { type: Array },
    partners: { type: Array }
  }
};
</script>

<style></style>
