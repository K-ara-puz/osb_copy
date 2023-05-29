<template>
  <button
    @click="this.likeHandler()"
    class="pr-like"
    :class="{ _active: this.isPrInLikesList === true }"
  >
    <svg v-if="this.isPrInLikesList === false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 59 52">
      <path
        d="M51.911 16.242c-.759-8.354-6.672-14.415-14.072-14.415-4.93 0-9.444 2.653-11.984 6.905-2.517-4.307-6.846-6.906-11.697-6.906C6.759 1.826.845 7.887.087 16.241c-.06.369-.306 2.311.442 5.478 1.078 4.568 3.568 8.723 7.199 12.013l18.115 16.439 18.426-16.438c3.631-3.291 6.121-7.445 7.199-12.014.748-3.166.502-5.108.443-5.477zm-2.39 5.019c-.984 4.172-3.265 7.973-6.59 10.985L25.855 47.481 9.072 32.25c-3.331-3.018-5.611-6.818-6.596-10.99-.708-2.997-.417-4.69-.416-4.701l.015-.101c.65-7.319 5.731-12.632 12.083-12.632 4.687 0 8.813 2.88 10.771 7.515l.921 2.183.921-2.183c1.927-4.564 6.271-7.514 11.069-7.514 6.351 0 11.433 5.313 12.096 12.727.002.016.293 1.71-.415 4.707z"
      />
    </svg>
    <svg v-else xml:space="preserve" viewBox="0 0 59 52"><defs><linearGradient id="a"><stop offset="0" stop-color="maroon"/><stop offset="1" stop-color="maroon" stop-opacity="0"/></linearGradient></defs><path fill="maroon" stroke-width="1.002" d="M51.911 16.242c-.759-8.354-6.672-14.415-14.072-14.415-4.93 0-9.444 2.653-11.984 6.905-2.517-4.307-6.846-6.906-11.697-6.906C6.759 1.826.845 7.887.087 16.241c-.06.369-.306 2.311.442 5.478 1.078 4.568 3.568 8.723 7.199 12.013l18.115 16.439 18.426-16.438c3.631-3.291 6.121-7.445 7.199-12.014.748-3.166.502-5.108.443-5.477zm-2.39 5.019c-.984 4.172-3.265 7.973-6.59 10.985L25.855 47.481 9.072 32.25c-3.331-3.018-5.611-6.818-6.596-10.99-.708-2.997-.417-4.69-.416-4.701l.015-.101c.65-7.319 5.731-12.632 12.083-12.632 4.687 0 8.813 2.88 10.771 7.515l.921 2.183.921-2.183c1.927-4.564 6.271-7.514 11.069-7.514 6.351 0 11.433 5.313 12.096 12.727.002.016.293 1.71-.415 4.707z"/><ellipse cx="14.692" cy="18.652" fill="maroon" rx="13.862" ry="15.778"/><ellipse cx="37.241" cy="18.908" fill="maroon" rx="13.862" ry="15.778"/><ellipse cx="25.615" cy="26.382" fill="maroon" rx="20.697" ry="13.287"/><path fill="maroon" d="m25.744 48.212-22.948-20.5L14.564 17.2l22.948 20.5z"/></svg>
  </button>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  props: {
    currentProduct: {
        type: Object,
        default() {
            return {}
        }
    }
  },
  methods: {
    ...mapActions(["LIKE_LIST_HANDLER"]),
    likeHandler() {
      if (this.isPrInLikesList === true) {
        let obj = {
          action: "delete",
          id: this.currentProduct.id,
        };
        this.LIKE_LIST_HANDLER(obj);
      } else {
        let obj = {
          action: "add",
          id: this.currentProduct.id,
        };
        this.LIKE_LIST_HANDLER(obj);
      }
    },
  },
  computed: {
    ...mapGetters(["ACTIVE_USER"]),
    isPrInLikesList() {
      let isMatch = false;
      if (Object.keys(this.ACTIVE_USER).length > 0) {
        this.ACTIVE_USER.likesList.forEach( el => {
          if (el.id === this.currentProduct.id) {
            isMatch = true;
            return isMatch
          }
        })
      }
      return isMatch
    }
  }
};
</script>

<style lang="scss">
@import '../assets/styles/product-likes-service.scss';
</style>