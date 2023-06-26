<template>
  <div class="catalog">
    <CatalogFiltersPanel @line-view="this.lineView" @grid-view="this.gridView">
    </CatalogFiltersPanel>
    <div class="catalog__main">
      <div class="catalog__main__container">
        <div
          class="catalog__main__main-block"
          v-if="this.paginatedProducts.length > 0"
        >
          <CatalogProductCard
            v-for="product in this.paginatedProducts"
            :key="product.id"
            :productData="product"
            :is-grid="this.isGridView"
            class="catalog__main__main-block__product _anim-scroll _anim-no-hide"
          >
          </CatalogProductCard>
        </div>
        <CustomNothingFoundedComponent
          v-else
          :title="'Товаров в каталоге нет'"
        ></CustomNothingFoundedComponent>
      </div>
    </div>
    <div class="catalog__pagination-panel" id="test">
      <PaginationButtons
        :disabled-min="this.isLastPrevPage"
        :disabled-max="this.isLastNextPage"
        @to-prev-page="toPrevPage()"
        @to-next-page="toNextPage()"
      >
      </PaginationButtons>
    </div>
    <div class="catalog__swiper-slider">
      <CustomSlider
        class="main__sales"
        :is-background="true"
        :products="this.BESTSELLERS_PRODUCTS"
        :title="'БЕСТСЕЛЛЕРЫ'"
      ></CustomSlider>
    </div>
    <SquareCarousel class="catalog__carousel"></SquareCarousel>
  </div>
</template>
<script>
import CustomSlider from "../sliders/CustomSlider.vue";
import { mapActions, mapGetters } from "vuex";
import CatalogProductCard from "./CatalogProductCard.vue";
import PaginationButtons from "../PaginationButtons.vue";
import SquareCarousel from "../sliders/SquareCarousel";
import { useDynamicAdapt } from "../../dynamicAdapt";
import CustomNothingFoundedComponent from "../CustomNothingFoundedComponent.vue";
import CatalogFiltersPanel from "./CatalogFiltersPanel.vue";
export default {
  components: {
    CatalogProductCard,
    PaginationButtons,
    CustomSlider,
    SquareCarousel,
    CustomNothingFoundedComponent,
    CatalogFiltersPanel,
  },
  data() {
    return {
      page: 1,
      elemCountOnPage: 0,
      products: structuredClone(this.PRODUCTS),
      isGridView: false,
      swiperElems: [],
      swiperData: {},
      swiperBreakpoints: {
        // when window width is >= 480px
        200: {
          slidesPerView: 2,
        },
        700: {
          slidesPerView: 3,
        },
      },
    };
  },
  created() {
    if (document.documentElement.clientWidth > 992) {
      this.elemCountOnPage = 8;
    } else {
      this.elemCountOnPage = 6;
    }
  },
  mounted() {
    this.CHECK_IS_SEARCH();
    useDynamicAdapt();
    window.addEventListener("resize", () => {
      if (document.documentElement.clientWidth <= 980) {
        this.elemCountOnPage = 6;
      } else {
        this.lineView();
        this.elemCountOnPage = 8;
      }
    });
    this.products = this.PRODUCTS;
    this.afterFilter();
  },
  updated() {
    this.$root.itemsShowAnimation();
  },
  unmounted() {
    window.removeEventListener(
      "resize",
      this.$root.emptyFuncToRemoveListener()
    );
  },
  methods: {
    ...mapActions(["CHECK_IS_SEARCH", "LOAD_SORTED_PRODUCTS"]),
    afterFilter() {
      this.page = 1;
    },
    lineView() {
      let div = document.querySelector(".catalog__main__main-block");
      if (div) {
        div.classList.remove("catalog__main__main-block_grid-view-active");
        this.isGridView = false;
      }
    },
    gridView() {
      let div = document.querySelector(".catalog__main__main-block");
      div.classList.add("catalog__main__main-block_grid-view-active");
      this.isGridView = true;
    },
    toPrevPage() {
      if (this.page > 1) {
        this.page--;
      }
      window.scrollTo(0, 0);
    },
    toNextPage() {
      if (this.page < this.products.length / this.elemCountOnPage) {
        this.page++;
      }
      window.scrollTo(0, 0);
    },
  },
  computed: {
    ...mapGetters([
      "PRODUCTS",
      "FILTERED_PRODUCTS",
      "IS_MOBILE",
      "BESTSELLERS_PRODUCTS",
    ]),
    startIndex() {
      return this.elemCountOnPage * (this.page - 1);
    },
    endIndex() {
      return this.elemCountOnPage * this.page;
    },
    paginatedProducts() {
      let result = this.FILTERED_PRODUCTS.slice(this.startIndex, this.endIndex);
      return result;
    },
    isLastPrevPage() {
      if (this.page <= 1) {
        return true;
      }
      return false;
    },
    isLastNextPage() {
      if (this.products) {
        if (this.paginatedProducts.length >= this.products.length) {
          return true;
        } else {
          if (this.paginatedProducts.length % this.elemCountOnPage === 0) {
            return false;
          }
        }
      }

      return true;
    },
  },
  watch: {
    FILTERED_PRODUCTS() {
      this.products = this.FILTERED_PRODUCTS;
      this.afterFilter();
    },
  },
};
</script>
