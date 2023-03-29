<template>
  <header class="header _anim-scroll _anim-no-hide">
    <div class="header__wrapper">
      <div class="header__column">
        <button class="header__search-icon" @click="isSearchInputShow = true">
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
          v-show="this.isSearchInputShow"
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
      <div v-if="!this.IS_MOBILE" class="header__column header-column-last">
        <div class="header-column-last__wrapper">
          <button @click="this.openCartPopup()">
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
          <button @click="this.openLogPopup()">
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
            <router-link to="/">
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
                  <svg
                    class="header__ic-social"
                    xmlns="http://www.w3.org/2000/svg"
                    xml:space="preserve"
                    id="Layer_1"
                    style="enable-background: new 0 0 30.2 30.1"
                    version="1.1"
                    viewBox="0 0 30.2 30.1"
                  >
                    <path
                      d="M2.1 14.6C8.9 12 28.5 4 28.5 4l-3.9 22.6c-.2 1.1-1.5 1.5-2.3.8l-6.1-5.1-4.3 4 .7-6.7 13-12.3-16 10 1 5.7-3.3-5.3-5-1.6c-.8-.3-.9-1.3-.2-1.5z"
                      style="
                        stroke-linecap: round;
                        stroke-linejoin: round;
                        stroke-miterlimit: 10;
                      "
                    />
                  </svg>
                </div>
              </a>
              <a>
                <div class="header__ic__wrapp">
                  <svg
                    class="header__ic-social"
                    xmlns="http://www.w3.org/2000/svg"
                    xml:space="preserve"
                    style="enable-background: new 0 0 24 24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M21.5 21h-19A2.502 2.502 0 0 1 0 18.5v-13C0 4.122 1.121 3 2.5 3h19C22.879 3 24 4.122 24 5.5v13c0 1.379-1.121 2.5-2.5 2.5zM2.5 4C1.673 4 1 4.673 1 5.5v13c0 .827.673 1.5 1.5 1.5h19c.827 0 1.5-.673 1.5-1.5v-13c0-.827-.673-1.5-1.5-1.5h-19z"
                    />
                    <path
                      d="M12 11a.503.503 0 0 1-.297-.098l-9.5-7a.5.5 0 0 1 .594-.805L12 9.879l9.203-6.781a.5.5 0 0 1 .594.805l-9.5 7A.509.509 0 0 1 12 11z"
                    />
                    <path
                      d="M20.5 21a.5.5 0 0 1-.5-.5V8.965l-7.712 5.444a.499.499 0 0 1-.576 0L4 8.965V20.5a.5.5 0 1 1-1 0V8a.5.5 0 0 1 .789-.409L12 13.388l8.212-5.797A.5.5 0 0 1 21 8v12.5a.5.5 0 0 1-.5.5z"
                    />
                    <path
                      d="M20.5 20.5c-.1 0-.201-.03-.288-.091L12 14.612l-8.212 5.797a.5.5 0 0 1-.576-.817l8.5-6a.499.499 0 0 1 .576 0l8.5 6a.5.5 0 0 1-.288.908z"
                    />
                  </svg>
                </div>
              </a>
              <a>
                <div class="header__ic__wrapp">
                  <svg
                    class="header__ic-social"
                    xmlns="http://www.w3.org/2000/svg"
                    xml:space="preserve"
                    viewBox="0 0 192 188"
                  >
                    <path
                      d="M161.601 20h-19.203C136.664 20 132 24.664 132 30.398v19.204C132 55.336 136.664 60 142.398 60h19.204C167.336 60 172 55.336 172 49.602V30.399C172 24.663 167.336 20 161.601 20zM164 49.602A2.4 2.4 0 0 1 161.601 52h-19.203A2.4 2.4 0 0 1 140 49.602V30.399A2.4 2.4 0 0 1 142.398 28h19.204A2.4 2.4 0 0 1 164 30.398v19.204z"
                    />
                    <path
                      d="M151.2 0H40.8C18.306 0 0 18.358 0 40.924v106.154C0 169.643 18.305 188 40.8 188h110.4c22.495 0 40.8-18.357 40.8-40.922V40.924C192 18.358 173.695 0 151.2 0zM184 147.078C184 165.231 169.285 180 151.2 180H40.8C22.716 180 8 165.23 8 147.078V76h48.883C46.482 86.173 40 100.336 40 116c0 30.879 25.121 56 56 56s56-25.121 56-56c0-15.664-6.482-29.827-16.883-40H184v71.078zM144 116c0 26.467-21.531 48-48 48s-48-21.533-48-48 21.531-48 48-48 48 21.533 48 48zm-19.305-48c-8.405-5.044-18.199-8-28.695-8s-20.29 2.956-28.696 8H8V40.924C8 22.77 22.715 8 40.8 8h110.4C169.284 8 184 22.77 184 40.924V68h-59.305z"
                    />
                    <path
                      d="M60 116c0 19.85 16.148 36 36 36s36-16.15 36-36-16.148-36-36-36-36 16.15-36 36zm64 0c0 15.44-12.563 28-28 28-15.438 0-28-12.56-28-28s12.562-28 28-28 28 12.56 28 28z"
                    />
                  </svg>
                </div>
              </a>
              <a>
                <div class="header__ic__wrapp">
                  <svg
                    class="header__ic-social"
                    xmlns="http://www.w3.org/2000/svg"
                    xml:space="preserve"
                    viewBox="0 0 196 144"
                  >
                    <path
                      d="M157.024 0H38.976C17.484 0 0 17.54 0 39.098v65.805C0 126.46 17.484 144 38.976 144h118.048C178.516 144 196 126.46 196 104.903V39.097C196 17.539 178.516 0 157.024 0zM188 104.903C188 122.049 174.103 136 157.024 136H38.976C21.896 136 8 122.049 8 104.903V39.097C8 21.95 21.896 8 38.976 8h118.048C174.103 8 188 21.951 188 39.098v65.805z"
                    />
                    <path
                      d="m133.441 70.553-55.42-32.461A4 4 0 0 0 72 41.543v64.914a4.002 4.002 0 0 0 4 4c.7 0 1.396-.183 2.022-.548l55.42-32.454a4 4 0 0 0 0-6.902zM80 99.478V48.522l43.504 25.482L80 99.478z"
                    />
                  </svg>
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
