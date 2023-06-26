<template>
  <div class="custom-btn" :class="this.btnClassName">
    <div class="custom-btn__btn" @click="click()">
      <span class="custom-btn__btn__title">{{ this.title }}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: "Press",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    error: {
      type: Boolean,
      default: false,
    },
    success: {
      type: Boolean,
      default: false,
    },
    purple: {
      type: Boolean,
      default: false,
    },
    gray: {
      type: Boolean,
      default: false,
    },
    grayRounded: {
      type: Boolean,
      default: false,
    },
    prependIcon: {
      type: String,
      default: "",
    },
    appendIcon: {
      type: String,
      default: "",
    },
  },
  computed: {
    btnClassName() {
      return {
        "custom-btn__disabled": this.disabled,
        "custom-btn__error": this.error,
        "custom-btn__success": this.success,
        "custom-btn__purple": this.purple,
        "custom-btn__gray": this.gray,
        "custom-btn__gray-rounded": this.grayRounded,
      };
    }
  },
  methods: {
    click() {
      this.$emit("click-it");
    },
  },
};
</script>
