<template>
  <div class="admin-panel">
    <a class="main-logo">
      <svg
        class="main-logo__svg"
        width="45"
        height="45"
        viewBox="0 0 45 45"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="Logo Icon"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 22.25C0 9.96178 9.96198 0 22.2504 0C34.538 0 44.5 9.96178 44.5 22.25C44.5 25.0644 43.9774 27.7567 43.0241 30.2353C41.3767 27.6868 38.5104 26 35.25 26C30.1414 26 26 30.1414 26 35.25C26 38.5104 27.6868 41.3768 30.2354 43.0241C27.7569 43.9775 25.0647 44.5 22.2504 44.5C9.96198 44.5 0 34.5382 0 22.25ZM30.2354 43.0241C31.6801 43.9579 33.4018 44.5 35.25 44.5C40.3586 44.5 44.5 40.3586 44.5 35.25C44.5 33.4017 43.9579 31.6801 43.0241 30.2353C40.7682 36.1002 36.1001 40.7682 30.2354 43.0241Z"
        />
      </svg>
      Need for drive</a
    >
    <form
      id="login"
      name="login"
      class="admin-form"
      @submit.prevent="userLogin"
    >
      <div class="admin-form__title">Вход</div>
      <label for="mail" class="admin-form__label">Почта</label>
      <input
        type="email"
        id="mail"
        name="mail"
        class="admin-form__input"
        required
        v-model="username"
      />
      <label for="password" class="admin-form__label">Пароль</label>
      <input
        type="password"
        id="password"
        name="password"
        class="admin-form__input"
        required
        v-model="password"
      />
      <div class="admin-form__bottom">
        <router-link class="admin-form__bottom-link" :to="'/register'"
          >Запросить доступ</router-link
        >
        <button
          type="submit"
          form="login"
          class="admin-form__bottom-btn admin-btn"
        >
          Войти
        </button>
      </div>
    </form>
  </div>
</template>

<style>
.login {
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 10px;
}
</style>

<script>
// import axios from "axios";
import { mapActions } from "vuex";
// import { AUTH_REQUEST } from "actions/auth";

export default {
  name: "login",
  data() {
    return {
      username: "t.atlasova@inbox.ru",
      password: "12345",
      getLoginResult: null
    };
  },
  methods: {
    ...mapActions("auth", {
      login: "login"
    }),

    userLogin() {
      this.login({
        username: this.username,
        password: this.password
      }).then(() => {
        this.$router.push("/");
      });
    }

    // login: function() {
    //   const headers = {
    //     "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b",
    //     Authorization: "Basic MTFkN2M5Z2FmNjo0Y2JjZWE5NmRl"
    //   };
    //   axios
    //     .post(
    //       "/api/auth/login",
    //       {
    //         username: this.username,
    //         password: this.password
    //       },
    //       {
    //         headers
    //       }
    //     )
    //     .then(response => {
    //       this.getLoginResult = response.data;
    //       console.log(this.getLoginResult);
    //       let { username, password } = this;
    //       this.$store
    //         .dispatch("setLoading", { username, password })
    //         .then(() => {
    //           this.$router.push("/");
    //         });
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    // }
  }
};
</script>
