<template>
  <div class="app">
    <PreloaderAnimation></PreloaderAnimation>
    <CustomAlert></CustomAlert>
    <!-- <button id="change-btn" @click="changeTheme()">Change Theme</button> -->
    <MainWrapper class="app__main-wrapp"> </MainWrapper>
  </div>
</template>

<script>
import MainWrapper from "./components/main-wrapper/MainWrapper.vue";
import PreloaderAnimation from "./PreloaderAnimation.vue";
import { itemsScrollAnim } from "./itemsScrollAnimation.js";
import { mapActions } from "vuex";
import CustomAlert from "./components/CustomAlert.vue";

export default {
  name: "App",
  components: {
    MainWrapper,
    PreloaderAnimation,
    CustomAlert
},
  data() {
    return {
      isLogPopupOpen: false,
      isAnyPopupOpen: false,
    };
  },
  mounted() {
    this.LOAD_PRODUCTS()
    .then(() => {
      this.LOAD_PRODUCTS_ON_SALE();
      let vm = this;
      this.$nextTick( () => {
        document.querySelector(".pre-anim").classList.add("_hide");
        vm.itemsShowAnimation();
      });
      window.addEventListener("scroll", () => {
        this.itemsShowAnimation();
      });
    });
  },
  unmounted() {
    window.removeEventListener("load", this.emptyFuncToRemoveListener());
    window.removeEventListener("scroll", this.emptyFuncToRemoveListener());
  },
  methods: {
    ...mapActions(["LOAD_PRODUCTS", "LOAD_PRODUCTS_ON_SALE", "CLOSE_CART_POPUP"]),
    changeTheme() {
      const themeCss = document.querySelector("#themeRef");
      if (themeCss.getAttribute("href") === "./vars-dark.css") {
        themeCss.setAttribute("href", "./vars-light.css");
      } else {
        themeCss.setAttribute("href", "./vars-dark.css");
      }
    },
    itemsShowAnimation() {
      itemsScrollAnim();
    },
    closeAnyPopup(e, parent) {
      const popup = document.querySelector(parent);
      if (popup) {
        if (!popup.contains(e.target) && !popup.contains(e.target.parentElement)) {
          if (parent.includes("log")) this.isLogPopupOpen = false;
          if (parent.includes("cart")) this.CLOSE_CART_POPUP();
        }
      }
      this.isAnyPopupOpen = false;
    },
    emptyFuncToRemoveListener() {
      
    }
  },
  watch: {
    "$route"(newV, oldV) {
      let vm = this;
        if (oldV.fullPath === newV.fullPath) {
          return
        } else {
          this.$nextTick( () => {
              vm.itemsShowAnimation();
          });
        }
    },
    isAnyPopupOpen() {
      if (this.isAnyPopupOpen === true) {
        document.querySelector("body").classList.add("_scroll-wrapp-hide");
      } else if (this.isAnyPopupOpen === false) {
        document.querySelector("body").classList.remove("_scroll-wrapp-hide");
      }
    }
  },
};
</script>
<style lang="scss">
.app {
  font-family: "Raleway", sans-serif;
}
#change-btn {
  position: absolute;
  z-index: 100;
  top: 0;
  background-color: var(--test-var);
}
</style>
