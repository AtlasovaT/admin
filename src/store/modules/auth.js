import axios from "axios";

const headers = {
  "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b",
  Authorization: "Basic MTFkN2M5Z2FmNjo0Y2JjZWE5NmRl"
};

const state = {
  token: localStorage.getItem("user-token") || "",
  status: "",
  hasLoadedOnce: false
};

const getters = {
  isAuthenticated: state => !!state.token,
  authStatus: state => state.status
};

const actions = {
  login: ({ commit }, user) => {
    commit("setLoading");
    console.log(user);
    return axios
      .post(
        "/api/auth/login",
        {
          username: user.username, //"user_Tanya",
          password: user.password //"12345"
        },
        {
          headers
        }
      )
      .then(response => {
        const token = response.data.access_token;
        localStorage.setItem("user-token", token);
        commit("setToken", token);
      })
      .catch(() => {
        commit("removeToken");
        localStorage.removeItem("user-token");
      })
      .finally(() => {
        commit("setLoading", false);
      });
  },
  logout: ({ state, commit }) => {
    return axios
      .post(
        "/api/auth/logout",
        {},
        {
          headers: {
            "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b",
            Authorization: `Bearer ${state.token}`
          }
        }
      )
      .then(() => {
        commit("removeToken");
        localStorage.removeItem("user-token");
      });
  }
};

const mutations = {
  setLoading: state => {
    state.status = "loading";
  },
  setToken: (state, token) => {
    state.status = "success";
    state.token = token;
    state.hasLoadedOnce = true;
  },
  removeToken: state => {
    state.token = "";
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
