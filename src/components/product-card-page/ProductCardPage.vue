<template>
  <div class="pr-card-page">
    <div class="pr-card" v-if="this.currentProduct" :class="this.prCardClasses">
      <div class="pr-card__top-bar">
        <div class="pr-card__top-bar__pr top-bar-pr">
          <div class="top-bar-pr__swiper _anim-scroll _anim-no-hide">
            <SwiperSlider
              ref="swiperProductCard"
              :speed="1000"
              :slides-per-view="1"
              :space-between="30"
              :slots-count="this.currentProduct.images.length"
              effect="cube"
              :elements-for-custom-pagination="this.currentProduct.images"
              :is-photo-pagination="true"
              @activeIndexChange="this.resetZoom()"
            >
              <template
                v-for="(image, index) of this.currentProduct.images"
                :key="index"
                v-slot:[index]
              >
                <div
                  class="top-bar-pr__image__zoom"
                >
                  <div
                    class="top-bar-pr__image__sale"
                    v-if="this.currentProduct.isOnSale"
                  ></div>
                  <div class="top-bar-pr__image__container">
                    <img @click="this.openFullHDSlider()" class="pr-card__top-bar__db-click-anim" src="../../assets/icons/dark-theme/double_click_2.gif"/>
                    <button
                      v-if="!this.IS_MOBILE"
                      class="top-bar-pr__image__container__loop"
                      title="'Open loop'"
                      @click="this.controlImgZoomDisplay()"
                    >
                      <svg
                        fill="none"
                        stroke="#fff"
                        viewBox="0 0 100 100"
                      >
                        <circle
                          cx="42.995"
                          cy="43.013"
                          r="39.436"
                          style="stroke-width: 3"
                        />
                        <path
                          d="m98.206 98.224-27.33-27.33M19.334 43.013h47.323M42.995 19.352v47.323"
                          style="stroke-width: 3"
                        />
                      </svg>
                    </button>
                    <img
                      @click="this.openFullHDSlider()"
                      :src="
                        require('../../assets/products-images/small/' +
                          image +
                          '.webp')
                      "
                    />
                    <img
                      id="prZoomImage"
                      :src="
                        require('../../assets/products-images/small/' +
                          image +
                          '.webp')
                      "
                    />
                  </div>
                </div>
              </template>
            </SwiperSlider>
          </div>
          <div
            class="top-bar-pr__params params-top-bar _anim-scroll _anim-no-hide"
          >
            <div class="params-top-bar__head">
              <div class="params-top-bar__head__name">
                <span> {{ this.currentProduct.name }} </span>
              </div>
              <div class="params-top-bar__head__price">
                <div class="params-top-bar__head__price__bg">
                  <div class="params-top-bar__head__price__price">
                    <div class="params-top-bar__head__price__price__wrapp">
                      {{ this.currentProduct.price
                      }}<span>{{ this.CURRENCY }}</span>
                    </div>
                    <div
                      v-if="this.currentProduct.newPrice"
                      class="params-top-bar__head__price__price_new"
                    >
                      {{ this.currentProduct.newPrice
                      }}<span>{{ this.CURRENCY }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="params-top-bar__center">
              <ProductLikesService
                class="params-top-bar__center__like"
                :current-product="this.currentProduct"
              ></ProductLikesService>
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
          <div
            class="pr-card__descriptions__section__image _anim-scroll _anim-no-hide"
          >
            <img
              :src="
                require('../../assets/products-images/small/' +
                  item[0] +
                  '.webp')
              "
            />
          </div>
          <div
            class="pr-card__descriptions__section__text _anim-scroll _anim-no-hide"
          >
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
      <VueFeedbacks
        class="pr-card__feedbacks"
        :current-product="this.currentProduct"
      ></VueFeedbacks>
    </div>
    <WarningPopup
      v-if="this.$root.popupsController.data._isWarningPopupOpen === true"
      :only-slider="true"
    >
      <template #insert-component>
        <div class="pr-card__full-slider">
          <SwiperSlider
            ref="swiperFullSlider"
            :initialSlide="this.$refs.swiperProductCard.swiperRef.activeIndex"
            :speed="1000"
            :slides-per-view="1"
            :space-between="10"
            :zoom="true"
            :slots-count="this.currentProduct.images.length"
            :elements-for-custom-pagination="this.currentProduct.images"
            :is-photo-pagination="true"
          >
            <template
              v-for="(image, index) of this.currentProduct.images"
              :key="index"
              v-slot:[index]
            >
              <div class="pr-card__full-slider__image ">
                  <img class="pr-card__full-slider__image__db-click-anim" src="../../assets/icons/dark-theme/double_click_2.gif"/>
                <div class="swiper-zoom-container">
                  <img
                  class="pr-card__full-slider__image__img"
                  :src="
                    require('../../assets/products-images/small/' +
                      image +
                      '.webp')
                  "
                />

                </div>
              </div>
            </template>
          </SwiperSlider>
        </div>
      </template>
    </WarningPopup>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import CustomBtn from "../CustomBtn.vue";
import SwiperSlider from "../sliders/SwiperSlider.vue";
import VueFeedbacks from "../VueFeedbacks.vue";
import ProductLikesService from "../ProductLikesService.vue";
import WarningPopup from "../popups/WarningPopup.vue";

export default {
  components: {
    CustomBtn,
    SwiperSlider,
    VueFeedbacks,
    ProductLikesService,
    WarningPopup,
  },
  data() {
    return {
      currentProduct: null,
      activeNavPage: 0,
      isPagination: true,
      slidesZoomControlPoints: [],
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
    openFullHDSlider() {
      this.$root.popupsController.showWarningPopup();
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
    addZoomData() {
      for (let i = 0; i < this.currentProduct.images.length; i++) {
        let slide = {
          isZoomActive: false,
          slideData: {}
        }
      let activeSlideDiv =
        this.$refs.swiperProductCard.swiperRef.slides[i];
      let activeSlideData = {};
      activeSlideData.zoom = activeSlideDiv.querySelector(".top-bar-pr__image__zoom");
      activeSlideData.imgZoom = activeSlideDiv.querySelector("#prZoomImage");
      activeSlideData.zoomBtn = activeSlideDiv.querySelector('.top-bar-pr__image__container__loop');

      slide.slideData = activeSlideData;
        this.slidesZoomControlPoints.push(slide);
      }
    },
    controlImgZoomDisplay() {
      let activeSlideIndex = this.$refs.swiperProductCard.swiperRef.activeIndex;
      this.slidesZoomControlPoints[activeSlideIndex].isImgZoomActive = !this.slidesZoomControlPoints[activeSlideIndex].isImgZoomActive;
      console.log(this.slidesZoomControlPoints[activeSlideIndex].isImgZoomActive)
      if (this.slidesZoomControlPoints[activeSlideIndex].isImgZoomActive === true) {
        this.startProductImageZoom(activeSlideIndex);
      } else {
        this.stopProductImageZoom(activeSlideIndex);
      }
    },
    startProductImageZoom(activeSlideIndex) {
      let vm = this;
      this.slidesZoomControlPoints[activeSlideIndex].slideData.zoom.addEventListener("mousemove", vm.showImgZoom)
      this.slidesZoomControlPoints[activeSlideIndex].slideData.zoom.addEventListener("mouseout", vm.hideImgZoom);
      this.slidesZoomControlPoints[activeSlideIndex].slideData.zoomBtn.classList.add('_active');
      let swiperShadow = document.querySelector('.pr-card-page .swiper-cube-shadow');
      swiperShadow.style.opacity = 0;
    },
    showImgZoom(e) {
      let activeSlideIndex = this.$refs.swiperProductCard.swiperRef.activeIndex;
        this.slidesZoomControlPoints[activeSlideIndex].slideData.imgZoom.style.opacity = 1;
        let positionPx = e.x - this.slidesZoomControlPoints[activeSlideIndex].slideData.zoom.getBoundingClientRect().left;
        let positionX = (positionPx / this.slidesZoomControlPoints[activeSlideIndex].slideData.zoom.offsetWidth) * 100;
        let positionPy = e.y - this.slidesZoomControlPoints[activeSlideIndex].slideData.zoom.getBoundingClientRect().top;
        let positionY = (positionPy / this.slidesZoomControlPoints[activeSlideIndex].slideData.zoom.offsetHeight) * 100;
        this.slidesZoomControlPoints[activeSlideIndex].slideData.imgZoom.style.setProperty("--zoom-x", positionX + "%");
        this.slidesZoomControlPoints[activeSlideIndex].slideData.imgZoom.style.setProperty("--zoom-y", positionY + "%");

        let transformX = (positionX - 50) / 3.5;
        let transformY = (positionY - 50) / 3.5;
        this.slidesZoomControlPoints[activeSlideIndex].slideData.imgZoom.style.transform = `scale(1.5)
          translateX(${transformX}%) translateY(${transformY}%)`;
        this.slidesZoomControlPoints[activeSlideIndex].slideData.zoomBtn.style.zIndex = 1;
        let pagination = document.querySelector(".pr-card-page .custom-pagination");
        pagination.style.opacity = 0;
    },
    hideImgZoom() {
      let activeSlideIndex = this.$refs.swiperProductCard.swiperRef.activeIndex;
      this.slidesZoomControlPoints[activeSlideIndex].slideData.imgZoom.style.opacity = 0;
      this.slidesZoomControlPoints[activeSlideIndex].slideData.zoomBtn.style.zIndex = 10;
    },
    stopProductImageZoom(activeSlideIndex) {
      let vm = this;
      this.slidesZoomControlPoints[activeSlideIndex].slideData.zoom.removeEventListener("mousemove", vm.showImgZoom);
      this.slidesZoomControlPoints[activeSlideIndex].slideData.zoom.removeEventListener("mouseout", vm.hideImgZoom);

      this.slidesZoomControlPoints[activeSlideIndex].slideData.imgZoom.style.opacity = 0;
      let pagination = document.querySelector(".pr-card-page .custom-pagination");
      pagination.style.opacity = 1;
      this.slidesZoomControlPoints[activeSlideIndex].isImgZoomActive = false;
      this.slidesZoomControlPoints[activeSlideIndex].slideData.zoomBtn.classList.remove('_active');
      let swiperShadow = document.querySelector('.pr-card-page').querySelector('.swiper-cube .swiper-cube-shadow');
      swiperShadow.style.opacity = 1;
    },
    resetZoom() {
      if (this.IS_MOBILE) return
      for (let i = 0; i < this.currentProduct.images.length; i++) {
        this.stopProductImageZoom(i)
      }
    }
  },
  computed: {
    ...mapGetters(["PRODUCTS", "CURRENCY", "ACTIVE_USER", "IS_MOBILE"]),
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
          this.addZoomData();
        }, 500);
        if (this.currentProduct.descriptions) {
          this.ellipsisDescriptions();
        }
      }
    },
  },
};
</script>
