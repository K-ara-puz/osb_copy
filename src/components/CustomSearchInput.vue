<template>
  <keep-alive>
    <div class="search">
      <div class="search__wrapper">
        <input
          class="search__input"
          :class="{ 'search-without-border': this.isBorder === false }"
          :style="{ fontSize: (this.fontSize / 16) + 'rem' }"
          :placeholder="'Поиск...'"
          type="text"
          :value="this.modelV"
          @blur="emitBlur()"
          @input="this.modelV = $event.target.value"
          @keyup.enter="search($event)"
        />
        <div v-show="this.isEmpty == true" @click="this.clear()">
          <svg v-if="this.isCancelIcon" class="search__clear" xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 24 24"><path d="M23.707.293a1 1 0 0 0-1.414 0L12 10.586 1.707.293a1 1 0 0 0-1.414 0 1 1 0 0 0 0 1.414L10.586 12 .293 22.293a1 1 0 0 0 0 1.414 1 1 0 0 0 1.414 0L12 13.414l10.293 10.293a1 1 0 0 0 1.414 0 1 1 0 0 0 0-1.414L13.414 12 23.707 1.707a1 1 0 0 0 0-1.414Z"/></svg>
        </div>
      </div>
    </div>
  </keep-alive>
</template>

<script>
export default {
  props: {
    isShowProp: {
      type: Boolean,
      default: false,
    },
    isClear: {
      type: Boolean,
      default: false,
    },
    isBorder: {
      type: Boolean,
      default() {
        return true;
      },
    },
    fontSize: {
      type: Number,
      default() {
        return 16;
      },
    },
    isCancelIcon: {
      type: Boolean,
      default() {
        return false;
      },
    },
    clearAfterSearch: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      modelV: "",
    };
  },
  mounted() {},
  computed: {
    isEmpty() {
      if (this.modelV != "") {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    emitBlur() {
      this.$emit("blur-it");
    },
    clear() {
      this.modelV = "";
    },
    search(e) {
      this.$emit("search-item", this.modelV);
      if (this.clearAfterSearch == true) {
        this.modelV = "";
      }
      e.target.blur();
    },
  },
  watch: {
    modelV() {
      if (this.modelV == "") {
        this.$emit("cleared-it");
      }
    },
  },
};
</script>

<style lang="scss">
    @import '../assets/styles/components-styles/custom-search-input.scss';
</style>
