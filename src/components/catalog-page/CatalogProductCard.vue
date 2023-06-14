<template>
  <div class="catalog-product" :class="this.productClasses">
    <div class="catalog-product__wrapper">
      <div class="catalog-product__top-bar top-bar-catalog-product">
        <div class="top-bar-catalog-product__image">
          <img
            @click="route()"
            :src="
              require('../../assets/products-images/small/' +
                productData.image +
                '.webp')
            "
          />
        </div>
        <p class="top-bar-catalog-product__name">{{ this.productData.name }}</p>
        <div class="top-bar-catalog-product__price-wrapp">
          <p
            class="top-bar-catalog-product__new-price"
            v-if="this.productData.newPrice"
          >
            {{ this.productData.newPrice }}
          </p>
          <p class="top-bar-catalog-product__price">
            {{ this.productData.price }}
          </p>
          <span
            id="product-card-currency"
            class="top-bar-catalog-product__price__price-currency"
            >{{ this.CURRENCY }}
          </span>
        </div>
      </div>
      <div class="catalog-product__bottom-bar bottom-bar-catalog-product">
        <div class="bottom-bar-catalog-product__panel">
          <div class="bottom-bar-catalog-product__container">
            <button>
              <svg
                viewBox="0 0 1920 1920"
                class="catalog-product__ic"
                @click="this.route()"
              >
                <path
                  fill-rule="evenodd"
                  d="M960 1489.82c-348.474 0-668.545-202.323-841.298-529.918C291.455 632.306 611.526 429.984 960 429.984s668.545 202.322 841.298 529.918C1628.545 1287.497 1308.474 1489.82 960 1489.82Zm948.342-553.552C1720.645 558.648 1357.332 324 960 324c-397.333 0-760.645 234.648-948.342 612.268L0 959.902l11.658 23.634c187.697 377.62 551.01 612.268 948.342 612.268 397.333 0 760.645-234.648 948.342-612.268L1920 959.902l-11.658-23.634ZM960 1171.869c-116.9 0-211.967-95.067-211.967-211.967 0-116.9 95.067-211.967 211.967-211.967 116.9 0 211.967 95.067 211.967 211.967 0 116.9-95.067 211.967-211.967 211.967m0-529.918c-175.297 0-317.951 142.654-317.951 317.951 0 175.297 142.654 317.95 317.951 317.95 175.297 0 317.951-142.653 317.951-317.95S1135.297 641.951 960 641.951"
                />
              </svg>
            </button>
            <ProductLikesService
              :current-product="this.productData"
            ></ProductLikesService>
            <button @click="this.addProductToCart()">
              <svg
                class="catalog-product__ic"
                xmlns="http://www.w3.org/2000/svg"
                width="52"
                height="46.386"
                viewBox="0 0 57.778 51.541"
              >
                <path
                  d="M56.49 11.645a4.28 4.28 0 0 0-3.48-1.77H12.54l-1.12-6A4.24 4.24 0 0 0 7.25.325h-6a1.25 1.25 0 0 0 0 2.5h6a1.76 1.76 0 0 1 1.72 1.43l6.94 37.7a1.25 1.25 0 0 0 1.23 1h2.81a5.469 5.469 0 1 0 9.18 0h5.61a5.47 5.47 0 1 0 9.18 0h1.73a1.25 1.25 0 1 0 0-2.5H18.18l-.9-4.9h29.46a4.26 4.26 0 0 0 4-2.79l6.27-17.25a4.271 4.271 0 0 0-.52-3.87zm-29 34.31a3 3 0 1 1-3-3 3 3 0 0 1 3.02 3zm14.79 0a3 3 0 1 1-3-3 3 3 0 0 1 3.02 3zm12.37-31.27-6.27 17.24a1.75 1.75 0 0 1-1.64 1.15H16.82L13 12.335h40a1.72 1.72 0 0 1 1.43.74 1.74 1.74 0 0 1 .22 1.61z"
                />
              </svg>
            </button>
            <button @click="this.addProductToCart(), this.$root.popupsController.showCartPopup()">
              <svg
                class="catalog-product__ic"
                xmlns="http://www.w3.org/2000/svg"
                xml:space="preserve"
                width="51"
                height="51"
                viewBox="0 0 92.727 92.727"
              >
                <path
                  d="M38.675 46.496c-7.64 0-13.855 6.214-13.855 13.852S31.035 74.2 38.675 74.2c7.636 0 13.85-6.214 13.85-13.852-.002-7.638-6.214-13.852-13.85-13.852zm0 24.704c-5.986 0-10.855-4.868-10.855-10.852 0-5.983 4.87-10.852 10.855-10.852 5.982 0 10.85 4.868 10.85 10.852-.002 5.984-4.868 10.852-10.85 10.852zM9.54 46.496a1.5 1.5 0 0 0-1.5 1.5V72.7a1.5 1.5 0 1 0 3 0V47.996a1.5 1.5 0 0 0-1.5-1.5zM67.337 46.496a1.5 1.5 0 0 0-1.5 1.5V72.7a1.5 1.5 0 1 0 3 0V47.996a1.5 1.5 0 0 0-1.5-1.5z"
                />
                <path
                  d="M91.788 16.57h-72.85c-.829 0-1.5.741-1.5 1.656v8.115H10.78c-.829 0-1.5.74-1.5 1.656v9.024H1.915c-.829 0-1.5.741-1.5 1.657V82.56c0 .915.671 1.656 1.5 1.656h72.85c.83 0 1.5-.741 1.5-1.656v-9.024h7.364c.83 0 1.5-.741 1.5-1.657V63.76h6.66c.828 0 1.5-.74 1.5-1.656V18.226c0-.913-.673-1.655-1.5-1.655zM73.265 80.904H3.415V40.335h69.85zm3-10.68V38.677c0-.915-.67-1.656-1.5-1.656H12.28v-7.368h69.85v40.569zm14.023-9.776H85.13v-32.45c0-.916-.67-1.657-1.5-1.657H20.44v-6.458h69.85z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ProductLikesService from "../ProductLikesService.vue";
export default {
  props: {
    productData: {
      type: Object,
      default() {
        return {};
      },
    },
    isGrid: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
  computed: {
    ...mapGetters(["CURRENCY"]),
    isOnSale() {
      return this.productData.isOnSale;
    },
    productClasses() {
      return {
        "catalog-product_grid-view": this.isGrid,
        "catalog-product_with-sale": this.isOnSale,
      };
    },
  },
  methods: {
    ...mapActions(["ADD_PR_TO_CART", "PUSH_ALERT"]),
    route() {
      this.$router.push({
        name: "pr-card",
        params: { id: this.productData.id },
      });
    },
    addProductToCart() {
      this.ADD_PR_TO_CART(this.productData);
      let message = "Товар добавлен в корзину : id ";
      let product = this.productData.id;
      this.PUSH_ALERT({ message, product });
    },
  },
  components: { ProductLikesService },
};
</script>

