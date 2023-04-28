<template>
  <div class="app">
    <PreloaderAnimation></PreloaderAnimation>
    <CustomAlert></CustomAlert>
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
    CustomAlert,
  },
  mounted() {
    this.LOAD_PRODUCTS().then(() => {
      this.LOAD_PRODUCTS_ON_SALE();
      let vm = this;
      this.$nextTick(() => {
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
    ...mapActions([
      "LOAD_PRODUCTS",
      "LOAD_PRODUCTS_ON_SALE",
    ]),
    itemsShowAnimation() {
      itemsScrollAnim();
    },
    emptyFuncToRemoveListener() {},
  },
  watch: {
    $route(newV, oldV) {
      let vm = this;
      if (oldV.fullPath === newV.fullPath) {
        return;
      } else {
        this.$nextTick(() => {
          vm.itemsShowAnimation();
        });
      }
    },
  },
};
</script>
<style lang="scss">
* {
  -webkit-tap-highlight-color: transparent;
}
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
