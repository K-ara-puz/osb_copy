import axios from "axios";

export default {
    LOAD_PRODUCTS({ commit}) {
        return axios("https://jsonserver-base.herokuapp.com/products", {
          method: "GET",
        })
          .then((products) => {
            commit("SET_PRODUCTS_TO_STATE", products.data);
            commit("SET_BESTSELLERS_PRODUCTS_TO_STATE");
            return products;
          })
          .catch((error) => {
            return error;
          });
      },
      LOAD_CAROUSEL_IMG_PRODUCTS({ commit}) {
        return axios("https://jsonserver-base.herokuapp.com/carouselImgItems", {
          method: "GET",
        })
          .then((products) => {
            commit("SET_CAROUSEL_IMG_PRODUCTS_TO_STATE", products.data);
            return products;
          })
          .catch((error) => {
            return error;
          });
      },
      CHECK_DEVICE({commit}) {
        commit("IS_MOBILE_DEVICE");
      },
      CHECK_IS_SEARCH({commit, state}) {
        if (state.searchProductValue) {
          commit("FILTER_PRODUCTS_BY_SEARCH", state.searchProductValue)
        }
        state.searchProductValue = ''
      },
      SEARCH_FROM_OUTPUT({commit, state}, searchValue) {
        state.filteredProducts = state.products
        commit("FILTER_PRODUCTS_BY_SEARCH", searchValue);
      },
      SEARCH_PRODUCT({commit, state}, searchValue) {
        commit("FILTER_PRODUCTS_BY_FILTER");
        commit("FILTER_PRODUCTS_BY_SEARCH", searchValue)
        if (state.sortValue) {
          commit("SORT_PRODUCTS", state.sortValue)
        }
      },
      CLEAR_SEARCH_PRODUCT({commit}) {
        commit("DELETE_SEARCH_VALUE")
      },
      LOAD_SORTED_PRODUCTS({commit}, value) {
        commit("SORT_PRODUCTS", value)
      },
      SET_FILTERS({ commit }, allFilters) {
        commit("UPDATE_FILTERS", allFilters);
      },
      LOAD_FILTERED_PRODUCTS({ commit, state }) {
        commit("FILTER_PRODUCTS_BY_FILTER");
        if (state.searchProductValue) {
          commit("FILTER_PRODUCTS_BY_SEARCH")
        }
        if (state.sortValue) {
          commit("SORT_PRODUCTS", state.sortValue)
        }
      },
      OPEN_CART_POPUP({commit}) {
        commit("SHOW_CART_POPUP");
      },
      CLOSE_CART_POPUP({commit}) {
        commit("UNSHOW_CART_POPUP");
      },
      ADD_PR_TO_CART({commit, state}, product) {
        if (state.cart.length > 0) {
          let coincidence = false;
          state.cart.forEach(el => {
            if (el.name === product.name) {
              el.cartQty++;
              coincidence = true;
            }
          });
          if (coincidence === false) {
            commit("ADD_PRODUCT_TO_CART", product);
          }
        } else {
          commit("ADD_PRODUCT_TO_CART", product);
        }
      },
      REMOVE_PR_FROM_CART({commit}, product) {
        commit("DELETE_PRODUCT_FROM_CART", product);
      },
      CHANGE_PR_CART_QTY({commit}, {product, whatToDo}) {
        if (whatToDo === 'minus') {
          commit("MINUS_PR_CART_QTY", product);
        }
        if (whatToDo === 'plus') {
          commit("PLUS_PR_CART_QTY", product);
        }
      },
      PUSH_ALERT({commit}, {message, product}) {
        commit("ADD_ALERT", {message, product});
      }
}