export default {
    SET_PRODUCTS_TO_STATE(state, products) {
        state.products = products;
        state.filteredProducts = products;
      },
      SET_BESTSELLERS_PRODUCTS_TO_STATE(state) {
        state.products.forEach( el => {
          if (el.bestseller) {
            if (el.bestseller === 'true') {
              state.bestSellerProducts.push(el)
            }
          }
        })
      },
      SET_CAROUSEL_IMG_PRODUCTS_TO_STATE(state, products) {
        state.carouselImgItems = products;
      },
      SET_PRODUCTS_ON_SALE(state) {
        state.products.forEach( el => {
          if (el.isOnSale) {
            if (el.isOnSale === true) {
              state.productsOnSale.push(el)
            }
          }
        })
      },
      IS_MOBILE_DEVICE(state) {
        let widthBreakpoint = window.innerWidth;
        if (widthBreakpoint <= 768) {
          state.isMobile = true;
        } else {
          state.isMobile = false;
        }
      },
      DELETE_SEARCH_VALUE(state) {
        state.searchProductValue = ''
      },
      UPDATE_FILTERS(state, allFilters) {
        state.filters = allFilters.filters;
        state.minProductPrice = allFilters.minPrice;
        state.maxProductPrice = allFilters.maxPrice;
      },
      FILTER_PRODUCTS_BY_SEARCH(state, searchValue) {
        if (searchValue != undefined) state.searchProductValue = searchValue
        if (state.searchProductValue != '') {
          state.filteredProducts = state.filteredProducts.filter( item => {
            if (item.name.toLowerCase().includes(state.searchProductValue.toLowerCase())) {
              return true
            } 
            return false
          })
        } 
      },
      SORT_PRODUCTS(state, value) {
        state.sortValue = value;
        if (state.sortValue === 'От дешевых к дорогим') {
          state.filteredProducts.sort(function(a,b) {
            if (Math.trunc(a.newPrice ? a.newPrice : a.price) > Math.trunc(b.newPrice ? b.newPrice : b.price)) {
              return 1;
            }
            if (Math.trunc(a.price) < Math.trunc(b.price)) {
              return -1;
            }
            return 0;
          })
        } else {
          state.filteredProducts.sort(function(a,b) {
            if (Math.trunc(a.newPrice ? a.newPrice : a.price) < Math.trunc(b.newPrice ? b.newPrice : b.price)) {
              return 1;
            }
            if (Math.trunc(a.newPrice ? a.newPrice : a.price) > Math.trunc(b.newPrice ? b.newPrice : b.price)) {
              return -1;
            }
            return 0;
          })
        }
      },
      FILTER_PRODUCTS_BY_FILTER(state) {
        // CREATE TEMPORARY FILTERS
        let temporaryFilters = state.filters;
        for (let key in temporaryFilters) {
          if (temporaryFilters[key] === "Все") {
            delete temporaryFilters[key];
          }
          if (temporaryFilters[key] == "") {
            delete temporaryFilters[key];
          }
        }
  
        state.filteredProducts = [];
  
        if (Object.keys(temporaryFilters).length > 0) {
          state.products.forEach((product) => {
            let counter = 0;
            // SORT BY SELECT FILTER (CATEGORY, PRICE...)
            for (let key in product) {
              for (let value in temporaryFilters) {
                if (product[key] == temporaryFilters[value]) {
                  counter++;
                }
              }
            }
            if (counter === Object.keys(temporaryFilters).length) {
              // SORT BY PRICE
              if (
                Math.trunc(product.newPrice ? product.newPrice : product.price) >= state.minProductPrice &&
                Math.trunc(product.newPrice ? product.newPrice : product.price) <= state.maxProductPrice
              ) {
                state.filteredProducts.push(product);
              }
            }
          });
        } else if(state.minProductPrice || state.maxProductPrice) {
          state.products.forEach( product => {
            if (
              Math.trunc(product.newPrice ? product.newPrice : product.price) >= state.minProductPrice &&
              Math.trunc(product.newPrice ? product.newPrice : product.price) <= state.maxProductPrice
            ) {
              state.filteredProducts.push(product);
            }
          })
        } else {
          state.filteredProducts = state.products;
        }
      },
      UNSHOW_CART_POPUP(state) {
        state.isCartPopupOpen = false;
      },
      SHOW_CART_POPUP(state) {
        state.isCartPopupOpen = true;
      },
      ADD_PRODUCT_TO_CART(state, product) {
        state.cart.push(product);
      },
      DELETE_PRODUCT_FROM_CART(state, product) {
        product.cartQty = 1;
        let targetIndex = state.cart.indexOf(product);
        state.cart.splice(targetIndex, 1);
      },
      MINUS_PR_CART_QTY(state, product) {
        let targetIndex = state.cart.indexOf(product);
        if (product.cartQty < 2) {
          return
        } else {
          state.cart[targetIndex].cartQty--;
        }
      },
      PLUS_PR_CART_QTY(state, product) {
        let targetIndex = state.cart.indexOf(product);
        state.cart[targetIndex].cartQty++;
      },
      ADD_ALERT(state, {message, product}) {
        let temp = {};
        temp.message = message;
        temp.product = product;
        state.alerts.push(temp);
        setTimeout( () => {
          state.alerts.shift();
        }, 5000)
      }
}