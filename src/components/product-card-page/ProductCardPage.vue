<template>
  <div class="pr-card-page">
    <div class="pr-card" v-if="this.currentProduct" :class="this.prCardClasses">
      <div class="pr-card__top-bar">
        <div class="pr-card__top-bar__pr top-bar-pr">
          <div class="top-bar-pr__swiper _anim-scroll _anim-no-hide">
            <SwiperSlider
              ref="swiperRef"
              :speed="1000"
              :slides-per-view="1"
              :space-between="30"
              :slots-count="this.currentProduct.images.length"
              effect="cube"
              :pagination="{ clickable: true }"
            >
              <template
                v-for="(image, index) of this.currentProduct.images"
                :key="index"
                v-slot:[index]
              >
                <div class="top-bar-pr__image">
                  <div
                    class="top-bar-pr__image__sale"
                    v-if="this.currentProduct.isOnSale"
                  >
                  </div>
                  <img
                    :src="
                      require('../../assets/products-images/small/' +
                        image +
                        '.webp')
                    "
                  />
                </div>
              </template>
            </SwiperSlider>
          </div>
          <div class="top-bar-pr__params params-top-bar _anim-scroll _anim-no-hide">
            <div class="params-top-bar__head">
              <div class="params-top-bar__head__name">
                <span> {{ this.currentProduct.name }} </span>
              </div>
              <div class="params-top-bar__head__price">
                <div class="params-top-bar__head__price__bg">
                  <div class="params-top-bar__head__price__price">
                    <div class="params-top-bar__head__price__price__wrapp">
                      {{this.currentProduct.price}}<span>{{this.CURRENCY}}</span>
                    </div>
                    <div
                      v-if="this.currentProduct.newPrice"
                      class="params-top-bar__head__price__price_new"
                    >{{this.currentProduct.newPrice}}<span>{{this.CURRENCY}}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="params-top-bar__center">
              <ProductLikesService class="params-top-bar__center__like" :current-product="this.currentProduct"></ProductLikesService>
            </div>
            <div class="params-top-bar__bottom">
              <CustomBtn
                class="params-top-bar__bottom__add-to-cart-btn"
                :purple="true"
                :title="'Добавить в корзину'"
                @click="this.addProductToCart()"
              >
              </CustomBtn>
              <CustomBtn
                class="params-top-bar__bottom__order-btn"
                :success="true"
                :title="'Купить'"
              >
              </CustomBtn>
            </div>
          </div>
        </div>
      </div>
      <div class="pr-card__nav _anim-scroll">
        <div class="pr-card__nav__container">
          <button
            @click="this.changeActiveNavPage(0)"
            :class="{ '_active-page': this.activeNavPage === 0 }"
          >
            Всё о товаре
          </button>
          <button
            @click="this.changeActiveNavPage(1)"
            :class="{ '_active-page': this.activeNavPage === 1 }"
          >
            Характеристики
          </button>
          <button
            @click="this.changeActiveNavPage(2)"
            :class="{ '_active-page': this.activeNavPage === 2 }"
          >
            Отзывы
          </button>
        </div>
      </div>
      <div
        class="pr-card__descriptions"
        v-if="this.currentProduct.descriptions"
      >
        <div
          v-for="(item, index) of this.currentProduct.descriptions"
          :key="index"
          class="pr-card__descriptions__section"
        >
          <div class="pr-card__descriptions__section__image _anim-scroll _anim-no-hide">
            <img
              :src="
                require('../../assets/products-images/small/' +
                  item[0] +
                  '.webp')
              "
            />
          </div>
          <div class="pr-card__descriptions__section__text _anim-scroll _anim-no-hide">
            <div class="pr-card__descriptions__section__text__title">
              {{ item[1] }}
            </div>
            <div class="pr-card__descriptions__section__text__text">
              {{ item[2] }}
            </div>
          </div>
        </div>
      </div>
      <div
        class="pr-card__characteristics _anim-scroll _anim-no-hide"
        v-if="this.currentProduct.characteristics"
      >
        <div class="pr-card__characteristics__container">
          <div class="pr-card__characteristics__header">
            <h1>Характеристики</h1>
          </div>
          <div class="pr-card__characteristics__body">
            <div class="pr-card__characteristics__body__line">
              <p
                v-for="(item, index) in this.characteristicsTitles"
                :key="index"
              >
                <span class="pr-card__characteristics__body__line__title"
                  >{{ this.characteristicsTitles[index] }} :</span
                >
                <span class="pr-card__characteristics__body__line__text">{{
                  this.characteristicsText[index]
                }}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <VueFeedbacks :current-product="this.currentProduct"></VueFeedbacks>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import CustomBtn from "../CustomBtn.vue";
