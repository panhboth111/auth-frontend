<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-tabs v-model="tab" background-color="primary" dark>
            <v-tab v-for="(item, i) in items" :key="i">{{ item }}</v-tab>
          </v-tabs>
          <v-tabs-items v-model="tab">
            <v-tab-item>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="username"
                    type="text"
                    v-model="signinUser.username"
                  ></v-text-field>
                  <v-text-field
                    id="password"
                    label="Password"
                    type="password"
                    v-model="signinUser.password"
                  ></v-text-field>
                  <v-btn color="primary" @click="signIn">sign in</v-btn>
                </v-form>
              </v-card-text>
            </v-tab-item>
            <v-tab-item>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="username"
                    type="text"
                    v-model="signupUser.username"
                  ></v-text-field>
                  <v-text-field
                    id="password"
                    label="Password"
                    type="password"
                    v-model="signupUser.password"
                  ></v-text-field>
                  <v-btn color="primary" @click="signUp">sign up</v-btn>
                </v-form>
              </v-card-text>
            </v-tab-item>
          </v-tabs-items>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { signup, signin } from "../backend";
export default {
  data: () => ({
    tab: null,
    items: ["Sign in", "Sign up"],
    signupUser: {
      username: null,
      password: null,
    },
    signinUser: {
      username: null,
      password: null,
    },
  }),
  methods: {
    async signUp() {
      await signup(this.signupUser);
    },
    async signIn() {
      await signin(this.signinUser);
    },
  },
};
</script>
