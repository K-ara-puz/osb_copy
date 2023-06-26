<template>
  <transition name="anchor-anim">
    <div class="anchors__container" v-if="this.isAnchorVisible">
      <button @click="this.toCallOrderForm()" class="anchor__call">
        <img
          class="anchor__call__anim"
          src="../assets/icons/dark-theme/call-anim.gif"
          alt=""
        />
        <img
          class="anchor__call__without-anim"
          src="../assets/icons/dark-theme/call.png"
          alt=""
        />
      </button>
      <button @click="this.toPageTop()" class="anchor"></button>
    </div>
  </transition>
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
    async toCallOrderForm() {
      if (this.$route.path != '/') {
        this.$router.push('/');
      }
      const targetInput = await this.$root.helperFunctions.waitForElement('.call-order__form input');
      let footerDiv = document.querySelector(".footer");
      let footerPositionY =
        footerDiv.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: footerPositionY });
      targetInput.focus();
    },
  },
};
</script>
<style lang="scss">
.anchors__container {
  width: 50px;
  position: fixed;
  bottom: 5px;
  right: 5px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  gap: 10px;
}
.anchor {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgba(54, 54, 97, 0.1);
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
  &__call {
    position: relative;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: rgba(54, 54, 97, 0.1);
    &::after {
      display: none;
    }
    &__anim,
    &__without-anim {
      width: 80%;
      height: 80%;
      position: absolute;
      top: 50%;
      left: 50%;
      object-fit: cover;
      transform: translate(-50%, -50%) scale(-1) rotate(70deg);
    }
    &__without-anim {
      animation: anchor-call-hide-anim 5s 2s;
    }
    &__anim {
      animation: anchor-call-anim 5s 2s;
      opacity: 0;
    }
  }
}
.anchor-anim-enter-to,
.anchor-anim-leave-from {
  transition: all 1s;
  transform: translate(0px);
}
.anchor-anim-enter-from,
.anchor-anim-leave-to {
  transition: all 1s;
  transform: translate(0, 150%);
}
@keyframes anchor-call-anim {
  0% {
    opacity: 1;
  }
  99% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes anchor-call-hide-anim {
  0% {
    opacity: 0;
  }
  99% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
