<template>
  <div class="main-wrapper">
    <VueHeader></VueHeader>
    <transition name="cart-popup">
      <CartPopup v-if="this.isCartPopupOpen === true"></CartPopup>
    </transition>
    <LogSignPopup v-if="this.isLogPopupOpen === true"></LogSignPopup>
    <div class="main-wrapper__content">
      <router-view> </router-view>
    </div>
    <VueAnchor></VueAnchor>
    <VueFooter></VueFooter>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import VueHeader from "../header/VueHeader.vue";
import { useDynamicAdapt } from "../../dynamicAdapt.js";
import CartPopup from "../CartPopup.vue";
import LogSignPopup from "../LogSignPopup.vue";
import VueFooter from "../footer/VueFooter.vue";
import VueAnchor from "../VueAnchor.vue";

export default {
  components: {
    VueHeader,
    CartPopup,
    LogSignPopup,
    VueFooter,
    VueAnchor,
  },
  created() {
    this.CHECK_DEVICE();
  },
  mounted() {
    window.addEventListener("resize", this.CHECK_DEVICE);
    document.addEventListener("DOMContentLoaded", function () {
      useDynamicAdapt();
    });
    this.LOAD_PRODUCTS();
  },
  // updated() {
  //   this.$root.itemsShowAnimation();
  // },
  unmounted() {
    window.removeEventListener(
      "resize",
      this.$root.emptyFuncToRemoveListener()
    );
    document.removeEventListener(
      "DOMContentLoaded",
      this.$root.emptyFuncToRemoveListener()
    );
  },
  methods: {
    ...mapActions([
      "LOAD_PRODUCTS",
      "CHECK_DEVICE",
      "LOAD_BESTSELLERS_PRODUCTS",
    ]),
  },
  computed: {
    ...mapGetters(["CART_POPUP", "PRODUCTS"]),
    isCartPopupOpen() {
      if (this.$root.popupsController.data._isCartPopupOpen === true) {
        return true;
      } else return false;
    },
    isLogPopupOpen() {
      if (this.$root.popupsController.data._isLogPopupOpen === true) {
        return true;
      } else return false;
    },
  }
};
</script>

<style lang="scss">
@import "../../assets/styles/main-wrapper.scss";
</style>
