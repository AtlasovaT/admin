<template>
  <div class="admin-dashboard">
    <sidebar />
    <div class="admin-dashboard__content">
      <navigation />
      <loading v-if="loading" />
      <div v-if="isAuthenticated">
        <!--        <feed-item-->
        <!--          v-for="(feed, index) in fakeFeed"-->
        <!--          :key="index"-->
        <!--          :feed="feed"-->
        <!--        />-->
        <div class="admin-dashboard__content-title">
          <h1>Entities</h1>
        </div>
        <div
          class="admin-dashboard__content-wrapper product-cards product-block"
        >
          <div class="product-block__wrapper">
            <div class="product-cards__head">
              <v-app class="product-cards__head-selectizers">
                <v-select
                  :items="items"
                  :menu-props="{ top: true, offsetY: true }"
                  label="За неделю"
                ></v-select>
                <v-select
                  :items="items"
                  :menu-props="{ top: true, offsetY: true }"
                  label="Elantra"
                ></v-select>
                <v-select
                  :items="items"
                  :menu-props="{ top: true, offsetY: true }"
                  label="Ульяновск"
                ></v-select>
                <v-select
                  :items="items"
                  :menu-props="{ top: true, offsetY: true }"
                  label="В процессе"
                ></v-select>
              </v-app>
              <div class="product-cards__head-btn btn-delete">
                Reset
              </div>
              <div class="product-cards__head-btn btn-save">
                Apply
              </div>
              <v-dialog v-model="dialog" persistent max-width="600px">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    class="product-cards__head-btn btn-add"
                    v-bind="attrs"
                    v-on="on"
                  >
                    Create
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="headline">Добавление товара</span>
                  </v-card-title>
                  <v-card-text>
                    <div class="entity-item">
                      <label for="entity_name">Entity Name</label>
                      <input
                        type="text"
                        id="entity_name"
                        name="entity_name"
                        v-model="name"
                      />
                    </div>
                    <div class="entity-item">
                      <label for="entity_category">Entity Category</label>
                      <input
                        type="text"
                        id="entity_category"
                        name="entity_category"
                        v-model="category"
                      />
                    </div>
                    <div class="entity-item">
                      <label for="price_min">PriceMin</label>
                      <input
                        type="number"
                        id="price_min"
                        name="price_min"
                        v-model="priceMin"
                      />
                    </div>
                    <div class="entity-item">
                      <label for="price_max">PriceMax</label>
                      <input
                        type="number"
                        id="price_max"
                        name="price_max"
                        v-model="priceMax"
                      />
                    </div>
                    <div class="entity-item entity-item_big">
                      <label for="entity_description">Entity Description</label>
                      <textarea
                        name="entity_description"
                        id="entity_description"
                        v-model="description"
                      ></textarea>
                    </div>
                    <div class="form-element form-element_opt">
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
                    <div class="form-element entity-item entity-item_big">
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
                    <div class="product-card-top__image">
                      <img :src="image" alt="car" />
                    </div>
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
                      <span
                        class="product-card-top__load-btn"
                        @click="removeImage"
                        >Обзор</span
                      >
                    </label>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="dialog = false">
                      Close
                    </v-btn>
                    <v-btn color="blue darken-1" text @click="publicEntity">
                      Save
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </div>
            <div class="product-cards__list entities-table">
              <table>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Number</th>
                  <th>MinPrice</th>
                  <th>MaxPrice</th>
                </tr>
                <tr v-for="(field, index) in fields" v-bind:key="index">
                  <td>{{ index }}</td>
                  <td>
                    <router-link :to="'card'"
                      ><span v-on:click="editEntity(field)">{{
                        field.name
                      }}</span></router-link
                    >
                  </td>
                  <td>{{ field.number }}</td>
                  <td>{{ field.priceMin }}</td>
                  <td>{{ field.priceMax }}</td>
                </tr>
              </table>
            </div>
            <div class="product-cards__bottom">
              <v-pagination
                v-model="page"
                :length="15"
                :total-visible="7"
              ></v-pagination>
            </div>
          </div>
        </div>
      </div>
      <div v-if="!isAuthenticated && authStatus !== 'loading'">
        <login />
      </div>
      <sqreen-footer />
    </div>
  </div>
</template>

<style></style>

<script>
import { mapGetters } from "vuex";
import Login from "components/login";
import Navigation from "components/navigation";
import SqreenFooter from "components/footer/index.vue";
import Sidebar from "components/Sidebar";
import axios from "axios";
export default {
  components: {
    Sidebar,
    Login,
    Navigation,
    SqreenFooter
  },
  name: "home",
  computed: {
    ...mapGetters("auth", ["isAuthenticated", "authStatus"]),
    loading: function() {
      return this.authStatus === "loading" && !this.isAuthenticated;
    }
  },
  data() {
    return {
      items: ["Foo", "Bar", "Fizz", "Buzz"],
      page: 1,
      getCarJson: null,
      fields: [],
      dialog: false,
      image: "",
      addColor: "",
      colorsArray: [],
      description: "",
      priceMin: 0,
      priceMax: 0,
      name: "",
      category: "",
      thumbnail: {}
    };
  },
  created() {
    const headers = {
      "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b"
    };
    axios
      .get("/api/db/car", {
        headers: headers
      })
      .then(response => {
        this.getCarJson = response.data;
        this.fields = this.getCarJson.data;
      });
  },
  methods: {
    editEntity(item) {
      this.$store.commit("editEntity", JSON.stringify(item));
    },
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
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
    createColors(item) {
      this.colorsArray.push(item);
    },
    publicEntity() {
      let formData = new FormData();
      formData.append("name", this.carName);
      for (let i = 0; i < this.colorsArray.length; i++) {
        formData.append("colors[]", this.colorsArray[i]);
      }
      formData.append("description", this.description);
      formData.append("name", this.name);
      formData.append("priceMax", this.priceMax);
      formData.append("priceMin", this.priceMin);
      formData.append("thumbnail", this.thumbnail);
      formData.append("category", this.category);
      const headers = {
        "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b",
        Authorization: `Bearer ${localStorage.getItem("user-token")}`
      };
      axios
        .post(
          "/api/db/car/",
          formData,
          {
            // priceMax: 0,
            // priceMin: 0,
            // name: "string",
            // //"thumbnail": {},
            // description: "string",
            // categoryId: {},
            // colors: this.colorsArray
          },
          {
            headers: headers
          }
        )
        .then(response => {
          let result = response.data;
          console.log(result);
        })
        .catch(err => {
          console.log(err);
        });
      this.dialog = false;
    }
  }
};
</script>
