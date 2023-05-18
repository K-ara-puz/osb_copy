// import vuex from 'vue'
import { createStore } from "vuex";

import actions from './actions';
import mutations from './mutations';
import getters from './getters';
const store = createStore({
  state() {
    return {
      currency: 'UAH',
      products: [],
      filteredProducts: [],
      searchProductValue: '',
      sortValue: '',
      filters: {
        category: "",
        size: "",
        color: "",
      },
      minProductPrice: 0,
      maxProductPrice: 5000,
      isMobile: false,
      isMobileMenuOpen: false,
      bestSellerProducts: [],
      productsOnSale: [],
      carouselImgItems: [],
      cart: [],
      alerts: [],
      activeUser: {},
    };
  },
  mutations: mutations,
  actions: actions,
  getters: getters
});

export default store;
