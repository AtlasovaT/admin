<template>
  <div class="admin-dashboard__aside">
    <div class="admin-dashboard__aside-logo">
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 10.75C0 4.81299 4.81309 0 10.7502 0C16.6869 0 21.5 4.81299 21.5 10.75C21.5 12.1098 21.2475 13.4106 20.7869 14.6081C19.991 13.3768 18.6061 12.5618 17.0309 12.5618C14.5627 12.5618 12.5618 14.5627 12.5618 17.0309C12.5618 18.6061 13.3768 19.991 14.6081 20.7869C13.4106 21.2475 12.1099 21.5 10.7502 21.5C4.81309 21.5 0 16.687 0 10.75ZM14.6081 20.7869C15.3061 21.2381 16.1379 21.5 17.0309 21.5C19.4991 21.5 21.5 19.4991 21.5 17.0309C21.5 16.1379 21.2381 15.3061 20.7869 14.6081C19.697 17.4417 17.4416 19.697 14.6081 20.7869Z"
          fill="#0EC261"
        />
      </svg>
      <span class="navigation-panel__logo-text">Need for car</span>
    </div>
    <ul class="admin-dashboard__aside-list aside-list">
      <li class="aside-list__item">
        <span class="aside-list__item-link">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.3213 2.10853C11.5596 2.34683 11.5596 2.73177 11.3213 2.97007L10.2031 4.08825L7.91174 1.7969L9.02992 0.678725C9.26822 0.440425 9.65317 0.440425 9.89147 0.678725L11.3213 2.10853ZM0.5 11.5V9.20865L7.25795 2.4507L9.5493 4.74205L2.79135 11.5H0.5Z"
            />
          </svg>
          Карточка автомобиля
        </span>
      </li>
      <li class="aside-list__item">
        <router-link :to="'/'" class="aside-list__item-link">
          <svg
            width="13"
            height="10"
            viewBox="0 0 13 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.5 0.5V1.85714H5.83333V0.5H0.5ZM5.83333 4.57142H0.5V3.21428H5.83333V4.57142ZM0.5 7.28572H5.83333V5.92857H0.5V7.28572ZM0.5 10H5.83333V8.64285H0.5V10ZM12.5 0.5H7.16663V10H12.5V0.5Z"
            />
          </svg>
          Список авто
        </router-link>
      </li>
      <li class="aside-list__item">
        <router-link :to="'orders'" class="aside-list__item-link">
          <svg
            width="9"
            height="10"
            viewBox="0 0 9 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.5 0H1.5C0.95 0 0.505 0.45 0.505 1L0.5 9C0.5 9.55 0.945 10 1.495 10H7.5C8.05 10 8.5 9.55 8.5 9V3L5.5 0ZM6.5 7H5V8.5H4V7H2.5V6H4V4.5H5V6H6.5V7ZM5 0.75V3.5H7.75L5 0.75Z"
            />
          </svg>
          Заказы
        </router-link>
      </li>
      <li class="aside-list__item">
        <a href="#" class="aside-list__item-link">
          <svg
            width="13"
            height="11"
            viewBox="0 0 13 11"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.17647 5.11538H0.5V0.5H4.17647V5.11538ZM4.17647 10.5H0.5V5.88461H4.17647V10.5ZM4.91174 10.5H8.58821V5.88461H4.91174V10.5ZM13 10.5H9.32349V5.88461H13V10.5ZM4.91174 5.11538H8.58821V0.5H4.91174V5.11538ZM9.32349 5.11538V0.5H13V5.11538H9.32349Z"
            />
          </svg>
          Menu 4
        </a>
      </li>
      <li class="aside-list__item">
        <a href="#" class="aside-list__item-link">
          <svg
            width="11"
            height="10"
            viewBox="0 0 11 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.89486 0H1.60538C0.997487 0 0.500119 0.5 0.500119 1.11111V2.77778H11.0001V1.11111C11.0001 0.5 10.5028 0 9.89486 0ZM9.89471 10H8.23682V3.88889H11V8.88889C11 9.5 10.5026 10 9.89471 10ZM7.13157 3.9H4.36841V10H7.13157V3.9ZM1.60526 10C0.997368 10 0.5 9.5 0.5 8.88889V3.88889H3.26316V10H1.60526Z"
            />
          </svg>
          Menu 5
        </a>
      </li>
      <li class="aside-list__item">
        <a href="#" class="aside-list__item-link">
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.875 3.125C9.875 4.85156 8.47656 6.25 6.75 6.25C5.02344 6.25 3.625 4.85156 3.625 3.125C3.625 1.39844 5.02344 0 6.75 0C8.47656 0 9.875 1.39844 9.875 3.125ZM0.5 10.9375C0.5 8.85938 4.66406 7.8125 6.75 7.8125C8.83594 7.8125 13 8.85938 13 10.9375V12.5H0.5V10.9375Z"
            />
          </svg>
          Menu 6
        </a>
      </li>
      <li class="aside-list__item">
        <a href="#" class="aside-list__item-link">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.25 0.5C3.076 0.5 0.5 3.076 0.5 6.25C0.5 9.424 3.076 12 6.25 12C9.424 12 12 9.424 12 6.25C12 3.076 9.424 0.5 6.25 0.5ZM6.82505 9.12501H5.67505V7.97501H6.82505V9.12501ZM5.67505 6.825H6.82505V3.375H5.67505V6.825Z"
            />
          </svg>
          Menu 7
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Sidebar"
};
</script>

<style scoped></style>
