<template>
  <div class="navigation-panel">
    <div class="navigation-panel__search search-input">
      <svg
        class="search"
        width="15"
        height="14"
        viewBox="0 0 15 14"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.87336 8.80503H10.5057L14.5 12.8073L13.3073 14L9.30503 10.0057V9.37336L9.08891 9.14923C8.17639 9.93368 6.99171 10.4059 5.70297 10.4059C2.82933 10.4059 0.5 8.07662 0.5 5.20297C0.5 2.32933 2.82933 0 5.70297 0C8.57662 0 10.9059 2.32933 10.9059 5.20297C10.9059 6.49171 10.4337 7.67639 9.64923 8.58891L9.87336 8.80503ZM2.19702 5.30302C2.19702 7.29837 3.80773 8.90908 5.80308 8.90908C7.79844 8.90908 9.40914 7.29837 9.40914 5.30302C9.40914 3.30767 7.79844 1.69696 5.80308 1.69696C3.80773 1.69696 2.19702 3.30767 2.19702 5.30302Z"
        />
      </svg>
      <input type="text" placeholder="Поиск..." />
    </div>
    <div class="navigation-panel__info">
      <div class="navigation-panel__info-notifications notification-block">
        <div class="notification-block__wrapper">
          <svg
            class="navigation-panel__info-notifications-icon notifications-icon"
            width="18"
            height="21"
            viewBox="0 0 18 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.375 9.04949V14.3727L17.5 16.502V17.5667H0.5V16.502L2.625 14.3727V9.04949C2.625 5.77038 4.35687 3.04489 7.40625 2.32093V1.59697C7.40625 0.713313 8.11812 0 9 0C9.88188 0 10.5938 0.713313 10.5938 1.59697V2.32093C13.6325 3.04489 15.375 5.78103 15.375 9.04949ZM11.2667 18.7C11.2667 19.9467 10.2467 20.9667 9 20.9667C7.742 20.9667 6.73334 19.9467 6.73334 18.7H11.2667Z"
              fill="#818EA3"
            />
          </svg>
          <span class="count">2</span>
        </div>
      </div>
      <div
        v-if="isAuthenticated"
        class="navigation-panel__info-profile profile-block"
        v-on:click="profileOptions"
      >
        <div class="profile-block__image">
          <img src="../../assets/img/profile.png" alt="profile" />
        </div>
        <div class="profile-block__name">Admin</div>
        <svg
          width="9"
          height="5"
          viewBox="0 0 9 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0.5L4.25 5L8.5 0.5H0Z" fill="#ABB6BF" />
        </svg>
        <div
          class="profile-block__options"
          v-if="isAuthenticated"
          @click="userLogout"
          v-show="visibility"
        >
          <span>Logout</span>
        </div>
      </div>

      <!--        <div v-if="!isAuthenticated && !authLoading">-->
      <!--          <router-link to="/login">Login</router-link>-->
      <!--        </div>-->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.navigation-panel {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  box-shadow: 0px 2.5px 9.5px rgba(90, 97, 105, 0.12);
  padding: 0 28px;
  &__info {
    display: flex;
    align-items: stretch;
  }
}
.navigation-panel__logo {
  display: flex;
  align-items: center;
  text-decoration: none;
}
.navigation-panel__logo-text {
  font-weight: 600;
  font-size: 16px;
  color: #3d5170;
  margin-left: 7px;
}
.search-input {
  position: relative;
  width: 100%;
  max-width: 400px;
  input {
    padding: 5px 24px;
    border: none;
    outline: none;
    width: 100%;
    &::placeholder {
      font-size: 13px;
      letter-spacing: -0.0928572px;
      color: #767f9d;
    }
    &:focus {
      border-bottom: 1px solid #000000;
    }
    &:active {
      border-bottom: 1px solid #000000;
    }
  }
}
.search {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  fill: #cacedb;
}
.notification-block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-left: 1px solid rgba(90, 97, 105, 0.12);
  border-right: 1px solid rgba(90, 97, 105, 0.12);
  padding: 0 26px;
  &__wrapper {
    position: relative;
  }
}
.count {
  position: absolute;
  bottom: 0;
  right: -6px;
  font-weight: 600;
  font-size: 9px;
  color: #ffffff;
  background-color: #c4183c;
  min-width: 14px;
  height: 14px;
  line-height: 14px;
  border-radius: 50%;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.profile-block {
  display: flex;
  align-items: center;
  position: relative;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 25px;
  cursor: pointer;
  &__image {
    width: 40px;
    height: 40px;
    background-color: #d8d8d8;
    box-shadow: inset 0px 0px 2px rgba(0, 0, 0, 0.238678);
    border-radius: 50%;
    overflow: hidden;
    flex-shrink: 0;
    img {
      display: block;
      width: 100%;
      height: auto;
    }
  }
  &__name {
    font-weight: 400;
    font-size: 15px;
    letter-spacing: -0.471429px;
    color: #5a6169;
    margin-left: 13px;
    margin-right: 36px;
  }
  &__options {
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #ffffff;
    width: 100%;
    padding: 10px 20px;
    box-shadow: 0px 2.5px 9.5px rgba(90, 97, 105, 0.32);
    box-sizing: border-box;
    border-radius: 8px;
    margin-top: 4px;
    text-align: center;
  }
}
</style>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
// import { AUTH_LOGOUT } from "actions/auth";

export default {
  name: "navigation",
  data() {
    return {
      visibility: false
    };
  },
  methods: {
    ...mapActions("auth", {
      logout: "logout"
    }),

    userLogout() {
      this.logout().then(() => {
        this.$router.push("/login");
      });
    },
    profileOptions() {
      this.visibility = !this.visibility;
    }
  },
  computed: {
    ...mapGetters("auth", {
      isAuthenticated: "isAuthenticated"
    }),

    ...mapState("auth", {
      authLoading: state => state.status === "loading"
    })
  }
};
</script>
