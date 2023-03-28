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
              <button class="params-top-bar__center__like">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 51.997 51.997"
                >
                  <path
                    d="M51.911 16.242c-.759-8.354-6.672-14.415-14.072-14.415-4.93 0-9.444 2.653-11.984 6.905-2.517-4.307-6.846-6.906-11.697-6.906C6.759 1.826.845 7.887.087 16.241c-.06.369-.306 2.311.442 5.478 1.078 4.568 3.568 8.723 7.199 12.013l18.115 16.439 18.426-16.438c3.631-3.291 6.121-7.445 7.199-12.014.748-3.166.502-5.108.443-5.477zm-2.39 5.019c-.984 4.172-3.265 7.973-6.59 10.985L25.855 47.481 9.072 32.25c-3.331-3.018-5.611-6.818-6.596-10.99-.708-2.997-.417-4.69-.416-4.701l.015-.101c.65-7.319 5.731-12.632 12.083-12.632 4.687 0 8.813 2.88 10.771 7.515l.921 2.183.921-2.183c1.927-4.564 6.271-7.514 11.069-7.514 6.351 0 11.433 5.313 12.096 12.727.002.016.293 1.71-.415 4.707z"
                  />
                </svg>
              </button>
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

export default {
  components: {
    CustomBtn,
    SwiperSlider,
    VueFeedbacks
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
    ...mapActions(["ADD_PR_TO_CART", "PUSH_ALERT"]),
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
    ...mapGetters(["PRODUCTS", "CURRENCY"]),
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
