<template>
  <div class="account-orders" v-if="Object.keys(this.activeUser).length > 0">
    <AccountCustomNav :prev-btn-title="this.pageName"></AccountCustomNav>
    <div class="account-orders__list" v-if="this.activeUser.orders.length > 0">
      <div
        v-for="(order, index) in this.activeUser.orders"
        :key="index"
        class="account-orders__list__order"
      >
        <AccountCustomOrder :order="order"></AccountCustomOrder>
      </div>
    </div>
    <div class="account-orders_empty" v-else>
      <div class="account-orders_empty__title">
        {{ "у вас пока нет заказов" }}
      </div>
    </div>
  </div>
</template>

<script>
import AccountCustomOrder from "./AccountCustomOrder.vue";
import AccountCustomNav from "./AccountCustomNav.vue";

export default {
  props: {
    activeUser: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      pageName: "Покупки",
    };
  },
  components: {
    AccountCustomOrder,
    AccountCustomNav,
  },
};
</script>

<style lang="scss">
@import "../../assets/styles/components-styles/account-page/account-orders.scss";
</style>
