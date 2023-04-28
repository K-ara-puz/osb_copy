<template>
  <div class="account">
    <div class="account__wrapper">
      <div class="account__user">
        <div class="account__user__photo"></div>
        <div class="account__user__name" v-if="this.users.length > 0">
          <span>{{ users[0].name }}</span>
        </div>
      </div>
      <div class="account__main">
        <router-view :users="this.users">
        </router-view>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  data() {
    return {
      users: [],
    }
  },
  mounted() {
    this.loadUsers();
  },
  methods: {
    async loadUsers() {
      return axios("https://jsonserver-base.herokuapp.com/users", {
          method: "GET",
        })
          .then((products) => {
            this.users = products.data;
            return products;
          })
          .catch((error) => {
            return error;
          });
    },
  }
};
</script>
<style lang="scss">
@import "../../assets/styles/components-styles/account-page/account-page.scss";
</style>
