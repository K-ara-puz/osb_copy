<template>
  <Swiper :modules="modules" @swiper="this.getRef">
    <SwiperSlide class="swiper-slider__slot">
      <slot name="0"></slot>
    </SwiperSlide>
    <SwiperSlide v-if="this.slotsCount > 1" class="swiper-slider__slot">
      <slot name="1"></slot>
    </SwiperSlide>
    <SwiperSlide v-if="this.slotsCount > 2" class="swiper-slider__slot">
      <slot name="2"></slot>
    </SwiperSlide>
    <SwiperSlide v-if="this.slotsCount > 3" class="swiper-slider__slot">
      <slot name="3"></slot>
    </SwiperSlide>
    <SwiperSlide v-if="this.slotsCount > 4" class="swiper-slider__slot">
      <slot name="4"></slot>
    </SwiperSlide>
    <SwiperSlide v-if="this.slotsCount > 5" class="swiper-slider__slot">
      <slot name="5"></slot>
    </SwiperSlide>
    <SwiperSlide v-if="this.slotsCount > 6" class="swiper-slider__slot">
      <slot name="6"></slot>
    </SwiperSlide>
    <SwiperSlide v-if="this.slotsCount > 7" class="swiper-slider__slot">
      <slot name="7"></slot>
    </SwiperSlide>
    <SwiperSlide v-if="this.slotsCount > 8" class="swiper-slider__slot">
      <slot name="8"></slot>
    </SwiperSlide>
    <SwiperSlide v-if="this.slotsCount > 9" class="swiper-slider__slot">
      <slot name="9"></slot>
    </SwiperSlide>
    <SwiperSlide v-if="this.slotsCount > 10" class="swiper-slider__slot">
      <slot name="10"></slot>
    </SwiperSlide>
    <CustomPagination @moved-by-pag="this.moveToId" v-if="this.swiperRef && this.isPhotoPagination === true" :is-photo-pagination="this.isPhotoPagination" :active-slide-position="this.swiperRef.activeIndex" :elements="this.elementsForCustomPagination"></CustomPagination>
  </Swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, A11y, EffectCube, Zoom } from "swiper";
import CustomPagination from "./CustomPagination.vue";

export default {
  setup() {
    // all setup is for swiper
    return {
      modules: [Navigation, Pagination, A11y, EffectCube, Zoom],
    };
  },
  data() {
    return {
      swiperRef: null,
    };
  },
  props: {
    products: {
      type: Array,
      default() {
        return [];
      },
    },
    slotsCount: {
      type: Number,
      default: 6,
    },
    elementsForCustomPagination: {
      type: Array,
      default() {
        return [];
      },
    },
    isPhotoPagination: {
      type: Boolean,
      default() {
        return false
      }
    }
  },
  components: {
    Swiper,
    SwiperSlide,
    CustomPagination
},
  methods: {
    getRef(swiperInstance) {
      this.swiperRef = swiperInstance;
    },
    moveToId(index) {
      this.swiperRef.slideTo(index)
    }
  },
};
</script>

<style lang="scss">
@import "../../assets/styles/components-styles/swiper-slider.scss";
</style>
