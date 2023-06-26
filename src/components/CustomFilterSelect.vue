<template>
  <div class="select">
    <div
      class="select__header"
      :class="{
        select_open: this.isSelectOpen,
        'select-without-border': this.isBorder === false,
      }"
      @click="this.isSelectOpen = !this.isSelectOpen"
    >
      <p>{{ this.headValue }}</p>
    </div>
    <transition name="select">
      <div class="select__body" v-show="this.isSelectOpen">
        <div
          class="select__body__option"
          v-for="(option, index) in this.selectOptions"
          :key="index"
          @click="this.selectOption(option.name)"
        >
          {{ option.name }}
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    startValue: {
      type: String,
      default: "Select...",
    },
    selectedValue: {
      type: String,
      default: "Select...",
    },
    selectOptions: {
      type: Array,
      default() {
        return [];
      },
    },
    isBorder: {
      type: Boolean,
      default() {
        return true;
      },
    },
  },
  data() {
    return {
      isSelectOpen: false,
    };
  },
  mounted() {
    document.addEventListener("click", (e) => {
      if (
        !e.target.closest(".select__body") &&
        !e.target.closest(".select__header")
      ) {
        this.closeSelect();
      }
    });
  },
  unmounted() {
    document.removeEventListener(
      "click",
      this.$root.emptyFuncToRemoveListener()
    );
  },
  methods: {
    selectOption(name) {
      this.$emit("select-filter", name);
      this.isSelectOpen = false;
    },
    closeSelect() {
      this.isSelectOpen = false;
    },
  },
  computed: {
    headValue() {
      if (this.selectedValue === "") {
        return this.startValue;
      } else return this.editedSelectedValue;
    },
    editedSelectedValue() {
      if (this.selectedValue === "Все") {
        return this.startValue;
      }
      return this.selectedValue;
    },
  },
};
</script>
