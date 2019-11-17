<template>
  <v-expansion-panel>
    <v-expansion-panel-header>
      <v-row align="center" class="spacer" no-gutters>
        <v-col cols="1">
          <v-avatar size="40px" color="orange">
            <img v-if="image" alt="Image" :src="image" />
            <v-icon v-else color="white">mdi-camera</v-icon>
          </v-avatar>
        </v-col>

        <v-col cols="8">{{ name }}</v-col>

        <v-col cols="3" class="grey--text">
          <i>{{ type }}</i>
        </v-col>
      </v-row>
    </v-expansion-panel-header>

    <v-expansion-panel-content>
      <v-divider></v-divider>

      <v-card-text>
        <v-row dense>
          <v-col cols="3">
            <span class="grey--text">Тип:</span>
          </v-col>
          <v-col cols="9">
            <i>{{ type }}</i>
          </v-col>
        </v-row>

        <v-row dense>
          <v-col cols="3">
            <span class="grey--text">Телефон:</span>
          </v-col>
          <v-col cols="9">
            <i>{{ phone }}</i>
          </v-col>
        </v-row>
        <v-row v-if="link" dense>
          <v-col cols="3">
            <span class="grey--text">Ссылка:</span>
          </v-col>
          <v-col cols="9">
            <a :href="link" target="_blank">{{ link }}</a>
          </v-col>
        </v-row>

        <v-row dense>
          <v-col cols="3">
            <span class="grey--text">Email:</span>
          </v-col>
          <v-col cols="9">{{ email }}</v-col>
        </v-row>
      </v-card-text>

      <!-- <v-divider></v-divider> -->

      <!-- <v-list>
        <h5 class="subtitle-2 grey--text">Организаторы:</h5>
        <v-list-item v-for="(organizer, index) in organizers" :key="index">
          <v-list-item-avatar color="teal">
            <v-img
              v-if="organizer.avatar"
              alt="Avatar"
              :src="organizer.avatar"
            ></v-img>
            <v-icon v-else color="white">mdi-account</v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-row>
              <v-col cols="3">
                <v-list-item-title v-text="organizer.name"></v-list-item-title>
              </v-col>
              <v-col cols="3" class="grey--text" v-if="organizer.phone">{{
                organizer.phone
              }}</v-col>
              <v-col cols="3" class="grey--text" v-if="organizer.email">
                <a :href="'mailto:' + organizer.email">{{ organizer.email }}</a>
              </v-col>
              <v-col cols="3" v-if="organizer.link">
                <a :href="organizer.link">{{ organizer.link }}</a>
              </v-col>
            </v-row>
          </v-list-item-content>
        </v-list-item>
        <p v-if="!organizers.length" class="text-center mt-2 grey--text">
          Список организаторов пуст
        </p>
      </v-list> -->
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
export default {
  name: "PartnerCard",
  props: {
    image: { type: String },
    name: { type: String, required: true },
    type: { type: String },
    summ: { type: String },
    link: { type: String },
    phone: { type: String },
    email: { type: String }
  }
};
</script>

<style></style>
