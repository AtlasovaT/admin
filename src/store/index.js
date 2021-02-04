import Vue from "vue";
import Vuex from "vuex";
// import user from "./modules/user";
import auth from "./modules/auth";
Vue.use(Vuex);

// const debug = process.env.NODE_ENV !== "production";

const store = new Vuex.Store({
  modules: {
    // user,
    auth
  },
  state: {
    entity: null,
    entityResult: null
  },
  mutations: {
    editEntity(state, n) {
      state.entity = n;
      sessionStorage.setItem("current", state.entity);
    }
  }
  // strict: debug
});

export default store;
