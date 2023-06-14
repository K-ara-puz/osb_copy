<template>
  <keep-alive>
    <div class="search">
      <div class="search__wrapper">
        <input
          tabindex="-1"
          class="search__input"
          :class="{ 'search-without-border': this.isBorder === false }"
          :style="{ fontSize: this.fontSize / 16 + 'rem' }"
          :placeholder="'Поиск...'"
          type="text"
          :value="this.modelV"
          @blur="emitBlur()"
          @input="this.modelV = $event.target.value"
          @keyup.enter="search($event)"
        />
        <div v-show="this.isEmpty == true" @click="this.clear()">
          <svg
            v-if="this.isCancelIcon"
            class="search__clear"
            xmlns="http://www.w3.org/2000/svg"
            width="512"
            height="512"
            viewBox="0 0 24 24"
          >
            <path
              d="M23.707.293a1 1 0 0 0-1.414 0L12 10.586 1.707.293a1 1 0 0 0-1.414 0 1 1 0 0 0 0 1.414L10.586 12 .293 22.293a1 1 0 0 0 0 1.414 1 1 0 0 0 1.414 0L12 13.414l10.293 10.293a1 1 0 0 0 1.414 0 1 1 0 0 0 0-1.414L13.414 12 23.707 1.707a1 1 0 0 0 0-1.414Z"
            />
          </svg>
        </div>
      </div>
      <button
        v-if="this.isSearchIcon"
        @click="search($event)"
        class="search__search-icon"
      >
        <div class="">
          <svg class="" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.38 22.656a12.332 12.332 0 0 1-7.18 2.293C6.356 24.949.81 19.402.81 12.56S6.358.172 13.2.172c6.841 0 12.388 5.546 12.388 12.388a12.35 12.35 0 0 1-3.629 8.76l8.741 8.741c.4.401.391 1.044-.011 1.446a1.02 1.02 0 0 1-1.446.012zm-7.18.835c6.036 0 10.93-4.894 10.93-10.93 0-6.038-4.894-10.932-10.93-10.932-6.038 0-10.932 4.894-10.932 10.931 0 6.037 4.894 10.931 10.931 10.931Z"
            />
          </svg>
        </div>
      </button>
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
    isSearchIcon: {
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
