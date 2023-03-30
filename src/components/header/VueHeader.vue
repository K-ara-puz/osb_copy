<template>
  <header class="header _anim-scroll _anim-no-hide">
    <div class="header__wrapper">
      <div class="header__column">
        <button v-if="!this.IS_MOBILE" class="header__search-icon" @click="isSearchInputShow = true">
          <div class="header__ic__wrapp">
            <svg
              class="header__ic"
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="52.413"
              viewBox="0 0 20.833 21.839"
            >
              <path
                fill-rule="evenodd"
                d="M13.427 15.427a8.5 8.5 0 1 1 1.083-.917l5.998 5.998a.699.699 0 0 1-.008.992.7.7 0 0 1-.992.008zM8.5 16a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Z"
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
      <div  class="header__column header-column-last">
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
                class="header__ic"
                xmlns="http://www.w3.org/2000/svg"
                width="52"
                height="46.386"
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
                class="header__ic user-icon"
                xmlns="http://www.w3.org/2000/svg"
                xml:space="preserve"
                width="50"
                height="44.416"
                viewBox="0 0 13.229 11.752"
              >
                <g style="fill-opacity: 1">
                  <path
                    d="M259.5 223c22.25 0 44.001-6.539 62.502-18.791 18.5-12.252 32.92-29.666 41.434-50.04a110.577 110.577 0 0 0 6.402-64.421c-4.341-21.63-15.055-41.497-30.789-57.09-15.733-15.594-35.779-26.213-57.601-30.516a113.44 113.44 0 0 0-65 6.345c-20.557 8.44-38.127 22.73-50.488 41.067C153.598 67.89 147 89.447 147 111.5c.046 29.558 11.913 57.892 33.001 78.792 21.088 20.901 49.676 32.663 79.499 32.708zm0-200.128a89.997 89.997 0 0 1 49.681 14.936c14.705 9.739 26.167 23.58 32.935 39.776a87.903 87.903 0 0 1 5.089 51.207c-3.451 17.192-11.967 32.984-24.473 45.379-12.506 12.394-28.44 20.835-45.786 24.255a90.168 90.168 0 0 1-51.667-5.043c-16.34-6.708-30.306-18.068-40.132-32.643a88.068 88.068 0 0 1-15.07-49.239c.015-23.501 9.441-46.035 26.208-62.653 16.767-16.618 39.503-25.96 63.215-25.975ZM259.5 229c-66.719-.076-130.903 25.515-179.22 71.456C31.962 346.397 3.225 409.159.037 475.704a22.997 22.997 0 0 0 6.4 17.272A23.072 23.072 0 0 0 23.102 500h472.798a23.091 23.091 0 0 0 16.664-7.139 23.014 23.014 0 0 0 6.4-17.272c-3.217-66.525-31.966-129.257-80.281-175.175C390.368 254.497 326.2 228.923 259.5 229Zm22.717 24.124-18.623 18.596a5.775 5.775 0 0 1-8.188 0l-18.623-18.596c7.495-.691 15.048-1.094 22.717-1.094 7.669 0 15.222.403 22.717 1.094zM23.101 476.855a235.857 235.857 0 0 1 55.593-141.081 236.455 236.455 0 0 1 130.067-78.217l30.443 30.456a28.853 28.853 0 0 0 40.822 0l30.444-30.456a236.462 236.462 0 0 1 129.961 78.322 235.863 235.863 0 0 1 55.468 141.091z"
                    transform="matrix(.0235 0 0 .0235 .671 .006)"
                  />
                </g>
              </svg>
            </div>
          </button>
        </div>
      </div>
      <div
        v-if="this.IS_MOBILE"
        @click="this.showMobileMenu"
        class="header__column menu-burger"
      >
        <button>
          <div class="header__ic__wrapp">
            <div
              class="header__burger-div"
              :class="{ 'header__burger-div_opened': this.isMobileMenuOpen }"
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
        v-if="this.isMobileMenuOpen"
      >
        <div class="mobile-menu-header__container mobile-menu__body">
          <CustomSearchInput
            @search-item="this.searchProducts($event), this.showMobileMenu()"
            class="mobile-menu-header__search"
            :clear-after-search="true"
          >
          </CustomSearchInput>
          <div class="mobile-menu-header__link">
            <router-link to="/">
              <a>Главная</a>
            </router-link>
          </div>
          <div class="mobile-menu-header__link">
            <router-link to="/catalog">
              <a>Каталог</a>
            </router-link>
          </div>
          <div class="mobile-menu-header__link">
            <router-link to="/account">
              <a>Личный кабинет</a>
            </router-link>
          </div>
          <div @click="this.OPEN_CART_POPUP()" class="mobile-menu-header__link">
            <router-link to="/">
              <a>Корзина</a>
            </router-link>
          </div>
          <div class="mobile-menu-header__link">
            <router-link to="/about">
              <a>Наш мир</a>
            </router-link>
            <span></span>
          </div>
          <div class="mobile-menu-header__link">
            <router-link to="/sale">
              <a>Акции</a>
            </router-link>
            <span></span>
          </div>
          <div
            class="mobile-menu-header__contacts-panel contacts-panel-mobile-menu"
          >
            <div class="contacts-panel-mobile-menu__wrapper">
              <a>
                <div class="header__ic__wrapp">
                  <img src="../../assets/icons/dark-theme/telega.webp"/>
                </div>
              </a>
              <a>
                <div class="header__ic__wrapp">
                  <img src="../../assets/icons/dark-theme/gmail.webp"/>
                </div>
              </a>
              <a>
                <div class="header__ic__wrapp">
                  <img src="../../assets/icons/dark-theme/insta.webp"/>
                </div>
              </a>
              <a>
                <div class="header__ic__wrapp">
                  <img src="../../assets/icons/dark-theme/youtube.webp"/>
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
      isMobileMenuOpen: false,
    };
  },
  mounted() {
    this.headerDisplayController();
  },
  computed: {
    ...mapGetters(["IS_MOBILE", "CART"]),
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
      "OPEN_CART_POPUP",
    ]),
    searchProducts(value) {
      this.SEARCH_FROM_OUTPUT(value)
        .then(() => {
          if (value != "") {
            this.$router.push("/catalog");
          }
        })
        .then(this.closeInput());
    },
    closeInput() {
      this.isSearchInputShow = false;
    },
    showMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
      const body = document.querySelector("body");
      body.classList.toggle("_scroll-wrapp-hide");
    },
    openCartPopup() {
      this.OPEN_CART_POPUP();
      this.$root.isAnyPopupOpen = true;
    },
    openLogPopup() {
      this.$root.isLogPopupOpen = true;
      this.$root.isAnyPopupOpen = true;
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
  },
  watch: {
    $route() {
      this.isMobileMenuOpen = false;
      const body = document.querySelector("body");
      body.classList.remove("_scroll-wrapp-hide");
    },
  },
};
</script>

<style lang="scss">
@import "../../assets/styles/components-styles/vue-header.scss";
</style>
