<template>
  <div class="pagination-btn">
    <button
      class="pagination-btn__btn"
      :disabled="this.disabledMin"
      :class="{ 'pagination-btn_disabled': this.disabledMin === true }"
      @click="this.$emit('to-prev-page')"
    >
      <svg class="pagination-btn__ic" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 1041.7 1041.7"><path d="M760.76 8.61c8.685 0 17.572 3.434 24.237 10.1 13.33 13.33 13.33 35.142 0 48.472l-456.26 456.46 449.59 449.59c13.33 13.33 13.33 35.144 0 48.474s-35.142 13.33-48.472 0l-473.83-473.83c-13.33-13.33-13.33-35.144 0-48.474l480.49-480.69c6.665-6.665 15.55-10.098 24.236-10.098z"/></svg>
    </button>
    <button
      class="pagination-btn__btn"
      :disabled="this.disabledMax"
      :class="{ 'pagination-btn_disabled': this.disabledMax === true }"
      @click="this.$emit('to-next-page')"
    >
      <svg class="pagination-btn__ic" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 1041.667 1041.667"><path d="M282.07 1036.857c-8.684 0-17.572-3.432-24.237-10.097-13.33-13.33-13.33-35.144 0-48.474l456.255-456.458-449.59-449.59c-13.33-13.331-13.33-35.145 0-48.475 13.33-13.33 35.143-13.33 48.473 0L786.798 497.59c13.33 13.33 13.33 35.143 0 48.473l-480.492 480.694c-6.665 6.665-15.551 10.099-24.236 10.099z"/></svg>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    disabledMax: {
      type: Boolean,
      default() {
        return false;
      },
    },
    disabledMin: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
@import "../assets/styles/components-styles/pagination-btn.scss";
</style>
