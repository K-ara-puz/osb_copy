<template>
  <div class="account-orders">
    <nav class="account-orders__nav">
      <button @click="this.backToPrevPage()" class="account-orders__nav__back">{{this.pageName}}</button>
    </nav>
    <div class="account-orders__list" v-if="this.users.length > 0">
      <div
        v-for="(order, index) in this.users[0].orders"
        :key="index"
        class="account-orders__list__order"
      >
        <AccountCustomOrder :order="order"></AccountCustomOrder>
      </div>
    </div>
  </div>
</template>

<script>
import AccountCustomOrder from './AccountCustomOrder.vue';

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
          pageName: 'Покупки',
        };
    },
    components: { AccountCustomOrder },
    methods: {
        backToPrevPage() {
            this.$emit('close-orders');
        }
    }
};
</script>

<style lang="scss">
@import "../../assets/styles/components-styles/account-page/account-orders.scss";
</style>
