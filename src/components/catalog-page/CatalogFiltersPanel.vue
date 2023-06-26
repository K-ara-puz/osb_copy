<template>
  <div class="catalog__main-filters">
    <div class="catalog__top-bar _anim-scroll _anim-no-hide">
      <div class="catalog__top-bar__search-panel">
        <CustomSearchInput
          :isBorder="false"
          :fontSize="26"
          :isCancelIcon="true"
          :isClear="this.isSearchClear"
          @search-item="this.searchProducts"
          @cleared-it="this.clearSearchValue"
          :clearAfterSearch="true"
        >
        </CustomSearchInput>
      </div>
      <div class="catalog__top-bar__sort-panel">
        <CustomFilterSelect
          ref="sortFilter"
          :startValue="'Сортировать по...'"
          :selectedValue="this.sortValue"
          class="catalog__filters-bar__select"
          data-da=".catalog__filters-bar__column:first-child, 768, 3"
          :is-border="false"
          :selectOptions="this.sortOptions"
          @select-filter="this.sortProducts"
        >
        </CustomFilterSelect>
      </div>
      <div class="catalog__top-bar__view-panel">
        <button @click="this.$emit('line-view')">
          <img src="../../assets/icons/dark-theme/view_line.webp" />
        </button>
        <button @click="this.$emit('grid-view')">
          <img src="../../assets/icons/dark-theme/view_grid.webp" />
        </button>
      </div>
    </div>
    <div class="catalog__filters-bar _anim-scroll _anim-no-hide">
      <div class="catalog__filters-bar__container">
        <div class="catalog__filters-bar__column">
          <div class="catalog__filters-bar__select">
            <CustomFilterSelect
              ref="categoryFilter"
              :selectOptions="this.selectCategoryOptions1"
              :startValue="'Категории'"
              :selectedValue="this.prFilters.category"
              @select-filter="this.setFilterCategory"
            >
            </CustomFilterSelect>
          </div>
          <div class="catalog__filters-bar__select">
            <CustomFilterSelect
              ref="sizeFilter"
              :selectOptions="this.selectCategoryOptions2"
              :startValue="'Размер'"
              :selectedValue="this.prFilters.size"
              @select-filter="this.setFilterSize"
            >
            </CustomFilterSelect>
          </div>
          <div class="catalog__filters-bar__select">
            <CustomFilterSelect
              ref="colorFilter"
              :selectOptions="this.selectCategoryOptions3"
              :startValue="'Цвет'"
              :selectedValue="this.prFilters.color"
              @select-filter="this.setFilterColor"
            >
            </CustomFilterSelect>
          </div>
        </div>
        <div class="catalog__filters-bar__column">
          <RangeSlider
            ref="priceFilter"
            class="catalog__filters-bar__range-slider"
            :selectedMinValue="this.prFilters.minProductPrice"
            :selectedMaxValue="this.prFilters.maxProductPrice"
            @min-price-updated="this.updateMinProductPriceForFilter"
            @max-price-updated="this.updateMaxProductPriceForFilter"
          >
          </RangeSlider>
          <div class="catalog__filters-bar__btns">
            <CustomBtn title="Сбросить" :gray="true" @click="resetFilters()">
            </CustomBtn>
            <CustomBtn
              title="Применить"
              :success="true"
              @click="applyFilters()"
            >
            </CustomBtn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import CustomBtn from "../CustomBtn.vue";
import CustomFilterSelect from "../CustomFilterSelect.vue";
import RangeSlider from "./RangeSlider.vue";
import CustomSearchInput from "../CustomSearchInput.vue";

export default {
  components: { CustomFilterSelect, RangeSlider, CustomBtn, CustomSearchInput },
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
      prFilters: {
        category: "",
        color: "",
        size: "",
        minProductPrice: 0,
        maxProductPrice: 5000,
      },
      isSearchClear: false,
      sortOptions: [
        { name: "От дешевых к дорогим" },
        { name: "От дорогих к дешевым" },
      ],
      sortValue: "Сортировать по...",
    };
  },
  mounted() {
    this.checkVuexFilters();
  },
  computed: {
    ...mapGetters(["FILTERS", "SORT_VALUE"]),
  },
  methods: {
    ...mapActions([
      "SET_FILTERS",
      "LOAD_FILTERED_PRODUCTS",
      "LOAD_SORTED_PRODUCTS",
      "SEARCH_PRODUCT",
      "CLEAR_SEARCH_PRODUCT",
    ]),
    checkVuexFilters() {
      if (this.FILTERS) {
        for (let [filter, value] of Object.entries(this.FILTERS)) {
          this.prFilters[filter] = value;
        }
      } else return;
      if (this.SORT_VALUE) {
        if (this.SORT_VALUE === "default") {
          this.sortValue = "Сортировать по...";
        } else {
          this.sortValue = this.SORT_VALUE;
        }
      }
    },
    setFilterCategory(name) {
      if (name === "Категории") {
        name = "Все";
      }
      this.prFilters.category = name;
    },
    setFilterSize(name) {
      if (name === "Размер") {
        name = "Все";
      }
      this.prFilters.size = name;
    },
    setFilterColor(name) {
      if (name === "Цвет") {
        name = "Все";
      }
      this.prFilters.color = name;
    },
    applyFilters() {
      let allFilters = this.prFilters;

      this.SET_FILTERS(allFilters).then(() => {
        this.LOAD_FILTERED_PRODUCTS();
        this.sortProducts(this.sortValue);
        this.isSearchClear = true;
      });
    },
    resetFilters() {
      this.prFilters = {
        category: "",
        color: "",
        size: "",
        minProductPrice: 0,
        maxProductPrice: 5000,
      };
      this.SET_FILTERS(this.prFilters).then(() => {
        this.LOAD_FILTERED_PRODUCTS();
        this.sortProducts("reset");
        this.isSearchClear = true;
      });
    },
    sortProducts(name) {
      if (name === "reset" || name === 'default') {
        this.sortValue = "Сортировать по...";
      } else {
        this.sortValue = name;
      }
      this.LOAD_SORTED_PRODUCTS(name);
    },
    updateMinProductPriceForFilter(value) {
      this.prFilters.minProductPrice = value;
    },
    updateMaxProductPriceForFilter(value) {
      this.prFilters.maxProductPrice = value;
    },
    searchProducts(value) {
      this.SEARCH_PRODUCT(value);
    },
    clearSearchValue() {
      this.CLEAR_SEARCH_PRODUCT();
    },
  },
  watch: {
    FILTERS: {
      handler() {
        this.checkVuexFilters();
      },
      deep: true,
    },
  },
};
</script>
