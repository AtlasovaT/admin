<template>
  <div class="admin-dashboard">
    <sidebar />
    <div class="admin-dashboard__content">
      <navigation />
      <div class="admin-dashboard__content-title">
        <h1>Заказы</h1>
      </div>
      <div class="admin-dashboard__content-wrapper product-cards product-block">
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
            <div class="product-cards__head-btn btn-save">
              Применить
            </div>
          </div>
          <div class="product-cards__list">
            <div class="product-cards__list-item product-card">
              <div class="product-card__params main-params">
                <div class="main-params__img">
                  <img src="../assets/img/car.png" alt="car" />
                </div>
                <div class="main-params__content">
                  <p>
                    <span class="dark">ELANTRA</span> в
                    <span class="dark">Ульяновск</span>, Нариманова 42
                  </p>
                  <p>12.06.2019 12:00 — 13.06.2019 12:00</p>
                  <p>Цвет: <span class="dark">Голубой</span></p>
                </div>
              </div>
              <div class="product-card__params checkbox-group">
                <label class="checkbox-group__item checkbox-item">
                  <input
                    type="checkbox"
                    class="checkbox-item__hidden"
                    checked
                  />
                  <span class="checkbox-item__fake"></span>
                  <span class="checkbox-item__text">Полный бак</span>
                </label>
                <label class="checkbox-group__item checkbox-item">
                  <input type="checkbox" class="checkbox-item__hidden" />
                  <span class="checkbox-item__fake"></span>
                  <span class="checkbox-item__text">Детское кресло</span>
                </label>
                <label class="checkbox-group__item checkbox-item">
                  <input type="checkbox" class="checkbox-item__hidden" />
                  <span class="checkbox-item__fake"></span>
                  <span class="checkbox-item__text">Правый руль</span>
                </label>
              </div>
              <div class="product-card__params">
                <div class="product-card__params-price">
                  4 300 ₽
                </div>
              </div>
              <div class="product-card__params">
                <div class="product-card__params-options product-card-options">
                  <div class="product-card-options__item button-ready">
                    <svg
                      width="9"
                      height="7"
                      viewBox="0 0 9 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.59804 5.12826L0.691473 3.10701L0.0422363 3.79045L2.59804 6.5L8.08454 0.683445L7.43988 0L2.59804 5.12826Z"
                        fill="#17C671"
                      />
                    </svg>
                    Готово
                  </div>
                  <div class="product-card-options__item button-reset">
                    <svg
                      width="7"
                      height="8"
                      viewBox="0 0 7 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.63858 1.205L5.97154 0.5L3.32704 3.295L0.682541 0.5L0.0155029 1.205L2.66 4L0.0155029 6.795L0.682541 7.5L3.32704 4.705L5.97154 7.5L6.63858 6.795L3.99408 4L6.63858 1.205Z"
                        fill="#C4183C"
                      />
                    </svg>
                    Отмена
                  </div>
                  <div class="product-card-options__item button-edit">
                    <svg
                      width="3"
                      height="8"
                      viewBox="0 0 3 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M1.32677 2C1.84715 2 2.27292 1.55 2.27292 1C2.27292 0.45 1.84715 0 1.32677 0C0.806384 0 0.380615 0.45 0.380615 1C0.380615 1.55 0.806384 2 1.32677 2ZM1.32677 3C0.806384 3 0.380615 3.45 0.380615 4C0.380615 4.55 0.806384 5 1.32677 5C1.84715 5 2.27292 4.55 2.27292 4C2.27292 3.45 1.84715 3 1.32677 3ZM0.380615 7C0.380615 6.45 0.806384 6 1.32677 6C1.84715 6 2.27292 6.45 2.27292 7C2.27292 7.55 1.84715 8 1.32677 8C0.806384 8 0.380615 7.55 0.380615 7Z"
                        fill="#818EA3"
                      />
                    </svg>
                    Изменить
                  </div>
                </div>
              </div>
            </div>
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
      <sqreen-footer />
    </div>
  </div>
</template>

<script>
import Navigation from "components/navigation";
import Sidebar from "components/Sidebar";
import SqreenFooter from "components/footer/index.vue";

export default {
  name: "Orders",
  data: () => ({
    page: 1,
    items: ["Foo", "Bar", "Fizz", "Buzz"]
  }),
  components: {
    Sidebar,
    Navigation,
    SqreenFooter
  }
};
</script>

<style scoped></style>
