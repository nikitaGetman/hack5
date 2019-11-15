<template>
  <div>
    <!-- <navigation></navigation> -->
    <header-form></header-form>

    <h5 class="subtitle-1">Менеджеры:</h5>
    <!-- Managers list -->
    <v-expansion-panels multiple>
      <manager-card
        v-for="(manager, i) in managers"
        :key="i"
        :avatar="manager.avatar"
        :name="manager.name"
        :rating="manager.rating"
        :phone="manager.phone"
        :link="manager.link"
        :email="manager.email"
        :bio="manager.bio"
        :categories="manager.categories"
        :events="manager.events"
      ></manager-card>
    </v-expansion-panels>
  </div>
</template>

<script>
import HeaderForm from "../components/HeaderForm";
import ManagerCard from "../components/ManagerCard";
export default {
  name: "home",
  components: { HeaderForm, ManagerCard },
  data() {
    return {
      listItems: [{ name: "Ivan", link: "" }],
      managers: [
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
              image:
                "https://avatars0.githubusercontent.com/u/9064066?v=4&s=460",
              link: "https://vk.com/sibhackathon5",
              description: "От идеи до прототипа за 48 часов. 👨‍💻",
              date: "15.11.19 - 17.11.19"
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
      ],
      lorem:
        "Lorem ipsum dolor sit amet, at aliquam vivendum vel, everti delicatissimi cu eos. Dico iuvaret debitis mel an, et cum zril menandri. Eum in consul legimus accusam. Ea dico abhorreant duo, quo illum minimum incorrupte no, nostro voluptaria sea eu. Suas eligendi ius at, at nemore equidem est. Sed in error hendrerit, in consul constituam cum."
    };
  }
};
</script>
