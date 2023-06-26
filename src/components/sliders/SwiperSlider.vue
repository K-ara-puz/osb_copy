<template>
  <Swiper :modules="modules" @swiper="this.getRef">
    <SwiperSlide
      v-for="(slot, index) in this.slotsCount"
      :key="index"
      class="swiper-slider__slot"
    >
      <slot :name="index"></slot>
    </SwiperSlide>
    <CustomPagination
      @moved-by-pag="this.moveToId"
      v-if="this.swiperRef && this.isPhotoPagination === true"
      :is-photo-pagination="this.isPhotoPagination"
      :active-slide-position="this.swiperRef.activeIndex"
      :elements="this.elementsForCustomPagination"
    ></CustomPagination>
  </Swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, A11y, EffectCube, EffectCards, Zoom, Autoplay } from "swiper";
import CustomPagination from "./CustomPagination.vue";

export default {
  setup() {
    // all setup is for swiper
    return {
      modules: [Navigation, Pagination, A11y, EffectCube, EffectCards, Zoom, Autoplay],
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
        return false;
      },
    },
    isLoopZoom: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
  components: {
    Swiper,
    SwiperSlide,
    CustomPagination,
  },
  methods: {
    getRef(swiperInstance) {
      this.swiperRef = swiperInstance;
    },
    moveToId(index) {
      this.swiperRef.slideTo(index);
    },
  },
};
</script>
