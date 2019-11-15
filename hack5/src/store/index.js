import Vue from "vue";
import Vuex from "vuex";
// import

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cities: ["Красноярск", "Москва", "Санкт-Петербург"],
    eventTypes: ["Art", "Programming", "Meetup", "Sport"],
    organizators: [
      {
        avatar: "https://avatars0.githubusercontent.com/u/9064066?v=4&s=460",
        name: "John Leider",
        phone: "8913167282",
        rating: "9",
        link: "https://vk.com/nikitagetman",
        email: "someemail@gmail.com",
        bio: "Я люблю овсяное печенье",
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
        rating: "5",
        categories: ["Art"]
      },
      {
        color: "teal",
        icon: "local_offer",
        name: "Promos",
        phone: "Shop your way",
        rating: "2",
        categories: ["Programming"]
      }
    ]
  },
  mutations: {},
  actions: {
    LOAD_CITIES: () => {},
    LOAD_EVENT_TYPES: () => {},
    LOAD_ORGANIZATORS: /*({ commit }, { city, type })*/ () => {
      console.log("Load organizators action");
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
