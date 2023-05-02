<template>
  <div class="account-likes">
    <AccountCustomNav :prev-btn-title="this.pageName"></AccountCustomNav>
    <section class="account-likes__main">
      <div class="account-likes__main__nav">
        <div class="account-likes__main__nav__handle">
          <CustomBtn
            :title="'Выбрать'"
            :purple="true"
            class="account-likes__main__nav__handle__select"
          >
          </CustomBtn>
          <CustomBtn
            :title="'Выбрать все'"
            class="account-likes__main__nav__handle__select-all"
          >
          </CustomBtn>
        </div>
        <button class="account-likes__main__nav__trash">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38.462 38.462">
            <g data-name="Layer 20">
              <path
                d="M35.478 5.497h-7.66V1.631a1.5 1.5 0 0 0-1.5-1.5H12.438a1.5 1.5 0 0 0-1.5 1.5v3.866h-7.66c-2 0-2 1.536 0 1.536h1.93V33.04c.005 3.028.664 5.28 3.692 5.28h21.1c2.997-.043 3.542-2.416 3.547-5.413V7.033h1.89c2 .027 2.04-1.51.04-1.536zm-22.937-3.83h13.74v3.83h-13.74Zm19.87 33.036a2.49 2.49 0 0 1-2.49 2.48H8.861a2.49 2.49 0 0 1-2.45-2.48V7.033h26Z"
              />
              <path
                d="M16.01 12.174c-.828 0-.9 1.07-.9 1.9v16.09c0 2 1.801 2 1.801 0v-16.09c0-.83-.072-1.9-.9-1.9zM23.016 12.103c-.829 0-.901 1.071-.901 1.9v16.09c0 2 1.802 2 1.802 0v-16.09c0-.829-.073-1.9-.901-1.9z"
              />
            </g>
          </svg>
        </button>
      </div>
      <div class="account-likes__main__body" v-if="this.prItems.length > 0">
        <BestSellersItemCart
          v-for="item in this.prItems"
          :key="item.id"
          :product-data="item"
          class="account-likes__main__body__card"
        ></BestSellersItemCart>
      </div>
    </section>
  </div>
</template>

<script>
import BestSellersItemCart from "../BestSellersItemCart.vue";
import AccountCustomNav from "./AccountCustomNav.vue";
import CustomBtn from "../CustomBtn.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    AccountCustomNav,
    BestSellersItemCart,
    CustomBtn,
  },
  props: {
    activeUser: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      pageName: "Список желаний",
    };
  },
  updated() {
    this.$root.itemsShowAnimation();
  },
  computed: {
    ...mapGetters(["PRODUCTS"]),
    prItems() {
      if (this.PRODUCTS.length > 0 && Object.keys(this.activeUser).length > 0) {
        let res = [];
        this.activeUser.likesList.forEach( el => {
          res.push(this.PRODUCTS[el.id])
        })
        return res
      }
      return []
    }
  },
};
</script>

<style lang="scss">
@import "../../assets/styles/components-styles/account-page/account-likes-list.scss";
</style>
