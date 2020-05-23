<template>
  <v-app>
    <AppBar v-if="$route.name !== 'signin' && userFetched" />
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import AppBar from "./components/Nav/Appbar";
import auth from "./auth";
export default {
  name: "App",

  components: {
    HelloWorld,
    AppBar,
  },

  data: () => ({
    userFetched: false,
  }),
  methods: {
    async getUser() {
      if (this.$route.name !== "signin") {
        await this.$store.dispatch("setUser");
        this.userFetched = true;
      }
    },
  },
  created() {
    this.getUser();
    auth();
  },
};
</script>
