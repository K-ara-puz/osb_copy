<template>
  <div class="custom-slider">
    <div class="custom-slider__header _anim-scroll _anim-no-hide">
      <div class="_anim-scroll _anim-no-hide">{{ this.title }}</div>
    </div>
    <div class="custom-slider__container">
      <button
      class="custom-slider__prev-btn"
      @click="this.swiperData.slidePrev()"
    ></button>
    <SwiperSlider
      v-if="this.products.length"
      ref="swiperRef"
      :speed="1000"
      :loop="true"
      :slides-per-view="3"
      :slots-count="this.products.length"
      :breakpoints="this.swiperBreakpoints"
      navigation
      :products="this.products"
      @swiper="this.getRef"
      class="custom-slider__slider"
    >
      <template
        v-for="(item, index) of this.products"
        :key="index"
        v-slot:[index]
      >
        <BestSellersItemCart
          :product-data="item"
          class="custom-slider__slider__slide-item _anim-scroll _anim-no-hide"
        >
        </BestSellersItemCart>
      </template>
    </SwiperSlider>
    <button
        class="custom-slider__next-btn"
        @click="this.swiperData.slideNext()"
    ></button>
    </div>
    
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import SwiperSlider from "./SwiperSlider.vue";
import BestSellersItemCart from "../BestSellersItemCart.vue";

export default {
    components: {
        SwiperSlider,
        BestSellersItemCart,
    },
  props: {
    title: {
      type: String,
      default: "Бестселлеры",
    },
    products: {
      type: Array,
    },
  },
  data() {
    return {
      swiperData: null,
      swiperBreakpoints: {
        // when window width is >= 480px
        200: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        550: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        700: {
          spaceBetween: 40,
        }
      },
    };
  },
  computed: {
    ...mapGetters(["PRODUCTS_ON_SALE"]),
  },
  methods: {
    getRef(swiperInstance) {
      this.swiperData = swiperInstance;
    }
  }
};
</script>
<style lang="scss">
@import '../../assets/styles/components-styles/custom-slider.scss';
</style>
