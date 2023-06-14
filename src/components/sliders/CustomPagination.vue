<template>
  <div class="custom-pagination">
    <div
      v-for="(dot, index) in this.elements"
      :key="index"
      :class="{ _active: this.activeSlidePosition === index }"
      class="custom-pagination__dot"
      @click="this.moveActiveIdFromPagination(index)"
    >
      <span class="custom-pagination__dot__span">
        <img v-if="this.isPhotoPagination === true && dot"
          :src="
            require('../../assets/products-images/30_30/small_jpg/' + dot + '.jpg')
          "
        />
      </span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    elements: {
      type: Array,
      default() {
        return [];
      },
    },
    activeSlidePosition: {
        type: Number,
        default() {
            return 2
        }
    },
    isPhotoPagination: {
      type: Boolean,
      default() {
        return false
      }
    }
  },
  methods: {
    moveActiveIdFromPagination(index) {
        this.$emit('moved-by-pag', index);
    }
  }
};
</script>