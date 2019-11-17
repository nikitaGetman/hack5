import Vue from "vue";
import Vuex from "vuex";

// import axios from "axios";

// d56ed3397cb38cdd6f
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      name: localStorage.getItem("username"),
      avatar: localStorage.getItem("avatar"),
      id: localStorage.getItem("user_id")
    },
    vkApp: {
      id: "7211525",
      secret: "C7DZNMHD9MHnKjprVSiz",
      url: "http://localhost:8080/"
    },
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
    partners: [
      {
        image: "",
        name: "Organization name",
        type: "площадка",
        summ: null,
        phone: "891331414141",
        email: "some@gmail.com",
        link: "www.site.com"
      }
    ],
    events: [
      {
        image: "",
        title: "Some title",
        category: "Art",
        description: "Some desc",
        link: "vk.com",
        organizers: [
          {
            avatar:
              "https://avatars0.githubusercontent.com/u/9064066?v=4&s=460",
            name: "Ivan Petrov",
            phone: "8913167282",
            link: "vk:somename",
            email: "mail@gmail.com"
          }
        ],
        partners: [],
        startDate: Date.now(),
        finishDate: Date.now()
      }
    ]
  },
  mutations: {
    LOAD_ORGANIZERS: (state, organizers) => {
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
    LOAD_ORGANIZERS: /*({ commit }, { city, type })*/ () => {
      console.log("Load organizers action");
    },
    LOAD_EVENTS: /*({ commit }, { city, type })*/ () => {
      console.log("Load events action");
    },
    LOAD_PARTNERS: /*({ commit }, { city, type })*/ () => {
      console.log("Load partners action");
    },
    START_AUTH_VK: ({ state }) => {
      const params = {
        client_id: state.vkApp.id,
        redirect_uri: state.vkApp.url,
        response_type: "code"
      };
      const url = `https://oauth.vk.com/authorize?client_id=${params.client_id}&display=page&redirect_uri=${params.redirect_uri}&response_type=${params.response_type}`;
      // console.log("start");
      window.open(url, "_blank");
      // axios.get(url, { params });
    },
    AUTH_VK: (_, code) => {
      console.log("auth vith vk");
      console.log(code);
    }
  },
  getters: {
    isAuthenticated: state => state.user.name
  },
  modules: {}
});