import SwiperSlider from "../sliders/SwiperSlider.vue";
import VueFeedbacks from "../VueFeedbacks.vue";
import ProductLikesService from "../ProductLikesService.vue";

export default {
  components: {
    CustomBtn,
    SwiperSlider,
    VueFeedbacks,
    ProductLikesService
},
  data() {
    return {
      currentProduct: null,
      activeNavPage: 0,
    };
  },
  mounted() {
    this.currentProduct = this.PRODUCTS[this.$route.params.id];
  },
  methods: {
    ...mapActions(["ADD_PR_TO_CART", "PUSH_ALERT", "LIKE_LIST_HANDLER"]),
    ellipsisDescriptions() {
      if (this.currentProduct) {
        this.currentProduct.descriptions.forEach((el) => {
          let availableText = "";
          availableText = el[2].slice(0, 265);
          el[2] = availableText + "...";
        });
      }
    },
    addProductToCart() {
      this.ADD_PR_TO_CART(this.currentProduct);
      let message = "Товар добавлен в корзину : id ";
      let product = this.currentProduct.id;
      this.PUSH_ALERT({ message, product });
    },
    changeActiveNavPage(pageIndex) {
      this.activeNavPage = pageIndex;
      let headerHeight = 200;
      if (pageIndex === 0) {
        let moveTo = document.querySelector(".pr-card__descriptions");
        if (!moveTo) {
          moveTo = document.querySelector(".pr-card__nav");
        }
        let res =
          moveTo.getBoundingClientRect().top + window.scrollY - headerHeight;
        window.scrollTo({ top: res, behavior: "smooth" });
      }
      if (pageIndex === 1) {
        let moveTo = document.querySelector(".pr-card__characteristics");
        if (!moveTo) {
          moveTo = document.querySelector(".pr-card__nav");
        }
        let res =
          moveTo.getBoundingClientRect().top + window.scrollY - headerHeight;
        window.scrollTo({ top: res, behavior: "smooth" });
      }
      if (pageIndex === 2) {
        let moveTo = document.querySelector(".pr-card__feedbacks");
        if (!moveTo) {
          moveTo = document.querySelector(".pr-card__nav");
        }
        let res =
          moveTo.getBoundingClientRect().top + window.scrollY - headerHeight;
        window.scrollTo({ top: res, behavior: "smooth" });
      }
    },
  },
  computed: {
    ...mapGetters(["PRODUCTS", "CURRENCY", "ACTIVE_USER"]),
    prCardClasses() {
      return {
        "pr-card_with-sale": this.currentProduct.isOnSale,
      };
    },
    characteristicsTitles() {
      let res = [];
      this.currentProduct.characteristics.forEach((el) => {
        res.push(el[0]);
      });
      return res;
    },
    characteristicsText() {
      let res = [];
      this.currentProduct.characteristics.forEach((el) => {
        res.push(el[1]);
      });
      return res;
    },
  },
  watch: {
    PRODUCTS() {
      this.currentProduct = this.PRODUCTS[this.$route.params.id];
    },
    currentProduct() {
      if (this.currentProduct) {
        setTimeout(() => {
          this.$root.itemsShowAnimation();
        }, 500);
        if (this.currentProduct.descriptions) {
          this.ellipsisDescriptions();
        }
      }
    },
  },
};
</script>

<style lang="scss">
@import "../../assets/styles/components-styles/product-card-page.scss";
</style>
