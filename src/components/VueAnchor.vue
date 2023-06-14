<template>
    <button
      v-if="this.isAnchorVisible"
      @click="this.toPageTop()"
      class="anchor"
    ></button>
</template>
<script>
export default {
  data() {
    return {
      isAnchorVisible: false,
      pixelsAnchorVisible: 200,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.checkAnchorVisible);
  },
  methods: {
    toPageTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    checkAnchorVisible() {
      let scrollPixels = window.scrollY;
      if (scrollPixels > this.pixelsAnchorVisible) {
        this.isAnchorVisible = true;
        return true;
      } else {
        this.isAnchorVisible = false;
        return false;
      }
    },
  },
};
</script>
<style lang="scss">
.anchor {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgba(54, 54, 97, 0.1);
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  &::after {
    content: "";
    color: #fff;
    width: 15px;
    height: 15px;
    border-left: 1px solid #fff;
    border-top: 1px solid #fff;
    transform: translateY(25%) rotate(45deg);
  }
}
</style>
