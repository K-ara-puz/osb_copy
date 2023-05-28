<template>
  <header class="header _anim-scroll _anim-no-hide">
    <div class="header__wrapper">
      <div class="header__column">
        <button
          v-if="!this.IS_MOBILE"
          class="header__search-icon"
          @click="isSearchInputShow = true"
        >
          <div class="header__ic__wrapp test">
            <svg
              class="header__ic"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.38 22.656a12.332 12.332 0 0 1-7.18 2.293C6.356 24.949.81 19.402.81 12.56S6.358.172 13.2.172c6.841 0 12.388 5.546 12.388 12.388a12.35 12.35 0 0 1-3.629 8.76l8.741 8.741c.4.401.391 1.044-.011 1.446a1.02 1.02 0 0 1-1.446.012zm-7.18.835c6.036 0 10.93-4.894 10.93-10.93 0-6.038-4.894-10.932-10.93-10.932-6.038 0-10.932 4.894-10.932 10.931 0 6.037 4.894 10.931 10.931 10.931Z"
              />
            </svg>
          </div>
        </button>
        <CustomSearchInput
          v-show="this.isSearchInputShow && !this.IS_MOBILE"
          @search-item="this.searchProducts"
          @blur-it="this.closeInput()"
          id="searchInputId"
          :clear-after-search="true"
          :is-cancel-icon="true"
        >
        </CustomSearchInput>
      </div>
      <div class="header__column">
        <div class="header__nav-bar nav-bar">
          <div v-if="!this.IS_MOBILE" class="nav-bar__link">
            <router-link to="/">
              <a>Главная</a>
            </router-link>
          </div>
          <div v-if="!this.IS_MOBILE" class="nav-bar__link">
            <router-link to="/catalog">
              <a>Каталог</a>
            </router-link>
          </div>
          <div class="">
            <router-link to="/">
              <img
                class="header__logo"
                id="header-logo"
                src="../../assets/logo.webp"
              />
            </router-link>
          </div>
          <div v-if="!this.IS_MOBILE" class="nav-bar__link">
            <router-link to="/about">
              <a>Наш мир</a>
            </router-link>
          </div>
          <div v-if="!this.IS_MOBILE" class="nav-bar__link">
            <router-link to="/sale">
              <a>Акции</a>
            </router-link>
          </div>
        </div>
      </div>
      <div class="header__column header-column-last">
        <div class="header-column-last__wrapper">
          <button
            @click="this.openCartPopup()"
            data-da=".header__column:first-child, 768, 1"
          >
            <div class="header__ic__wrapp cart-icon">
              <div class="header__ic_cart-pr-count">
                {{ this.cartProductCount }}
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="header__ic"
                viewBox="0 0 57.778 51.541"
              >
                <path
                  d="M56.49 11.645a4.28 4.28 0 0 0-3.48-1.77H12.54l-1.12-6A4.24 4.24 0 0 0 7.25.325h-6a1.25 1.25 0 0 0 0 2.5h6a1.76 1.76 0 0 1 1.72 1.43l6.94 37.7a1.25 1.25 0 0 0 1.23 1h2.81a5.469 5.469 0 1 0 9.18 0h5.61a5.47 5.47 0 1 0 9.18 0h1.73a1.25 1.25 0 1 0 0-2.5H18.18l-.9-4.9h29.46a4.26 4.26 0 0 0 4-2.79l6.27-17.25a4.271 4.271 0 0 0-.52-3.87zm-29 34.31a3 3 0 1 1-3-3 3 3 0 0 1 3.02 3zm14.79 0a3 3 0 1 1-3-3 3 3 0 0 1 3.02 3zm12.37-31.27-6.27 17.24a1.75 1.75 0 0 1-1.64 1.15H16.82L13 12.335h40a1.72 1.72 0 0 1 1.43.74 1.74 1.74 0 0 1 .22 1.61z"
                />
              </svg>
            </div>
          </button>
          <button v-if="!this.IS_MOBILE" @click="this.openLogPopup()">
            <div class="header__ic__wrapp">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="header__ic user-icon"
                xml:space="preserve"
                viewBox="0 0 60 60"
              >
                <path
                  d="m48.014 42.889-9.553-4.776A2.63 2.63 0 0 1 37 35.748v-3.381c.229-.28.47-.599.719-.951a22.886 22.886 0 0 0 2.954-5.799A3.968 3.968 0 0 0 43 22v-4c0-.963-.36-1.896-1-2.625v-5.319c.056-.55.276-3.824-2.092-6.525C37.854 1.188 34.521 0 30 0s-7.854 1.188-9.908 3.53C17.724 6.231 17.944 9.506 18 10.056v5.319c-.64.729-1 1.662-1 2.625v4c0 1.217.553 2.352 1.497 3.109.916 3.627 2.833 6.36 3.503 7.237v3.309c0 .968-.528 1.856-1.377 2.32l-8.921 4.866A9.018 9.018 0 0 0 7 50.762V54c0 4.746 15.045 6 23 6s23-1.254 23-6v-3.043a8.973 8.973 0 0 0-4.986-8.068zM51 54c0 1.357-7.412 4-21 4S9 55.357 9 54v-3.238a7.016 7.016 0 0 1 3.659-6.164l8.921-4.866A4.644 4.644 0 0 0 24 35.655v-4.019l-.233-.278c-.024-.029-2.475-2.994-3.41-7.065l-.091-.396-.341-.22A1.995 1.995 0 0 1 19 22v-4c0-.561.238-1.084.67-1.475l.33-.297V10l-.009-.131c-.003-.027-.343-2.799 1.605-5.021C23.253 2.958 26.081 2 30 2c3.905 0 6.727.951 8.386 2.828 1.947 2.201 1.625 5.017 1.623 5.041L40 16.228l.33.298c.432.39.67.913.67 1.474v4c0 .873-.572 1.637-1.422 1.899l-.498.153-.16.495a20.934 20.934 0 0 1-2.834 5.713c-.297.421-.586.794-.837 1.079l-.249.284v4.125c0 1.77.983 3.361 2.566 4.153l9.553 4.776A6.982 6.982 0 0 1 51 50.957V54z"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
      <div
        v-if="this.IS_MOBILE"
        @click="this.showMobileMenu()"
        class="header__column menu-burger"
      >
        <button>
          <div class="header__ic__wrapp">
            <div
              class="header__burger-div"
              :class="{ 'header__burger-div_opened': this.IS_MOBILE_MENU_OPEN }"
            >
              <div class="header__burger-div__center-line"></div>
            </div>
          </div>
        </button>
      </div>
    </div>
    <transition name="mobile-menu-anim">
      <nav
        class="header__mobile-menu mobile-menu-header"
        v-if="this.IS_MOBILE_MENU_OPEN"
      >
        <div class="mobile-menu-header__container mobile-menu__body">
          <CustomSearchInput
            @search-item="this.searchProducts($event), this.showMobileMenu()"
            class="mobile-menu-header__search"
            :clear-after-search="true"
          >
          </CustomSearchInput>
          <div class="mobile-menu-header__link">
            <a @click="this.routeFromHeader('main')">Главная</a>
          </div>
          <div class="mobile-menu-header__link">
            <a @click="this.routeFromHeader('catalog')">Каталог</a>
          </div>
          <div class="mobile-menu-header__link">
            <a @click="this.routeFromHeader('account')">Личный кабинет</a>
          </div>
          <div @click="this.openCartPopup()" class="mobile-menu-header__link">
            <a>Корзина</a>
          </div>
          <div class="mobile-menu-header__link">
            <a @click="this.routeFromHeader('world')">Наш мир</a>
            <span></span>
          </div>
          <div class="mobile-menu-header__link">
            <a @click="this.routeFromHeader('sales')">Акции</a>
            <span></span>
          </div>
          <div
            class="mobile-menu-header__contacts-panel contacts-panel-mobile-menu"
          >
            <div class="contacts-panel-mobile-menu__wrapper">
              <a>
                <div class="header__ic__wrapp">
                  <img src="../../assets/icons/dark-theme/telega.webp" />
                </div>
              </a>
              <a>
                <div class="header__ic__wrapp">
                  <img src="../../assets/icons/dark-theme/gmail.webp" />
                </div>
              </a>
              <a>
                <div class="header__ic__wrapp">
                  <img src="../../assets/icons/dark-theme/insta.webp" />
                </div>
              </a>
              <a>
                <div class="header__ic__wrapp">
                  <img src="../../assets/icons/dark-theme/youtube.webp" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </transition>
  </header>
