<template>
  <div class="catalog">
    <div class="catalog__top-bar _anim-scroll _anim-no-hide">
      <div class="catalog__top-bar__search-panel">
        <CustomSearchInput
          :isBorder="false"
          :fontSize="26"
          :isCancelIcon="true"
          :isClear="this.isSearchClear"
          @search-item="this.searchProducts"
          @cleared-it="this.clearSearchValue"
        >
        </CustomSearchInput>
      </div>
      <div class="catalog__top-bar__sort-panel">
        <CustomFilterSelect
          selectedValue="Сортировать по..."
          class="catalog__filters-bar__select"
          data-da=".catalog__filters-bar__column:first-child, 768, 3"
          :is-border="false"
          :selectOptions="this.sortOptions"
          @select-filter="this.sortProducts"
        >
        </CustomFilterSelect>
      </div>
      <div class="catalog__top-bar__view-panel">
        <button @click="lineView()">
          <img src="../../assets/icons/dark-theme/view_line.webp" />
        </button>
        <button @click="gridView()">
          <img src="../../assets/icons/dark-theme/view_grid.webp" />
        </button>
      </div>
    </div>
    <div class="catalog__filters-bar _anim-scroll _anim-no-hide">
      <div class="catalog__filters-bar__container">
        <div class="catalog__filters-bar__column">
          <div class="catalog__filters-bar__select">
            <CustomFilterSelect
              selectedValue="Категории"
              :selectOptions="this.selectCategoryOptions1"
              @select-filter="this.setFilterCategory"
            >
            </CustomFilterSelect>
          </div>
          <div class="catalog__filters-bar__select">
            <CustomFilterSelect
              selectedValue="Размер"
              :selectOptions="this.selectCategoryOptions2"
              @select-filter="this.setFilterSize"
            >
            </CustomFilterSelect>
          </div>
          <div class="catalog__filters-bar__select">
            <CustomFilterSelect
              selectedValue="Цвет"
              :selectOptions="this.selectCategoryOptions3"
              @select-filter="this.setFilterColor"
            >
            </CustomFilterSelect>
          </div>
        </div>
        <div class="catalog__filters-bar__column">
          <!-- <RangeSlider
            class="catalog__filters-bar__range-slider"
            @min-price-updated="this.updateMinProductPriceForFilter"
            @max-price-updated="this.updateMaxProductPriceForFilter"
          >
          </RangeSlider> -->
          <CustomBtn title="Применить" :success="true" @click="applyFilters()">
          </CustomBtn>
        </div>
      </div>
    </div>
    <div class="catalog__main">
      <div class="catalog__main__container">
        <div class="catalog__main__main-block">
          <CatalogProductCard
            v-for="product in this.paginatedProducts"
            :key="product.id"
            :productData="product"
            :is-grid="this.isGridView"
            class="catalog__main__main-block__product _anim-scroll"
          >
          </CatalogProductCard>
        </div>
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
      <div class="catalog__swiper-slider__header _anim-scroll _anim-no-hide">
        <div class="_anim-scroll _anim-no-hide">БЕСТСЕЛЛЕРЫ</div>
      </div>
      <SwiperSlider
        v-if="this.BESTSELLERS_PRODUCTS.length"
        ref="swiperRef"
        :speed="1000"
        :loop="true"
        :slides-per-view="3"
        :space-between="50"
        :slots-count="this.BESTSELLERS_PRODUCTS.length"
        :breakpoints="this.swiperBreakpoints"
        navigation
        @swiper="this.getRef"
        @realIndexChange="this.addSwiperSlideAnimation"
        :products="this.BESTSELLERS_PRODUCTS"
      >
        <template
          v-for="(item, index) of this.BESTSELLERS_PRODUCTS"
          :key="index"
          v-slot:[index]
        >
          <BestSellersItemCart
            :product-data="item"
            class="catalog__swiper-slider__slide-item _anim-scroll _anim-no-hide"
          >
          </BestSellersItemCart>
        </template>
      </SwiperSlider>
    </div>
    <SquareCarousel class="catalog__carousel"></SquareCarousel>
  </div>
