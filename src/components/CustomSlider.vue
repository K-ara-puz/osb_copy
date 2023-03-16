<template>
  <div class="custom-slider">
    <div class="custom-slider__wrapp">
      <div class="custom-slider__window">
        <!-- <BestSellersItemCart
          v-for="item in this.visibleElems"
          :key="item.id"
          :product-data="item"
          class="custom-slider__item"
        >
        </BestSellersItemCart> -->
      </div>
    </div>
    <div class="custom-slider__pag-btns">
        <PaginationButtons
        @to-prev-page="this.prevPage"
        @to-next-page="this.nextPage"
        >
        </PaginationButtons>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// import BestSellersItemCart from "./BestSellersItemCart.vue";
import PaginationButtons from "./PaginationButtons.vue";
export default {
  components: {
    // BestSellersItemCart,
    PaginationButtons,
  },
  data() {
    return {
      allElems: [],
      visibleElemCount: 3,
      startIndex: 0,
    };
  },
  mounted() {
    // this.loadBestSellersProducts();
  },
  computed: {
    endIndex() {
      return this.startIndex + this.visibleElemCount;
    },
    visibleElems() {
      let res = this.allElems.slice(this.startIndex, this.endIndex);
      return res;
    },
  },
  methods: {
    loadBestSellersProducts() {
      return axios("http://localhost:3000/bestsellers", {
        method: "GET",
      }).then((res) => {
        this.allElems = res.data;
      });
    },
    prevPage() {
      if (this.startIndex > 0) {
        this.startIndex--;
      }
    },
    nextPage() {
      if (this.visibleElems.length === 3) {
        this.startIndex++;
      }
      if (this.visibleElems.length < 3) {
        this.startIndex = 0;
      }
    },
  },
};
</script>

<style lang="scss">
@import "../assets/styles/components-styles/custom-slider.scss";
</style>
