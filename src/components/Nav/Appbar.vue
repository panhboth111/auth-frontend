<template>
  <v-app-bar app color="primary" dark>
    My app
    <v-spacer></v-spacer>

    {{ user.username }}
    <v-btn @click="signOut">sign out</v-btn>
  </v-app-bar>
</template>

<script>
import { signout } from "../../backend";
export default {
  data: () => ({
    user: {},
  }),
  methods: {
    signOut() {
      signout();
    },
  },
  created() {
    this.user = this.$store.state.user;
  },
};
</script>

<style></style>
