<template>
  <transition name="alert">
    <div class="alert" v-if="this.ALERTS.length">
      <div class="alert-container">
        <transition-group name="alert-anim">
          <div
            class="alert__message"
            v-for="(alert, index) in this.ALERTS"
            :key="index"
          >
            <div class="alert__message__icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                <path
                  d="M96.747 39.242a1.456 1.456 0 1 0-2.833.675c.766 3.212 1.155 6.604 1.155 10.083 0 24.85-20.67 45.067-46.078 45.067S2.913 74.85 2.913 50c0-24.852 20.67-45.07 46.078-45.07 10.119 0 19.785 3.202 27.952 9.26a1.456 1.456 0 0 0 1.735-2.339C70.006 5.417 59.74 2.018 48.991 2.018 21.977 2.018 0 23.542 0 50c0 26.456 21.977 47.98 48.991 47.98S97.982 76.456 97.982 50c0-3.705-.416-7.324-1.235-10.758z"
                />
                <path
                  d="M47.98 71.683c-.386 0-.756-.153-1.03-.426L19.637 43.948a1.456 1.456 0 0 1 2.059-2.06l26.223 26.219 49.538-55.486a1.456 1.456 0 1 1 2.173 1.94L49.066 71.197a1.455 1.455 0 0 1-1.045.486h-.041z"
                />
              </svg>
            </div>
            <div class="alert__message__title">
              {{ alert.message }} {{ alert.product }}
            </div>
          </div>
        </transition-group>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: {
    title: {
      type: String,
      default() {
        return "Новое уведомление";
      },
    },
  },
  computed: {
    ...mapGetters(["ALERTS"]),
  },
};
</script>
<style lang="scss">
@import "../assets/styles/custom-alert.scss";
</style>
