<template>
  <div class="range-slider">
    <div class="range-slider__wrapp">
      <div class="range-slider__road">
        <input
          type="range"
          class="range-slider__road__min-range"
          :step="this.step"
          min="0"
          max="5000"
          :value="this.minPrice"
          @click="updateMinValue($event.target.value)"
          @touchend.passive="updateMinValue($event.target.value)"
        />
        <input
          type="range"
          class="range-slider__road__max-range"
          :step="this.step"
          min="0"
          max="5000"
          :value="this.maxPrice"
          @click="updateMaxValue($event.target.value)"
          @touchend.passive="updateMaxValue($event.target.value)"
        />
      </div>
    </div>
    <div class="range-slider__count count-range-slider">
      <span class="count-range-slider__span">
        От
        <div class="count-range-slider__input">
          <input
            type="number"
            class="count-range-slider__span__min"
            v-model="this.minPrice"
            @change="updateMinValueFromInput($event)"
          />
        </div>
        {{ this.CURRENCY }}
      </span>
      <span class="count-range-slider__span">
        до
        <div class="count-range-slider__input">
          <input
            type="number"
            class="count-range-slider__span__max"
            v-model="this.maxPrice"
            @change="updateMaxValueFromInput($event)"
          />
        </div>
        {{ this.CURRENCY }}
      </span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      minPrice: 0,
      maxPrice: 5000,
      step: 10,
      priceGap: 50,
    };
  },
  computed: {
    ...mapGetters(["CURRENCY"])
  },
  methods: {
    updateMinValue(value) {
      if (this.maxPrice - value > this.priceGap) {
        this.minPrice = Number(value);
      } else {
        this.minPrice = Number(this.maxPrice - this.priceGap);
      }
      this.$emit('min-price-updated', this.minPrice)
    },
    updateMinValueFromInput(e) {
      let value = e.target.value;
      if (value < 0) this.minPrice = 0;
      if (value >= this.maxPrice - this.priceGap) {
        this.minPrice = Number(this.maxPrice - this.priceGap);
      }
      this.$emit('min-price-updated', this.minPrice)
    },
    updateMaxValue(value) {
      if (value - this.minPrice > this.priceGap) {
        this.maxPrice = Number(value);
      } else {
        this.maxPrice = Number(this.minPrice + this.priceGap);
      }
      this.$emit('max-price-updated', this.maxPrice)
    },
    updateMaxValueFromInput(e) {
      let value = e.target.value;
      if (value > 5000) this.maxPrice = 5000;
      if (value <= this.minPrice + this.priceGap) {
        this.maxPrice = Number(this.minPrice + this.priceGap);
      }
      this.$emit('max-price-updated', this.maxPrice)
    },
  },
};
</script>

<style lang="scss">
  @import '../../assets/styles/components-styles/range-slider.scss';
</style>
