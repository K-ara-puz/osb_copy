export default {
      PRODUCTS(state) {
        return state.products;
      },
      PRODUCTS_ON_SALE(state) {
        return state.productsOnSale;
      },
      FILTERED_PRODUCTS(state) {
        return state.filteredProducts;
      },
      CURRENCY(state) {
        return state.currency;
      },
      IS_MOBILE(state) {
        return state.isMobile;
      },
      BESTSELLERS_PRODUCTS(state) {
        return state.bestSellerProducts;
      },
      CAROUSEL_IMG_PRODUCTS(state) {
        return state.carouselImgItems;
      },
      CART_POPUP(state) {
        return state.isCartPopupOpen;
      },
      CART(state) {
        return state.cart;
      },
      ALERTS(state) {
        return state.alerts;
      }
}