import Vue from "vue";
import Router from "vue-router";
import Home from "components/home";
import Account from "components/account";
import Login from "components/login";
import store from "../store";
import Register from "components/Register";
import Card from "components/Card";
import Orders from "components/Orders";

Vue.use(Router);

const ifNotAuthenticated = (to, from, next) => {
  console.log(store);
  if (!store.getters["auth/isAuthenticated"]) {
    next();
    return;
  }
  next("/");
};

const ifAuthenticated = (to, from, next) => {
  console.log(store);
  if (store.getters["auth/isAuthenticated"]) {
    next();
    return;
  }
  next("/login");
};

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/account",
      name: "Account",
      component: Account,
      beforeEnter: ifAuthenticated
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
      beforeEnter: ifNotAuthenticated
    },
    {
      path: "/register",
      name: "Register",
      component: Register
    },
    {
      path: "/card",
      name: "Card",
      component: Card
    },
    {
      path: "/orders",
      name: "Orders",
      component: Orders
    }
  ]
});
