<template>
  <transition name="cart-popup">
    <div
      class="cart-popup"
      @click.capture="this.closeFromOutside($event)"
    >
      <div class="cart-popup__wrapper">
        <div class="cart-popup__container">
          <div class="cart-popup__top-bar">
            <div class="cart-popup__top-bar__name">Ваша корзина</div>
            <div class="cart-popup__top-bar__close">
              <button @click="this.closePopup()">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    d="M23.707.293a1 1 0 0 0-1.414 0L12 10.586 1.707.293a1 1 0 0 0-1.414 0 1 1 0 0 0 0 1.414L10.586 12 .293 22.293a1 1 0 0 0 0 1.414 1 1 0 0 0 1.414 0L12 13.414l10.293 10.293a1 1 0 0 0 1.414 0 1 1 0 0 0 0-1.414L13.414 12 23.707 1.707a1 1 0 0 0 0-1.414Z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div class="cart-popup__center-bar">
            <div class="cart-popup__center-bar__wrapper">
              <div class="cart-popup__center-bar__slider">
                <SwiperSlider
                  v-if="this.CART.length"
                  :speed="1000"
                  :space-between="50"
                  :slots-count="this.CART.length"
                  navigation
                  :breakpoints="this.sliderBreakpoints"
                  class="cart-popup__center-bar__slider__swiper"
                >
                  <template
                    v-for="(item, index) of this.CART"
                    :key="index"
                    v-slot:[index]
                  >
                    <div
                      class="cart-popup__center-bar__slider__swiper__slide slide-cart-popup"
                    >
                      <div class="slide-cart-popup__img">
                        <img
                          :src="
                            require('../../assets/products-images/small/' +
                              item.image +
                              '.webp')
                          "
                        />
                      </div>
                      <div class="slide-cart-popup__info">
                        <div class="slide-cart-popup__info__name">
                          {{ item.name }}
                        </div>
                        <div class="slide-cart-popup__info__price">
                          {{ item.newPrice ? item.newPrice : item.price }}
                          <span
                            class="slide-cart-popup__info__price__currency"
                            >{{ this.CURRENCY }}</span
                          >
                        </div>
                        <div class="slide-cart-popup__info__count">
                          <button
                            @click="this.changeProductCount(item, 'minus')"
                            class="slide-cart-popup__info__count__minus"
                          ></button>
                          <span class="slide-cart-popup__info__count__number">{{
                            item.cartQty
                          }}</span>
                          <button
                            @click="this.changeProductCount(item, 'plus')"
                            class="slide-cart-popup__info__count__plus"
                          ></button>
                        </div>
                        <div class="slide-cart-popup__info__all-sum">
                          <span>
                            {{
                              item.cartQty *
                              (item.newPrice ? item.newPrice : item.price)
                            }}.00
                          </span>
                          <span
                            class="slide-cart-popup__info__all-sum__currency"
                            >{{ this.CURRENCY }}</span
                          >
                        </div>
                      </div>
                      <button
                        @click="this.REMOVE_PR_FROM_CART(item)"
                        class="slide-cart-popup__delete"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 38.462 38.462"
                        >
                          <g data-name="Layer 20">
                            <path
                              d="M35.478 5.497h-7.66V1.631a1.5 1.5 0 0 0-1.5-1.5H12.438a1.5 1.5 0 0 0-1.5 1.5v3.866h-7.66c-2 0-2 1.536 0 1.536h1.93V33.04c.005 3.028.664 5.28 3.692 5.28h21.1c2.997-.043 3.542-2.416 3.547-5.413V7.033h1.89c2 .027 2.04-1.51.04-1.536zm-22.937-3.83h13.74v3.83h-13.74Zm19.87 33.036a2.49 2.49 0 0 1-2.49 2.48H8.861a2.49 2.49 0 0 1-2.45-2.48V7.033h26Z"
                            />
                            <path
                              d="M16.01 12.174c-.828 0-.9 1.07-.9 1.9v16.09c0 2 1.801 2 1.801 0v-16.09c0-.83-.072-1.9-.9-1.9zM23.016 12.103c-.829 0-.901 1.071-.901 1.9v16.09c0 2 1.802 2 1.802 0v-16.09c0-.829-.073-1.9-.901-1.9z"
                            />
                          </g>
                        </svg>
                      </button>
                    </div>
                  </template>
                </SwiperSlider>
                <div v-else class="cart-popup__center-bar__slider_if-not">
                  <h1>У вас пока нет товаров в корзине...</h1>
                </div>
              </div>
              <div class="cart-popup__center-bar__products-count">
                <div class="cart-popup__center-bar__products-count__title">
                  Общее количество товаров :
                </div>
                <div class="cart-popup__center-bar__products-count__number">
                  {{ this.allProductsCount }}
                </div>
              </div>
            </div>
          </div>
          <div class="cart-popup__bottom-bar">
            <div class="cart-popup__bottom-bar__all-sum-title">
              Общая сумма :
            </div>
            <div class="cart-popup__bottom-bar__right-side">
              <div class="cart-popup__bottom-bar__right-side__sum">
                {{ this.allProductsSum }}.00
                <span
                  class="cart-popup__bottom-bar__right-side__sum__currency"
                  >{{ this.CURRENCY }}</span
                >
              </div>
              <div class="cart-popup__bottom-bar__right-side__order-btn">
                <CustomBtn title="Оформить заказ" :success="true"> </CustomBtn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import CustomBtn from "../CustomBtn.vue";
import SwiperSlider from "../sliders/SwiperSlider.vue";

export default {
  data() {
    return {
      sliderBreakpoints: {
        50: {
          slidesPerView: 2
        },
        700: {
          slidesPerView: 3
        }
      }
    };
  },
  components: {
    CustomBtn,
    SwiperSlider,
  },
  mounted() {
    setTimeout( () => {
      let window = document.querySelector(".cart-popup__wrapper");
      window.classList.add("_opened");
    }, 100);
  },
  unmounted() {
    let window = document.querySelector(".cart-popup__wrapper");
    window.classList.remove("_opened");
  },
  methods: {
    ...mapActions([
      "REMOVE_PR_FROM_CART",
      "CHANGE_PR_CART_QTY",
    ]),
    changeProductCount(product, whatToDo) {
      this.CHANGE_PR_CART_QTY({ product, whatToDo });
    },
    closePopup() {
      this.$root.popupsController.unshowCartPopup();
    },
    closeFromOutside(e) {
      this.$root.popupsController.closeAnyPopup(e, '.cart-popup__container')
    }
  },
  computed: {
    ...mapGetters(["CART", "CURRENCY"]),
    allProductsCount() {
      let count = 0;
      this.CART.forEach((el) => {
        count = count + el.cartQty;
      });
      return count;
    },
    allProductsSum() {
      let count = 0;
      this.CART.forEach((el) => {
        let temp = el.cartQty * (el.newPrice ? el.newPrice : el.price);
        count = count + temp;
      });
      return count;
    },
  },
};
</script>