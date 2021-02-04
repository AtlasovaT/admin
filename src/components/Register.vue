<template>
  <form
    id="register"
    name="register"
    class="admin-form"
    @submit.prevent="register"
  >
    <div class="admin-form__title">Регистрация</div>
    <label for="get_acess_mail" class="admin-form__label">Почта</label>
    <input
      type="email"
      id="get_acess_mail"
      name="get_acess_mail"
      class="admin-form__input"
      required
      v-model="getAcessUsername"
    />
    <label for="get_acess_password" class="admin-form__label">Пароль</label>
    <input
      type="password"
      id="get_acess_password"
      name="get_acess_password"
      class="admin-form__input"
      required
      v-model="getAcessPassword"
    />
    <div class="admin-form__bottom">
      <button
        type="submit"
        form="register"
        class="admin-form__bottom-btn admin-btn"
      >
        Запросить
      </button>
    </div>
  </form>
</template>

<script>
import axios from "axios";

export default {
  name: "Register",
  data() {
    return {
      getAcessUsername: "",
      getAcessPassword: "",
      getRegisterResult: null,
      loginStatus: false
    };
  },
  methods: {
    register: function() {
      const headers = {
        "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b"
      };
      axios
        .post(
          "/api/auth/register",
          {
            username: this.getAcessUsername,
            password: this.getAcessPassword
          },
          {
            headers
          }
        )
        .then(response => {
          this.getRegisterResult = response.data;
          console.log(this.getRegisterResult);
          return "";
        })
        .catch(err => {
          console.log(err);
        });
      this.$router.push("/login");
    }
  }
};
</script>

<style scoped></style>
