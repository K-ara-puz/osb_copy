<template>
  <div class="custom-slider" :class="this.compClasses">
    <div class="custom-slider__header _anim-scroll _anim-no-hide">
      <div class="_anim-scroll _anim-no-hide">{{ this.title }}</div>
    </div>
    <div class="custom-slider__container">
      <button
        class="custom-slider__prev-btn"
        @click="this.$refs.swiperCustomRef.swiperRef.slidePrev()"
      ></button>
      <SwiperSlider
        v-if="this.products.length"
        ref="swiperCustomRef"
        :speed="1000"
        :loop="true"
        :slides-per-view="3"
        :slots-count="this.products.length"
        :breakpoints="this.swiperBreakpoints"
        navigation
        :pagination="{'clickable' : true}"
        :products="this.products"
        @slideChange="this.addSwiperSlideAnimation"
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
        @click="this.$refs.swiperCustomRef.swiperRef.slideNext()"
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
    isBackground: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
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
        },
      },
    };
  },
  computed: {
    ...mapGetters(["PRODUCTS_ON_SALE"]),
    compClasses() {
      return {
        "custom-slider _with-bg": this.isBackground === true,
      };
    },
  },
  methods: {
    addSwiperSlideAnimation(swiperInstance) {
      let centerSlideIndex = Number(swiperInstance.activeIndex);
      ++centerSlideIndex;
      let centerSlideItem = swiperInstance.slides[
        centerSlideIndex
      ].querySelector(".custom-slider__slider__slide-item");
      let centerSiblingElements = [];
      if (swiperInstance.isEnd) {
        return;
      } else {
        centerSiblingElements.push(
          swiperInstance.slides[centerSlideIndex].nextSibling.querySelector(
            ".custom-slider__slider__slide-item"
          )
        );
      }
      centerSiblingElements.push(
        swiperInstance.slides[centerSlideIndex].previousSibling.querySelector(
          ".custom-slider__slider__slide-item"
        )
      );
      centerSiblingElements.forEach((el) => {
        el.classList.add("custom-slider__slider__slide-item__animation");
      });
      centerSlideItem.classList.add(
        "custom-slider__slider__slide-item__center-item__animation"
      );
      let timeout = swiperInstance.params.speed;
      timeout = timeout + 500;
      setTimeout(() => {
        centerSlideItem.classList.remove(
          "custom-slider__slider__slide-item__center-item__animation"
        );
        centerSiblingElements.forEach((el) => {
          el.classList.remove("custom-slider__slider__slide-item__animation");
        });
      }, timeout);
    },
  },
};
</script>
