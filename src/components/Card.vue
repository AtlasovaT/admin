<template>
  <div class="admin-dashboard">
    <sidebar />
    <div class="admin-dashboard__content">
      <navigation />
      <div class="admin-dashboard__content-title">
        <h1>Карточка автомобиля</h1>
      </div>
      <div class="admin-dashboard__content-wrapper product-edit-content">
        <div class="product-edit-content__card">
          <div class="product-edit-content__card-top product-card-top">
            <div class="product-card-top__image">
              <img :src="image" alt="car" />
            </div>
            <span class="product-card-top__name">{{ carName }}</span>
            <span class="product-card-top__type">{{ category }}</span>
            <label class="product-card-top__load" for="picture">
              <input
                class="product-card-top__load-hidden"
                id="picture"
                name="picture"
                type="file"
                @change="onFileChange"
              />
              <button class="product-card-top__load-select">
                Выберите файл...
              </button>
              <span class="product-card-top__load-btn" @click="removeImage"
                >Обзор</span
              >
            </label>
          </div>
          <div class="product-edit-content__card-middle product-card-middle">
            <div class="product-card-middle__status">
              <span class="product-card-middle__status-title">Заполнено</span>
              <span class="product-card-middle__status-value">74%</span>
            </div>
            <progress-bar
              bar-color="#dc720f"
              val="74"
              title="74%"
            ></progress-bar>
          </div>
          <div class="product-edit-content__card-bottom product-card-bottom">
            <span class="product-card-bottom__title">Описание</span>
            <p class="product-card-bottom__descr">
              {{ description }}
            </p>
          </div>
        </div>
        <form
          class="product-edit-content__refresh"
          @submit.prevent="saveResults"
        >
          <div class="product-edit-content__refresh-title">
            Настройки автомобиля
          </div>
          <div class="product-edit-content__refresh-groups form-groups">
            <div class="form-groups__column">
              <div class="form-groups__column-item form-element">
                <label class="form-element__label">Модель автомобиля</label>
                <input
                  class="form-element__input"
                  type="text"
                  v-model="carName"
                />
              </div>
              <div
                class="form-groups__column-item form-element form-element_opt"
              >
                <label class="form-element__label">Доступные цвета</label>
                <input
                  class="form-element__input"
                  type="text"
                  v-model="addColor"
                />
                <button
                  type="button"
                  class="form-element__btn"
                  v-on:click="createColors(addColor)"
                ></button>
              </div>
              <div class="form-groups__column-item form-element">
                <label
                  v-for="(color, index) in colorsArray"
                  v-bind:key="index"
                  class="form-element__checkbox"
                >
                  <input
                    class="form-element__checkbox-hidden"
                    type="checkbox"
                  />
                  <span class="form-element__checkbox-fake"></span>
                  {{ color }}
                </label>
              </div>
            </div>
            <div class="form-groups__column">
              <div class="form-groups__column-item form-element">
                <label class="form-element__label">Тип автомобиля</label>
                <input
                  class="form-element__input"
                  type="text"
                  v-model="category"
                />
              </div>
            </div>
          </div>
          <div class="product-edit-content__refresh-bottom form-bottom">
            <button type="submit" class="form-bottom__btn btn-save">
              Сохранить
            </button>
            <button type="reset" class="form-bottom__btn btn-reset">
              Отменить
            </button>
            <button
              type="button"
              class="form-bottom__btn btn-delete"
              v-on:click="deleteEntity"
            >
              Удалить
            </button>
          </div>
        </form>
      </div>
      <sqreen-footer />
    </div>
  </div>
</template>

<script>
import Navigation from "components/navigation";
import Sidebar from "components/Sidebar";
import SqreenFooter from "components/footer/index.vue";
import ProgressBar from "vue-simple-progress";
import axios from "axios";

export default {
  name: "Card",
  components: {
    Sidebar,
    Navigation,
    SqreenFooter,
    ProgressBar
  },
  data() {
    return {
      entity: null,
      addColor: "",
      colorsArray: [],
      image: "",
      thumbnail: [],
      carName: "",
      category: "",
      description: "",
      path: "",
      categoryId: ""
    };
  },
  created() {
    this.entity = JSON.parse(sessionStorage.current);
    this.entity.colors.forEach(element => this.colorsArray.push(element));
    this.image = this.entity.thumbnail.path;
    this.carName = this.entity.name;
    this.category = this.entity.categoryId.name;
    this.description = this.entity.categoryId.description;
  },
  computed: {},
  methods: {
    createColors(item) {
      this.colorsArray.push(item);
    },
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
      this.thumbnail = files[0];
    },
    createImage(file) {
      let image = new Image();
      let reader = new FileReader();
      let vm = this;

      reader.onload = e => {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage: function() {
      this.image = this.entity.thumbnail.path;
    },
    saveResults() {
      /*let formData = new FormData();
      formData.append("name", this.carName);
      for (let i = 0; i < this.colorsArray.length; i++) {
        formData.append("colors[]", this.colorsArray[i]);
      }
      formData.append("thumbnail", this.thumbnail);*/
      const headers = {
        "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b",
        Authorization: `Bearer ${localStorage.getItem("user-token")}`
      };
      axios
        .put(
          `/api/db/car/${this.entity.id}`,
          //formData,
          {
            name: this.carName,
            /*categoryId: {
               name: this.category
             },*/
            //thumbnail: this.image,
            colors: this.colorsArray
          },
          {
            headers: headers
          }
        )
        .then(response => {
          let result = response.data;
          this.$router.push("/");
        })
        .catch(err => {
          console.log(err);
        });
    },
    deleteEntity() {
      const headers = {
        "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b",
        Authorization: `Bearer ${localStorage.getItem("user-token")}`
      };
      axios
        .delete(`/api/db/car/${this.entity.id}`, {
          headers: headers
        })
        .then(response => {
          let result = response.data;
          this.$router.push("/");
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped></style>
