import Vue from "vue";
import Vuex from "vuex";
import { getUser } from "../backend";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    async setUser(context) {
      const user = await getUser();
      context.commit("setUser", user);
    },
  },
  modules: {},
});
