<template>
  <v-container>
    <v-row>
      <h5 class="subtitle-1">Организаторы:</h5>
      <v-spacer></v-spacer>

      <!-- modal view -->

      <v-dialog v-model="connectPopup" max-width="600px">
        <template v-slot:activator="{ on }">
          <v-btn class="ma-2" outlined color="pink lighten-2" small v-on="on"
            >Разослать предложение</v-btn
          >
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">Отправить предложение</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field label="Ваше Имя*" required></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field label="Ваш Email*" required></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-textarea
                    name="offer"
                    label="Предложение *"
                    required
                  ></v-textarea>
                </v-col>
              </v-row>
            </v-container>
            <small>* - обязательные поля</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="connectPopup = false"
              >Отмена</v-btn
            >
            <v-btn color="blue darken-1" text @click="sendOffer"
              >Отправить</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>

      <!-- <v-btn dark @click="snackbar = true">Open Snackbar</v-btn> -->
      <v-snackbar v-model="connectedSnackbar">
        Сообщения успошно разосланы.
        <v-btn color="pink" text @click="connectedSnackbar = false">
          Close
        </v-btn>
      </v-snackbar>
    </v-row>

    <!-- organizators list -->
    <v-expansion-panels multiple>
      <organizator-card
        v-for="(organizator, i) in organizators"
        :key="i"
        :avatar="organizator.avatar"
        :name="organizator.name"
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
  props: {},
  data() {
    return {
      connectedSnackbar: false,
      connectPopup: false
    };
  },
  computed: {
    organizators() {
      return this.$store.state.organizators;
    }
  },
  methods: {
    sendOffer() {
      this.connectedSnackbar = true;
      this.connectPopup = false;
      console.log("connecting");
    }
  }
};
</script>
