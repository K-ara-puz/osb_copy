<template>
    <div class="ac-settings">
        <AccountCustomNav :prev-btn-title="this.pageName"></AccountCustomNav>
    </div>
</template>
<script>
import AccountCustomNav from './AccountCustomNav.vue';
export default {
    data() {
        return {
            pageName: 'Настройки профиля'
        }
    },
    components: {
        AccountCustomNav
    }
}
</script>