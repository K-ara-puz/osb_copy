<template>
    <div class="best-seller _anim-scroll" :class="{'best-seller_with-sale' : this.productData.isOnSale}">
    <div class="best-seller__container">
      <div class="best-seller__top-bar top-bar-best-seller">
        <div class="top-bar-best-seller__sale-img" v-if="this.productData.isOnSale">
          <img src="../assets/icons/dark-theme/sale1.webp" />
        </div>
        <div class="top-bar-best-seller__image" @click="this.route()">
          <img
            :src="
              require('../assets/products-images/small/' + this.productData.image + '.webp')
            "
          />
        </div>
        <p class="top-bar-best-seller__name">{{ this.productData.name }}</p>
        <div class="top-bar-best-seller__price-wrapp">
          <p
            class="top-bar-best-seller__new-price"
            v-if="this.productData.newPrice"
          >
            {{ this.productData.newPrice }}
          </p>
          <p class="top-bar-best-seller__price" >
            {{ this.productData.price }}
          </p>
          <span
            id="product-card-currency"
            class="top-bar-best-seller__price__price-currency"
            >{{this.CURRENCY}}
          </span>
        </div>
      </div>
      <div class="best-seller__bottom-bar bottom-bar-best-seller">
        <div class="bottom-bar-best-seller__panel">
          <div class="bottom-bar-best-seller__container">
            <button>
              <svg class="catalog-product__ic" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 25.641 25.641"><path d="M23.554 1.625H2.226A2.132 2.132 0 0 0 .094 3.758v13.868c0 1.178.955 2.133 2.132 2.133h14.968l4.226 4.226V19.76h2.134a2.133 2.133 0 0 0 2.133-2.133V3.758a2.133 2.133 0 0 0-2.133-2.133zm1.066 16.001c0 .588-.479 1.066-1.066 1.066h-3.2v2.718l-2.718-2.718H2.226a1.067 1.067 0 0 1-1.066-1.066V3.758c0-.588.479-1.066 1.066-1.066h21.328c.588 0 1.066.478 1.066 1.066z"/><path d="M12.55 9.607a1.066 1.066 0 1 0 0 2.133 1.066 1.066 0 0 0 0-2.133zM16.815 9.607a1.066 1.066 0 1 0 0 2.133 1.066 1.066 0 0 0 0-2.133zM8.385 9.607a1.066 1.066 0 1 0 0 2.133 1.066 1.066 0 0 0 0-2.133z"/></svg>
            </button>
            <button>
              <svg class="catalog-product__ic" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="enable-background:new 0 0 51.997 51.997" viewBox="0 0 51.997 51.997"><path d="M51.911 16.242c-.759-8.354-6.672-14.415-14.072-14.415-4.93 0-9.444 2.653-11.984 6.905-2.517-4.307-6.846-6.906-11.697-6.906C6.759 1.826.845 7.887.087 16.241c-.06.369-.306 2.311.442 5.478 1.078 4.568 3.568 8.723 7.199 12.013l18.115 16.439 18.426-16.438c3.631-3.291 6.121-7.445 7.199-12.014.748-3.166.502-5.108.443-5.477zm-2.39 5.019c-.984 4.172-3.265 7.973-6.59 10.985L25.855 47.481 9.072 32.25c-3.331-3.018-5.611-6.818-6.596-10.99-.708-2.997-.417-4.69-.416-4.701l.015-.101c.65-7.319 5.731-12.632 12.083-12.632 4.687 0 8.813 2.88 10.771 7.515l.921 2.183.921-2.183c1.927-4.564 6.271-7.514 11.069-7.514 6.351 0 11.433 5.313 12.096 12.727.002.016.293 1.71-.415 4.707z"/></svg>
            </button>
            <button @click="this.addProductToCart()">
              <svg class="catalog-product__ic" xmlns="http://www.w3.org/2000/svg" width="52" height="46.386" viewBox="0 0 57.778 51.541"><path d="M56.49 11.645a4.28 4.28 0 0 0-3.48-1.77H12.54l-1.12-6A4.24 4.24 0 0 0 7.25.325h-6a1.25 1.25 0 0 0 0 2.5h6a1.76 1.76 0 0 1 1.72 1.43l6.94 37.7a1.25 1.25 0 0 0 1.23 1h2.81a5.469 5.469 0 1 0 9.18 0h5.61a5.47 5.47 0 1 0 9.18 0h1.73a1.25 1.25 0 1 0 0-2.5H18.18l-.9-4.9h29.46a4.26 4.26 0 0 0 4-2.79l6.27-17.25a4.271 4.271 0 0 0-.52-3.87zm-29 34.31a3 3 0 1 1-3-3 3 3 0 0 1 3.02 3zm14.79 0a3 3 0 1 1-3-3 3 3 0 0 1 3.02 3zm12.37-31.27-6.27 17.24a1.75 1.75 0 0 1-1.64 1.15H16.82L13 12.335h40a1.72 1.72 0 0 1 1.43.74 1.74 1.74 0 0 1 .22 1.61z"/></svg>
            </button>
            <button>
              <svg class="catalog-product__ic" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="51" height="51" viewBox="0 0 92.727 92.727"><path d="M38.675 46.496c-7.64 0-13.855 6.214-13.855 13.852S31.035 74.2 38.675 74.2c7.636 0 13.85-6.214 13.85-13.852-.002-7.638-6.214-13.852-13.85-13.852zm0 24.704c-5.986 0-10.855-4.868-10.855-10.852 0-5.983 4.87-10.852 10.855-10.852 5.982 0 10.85 4.868 10.85 10.852-.002 5.984-4.868 10.852-10.85 10.852zM9.54 46.496a1.5 1.5 0 0 0-1.5 1.5V72.7a1.5 1.5 0 1 0 3 0V47.996a1.5 1.5 0 0 0-1.5-1.5zM67.337 46.496a1.5 1.5 0 0 0-1.5 1.5V72.7a1.5 1.5 0 1 0 3 0V47.996a1.5 1.5 0 0 0-1.5-1.5z"/><path d="M91.788 16.57h-72.85c-.829 0-1.5.741-1.5 1.656v8.115H10.78c-.829 0-1.5.74-1.5 1.656v9.024H1.915c-.829 0-1.5.741-1.5 1.657V82.56c0 .915.671 1.656 1.5 1.656h72.85c.83 0 1.5-.741 1.5-1.656v-9.024h7.364c.83 0 1.5-.741 1.5-1.657V63.76h6.66c.828 0 1.5-.74 1.5-1.656V18.226c0-.913-.673-1.655-1.5-1.655zM73.265 80.904H3.415V40.335h69.85zm3-10.68V38.677c0-.915-.67-1.656-1.5-1.656H12.28v-7.368h69.85v40.569zm14.023-9.776H85.13v-32.45c0-.916-.67-1.657-1.5-1.657H20.44v-6.458h69.85z"/></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

    export default {
    props: {
        productData: {
            type: Object,
            default() {
                return {};
            },
        },
    },
    computed: {
      ...mapGetters(["CURRENCY"]),
    },
    methods: {
      ...mapActions(["ADD_PR_TO_CART", "PUSH_ALERT"]),
      route() {
        this.$router.push({name: 'pr-card', params: { id: this.productData.id}});
      },
      addProductToCart() {
        this.ADD_PR_TO_CART(this.productData);
        let message = 'Товар добавлен в корзину : id ';
        let product = this.productData.id;
        this.PUSH_ALERT({message, product});
      }
    }
}
</script>

<style lang="scss">
    @import "../assets/styles/components-styles/best-seller-item-cart.scss";
</style>