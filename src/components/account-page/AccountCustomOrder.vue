<template>
  <div class="custom-order" v-if="order">
    <div class="custom-order__date">{{ order.date }}</div>
    <div class="custom-order__top-container">
      <div class="custom-order__product"
        v-for="(product, index) in order.products"
        :key="index"
      >
        <div class="custom-order__product__body">
          <div class="custom-order__product__body__left-bar">
            <div class="custom-order__product__body__left-bar__img">
              <img
                :src="
                  require('../../assets/products-images/small/' +
                    product.image +
                    '.webp')
                "
              />
            </div>
            <div
              class="custom-order__product__body__left-bar__info"
              v-show="!this.isBodyOpened"
            >
              <p class="custom-order__product__body__left-bar__info__pr-name">
                {{ product.name.value }}
              </p>
              <p class="custom-order__product__body__left-bar__info__pr-price">
                {{ `${product.price.value} ${this.CURRENCY}` }}
              </p>
              <p class="custom-order__product__body__left-bar__info__count">
                {{ product.count.value }}
              </p>
              <p class="custom-order__product__body__left-bar__info__sum">
                {{ `${product.sum.value} ${this.CURRENCY}` }}
              </p>
            </div>
          </div>
        </div>
        <div
          class="custom-order__product__body__full-info"
          v-show="this.isBodyOpened"
        >
          <div
            class="custom-order__product__body__full-info__row"
            v-for="(el, index) in product"
            :key="index"
          >
            <p class="custom-order__product__body__full-info__row__title">
              {{ el.title }}
            </p>
            <p class="custom-order__product__body__full-info__row__value">
              {{ el.value }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <button class="custom-order__arrow"
      @click="this.toggleBodyVisible($event.target)"
    >
    </button>
    <div class="custom-order__full-body order-full-body"
      v-show="this.isBodyOpened"
    >
      <div class="order-full-body__joint-info">
        <div class="order-full-body__joint-info__all-sum">
          <p class="order-full-body__joint-info__all-sum__title">ОБЩАЯ СТОИМОСТЬ</p>
          <p class="order-full-body__joint-info__all-sum__value">
            {{ this.allSum + " " + this.CURRENCY}}
          </p>
        </div>
        <div class="order-full-body__joint-info__row"
          v-for="(el, index) in order.dopInfo"
          :key="index"
        >
          <p class="order-full-body__joint-info__row__title">
            {{ el.title }}
          </p>
          <p class="order-full-body__joint-info__row__value">
            {{ el.value }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  props: {
    order: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      isBodyOpened: false,
    };
  },
  computed: {
    ...mapGetters(["CURRENCY"]),
    allSum() {
      let result = 0;
      this.order.products.forEach( (product) => {
        result += Number(product.sum.value);
      });
      return result.toFixed(2)
    }
  },
  methods: {
    toggleBodyVisible(target) {
      this.isBodyOpened = !this.isBodyOpened;
      target.classList.toggle("_active");
      let rootNode = target.previousElementSibling;
      this.toggleInfoPlace(rootNode);
    },
    toggleInfoPlace(rootNode) {
      let placeFrom = rootNode;
      let placeTo = rootNode.parentElement.lastChild;
      if (placeFrom.children.length >= 1) {
        for (let i = placeFrom.children.length; i > 0; i--) {
          let productNode = rootNode.children[0];
          placeTo.prepend(productNode);
        }
      } else {
        for (let i = this.order.products.length; i > 0; i--) {
          let productNode = placeTo.querySelector(`.custom-order__product`);
          placeFrom.prepend(productNode);
        }
      }
    },
  },
};
</script>