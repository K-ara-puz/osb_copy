<template>
    <div class="account-likes">
        <AccountCustomNav></AccountCustomNav>
    </div>
</template>

<script>
import AccountCustomNav from './AccountCustomNav.vue';
export default {
    components: {
        AccountCustomNav,
    }
}
</script>

<style lang="scss">
@import "../../assets/styles/components-styles/account-page/account-likes-list.scss";
</style>