<template>
  <nav class="ac-custom-nav">
    <button @click="this.backToPrevPage()" class="ac-custom-nav__back-btn">
      {{ this.prevBtnTitle }}
    </button>
  </nav>
</template>

<script>
export default {
  props: {
    prevBtnTitle: {
      type: String,
      default: "Назад",
    },
  },
  computed: {
    PrevPageValue() {
        let prevPageRoute = this.$router.options.history.state.back;
        return prevPageRoute ? prevPageRoute : '/account'
    }
  },
  methods: {
    backToPrevPage() {
        this.$router.push(`${this.PrevPageValue}`)
    },
  },
};
</script>