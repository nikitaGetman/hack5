import Vue from "vue";
import Vuex from "vuex";
// import

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cities: ["Красноярск", "Москва", "Санкт-Петербург"],
    eventTypes: ["Art", "Programming", "Meetup", "Sport"],
    donationAmount: ["< 10k", "< 50k", "< 100k", "< 200k"],
    organizers: [
      {
        avatar: "https://avatars0.githubusercontent.com/u/9064066?v=4&s=460",
        name: "John Leider",
        phone: "8913167282",
        link: "https://vk.com/nikitagetman",
        email: "someemail@gmail.com",
        categories: ["Programming", "Art"],
        events: [
          {
            id: 123,
            title: "Hackaton",
            image: "https://avatars0.githubusercontent.com/u/9064066?v=4&s=460",
            link: "https://vk.com/sibhackathon5",
            description: "От идеи до прототипа за 48 часов. 👨‍💻",
            date: "15.11.19"
          }
        ]
      },
      {
        avatar: "https://avatars0.githubusercontent.com/u/9064066?v=4&s=460",
        name: "Ivan Petrov",
        phone: "8913167282",
        link: "vk:somename",
        categories: ["Art"]
      },
      {
        color: "teal",
        icon: "local_offer",
        name: "Promos",
        phone: "Shop your way",
        categories: ["Programming"]
      }
    ],
    partners: [],
    events: []
  },
  mutations: {
    SET_ORGANIZATIONS: (state, organizers) => {
      state.organizers = organizers;
    },
    SET_EVENTS: (state, events) => {
      state.events = events;
    },
    SET_PARTNERS: (state, partners) => {
      state.partners = partners;
    },
    SET_CITIES: (state, cities) => {
      state.cities = cities;
    },
    SET_EVENT_TYPES: (state, types) => {
      state.eventTypes = types;
    }
  },
  actions: {
    LOAD_CITIES: () => {},
    LOAD_EVENT_TYPES: () => {},
    LOAD_organizerS: /*({ commit }, { city, type })*/ () => {
      console.log("Load organizers action");
    },
    LOAD_EVENTS: /*({ commit }, { city, type })*/ () => {
      console.log("Load events action");
    },
    LOAD_PARTNERS: /*({ commit }, { city, type })*/ () => {
      console.log("Load partners action");
    }
  },
  modules: {}
});