</template>

<script>
import CustomSearchInput from "../CustomSearchInput.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    CustomSearchInput,
  },
  data() {
    return {
      isSearchInputShow: false,
      isBurgerActive: false,
    };
  },
  mounted() {
    this.headerDisplayController();
  },
  computed: {
    ...mapGetters(["IS_MOBILE", "IS_MOBILE_MENU_OPEN", "CART"]),
    cartProductCount() {
      let count = 0;
      this.CART.forEach((el) => {
        count = count + el.cartQty;
      });
      return count;
    },
  },
  methods: {
    ...mapActions([
      "SEARCH_PRODUCT",
      "SEARCH_FROM_OUTPUT",
      "CHECK_DEVICE",
      "OPEN_MOBILE_MENU",
      "CLOSE_MOBILE_MENU",
    ]),
    searchProducts(value) {
      this.SEARCH_FROM_OUTPUT(value)
        .then(() => {
          if (value !== "") {
            this.$router.push("/catalog");
          }
        })
        .then(this.closeInput());
    },
    closeInput() {
      this.isSearchInputShow = false;
    },
    showMobileMenu() {
      const body = document.querySelector("body");
      this.isBurgerActive = !this.isBurgerActive;
      if (this.isBurgerActive === true || this.IS_MOBILE_MENU_OPEN === false) {
        this.OPEN_MOBILE_MENU();
        body.classList.add("_scroll-wrapp-hide");
      } else {
        this.CLOSE_MOBILE_MENU();
        body.classList.remove("_scroll-wrapp-hide");
      }
    },
    openCartPopup() {
      this.$root.popupsController.showCartPopup();
    },
    openLogPopup() {
      this.$root.popupsController.showLogPopup();
    },
    headerDisplayController() {
      // Hide Header on on scroll down
      var didScroll;
      var lastScrollTop = 0;
      var delta = 2;
      var navbarHeight = document.querySelector("header").offsetHeight;
      window.onscroll = function () {
        didScroll = true;
      };

      setInterval(function () {
        if (didScroll) {
          hasScrolled();
          didScroll = false;
        }
      }, 250);

      function hasScrolled() {
        var st = window.scrollY;
        // Make sure they scroll more than delta
        if (Math.abs(lastScrollTop - st) <= delta) return;
        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight) {
          // Scroll Down
          document.querySelector("header").classList.remove("nav-down");
          document.querySelector("header").classList.add("nav-up");
        } else {
          // Scroll Up
          let temp = document.querySelector("body").clientHeight;
          if (st + window.innerHeight < temp) {
            document.querySelector("header").classList.remove("nav-up");
            document.querySelector("header").classList.add("nav-down");
          }
          if (window.pageYOffset < 10) {
            document.querySelector("header").classList.remove("nav-up");
            document.querySelector("header").classList.add("nav-down");
            document.querySelector("header").classList.add("_active-anim");
          }
        }
        lastScrollTop = st;
      }
    },
    showWrappScroll() {
      const body = document.querySelector("body");
      body.classList.remove("_scroll-wrapp-hide");
    },
    hideWrappScroll() {
      const body = document.querySelector("body");
      body.classList.add("_scroll-wrapp-hide");
    },
    routeFromHeader(route) {
      switch (route) {
        case "main":
          this.$router.push("/");
          break;
        case "catalog":
          this.$router.push("/catalog");
          break;
        case "account":
          this.$router.push("/account");
          break;
        case "world":
          this.$router.push("/about");
          break;
        case "sales":
          this.$router.push("/sale");
          break;
      }
      this.showMobileMenu();
    },
  },
};
</script>

<style lang="scss">
@import "../../assets/styles/components-styles/vue-header.scss";
</style>
