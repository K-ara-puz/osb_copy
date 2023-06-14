<template>
  <div class="account-feedbacks" v-if="Object.keys(this.activeUser).length > 0">
    <AccountCustomNav :prev-btn-title="this.pageName"></AccountCustomNav>
    <div
      class="account-feedbacks__list"
      v-if="this.activeUser.feedbacks.length > 0"
    >
      <div
        v-for="(fb, index) in this.activeUser.feedbacks"
        :key="index"
        class="account-feedbacks__list__feedback account-fb"
      >
        <div class="account-fb__data">
          {{ fb.createDate.value }}
        </div>
        <div class="account-fb__main">
          <div class="account-fb__main__data">
            <div
              class="account-fb__main__data__field"
              v-for="(field, index) in this.mainDataFields(fb)"
              :key="index"
            >
              <div v-if="field[1].value" class="account-fb__main__data__field__container">
                <div
                  class="account-fb__main__data__field__title"
                >
                  {{ field[1].title + " :" }}
                </div>
                <div
                  class="account-fb__main__data__field__value"
                >
                  {{ field[1].value }}
                </div>
                <div
                  v-if="field[1].reason"
                  class="account-fb__main__data__field__custom"
                >
                  {{ field[1].reason }}
                </div>
              </div>
            </div>
          </div>
          <div class="account-fb__main__text">
            <div class="account-fb__main__text__title">Текст:</div>
            <div class="account-fb__main__text__text">{{ fb.text }}</div>
          </div>
        </div>
      </div>
    </div>
    <CustomNothingFoundedComponent
      v-else
      :title="'Вы пока не оставляли отзывов'"
    ></CustomNothingFoundedComponent>
  </div>
</template>
<script>
import CustomNothingFoundedComponent from "../CustomNothingFoundedComponent.vue";
import AccountCustomNav from "./AccountCustomNav.vue";

export default {
  components: { AccountCustomNav, CustomNothingFoundedComponent },
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
      pageName: "Мои отзывы",
    };
  },
  methods: {
    mainDataFields(fb) {
      let res = [];
      Object.entries(fb).forEach((el) => {
        if (el[0] === "text") {
          return;
        } else {
          res.push(el);
        }
      });
      return res;
    },
  },
};
</script>