</template>
<script>
import CustomSearchInput from "../CustomSearchInput.vue";
import CustomFilterSelect from "../CustomFilterSelect.vue";
import { mapActions, mapGetters } from "vuex";
import CatalogProductCard from "./CatalogProductCard.vue";
import PaginationButtons from "../PaginationButtons.vue";
// import RangeSlider from "./RangeSlider.vue";
import CustomBtn from "../CustomBtn.vue";
import SwiperSlider from "../sliders/SwiperSlider.vue";
import BestSellersItemCart from "../BestSellersItemCart.vue";
import SquareCarousel from "../sliders/SquareCarousel";
import { useDynamicAdapt } from "../../dynamicAdapt";
export default {
  components: {
    CustomSearchInput,
    CustomFilterSelect,
    CatalogProductCard,
    PaginationButtons,
    // RangeSlider,
    CustomBtn,
    SwiperSlider,
    BestSellersItemCart,
    SquareCarousel,
  },
  data() {
    return {
      selectCategoryOptions1: [
        { name: "Все" },
        { name: "Одежда" },
        { name: "Аксессуары" },
        { name: "Прочее" },
      ],
      selectCategoryOptions2: [
        { name: "Все" },
        { name: "S" },
        { name: "M" },
        { name: "L" },
        { name: "XL" },
        { name: "2XL" },
      ],
      selectCategoryOptions3: [
        { name: "Все" },
        { name: "Черный" },
        { name: "Красный" },
        { name: "Белый" },
      ],
      sortOptions: [
        { name: "От дешевых к дорогим" },
        { name: "От дорогих к дешевым" },
      ],
      page: 1,
      elemCountOnPage: 0,
      products: this.PRODUCTS,
      filters: {
        category: "",
        size: "",
        color: "",
      },
      minProductPriceForFilter: 0,
      maxProductPriceForFilter: 5000,
      isSearchClear: false,
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
    ...mapActions([
      "CHECK_IS_SEARCH",
      "SET_FILTERS",
      "LOAD_FILTERED_PRODUCTS",
      "SEARCH_PRODUCT",
      "CLEAR_SEARCH_PRODUCT",
      "LOAD_SORTED_PRODUCTS",
    ]),
    searchProducts(value) {
      this.SEARCH_PRODUCT(value).then(() => {
        this.page = 1;
      });
    },
    clearSearchValue() {
      this.CLEAR_SEARCH_PRODUCT();
    },
    sortProducts(name) {
      this.LOAD_SORTED_PRODUCTS(name).then(() => {
        this.page = 1;
      });
    },
    setFilterCategory(name) {
      if (name === "Категории") {
        name = "Все";
      }
      this.filters.category = name;
    },
    setFilterSize(name) {
      if (name === "Размер") {
        name = "Все";
      }
      this.filters.size = name;
    },
    setFilterColor(name) {
      if (name === "Цвет") {
        name = "Все";
      }
      this.filters.color = name;
    },
    applyFilters() {
      let allFilters = {
        filters: this.filters,
        minPrice: this.minProductPriceForFilter,
        maxPrice: this.maxProductPriceForFilter,
      };
      this.SET_FILTERS(allFilters)
        .then(() => {
          this.LOAD_FILTERED_PRODUCTS();
        })
        .then(() => {
          this.page = 1;
          this.isSearchClear = true;
        });
    },
    updateMinProductPriceForFilter(value) {
      this.minProductPriceForFilter = value;
    },
    updateMaxProductPriceForFilter(value) {
      this.maxProductPriceForFilter = value;
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
    getRef(swiperInstance) {
      this.swiperData = swiperInstance;
    },
    swiperSlideNext() {
      this.swiperData.slideNext();
    },
    addSwiperSlideAnimation(swiperInstance) {
      let centerSlideIndex = Number(swiperInstance.activeIndex);
      ++centerSlideIndex;
      let centerSlideItem = swiperInstance.slides[
        centerSlideIndex
      ].querySelector(".catalog__swiper-slider__slide-item");
      let centerSiblingElements = [];
      centerSiblingElements.push(
        swiperInstance.slides[centerSlideIndex].nextSibling.querySelector(
          ".catalog__swiper-slider__slide-item"
        )
      );
      centerSiblingElements.push(
        swiperInstance.slides[centerSlideIndex].previousSibling.querySelector(
          ".catalog__swiper-slider__slide-item"
        )
      );
      centerSiblingElements.forEach((el) => {
        el.classList.add("catalog__swiper-slider__slide-item__animation");
      });
      centerSlideItem.classList.add(
        "catalog__swiper-slider__slide-item__center-item__animation"
      );
      let timeout = swiperInstance.params.speed;
      timeout = timeout + 500;
      setTimeout(() => {
        centerSlideItem.classList.remove(
          "catalog__swiper-slider__slide-item__center-item__animation"
        );
        centerSiblingElements.forEach((el) => {
          el.classList.remove("catalog__swiper-slider__slide-item__animation");
        });
      }, timeout);
    },
    afterSwiperCarouselInit() {
      let swiperElems = document.querySelectorAll(
        ".catalog__carousel .swiper-wrapper .swiper-slide"
      );
      swiperElems = [...swiperElems];
      let targetElems = [];
      targetElems = swiperElems.slice(3);
      targetElems.forEach((el) => {
        el.classList.add("swiper-slide_anim");
      });
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
      if (this.paginatedProducts.length % this.elemCountOnPage === 0) {
        return false;
      }
      return true;
    },
  },
  watch: {
    FILTERED_PRODUCTS() {
      this.products = this.FILTERED_PRODUCTS;
    },
  },
};
</script>

<style lang="scss">
@import "../../assets/styles/components-styles/catalog-page.scss";
</style>
