<template>
  <div class="account">
    <div class="account__wrapper">
      <div class="account__user">
        <div class="account__user__photo"></div>
        <div class="account__user__name" v-if="this.ACTIVE_USER">
          <span>{{ this.ACTIVE_USER.name }}</span>
        </div>
      </div>
      <div class="account__main">
        <router-view :active-user="this.ACTIVE_USER">
        </router-view>
      </div>
    </div>
  </div>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
  computed: {
    ...mapGetters(["ACTIVE_USER"])
  }
};
</script>
<style lang="scss">
@import "../../assets/styles/components-styles/account-page/account-page.scss";
</style>
