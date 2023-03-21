<template>
  <div class="main-wrapper">
    <VueHeader></VueHeader>
    <transition name="cart-popup">
      <CartPopup v-if="this.CART_POPUP"></CartPopup>
    </transition>
    <LogSignPopup v-if="this.$root.isLogPopupOpen"></LogSignPopup>
    <div class="main-wrpper__content">
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
import CartPopup from '../CartPopup.vue';
import LogSignPopup from "../LogSignPopup.vue";
import VueFooter from "../footer/VueFooter.vue";
import VueAnchor from "../VueAnchor.vue";

export default {
  components: {
    VueHeader,
    CartPopup,
    LogSignPopup,
    VueFooter,
    VueAnchor
},
  data() {
    return {};
  },
  created() {
    this.CHECK_DEVICE();
  },
  mounted() {
    window.addEventListener("resize", this.CHECK_DEVICE);
    document.addEventListener("DOMContentLoaded", function() {
      useDynamicAdapt();
    });
    this.LOAD_PRODUCTS();
  },
  unmounted() {
    window.removeEventListener("resize", this.$root.emptyFuncToRemoveListener());
    document.removeEventListener("DOMContentLoaded", this.$root.emptyFuncToRemoveListener());
  },
  methods: {
    ...mapActions(["LOAD_PRODUCTS", "CHECK_DEVICE", "LOAD_BESTSELLERS_PRODUCTS"]),
  },
  computed: {
    ...mapGetters(["CART_POPUP", "PRODUCTS"])
  }
};
</script>

<style lang="scss">
@import '../../assets/styles/main-wrapper.scss'; 
</style>
