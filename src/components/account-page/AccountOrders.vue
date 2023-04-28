<template>
  <div class="account-orders" v-if="this.users.length > 0">
    <AccountCustomNav></AccountCustomNav>
    <div class="account-orders__list" v-if="this.users[0].orders.length > 0">
      <div
        v-for="(order, index) in this.users[0].orders"
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
    users: {
      type: Array,
      default() {
        return [];
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
