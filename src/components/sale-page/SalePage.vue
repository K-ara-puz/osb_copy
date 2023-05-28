<template>
  <div class="sale-page">
    <div class="sale-page__container" v-if="this.itemsCategories.length > 0">
      <div
        v-for="category in this.itemsCategories"
        :key="category"
        class="sale-page__category"
      >
        <div class="sale-page__category__title">
          <span class="sale-page__category__title__text">{{ category.categoryName }}</span>
        </div>
        <div class="sale-page__category__items-dashboard sale-page__dashboard">
          <SwiperSlider
            :products="category.products"
            ref="swiperRef"
            :speed="1000"
            :space-between="30"
            :slots-count="category.products.length"
            pagination
            class="sale-page__dashboard__swiper"
            :breakpoints="this.swiperBreakpoints"
          >
            <template
              v-for="(item, index) in category.products"
              :key="index"
              v-slot:[index]
            >
              <BestSellersItemCart
                :product-data="item"
                class="sale-page__dashboard__swiper__item"
              >
              </BestSellersItemCart>
            </template>
          </SwiperSlider>
        </div>
      </div>
      <CustomAddFeedbackComponent
        class="sale-page__add-fb"
        :gradient-position="'left'"
      ></CustomAddFeedbackComponent>
    </div>
    <div v-else class="sale-page_empty">
      <CustomNothingFoundedComponent></CustomNothingFoundedComponent>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import BestSellersItemCart from "../BestSellersItemCart.vue";
import SwiperSlider from "../sliders/SwiperSlider.vue";
import CustomNothingFoundedComponent from "../CustomNothingFoundedComponent.vue";
import CustomAddFeedbackComponent from "../CustomAddFeedbackComponent.vue";

export default {
  components: { BestSellersItemCart, SwiperSlider, CustomNothingFoundedComponent, CustomAddFeedbackComponent },
  el: "#sale-page",
  computed: {
    ...mapGetters(["PRODUCTS_ON_SALE"]),
    itemsCategories() {
      let res = [];
      let categories = [];
      this.PRODUCTS_ON_SALE.forEach((el) => {
        if (!categories.includes(el.category)) {
          categories.push(el.category);
        } else return;
      });
      categories.forEach((category) => {
        let obj = {
          categoryName: category,
          products: [],
        };
        this.PRODUCTS_ON_SALE.forEach((pr) => {
          if (pr.category === category) {
            obj.products.push(pr);
          }
        });
        res.push(obj);
      });
      return res;
    },
    swiperBreakpoints() {
      // when window width is >= 480px
      let res = {
        200: {
          slidesPerView: 2,
        },
        700: {
          slidesPerView: 3,
        },
        900: {
          slidesPerView: 4,
        },
      };
      return res;
    },
  },
};
</script>
<style lang="scss">
@import "../../assets/styles/components-styles/sale-page/sale-page.scss";
</style>
